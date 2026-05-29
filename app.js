// 应用状态
let currentBook = null;
let currentIndex = 0;
let learningQueue = [];
let difficultWords = [];
let learnedWords = [];
let studyDays = 0;
let lastStudyDate = null;

// 翻译状态
let translationDirection = 'zh-en'; // 'zh-en' 或 'en-zh'
let translationResult = [];

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    initializeData();
    loadUserData();
    updateStats();
});

// 显示指定区域
function showSection(sectionId) {
    // 隐藏所有区域
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示目标区域
    document.getElementById(sectionId).classList.add('active');
    
    // 更新底部导航状态
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (sectionId === 'book-selection') {
        document.querySelectorAll('.nav-btn')[0].classList.add('active');
    } else if (sectionId === 'difficult-review') {
        document.querySelectorAll('.nav-btn')[1].classList.add('active');
        renderDifficultList();
    }
}

// 选择词书
document.querySelectorAll('.book-card').forEach(card => {
    card.addEventListener('click', function() {
        const book = this.dataset.book;
        startLearning(book);
    });
});

// 开始学习
function startLearning(book) {
    currentBook = book;
    learningQueue = [...vocabularyData[book]];
    currentIndex = 0;
    
    // 过滤掉已学过的单词
    const bookKey = `learned_${book}`;
    const savedLearned = JSON.parse(localStorage.getItem(bookKey) || '[]');
    learningQueue = learningQueue.filter(word => !savedLearned.includes(word.word));
    
    if (learningQueue.length === 0) {
        alert('🎉 恭喜！这本词书已经学完啦！');
        return;
    }
    
    showSection('word-learning');
    showWord();
}

// 显示当前单词
function showWord() {
    if (currentIndex >= learningQueue.length) {
        alert('🎉 本组单词学习完成！');
        showSection('book-selection');
        return;
    }
    
    const word = learningQueue[currentIndex];
    
    document.getElementById('word-text').textContent = word.word;
    document.getElementById('word-phonetic').textContent = word.phonetic;
    document.getElementById('meaning-cn').textContent = word.meaningCn;
    document.getElementById('meaning-en').textContent = word.meaningEn;
    document.getElementById('example-sentence').textContent = word.example;
    document.getElementById('example-translation').textContent = word.exampleTranslation;
    document.getElementById('collocations').textContent = word.collocations;
    document.getElementById('current-progress').textContent = `${currentIndex + 1}/${learningQueue.length}`;
}

// 播放发音
function playSound() {
    const word = learningQueue[currentIndex].word;
    
    // 使用浏览器自带的语音合成
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    } else {
        alert('您的浏览器不支持语音播放功能');
    }
}

// 标记为认识
function markAsKnown() {
    const word = learningQueue[currentIndex];
    
    // 保存到已学单词
    saveLearnedWord(currentBook, word.word);
    learnedWords.push(word.word);
    
    // 更新进度
    currentIndex++;
    updateProgress();
    showWord();
    updateStats();
}

// 标记为不认识（加入生词本）
function markAsDifficult() {
    const word = learningQueue[currentIndex];
    
    // 加入生词本
    if (!difficultWords.some(w => w.word === word.word)) {
        difficultWords.push(word);
        saveDifficultWords();
    }
    
    // 更新进度
    currentIndex++;
    updateProgress();
    showWord();
    updateStats();
}

// 更新进度条
function updateProgress() {
    const progress = ((currentIndex) / learningQueue.length) * 100;
    document.getElementById(`${currentBook}-progress`).style.width = `${progress}%`;
    document.getElementById(`${currentBook}-learned`).textContent = getLearnedCount(currentBook);
}

// 保存已学单词
function saveLearnedWord(book, word) {
    const bookKey = `learned_${book}`;
    const saved = JSON.parse(localStorage.getItem(bookKey) || '[]');
    
    if (!saved.includes(word)) {
        saved.push(word);
        localStorage.setItem(bookKey, JSON.stringify(saved));
    }
    
    // 更新总学习数
    updateTotalLearned();
    
    // 更新打卡天数
    updateStudyDays();
}

// 获取已学单词数
function getLearnedCount(book) {
    const bookKey = `learned_${book}`;
    const saved = JSON.parse(localStorage.getItem(bookKey) || '[]');
    return saved.length;
}

