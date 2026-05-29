// 翻译示例数据（用于演示，实际使用请接入翻译 API）
const translationExamples = {
    // 常用中文短语 -> 英文
    zhToEn: {
        // 问候语
        '你好': 'Hello',
        '早上好': 'Good morning',
        '下午好': 'Good afternoon',
        '晚上好': 'Good evening',
        '再见': 'Goodbye',
        '晚安': 'Good night',
        
        // 日常用语
        '谢谢': 'Thank you',
        '谢谢你': 'Thank you',
        '非常感谢': 'Thank you very much',
        '不客气': 'You\'re welcome',
        '对不起': 'I\'m sorry',
        '没关系': 'It\'s okay',
        '不好意思': 'Excuse me',
        '请问': 'May I ask',
        
        // 自我介绍
        '我叫': 'My name is',
        '我是': 'I am',
        '很高兴认识你': 'Nice to meet you',
        '我来自中国': 'I\'m from China',
        
        // 日常对话
        '你好吗': 'How are you',
        '我很好': 'I\'m fine',
        '你呢': 'And you',
        '今天天气很好': 'The weather is very nice today',
        '今天很热': 'It\'s very hot today',
        '今天很冷': 'It\'s very cold today',
        
        // 学习相关
        '学习': 'Study',
        '英语': 'English',
        '我喜欢学习英语': 'I enjoy learning English',
        '学习英语很重要': 'Learning English is very important',
        '我每天学习英语': 'I study English every day',
        '我的英语水平提高了': 'My English level has improved',
        
        // 常用句子
        '这是什么': 'What is this',
        '那是谁': 'Who is that',
        '我在哪里': 'Where am I',
        '现在几点了': 'What time is it',
        '我不明白': 'I don\'t understand',
        '我明白了': 'I understand',
        '我不知道': 'I don\'t know',
        '我知道': 'I know',
        '我会': 'I can',
        '我不会': 'I can\'t',
        
        // 情感表达
        '我很开心': 'I\'m very happy',
        '我很难过': 'I\'m very sad',
        '我很累': 'I\'m very tired',
        '我很忙': 'I\'m very busy',
        '我爱你': 'I love you',
        '我想你': 'I miss you',
        
        // 请求帮助
        '帮助': 'Help',
        '请帮我': 'Please help me',
        '你能帮我吗': 'Can you help me',
        '我需要帮助': 'I need help',
        
        // 购物
        '多少钱': 'How much',
        '太贵了': 'It\'s too expensive',
        '便宜一点': 'A little cheaper',
        '我要买这个': 'I want to buy this',
        
        // 餐厅
        '我饿了': 'I\'m hungry',
        '我渴了': 'I\'m thirsty',
        '很好吃': 'It\'s delicious',
        '买单': 'Check, please',
        
        // 交通
        '在哪里': 'Where is',
        '怎么去': 'How to get to',
        '地铁站': 'Subway station',
        '公交车站': 'Bus station',
        '机场': 'Airport',
        '火车站': 'Train station',
        
        // 工作
        '工作': 'Work',
        '上班': 'Go to work',
        '下班': 'Get off work',
        '会议': 'Meeting',
        '老板': 'Boss',
        '同事': 'Colleague',
        
        // 家庭
        '家人': 'Family',
        '爸爸': 'Father',
        '妈妈': 'Mother',
        '哥哥': 'Older brother',
        '弟弟': 'Younger brother',
        '姐姐': 'Older sister',
        '妹妹': 'Younger sister',
        
        // 时间
        '今天': 'Today',
        '明天': 'Tomorrow',
        '后天': 'The day after tomorrow',
        '昨天': 'Yesterday',
        '前天': 'The day before yesterday',
        '现在': 'Now',
        '以后': 'Later',
        '早上': 'Morning',
        '中午': 'Noon',
        '下午': 'Afternoon',
        '晚上': 'Evening',
        
        // 连接词
        '和': 'And',
        '或': 'Or',
        '但是': 'But',
        '因为': 'Because',
        '所以': 'So',
        '如果': 'If',
        '虽然': 'Although',
        
        // 常用动词
        '去': 'Go',
        '来': 'Come',
        '吃': 'Eat',
        '喝': 'Drink',
        '睡': 'Sleep',
        '走': 'Walk',
        '跑': 'Run',
        '看': 'Look/Watch',
        '听': 'Listen',
        '说': 'Speak',
        '读': 'Read',
        '写': 'Write',
        '买': 'Buy',
        '卖': 'Sell',
        '喜欢': 'Like',
        '爱': 'Love',
        '想要': 'Want',
        '需要': 'Need',
        '有': 'Have',
        '是': 'Be',
        '做': 'Do',
        '可以': 'Can',
        '应该': 'Should',
        '必须': 'Must',
    },
    
    // 常用英文短语 -> 中文
    enToZh: {
        // Greetings
        'hello': '你好',
        'hi': '你好',
        'good morning': '早上好',
        'good afternoon': '下午好',
        'good evening': '晚上好',
        'goodbye': '再见',
        'bye': '再见',
        'good night': '晚安',
        
        // Daily expressions
        'thank you': '谢谢',
        'thanks': '谢谢',
        'thank you very much': '非常感谢',
        'you\'re welcome': '不客气',
        'i\'m sorry': '对不起',
        'sorry': '对不起',
        'it\'s okay': '没关系',
        'excuse me': '不好意思/请问',
        'may i ask': '请问',
        
        // Self introduction
        'my name is': '我叫',
        'i am': '我是',
        'nice to meet you': '很高兴认识你',
        'i\'m from china': '我来自中国',
        
        // Daily conversation
        'how are you': '你好吗',
        'i\'m fine': '我很好',
        'and you': '你呢',
        'the weather is nice today': '今天天气很好',
        'it\'s very hot today': '今天很热',
        'it\'s very cold today': '今天很冷',
        
        // Study related
        'study': '学习',
        'english': '英语',
        'i enjoy learning english': '我喜欢学习英语',
        'learning english is very important': '学习英语很重要',
        'i study english every day': '我每天学习英语',
        'my english has improved': '我的英语提高了',
        
        // Common sentences
        'what is this': '这是什么',
        'who is that': '那是谁',
        'where am i': '我在哪里',
        'what time is it': '现在几点了',
        'i don\'t understand': '我不明白',
        'i understand': '我明白了',
        'i don\'t know': '我不知道',
        'i know': '我知道',
        'i can': '我会',
        'i can\'t': '我不会',
        
        // Emotional expressions
        'i\'m very happy': '我很开心',
        'i\'m very sad': '我很难过',
        'i\'m very tired': '我很累',
        'i\'m very busy': '我很忙',
        'i love you': '我爱你',
        'i miss you': '我想你',
        
        // Request help
        'help': '帮助',
        'please help me': '请帮我',
        'can you help me': '你能帮我吗',
        'i need help': '我需要帮助',
        
        // Shopping
        'how much': '多少钱',
        'it\'s too expensive': '太贵了',
        'a little cheaper': '便宜一点',
        'i want to buy this': '我要买这个',
        
        // Restaurant
        'i\'m hungry': '我饿了',
        'i\'m thirsty': '我渴了',
        'it\'s delicious': '很好吃',
        'check please': '买单',
        'bill please': '买单',
        
        // Transportation
        'where is': '在哪里',
        'how to get to': '怎么去',
        'subway station': '地铁站',
        'bus station': '公交车站',
        'airport': '机场',
        'train station': '火车站',
        
        // Work
        'work': '工作',
        'go to work': '上班',
        'get off work': '下班',
        'meeting': '会议',
        'boss': '老板',
        'colleague': '同事',
        
        // Family
        'family': '家人',
        'father': '爸爸',
        'mother': '妈妈',
        'brother': '兄弟',
        'sister': '姐妹',
        
        // Time
        'today': '今天',
        'tomorrow': '明天',
        'yesterday': '昨天',
        'now': '现在',
        'later': '以后',
        'morning': '早上',
        'noon': '中午',
        'afternoon': '下午',
        'evening': '晚上',
        
        // Conjunctions
        'and': '和',
        'or': '或',
        'but': '但是',
        'because': '因为',
        'so': '所以',
        'if': '如果',
        'although': '虽然',
        
        // Common verbs
        'go': '去',
        'come': '来',
        'eat': '吃',
        'drink': '喝',
        'sleep': '睡',
        'walk': '走',
        'run': '跑',
        'look': '看',
        'watch': '看',
        'listen': '听',
        'speak': '说',
        'read': '读',
        'write': '写',
        'buy': '买',
        'sell': '卖',
        'like': '喜欢',
        'love': '爱',
        'want': '想要',
        'need': '需要',
        'have': '有',
        'be': '是',
        'do': '做',
        'can': '可以',
        'should': '应该',
        'must': '必须',
    }
};

