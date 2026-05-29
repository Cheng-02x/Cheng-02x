# 英语陪伴官 - 使用说明

## 🌟 功能概述

英语陪伴官是一款专为英语学习者设计的网页应用，包含以下核心功能：

### 1. 📚 单词卡片学习
- 展示单词、音标、中英文释义
- 实用例句 + 翻译
- 常用搭配
- 🔊 发音播放（浏览器语音合成）
- ✅ 认识 / ❌ 不认识 标记
- 自动加入生词本

### 2. 📖 词书选择
- **四级高频词** - CET-4 High Frequency Words
- **六级高频词** - CET-6 High Frequency Words
- **雅思核心词** - IELTS Core Vocabulary
- 学习进度条实时显示

### 3. 📕 生词本复习
- 自动收录标记"不认识"的单词
- 支持发音播放
- 掌握后可移除

### 4. 📊 数据统计
- 已背单词数
- 打卡天数（自动计算）
- 生词本数量

### 5. 🌐 智能翻译（新增）
- 中译英 / 英译中 自由切换
- 逐句拆分翻译
- 原文译文逐行对照
- 🔊 英文发音播放
- 📋 一键复制译文

---

## 🚀 快速开始

### 方法一：直接打开
双击 `E:\英语陪伴官\index.html` 即可在浏览器中打开使用。

### 方法二：使用本地服务器（推荐）
```bash
# 如果有 Python
cd E:\英语陪伴官
python -m http.server 8080

# 然后在浏览器访问 http://localhost:8080
```

---

## 📱 使用指南

### 单词学习流程

1. **选择词书**
   - 进入首页，选择要学习的词书（四级/六级/雅思）
   - 查看当前学习进度

2. **学习单词**
   - 查看单词卡片（单词、音标、释义、例句、搭配）
   - 点击 🔊 发音 听取读音
   - 根据掌握程度选择：
     - ✅ 认识 - 标记为已学，进入下一个单词
     - ❌ 不认识 - 加入生词本，继续学习

3. **复习生词**
   - 点击底部导航"生词本"
   - 查看收藏的生词
   - 点击 🔊 听取发音
   - 掌握后点击"已掌握"移除

4. **查看统计**
   - 首页底部显示学习数据
   - 已背单词数、打卡天数、生词本数量

### 翻译功能使用

1. **选择翻译方向**
   - 点击底部导航"翻译"
   - 选择"中译英"或"英译中"

2. **输入内容**
   - 在文本框输入要翻译的内容
   - 支持单句、多段落
   - 长文本自动逐句拆分

3. **开始翻译**
   - 点击"开始翻译"按钮
   - 等待翻译完成

4. **查看结果**
   - 原文与译文逐行对照显示
   - 点击 🔊 听取英文发音
   - 点击"复制译文"复制到剪贴板

---

## 💡 翻译功能说明

### 当前版本
- 内置常用短语翻译数据（200+ 条）
- 支持短语精确匹配和模糊匹配
- 长句提供学习建议和指导

### 接入真实翻译 API（进阶）

如需获得更准确的翻译，可接入以下 API：

#### 1. 百度翻译 API
```javascript
// 示例代码
async function baiduTranslate(text, from, to) {
    const appId = 'YOUR_APP_ID';
    const key = 'YOUR_KEY';
    const salt = Date.now();
    const sign = MD5(appId + text + salt + key);
    
    const url = `https://fanyi-api.baidu.com/api/trans/vip/translate?q=${encodeURIComponent(text)}&from=${from}&to=${to}&appid=${appId}&salt=${salt}&sign=${sign}`;
    
    const response = await fetch(url);
    const data = await response.json();
    return data.trans_result[0].dst;
}
```

#### 2. 有道翻译 API
```javascript
// 示例代码
async function youdaoTranslate(text, from, to) {
    const appKey = 'YOUR_APP_KEY';
    const key = 'YOUR_KEY';
    const salt = Date.now();
    const curtime = Math.round(Date.now() / 1000);
    const sign = SHA256(appKey + truncateText(text) + salt + key + curtime);
    
    const url = `https://openapi.youdao.com/v2/api?q=${encodeURIComponent(text)}&from=${from}&to=${to}&appKey=${appKey}&salt=${salt}&sign=${sign}&signType=v3&curtime=${curtime}`;
    
    const response = await fetch(url);
    const data = await response.json();
    return data.translateResults[0].translation;
}
```

#### 3. 免费替代方案
- **MyMemory Translation API**（免费，有限额）
- **LibreTranslate**（开源，可自部署）

---

## 🎨 技术特点

- **纯前端实现** - 无需服务器，打开即用
- **本地存储** - 学习数据保存在浏览器 LocalStorage
- **响应式设计** - 适配 PC 和手机端
- **清新简洁** - 渐变紫色主题，视觉舒适
- **语音合成** - 使用浏览器 Web Speech API

---

## 📂 文件结构

```
E:\英语陪伴官\
├── index.html          # 主页面
├── style.css           # 样式文件
├── data.js             # 词汇数据
├── translation-data.js # 翻译数据
├── app.js              # 应用逻辑
└── README.md           # 使用说明
```

---

## 🔧 自定义扩展

### 添加新词书
编辑 `data.js`，在 `vocabularyData` 对象中添加新词书：

```javascript
const vocabularyData = {
    cet4: [...],
    cet6: [...],
    ielts: [...],
    // 添加新书
    toefl: [
        {
            word: "example",
            phonetic: "/ɪgˈzæmpəl/",
            meaningCn: "n. 例子",
            meaningEn: "a thing characteristic of its kind",
            example: "This is an example.",
            exampleTranslation: "这是一个例子。",
            collocations: "for example 例如"
        },
        // 更多单词...
    ]
};
```

### 添加翻译短语
编辑 `translation-data.js`，在对应对象中添加：

```javascript
const translationExamples = {
    zhToEn: {
        // 添加中文到英文
        '你的短语': 'Your translation',
    },
    enToZh: {
        // 添加英文到中文
        'your phrase': '你的翻译',
    }
};
```

---

## ⚠️ 注意事项

1. **数据保存** - 学习数据保存在浏览器 LocalStorage，清除浏览器数据会导致学习记录丢失
2. **语音功能** - 发音功能需要浏览器支持 Web Speech API（Chrome、Edge、Safari 支持良好）
3. **翻译准确性** - 当前版本为演示版，长句翻译建议参考专业翻译工具
4. **兼容性** - 推荐使用 Chrome、Edge、Firefox 等现代浏览器

---

## 📞 技术支持

如有问题或建议，欢迎反馈！

---

**祝你学习进步！🎉**

_英语陪伴官 - 你的英语学习好伙伴_