// 更新总学习数
function updateTotalLearned() {
    let total = 0;
    ['cet4', 'cet6', 'ielts'].forEach(book => {
        total += getLearnedCount(book);
    });
    document.getElementById('total-learned').textContent = total;
    localStorage.setItem('totalLearned', total.toString());
}

// 更新打卡天数
function updateStudyDays() {
    const today = new Date().toDateString();
    
    if (lastStudyDate !== today) {
        if (lastStudyDate) {
            const lastDate = new Date(lastStudyDate);
            const todayDate = new Date(today);
            const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
            
            if (diffDays <= 1) {
                studyDays++;
            }
        } else {
            studyDays = 1;
        }
        
        lastStudyDate = today;
        localStorage.setItem('studyDays', studyDays.toString());
        localStorage.setItem('lastStudyDate', lastStudyDate);
    }
    
    document.getElementById('study-days').textContent = studyDays;
}

// 保存生词本
function saveDifficultWords() {
    localStorage.setItem('difficultWords', JSON.stringify(difficultWords));
    document.getElementById('difficult-count').textContent = difficultWords.length;
}

// 加载生词本列表
function renderDifficultList() {
    const container = document.getElementById('difficult-list');
    const emptyState = document.getElementById('no-difficult');
    
    if (difficultWords.length === 0) {
        container.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    container.style.display = 'block';
    emptyState.style.display = 'none';
    
    container.innerHTML = '';
    
    difficultWords.forEach((word, index) => {
        const item = document.createElement('div');
        item.className = 'difficult-item';
        item.innerHTML = `
            <div class="difficult-word">
                <h4>${word.word}</h4>
                <p>${word.phonetic} ${word.meaningCn}</p>
            </div>
            <div class="difficult-actions">
                <button class="action-small-btn btn-pronounce" onclick="playDifficultSound(${index})">🔊</button>
                <button class="action-small-btn btn-mastered" onclick="markAsMastered(${index})">已掌握</button>
            </div>
        `;
        container.appendChild(item);
    });
}

// 播放生词发音
function playDifficultSound(index) {
    const word = difficultWords[index].word;
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

// 标记为已掌握
function markAsMastered(index) {
    const word = difficultWords[index];
    
    // 从生词本移除
    difficultWords.splice(index, 1);
    saveDifficultWords();
    
    // 重新渲染列表
    renderDifficultList();
    updateStats();
}

// 加载用户数据
function loadUserData() {
    // 加载生词本
    difficultWords = JSON.parse(localStorage.getItem('difficultWords') || '[]');
    
    // 加载总学习数
    const totalLearned = localStorage.getItem('totalLearned');
    if (totalLearned) {
        learnedWords = JSON.parse(totalLearned);
    }
    
    // 加载打卡天数
    const days = localStorage.getItem('studyDays');
    if (days) {
        studyDays = parseInt(days);
    }
    
    // 加载上次学习日期
    lastStudyDate = localStorage.getItem('lastStudyDate');
}

// 加载进度
function loadProgress() {
    ['cet4', 'cet6', 'ielts'].forEach(book => {
        const count = getLearnedCount(book);
        const total = vocabularyData[book].length;
        const progress = (count / total) * 100;
        
        document.getElementById(`${book}-progress`).style.width = `${progress}%`;
        document.getElementById(`${book}-learned`).textContent = count;
    });
    
    updateTotalLearned();
    document.getElementById('study-days').textContent = studyDays;
    document.getElementById('difficult-count').textContent = difficultWords.length;
}

// 更新统计
function updateStats() {
    updateTotalLearned();
    document.getElementById('study-days').textContent = studyDays;
    document.getElementById('difficult-count').textContent = difficultWords.length;
}

// 初始化数据
function initializeData() {
    // 设置各词书的总数
    document.getElementById('cet4-total').textContent = vocabularyData.cet4.length;
    document.getElementById('cet6-total').textContent = vocabularyData.cet6.length;
    document.getElementById('ielts-total').textContent = vocabularyData.ielts.length;
}

// ==================== 翻译功能 ====================

// 设置翻译方向
function setDirection(direction) {
    translationDirection = direction;
    
    document.getElementById('zh-en-btn').classList.remove('active');
    document.getElementById('en-zh-btn').classList.remove('active');
    
    if (direction === 'zh-en') {
        document.getElementById('zh-en-btn').classList.add('active');
        document.getElementById('input-text').placeholder = '请输入要翻译的中文内容...\n支持单句、多段落文本\n长文本会自动逐句拆分';
    } else {
        document.getElementById('en-zh-btn').classList.add('active');
        document.getElementById('input-text').placeholder = 'Please enter English text to translate...\nSupports single sentences and multiple paragraphs\nLong text will be split sentence by sentence';
    }
}

// 清空输入
function clearInput() {
    document.getElementById('input-text').value = '';
    document.getElementById('char-count').textContent = '0';
    document.getElementById('translation-result').style.display = 'none';
}

// 字符计数
document.getElementById('input-text').addEventListener('input', function() {
    document.getElementById('char-count').textContent = this.value.length;
});

// 拆分句子
function splitSentences(text) {
    // 中文句子拆分（按句号、问号、感叹号、分号）
    const zhSentences = text.split(/([。！？；!?;\n]+)/).filter(s => s.trim());
    
    // 英文句子拆分
    const enSentences = text.split(/([.!?;]+\s*|\n+)/).filter(s => s.trim());
    
    // 根据翻译方向选择拆分方式
    if (translationDirection === 'zh-en') {
        return mergeSentencePairs(zhSentences);
    } else {
        return mergeSentencePairs(enSentences);
    }
}

// 合并句子和标点
function mergeSentencePairs(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 2) {
        let sentence = arr[i] || '';
        if (arr[i + 1]) {
            sentence += arr[i + 1];
        }
        if (sentence.trim()) {
            result.push(sentence.trim());
        }
    }
    return result;
}

// 翻译文本（模拟翻译，实际使用需接入翻译 API）
function translateText() {
    const inputText = document.getElementById('input-text').value.trim();
    
    if (!inputText) {
        alert('请输入要翻译的内容！');
        return;
    }
    
    // 显示加载状态
    const resultDiv = document.getElementById('translation-result');
    resultDiv.style.display = 'block';
    document.getElementById('result-content').innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
            <p>正在翻译中...</p>
        </div>
    `;
    
    // 拆分句子
    const sentences = splitSentences(inputText);
    
    // 模拟翻译延迟
    setTimeout(() => {
        translationResult = sentences.map(sentence => ({
            original: sentence,
            translated: mockTranslate(sentence, translationDirection)
        }));
        
        renderTranslationResult();
    }, 800);
}

// 模拟翻译（使用翻译数据，实际使用请接入真实翻译 API）
function mockTranslate(text, direction) {
    const cleanText = text.trim().replace(/[。！？；!?;.\n\s]+$/g, '');
    const cleanTextLower = cleanText.toLowerCase();
    
    if (direction === 'zh-en') {
        // 精确匹配
        if (translationExamples.zhToEn[cleanText]) {
            return translationExamples.zhToEn[cleanText];
        }
        
        // 查找包含的短语（优先匹配长的）
        let bestMatch = null;
        let bestMatchLen = 0;
        
        for (const [zh, en] of Object.entries(translationExamples.zhToEn)) {
            if (cleanText.includes(zh) && zh.length >= 2 && zh.length > bestMatchLen) {
                bestMatch = { zh, en };
                bestMatchLen = zh.length;
            }
        }
        
        if (bestMatch) {
            // 如果原文就是短语本身，直接返回翻译
            if (cleanText === bestMatch.zh) {
                return bestMatch.en;
            }
            // 否则返回短语翻译 + 提示
            return `${bestMatch.en} (包含短语："${bestMatch.zh}" → "${bestMatch.en}")`;
        }
        
        // 返回学习提示
        return `📝 建议翻译：${cleanText}\n\n💡 此句较长，建议：\n1. 先拆分句子结构\n2. 找出主谓宾\n3. 逐部分翻译后组合\n\n🎯 学习提示：多练习长句翻译，提升英语表达能力！`;
    } else {
        // 英文译中文
        // 精确匹配
        if (translationExamples.enToZh[cleanTextLower]) {
            return translationExamples.enToZh[cleanTextLower];
        }
        
        // 查找包含的短语
        let bestMatch = null;
        let bestMatchLen = 0;
        
        for (const [en, zh] of Object.entries(translationExamples.enToZh)) {
            if (cleanTextLower.includes(en) && en.length >= 2 && en.length > bestMatchLen) {
                bestMatch = { en, zh };
                bestMatchLen = en.length;
            }
        }
        
        if (bestMatch) {
            if (cleanTextLower === bestMatch.en) {
                return bestMatch.zh;
            }
            return `${bestMatch.zh} (包含短语："${bestMatch.en}" → "${bestMatch.zh}")`;
        }
        
        return `📝 建议翻译：${cleanText}\n\n💡 此句较长，建议：\n1. 分析句子结构\n2. 理解从句关系\n3. 调整语序符合中文习惯\n\n🎯 学习提示：多读英文原文，培养语感！`;
    }
}

// 渲染翻译结果
function renderTranslationResult() {
    const contentDiv = document.getElementById('result-content');
    
    if (translationResult.length === 0) {
        contentDiv.innerHTML = '<p style="text-align: center; color: #999;">翻译结果为空</p>';
        return;
    }
    
    let html = '';
    translationResult.forEach((item, index) => {
        html += `
            <div class="translation-pair">
                <div class="original-text">
                    <span style="color: #999; font-size: 12px;">原文 ${index + 1}</span><br>
                    ${escapeHtml(item.original)}
                </div>
                <div class="translated-text">
                    <span style="color: #999; font-size: 12px;">译文 ${index + 1}</span><br>
                    ${escapeHtml(item.translated)}
                    ${translationDirection === 'zh-en' ? '<span class="sound-icon" onclick="playTranslationSound(' + index + ')"> 🔊</span>' : ''}
                </div>
            </div>
        `;
    });
    
    contentDiv.innerHTML = html;
}

// HTML 转义
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML.replace(/\n/g, '<br>');
}

// 播放翻译结果的发音
function playTranslationSound(index) {
    const text = translationResult[index].translated;
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

// 复制译文
function copyResult() {
    const translatedText = translationResult.map(item => item.translated).join('\n');
    
    navigator.clipboard.writeText(translatedText).then(() => {
        alert('✅ 译文已复制到剪贴板！');
    }).catch(err => {
        // 降级处理
        const textarea = document.createElement('textarea');
        textarea.value = translatedText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('✅ 译文已复制到剪贴板！');
    });
}

// ==================== 单词蛇游戏 ====================

// 游戏状态
let snakeGame = {
    canvas: null,
    ctx: null,
    gridSize: 28,
    gridCount: 16,
    maxGridX: 16,
    snake: [],
    direction: { x: 0, y: 1 },
    nextDirection: { x: 0, y: 1 },
    foods: [],
    currentQuestion: null,
    score: 0,
    lives: 3,
    gameLoop: null,
    isRunning: false,
    isPaused: false,
    currentBook: 'cet4',
    correctCount: 0,
    wrongCount: 0,
    speed: 350,
    initialSnakeLength: 3
};

// 初始化游戏
function initSnakeGame() {
    snakeGame.canvas = document.getElementById('snake-canvas');
    if (snakeGame.canvas) {
        snakeGame.ctx = snakeGame.canvas.getContext('2d');
        snakeGame.gridCount = snakeGame.canvas.height / snakeGame.gridSize;
        snakeGame.maxGridX = snakeGame.canvas.width / snakeGame.gridSize;
    }
    
    // 键盘监听
    document.addEventListener('keydown', handleKeydown);
    
    // 移动端按钮监听
    setupMobileControls();
}

// 设置移动端控制
function setupMobileControls() {
    const btnUp = document.getElementById('btn-up');
    const btnLeft = document.getElementById('btn-left');
    const btnDown = document.getElementById('btn-down');
    const btnRight = document.getElementById('btn-right');
    
    if (btnUp) btnUp.addEventListener('click', () => changeDirection(0, -1));
    if (btnLeft) btnLeft.addEventListener('click', () => changeDirection(-1, 0));
    if (btnDown) btnDown.addEventListener('click', () => changeDirection(0, 1));
    if (btnRight) btnRight.addEventListener('click', () => changeDirection(1, 0));
}

// 键盘处理
function handleKeydown(e) {
    if (!snakeGame.isRunning) return;
    
    switch(e.key.toLowerCase()) {
        case 'w': changeDirection(0, -1); break;
        case 'a': changeDirection(-1, 0); break;
        case 's': changeDirection(0, 1); break;
        case 'd': changeDirection(1, 0); break;
        case 'q': exitGame(); break;
    }
}

// 改变方向
function changeDirection(x, y) {
    // 不能直接反向
    if (snakeGame.direction.x + x === 0 && snakeGame.direction.y + y === 0) return;
    snakeGame.nextDirection = { x, y };
}

// 开始单词蛇游戏
function startSnakeGame(book) {
    snakeGame.currentBook = book || 'cet4';
    snakeGame.score = 0;
    snakeGame.lives = 3;
    snakeGame.correctCount = 0;
    snakeGame.wrongCount = 0;
    snakeGame.isRunning = true;
    snakeGame.isPaused = false;
    
    // 初始化蛇 - 从中间开始，向下移动
    const startX = Math.floor(snakeGame.maxGridX / 2);
    const startY = 5;
    snakeGame.snake = [
        { x: startX, y: startY },
        { x: startX, y: startY - 1 },
        { x: startX, y: startY - 2 }
    ];
    snakeGame.direction = { x: 0, y: 1 };
    snakeGame.nextDirection = { x: 0, y: 1 };
    
    // 更新 UI
    updateGameUI();
    
    // 生成新题目
    generateQuestion();
    
    // 显示游戏界面
    showSection('snake-game');
    
    // 启动游戏循环
    if (snakeGame.gameLoop) clearInterval(snakeGame.gameLoop);
    snakeGame.gameLoop = setInterval(gameUpdate, snakeGame.speed);
}

// 游戏更新
function gameUpdate() {
    if (!snakeGame.isRunning || snakeGame.isPaused) return;
    
    // 更新方向
    snakeGame.direction = snakeGame.nextDirection;
    
    // 计算新蛇头位置
    const head = snakeGame.snake[0];
    const newHead = {
        x: head.x + snakeGame.direction.x,
        y: head.y + snakeGame.direction.y
    };
    
    // 检查碰撞
    if (checkCollision(newHead)) {
        gameOver();
        return;
    }
    
    // 移动蛇 - 先添加新头
    snakeGame.snake.unshift(newHead);
    
    // 检查是否吃到食物
    let ate = false;
    let ateCorrect = false;
    let ateWrong = false;
    
    for (let i = snakeGame.foods.length - 1; i >= 0; i--) {
        const food = snakeGame.foods[i];
        if (newHead.x === food.x && newHead.y === food.y) {
            if (food.isCorrect) {
                // 吃到正确单词 - 蛇身增长
                snakeGame.score += 10;
                snakeGame.correctCount++;
                showToast('✅ 正确！+10 分', 'correct');
                ateCorrect = true;
                generateQuestion();
            } else {
                // 吃到错误单词 - 蛇身缩短
                snakeGame.lives--;
                snakeGame.wrongCount++;
                showToast('❌ 错误！-1 生命', 'wrong');
                ateWrong = true;
            }
            // 移除被吃的食物
            snakeGame.foods.splice(i, 1);
            ate = true;
            updateGameUI();
            
            if (snakeGame.lives <= 0) {
                gameOver();
                return;
            }
            break;
        }
    }
    
    // 根据吃的食物类型处理蛇身
    if (ateCorrect) {
        // 吃到正确 - 不删除尾巴（增长）
    } else if (ateWrong) {
        // 吃到错误 - 删除 2 节（缩短）
        snakeGame.snake.pop();
        if (snakeGame.snake.length > snakeGame.initialSnakeLength) {
            snakeGame.snake.pop();
        }
    } else {
        // 没吃到 - 正常移动
        snakeGame.snake.pop();
    }
    
    // 渲染
    render();
}

// 暂停/继续游戏
function togglePause() {
    if (!snakeGame.isRunning) return;
    snakeGame.isPaused = !snakeGame.isPaused;
    if (snakeGame.isPaused) {
        showToast('⏸️ 已暂停', '');
    } else {
        showToast('▶️ 继续', '');
    }
}

// 检查碰撞
function checkCollision(head) {
    const maxGridX = snakeGame.maxGridX;
    
    // 撞墙
    if (head.x < 0 || head.x >= maxGridX || 
        head.y < 0 || head.y >= snakeGame.gridCount) {
        return true;
    }
    
    // 撞自己
    for (let i = 0; i < snakeGame.snake.length; i++) {
        if (head.x === snakeGame.snake[i].x && head.y === snakeGame.snake[i].y) {
            return true;
        }
    }
    
    return false;
}

// 生成题目和食物
function generateQuestion() {
    const bookData = vocabularyData[snakeGame.currentBook] || vocabularyData['cet4'];
    
    // 随机选择正确答案
    const correctIndex = Math.floor(Math.random() * bookData.length);
    snakeGame.currentQuestion = bookData[correctIndex];
    
    // 更新题目显示
    document.getElementById('question-meaning').textContent = snakeGame.currentQuestion.meaningCn;
    
    // 清空食物
    snakeGame.foods = [];
    
    // 添加正确答案
    generateFood(true, snakeGame.currentQuestion);
    
    // 添加 3 个干扰项
    const wrongWords = getWrongWords(correctIndex, bookData, 3);
    wrongWords.forEach(word => {
        generateFood(false, word);
    });
    
    render();
}

// 获取干扰单词
function getWrongWords(correctIndex, bookData, count) {
    const wrongWords = [];
    const used = new Set([correctIndex]);
    
    while (wrongWords.length < count && used.size < bookData.length) {
        const randomIndex = Math.floor(Math.random() * bookData.length);
        if (!used.has(randomIndex)) {
            used.add(randomIndex);
            wrongWords.push(bookData[randomIndex]);
        }
    }
    
    return wrongWords;
}

// 生成食物
function generateFood(isCorrect = false, wordData = null) {
    const bookData = vocabularyData[snakeGame.currentBook] || vocabularyData['cet4'];
    
    if (!wordData) {
        // 过滤掉太长的单词（不超过 10 个字母）
        const shortWords = bookData.filter(w => w.word.length <= 10);
        const availableWords = shortWords.length > 0 ? shortWords : bookData;
        const randomIndex = Math.floor(Math.random() * availableWords.length);
        wordData = availableWords[randomIndex];
    }
    
    // 在网格区域找空位置
    let position;
    let attempts = 0;
    const maxGridX = snakeGame.maxGridX;
    
    do {
        position = {
            x: Math.floor(Math.random() * maxGridX),
            y: Math.floor(Math.random() * snakeGame.gridCount)
        };
        attempts++;
    } while (isPositionOccupied(position) && attempts < 100);
    
    snakeGame.foods.push({
        x: position.x,
        y: position.y,
        word: wordData.word,
        isCorrect: isCorrect
    });
}

// 检查位置是否被占用
function isPositionOccupied(pos) {
    const maxGridX = snakeGame.maxGridX;
    
    // 检查蛇身
    for (const segment of snakeGame.snake) {
        if (segment.x === pos.x && segment.y === pos.y) return true;
    }
    
    // 检查其他食物
    for (const food of snakeGame.foods) {
        if (food.x === pos.x && food.y === pos.y) return true;
    }
    
    return false;
}

// 检查位置是否被占用
function isPositionOccupied(pos) {
    // 检查蛇身
    for (const segment of snakeGame.snake) {
        if (segment.x === pos.x && segment.y === pos.y) return true;
    }
    
    // 检查其他食物
    for (const food of snakeGame.foods) {
        if (food.x === pos.x && food.y === pos.y) return true;
    }
    
    return false;
}

// 渲染游戏
function render() {
    const ctx = snakeGame.ctx;
    const gridSize = snakeGame.gridSize;
    const gridCount = snakeGame.gridCount;
    const maxGridX = snakeGame.maxGridX;
    
    // 清空画布 - 白色背景
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, snakeGame.canvas.width, snakeGame.canvas.height);
    
    // 画网格 - 浅灰色
    ctx.strokeStyle = '#e8e8e8';
    ctx.lineWidth = 1;
    for (let i = 0; i <= maxGridX; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, gridCount * gridSize);
        ctx.stroke();
    }
    for (let i = 0; i <= gridCount; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(maxGridX * gridSize, i * gridSize);
        ctx.stroke();
    }
    
    // 画蛇 - 缩小体积
    snakeGame.snake.forEach((segment, index) => {
        const snakeSize = gridSize * 0.7; // 蛇占格子的 70%
        const offset = (gridSize - snakeSize) / 2;
        
        if (index === 0) {
            // 蛇头 - 蓝色圆形
            ctx.fillStyle = '#5c6bc0';
            ctx.beginPath();
            ctx.arc(
                segment.x * gridSize + gridSize / 2,
                segment.y * gridSize + gridSize / 2,
                snakeSize / 2,
                0, Math.PI * 2
            );
            ctx.fill();
            
            // 蛇眼睛
            ctx.fillStyle = 'white';
            const eyeSize = gridSize * 0.15;
            const eyeOffset = gridSize * 0.2;
            
            let eye1X, eye1Y, eye2X, eye2Y;
            if (snakeGame.direction.x === 1) {
                eye1X = segment.x * gridSize + gridSize / 2 + eyeOffset;
                eye1Y = segment.y * gridSize + gridSize / 2 - eyeOffset/2;
                eye2X = segment.x * gridSize + gridSize / 2 + eyeOffset;
                eye2Y = segment.y * gridSize + gridSize / 2 + eyeOffset/2;
            } else if (snakeGame.direction.x === -1) {
                eye1X = segment.x * gridSize + gridSize / 2 - eyeOffset;
                eye1Y = segment.y * gridSize + gridSize / 2 - eyeOffset/2;
                eye2X = segment.x * gridSize + gridSize / 2 - eyeOffset;
                eye2Y = segment.y * gridSize + gridSize / 2 + eyeOffset/2;
            } else if (snakeGame.direction.y === -1) {
                eye1X = segment.x * gridSize + gridSize / 2 - eyeOffset/2;
                eye1Y = segment.y * gridSize + gridSize / 2 - eyeOffset;
                eye2X = segment.x * gridSize + gridSize / 2 + eyeOffset/2;
                eye2Y = segment.y * gridSize + gridSize / 2 - eyeOffset;
            } else {
                eye1X = segment.x * gridSize + gridSize / 2 - eyeOffset/2;
                eye1Y = segment.y * gridSize + gridSize / 2 + eyeOffset;
                eye2X = segment.x * gridSize + gridSize / 2 + eyeOffset/2;
                eye2Y = segment.y * gridSize + gridSize / 2 + eyeOffset;
            }
            
            ctx.beginPath();
            ctx.arc(eye1X, eye1Y, eyeSize, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(eye2X, eye2Y, eyeSize, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // 蛇身 - 浅蓝色圆形
            ctx.fillStyle = '#9fa8da';
            ctx.beginPath();
            ctx.arc(
                segment.x * gridSize + gridSize / 2,
                segment.y * gridSize + gridSize / 2,
                snakeSize / 2 - 2,
                0, Math.PI * 2
            );
            ctx.fill();
        }
    });
    
    // 画食物（单词）- 只显示单词，无背景，无标注
    snakeGame.foods.forEach(food => {
        // 在网格位置绘制单词文字 - 更明显
        ctx.fillStyle = '#333333';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // 文字位置（网格格子中心）
        const textX = food.x * gridSize + gridSize / 2;
        const textY = food.y * gridSize + gridSize / 2;
        
        // 添加文字背景高亮，让单词更明显（限制宽度不溢出）
        ctx.fillStyle = 'rgba(102, 126, 234, 0.15)';
        const textWidth = ctx.measureText(food.word).width;
        const bgWidth = Math.min(textWidth + 8, gridSize - 4); // 不超过格子宽度
        ctx.fillRect(
            textX - bgWidth / 2,
            textY - 9,
            bgWidth,
            18
        );
        
        // 绘制单词 - 如果单词太长则缩小字体
        if (textWidth > gridSize - 6) {
            ctx.font = 'bold 10px Arial';
        } else {
            ctx.font = 'bold 12px Arial';
        }
        ctx.fillStyle = '#333333';
        ctx.fillText(food.word, textX, textY);
    });
}

// 更新游戏 UI
function updateGameUI() {
    document.getElementById('snake-score').textContent = snakeGame.score;
    document.getElementById('snake-lives').textContent = snakeGame.lives;
}

// 显示提示
function showToast(message, type = '') {
    const existing = document.querySelector('.game-toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = `game-toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 1000);
}

// 游戏结束
function gameOver() {
    snakeGame.isRunning = false;
    if (snakeGame.gameLoop) clearInterval(snakeGame.gameLoop);
    
    // 显示结算弹窗
    document.getElementById('final-score').textContent = snakeGame.score;
    document.getElementById('correct-count').textContent = snakeGame.correctCount;
    document.getElementById('wrong-count').textContent = snakeGame.wrongCount;
    document.getElementById('game-over-modal').style.display = 'flex';
}

// 重新开始游戏
function restartGame() {
    document.getElementById('game-over-modal').style.display = 'none';
    startSnakeGame(snakeGame.currentBook);
}

// 退出游戏
function exitGame() {
    snakeGame.isRunning = false;
    if (snakeGame.gameLoop) clearInterval(snakeGame.gameLoop);
    document.getElementById('game-over-modal').style.display = 'none';
    showSection('game-selection');
}





// 页面加载时初始化游戏
document.addEventListener('DOMContentLoaded', function() {
    initSnakeGame();
});