// 常用句子模板（用于生成更完整的翻译）
const sentenceTemplates = {
    zhToEn: [
        { pattern: /我 (每天|经常|有时|总是)(.+)/, template: 'I $1 $2' },
        { pattern: /你 (能|会|可以)(.+)/, template: 'Can you $2' },
        { pattern: /我想 (.+)/, template: 'I want to $1' },
        { pattern: /我喜欢 (.+)/, template: 'I like $1' },
        { pattern: /我不 (.+)/, template: 'I don\'t $1' },
        { pattern: /这是 (.+)/, template: 'This is $1' },
        { pattern: /那是 (.+)/, template: 'That is $1' },
        { pattern: /有没有 (.+)/, template: 'Is there $1' },
        { pattern: /什么时候 (.+)/, template: 'When $1' },
        { pattern: /为什么 (.+)/, template: 'Why $1' },
    ],
    enToZh: [
        { pattern: /i (want to|would like to) (.+)/i, template: '我想 $2' },
        { pattern: /i like (.+)/i, template: '我喜欢 $1' },
        { pattern: /i don\'t (.+)/i, template: '我不 $1' },
        { pattern: /can you (.+)/i, template: '你能 $1 吗' },
        { pattern: /this is (.+)/i, template: '这是 $1' },
        { pattern: /that is (.+)/i, template: '那是 $1' },
        { pattern: /where is (.+)/i, template: '$1 在哪里' },
        { pattern: /how to (.+)/i, template: '怎么 $1' },
    ]
};
