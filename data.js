// 词汇数据
const vocabularyData = {
    cet4: [
        {
            word: "abandon",
            phonetic: "/əˈbændən/",
            meaningCn: "v. 放弃；抛弃；n. 放任",
            meaningEn: "to leave a place, thing, or person, usually forever",
            example: "They had to abandon their car and walk the rest of the way.",
            exampleTranslation: "他们不得不弃车步行剩下的路程。",
            collocations: "abandon hope 放弃希望 | abandon oneself to 沉溺于"
        },
        {
            word: "ability",
            phonetic: "/əˈbɪləti/",
            meaningCn: "n. 能力；才能",
            meaningEn: "the physical or mental power or skill needed to do something",
            example: "She has the ability to pass exams with ease.",
            exampleTranslation: "她有能力轻松通过考试。",
            collocations: "have the ability to 有能力做 | to the best of one's ability 尽力"
        },
        {
            word: "abnormal",
            phonetic: "/æbˈnɔːrməl/",
            meaningCn: "adj. 反常的；异常的",
            meaningEn: "unusual in a way that causes problems or is worrying",
            example: "The test results were abnormal, so the doctor ordered more tests.",
            exampleTranslation: "检测结果异常，所以医生要求做更多检查。",
            collocations: "abnormal behavior 异常行为 | abnormal conditions 异常条件"
        },
        {
            word: "aboard",
            phonetic: "/əˈbɔːrd/",
            meaningCn: "adv./prep. 在船（车、飞机）上",
            meaningEn: "on or into a ship, aircraft, train, or bus",
            example: "Welcome aboard! Please fasten your seatbelt.",
            exampleTranslation: "欢迎登机！请系好安全带。",
            collocations: "go aboard 上船 | welcome aboard 欢迎登机"
        },
        {
            word: "absolute",
            phonetic: "/ˈæbsəluːt/",
            meaningCn: "adj. 绝对的；完全的",
            meaningEn: "complete and total",
            example: "I have absolute confidence in your ability to succeed.",
            exampleTranslation: "我完全相信你有能力成功。",
            collocations: "absolute truth 绝对真理 | in absolute terms 绝对地说"
        },
        {
            word: "absorb",
            phonetic: "/əbˈzɔːrb/",
            meaningCn: "v. 吸收；吸引",
            meaningEn: "to take in liquid, gas, or other substances from the surface",
            example: "Plants absorb carbon dioxide from the air.",
            exampleTranslation: "植物从空气中吸收二氧化碳。",
            collocations: "absorb knowledge 吸收知识 | be absorbed in 专心于"
        },
        {
            word: "abstract",
            phonetic: "/ˈæbstrækt/",
            meaningCn: "adj. 抽象的；n. 摘要",
            meaningEn: "existing as an idea, feeling, or quality, not as a physical object",
            example: "The concept of justice is abstract and difficult to define.",
            exampleTranslation: "正义的概念是抽象的，难以定义。",
            collocations: "abstract art 抽象艺术 | in the abstract 抽象地"
        },
        {
            word: "academic",
            phonetic: "/ˌækəˈdemɪk/",
            meaningCn: "adj. 学术的；学院的；n. 学者",
            meaningEn: "related to education and scholarship",
            example: "She has excellent academic qualifications.",
            exampleTranslation: "她有很高的学术资质。",
            collocations: "academic year 学年 | academic performance 学业表现"
        },
        {
            word: "accelerate",
            phonetic: "/əkˈseləreɪt/",
            meaningCn: "v. 加速；促进",
            meaningEn: "to increase in speed or cause something to happen faster",
            example: "The car accelerated to overtake the truck.",
            exampleTranslation: "汽车加速以超过卡车。",
            collocations: "accelerate growth 加速增长 | accelerate the process 加快进程"
        },
        {
            word: "access",
            phonetic: "/ˈækses/",
            meaningCn: "n. 入口；通道；v. 访问；获取",
            meaningEn: "the right or opportunity to use or benefit from something",
            example: "Students need access to good learning resources.",
            exampleTranslation: "学生需要获取良好的学习资源。",
            collocations: "have access to 有权使用 | gain access 获得访问权限"
        },
        {
            word: "accommodate",
            phonetic: "/əˈkɑːmədeɪt/",
            meaningCn: "v. 容纳；提供住宿；适应",
            meaningEn: "to provide space for; to adapt to",
            example: "The hotel can accommodate up to 500 guests.",
            exampleTranslation: "这家酒店最多可容纳 500 位客人。",
            collocations: "accommodate needs 满足需求 | accommodate oneself to 适应"
        },
        {
            word: "accomplish",
            phonetic: "/əˈkɑːmplɪʃ/",
            meaningCn: "v. 完成；实现；达到",
            meaningEn: "to succeed in doing or completing something",
            example: "She accomplished her goal of becoming a doctor.",
            exampleTranslation: "她实现了成为医生的目标。",
            collocations: "accomplish a task 完成任务 | accomplish one's aim 达到目的"
        },
        {
            word: "account",
            phonetic: "/əˈkaʊnt/",
            meaningCn: "n. 账户；描述；v. 说明；占",
            meaningEn: "a record of money spent or received; a report",
            example: "I opened a bank account when I started working.",
            exampleTranslation: "我开始工作时开了一个银行账户。",
            collocations: "take into account 考虑 | on account of 由于"
        },
        {
            word: "accumulate",
            phonetic: "/əˈkjuːmjəleɪt/",
            meaningCn: "v. 积累；积聚",
            meaningEn: "to gradually increase in amount over time",
            example: "Dust has accumulated on the shelves.",
            exampleTranslation: "灰尘在架子上积聚了。",
            collocations: "accumulate wealth 积累财富 | accumulate experience 积累经验"
        },
        {
            word: "accurate",
            phonetic: "/ˈækjərət/",
            meaningCn: "adj. 准确的；精确的",
            meaningEn: "correct in all details; exact",
            example: "The measurements must be accurate to within 1mm.",
            exampleTranslation: "测量必须精确到 1 毫米以内。",
            collocations: "accurate information 准确信息 | accurate description 准确描述"
        },
        {
            word: "accuse",
            phonetic: "/əˈkjuːz/",
            meaningCn: "v. 指责；控告",
            meaningEn: "to say that someone has done something wrong",
            example: "He was accused of stealing the money.",
            exampleTranslation: "他被指控偷了钱。",
            collocations: "accuse sb of sth 指控某人某事 | falsely accuse 诬告"
        },
        {
            word: "achieve",
            phonetic: "/əˈtʃiːv/",
            meaningCn: "v. 实现；达到；完成",
            meaningEn: "to succeed in reaching a goal or result",
            example: "She worked hard to achieve her dreams.",
            exampleTranslation: "她努力工作以实现梦想。",
            collocations: "achieve success 取得成功 | achieve a goal 实现目标"
        },
        {
            word: "acknowledge",
            phonetic: "/əkˈnɑːlɪdʒ/",
            meaningCn: "v. 承认；致谢；确认收到",
            meaningEn: "to accept or admit the existence or truth of",
            example: "He acknowledged his mistake and apologized.",
            exampleTranslation: "他承认了错误并道歉。",
            collocations: "acknowledge receipt 确认收到 | acknowledge help 感谢帮助"
        },
        {
            word: "acquire",
            phonetic: "/əˈkwaɪər/",
            meaningCn: "v. 获得；取得；学到",
            meaningEn: "to buy or obtain something for oneself",
            example: "She has acquired a good knowledge of English.",
            exampleTranslation: "她已掌握了良好的英语知识。",
            collocations: "acquire skills 获得技能 | acquire knowledge 获取知识"
        },
        {
            word: "adapt",
            phonetic: "/əˈdæpt/",
            meaningCn: "v. 适应；改编；改造",
            meaningEn: "to change behavior to suit new conditions",
            example: "It took him a while to adapt to the new environment.",
            exampleTranslation: "他花了一段时间才适应新环境。",
            collocations: "adapt to 适应 | adapt from 改编自"
        },
        {
            word: "adequate",
            phonetic: "/ˈædɪkwət/",
            meaningCn: "adj. 足够的；适当的；胜任的",
            meaningEn: "sufficient or acceptable in quality or quantity",
            example: "We need to make adequate preparations for the trip.",
            exampleTranslation: "我们需要为旅行做充分的准备。",
            collocations: "adequate supply 充足供应 | adequate preparation 充分准备"
        },
        {
            word: "adjust",
            phonetic: "/əˈdʒʌst/",
            meaningCn: "v. 调整；调节；适应",
            meaningEn: "to change something slightly to make it fit or work better",
            example: "You can adjust the height of the chair.",
            exampleTranslation: "你可以调节椅子的高度。",
            collocations: "adjust to 适应 | adjust the settings 调整设置"
        },
        {
            word: "administration",
            phonetic: "/ədˌmɪnɪˈstreɪʃn/",
            meaningCn: "n. 管理；行政；管理部门",
            meaningEn: "the process of managing a business or organization",
            example: "She works in the administration department.",
            exampleTranslation: "她在行政部门工作。",
            collocations: "business administration 工商管理 | public administration 公共行政"
        },
        {
            word: "admire",
            phonetic: "/ədˈmaɪər/",
            meaningCn: "v. 钦佩；赞赏；羡慕",
            meaningEn: "to regard with respect or warm approval",
            example: "I admire her courage and determination.",
            exampleTranslation: "我钦佩她的勇气和决心。",
            collocations: "admire sb for 因...钦佩某人 | admire from afar 远观"
        },
        {
            word: "admit",
            phonetic: "/ədˈmɪt/",
            meaningCn: "v. 承认；准许进入；接纳",
            meaningEn: "to confess to be true; to allow entry",
            example: "He admitted that he was wrong.",
            exampleTranslation: "他承认自己错了。",
            collocations: "admit defeat 认输 | admit to 承认"
        },
        {
            word: "adopt",
            phonetic: "/əˈdɑːpt/",
            meaningCn: "v. 采用；收养；采纳",
            meaningEn: "to choose to take up or follow; to legally take another's child",
            example: "The company adopted a new marketing strategy.",
            exampleTranslation: "公司采用了新的营销策略。",
            collocations: "adopt a child 收养孩子 | adopt a method 采用方法"
        },
        {
            word: "advance",
            phonetic: "/ədˈvæns/",
            meaningCn: "v. 前进；提前；n. 进展；预付款",
            meaningEn: "to move forward; to make progress",
            example: "Technology has advanced rapidly in recent years.",
            exampleTranslation: "近年来技术进步迅速。",
            collocations: "in advance 提前 | advance payment 预付款"
        },
        {
            word: "advantage",
            phonetic: "/ədˈvæntɪdʒ/",
            meaningCn: "n. 优势；有利条件；利益",
            meaningEn: "a condition giving a greater chance of success",
            example: "Having a car is a big advantage in this job.",
            exampleTranslation: "有辆车对这份工作是个很大的优势。",
            collocations: "take advantage of 利用 | have an advantage over 优于"
        },
        {
            word: "adventure",
            phonetic: "/ədˈventʃər/",
            meaningCn: "n. 冒险；奇遇；v. 冒险",
            meaningEn: "an unusual and exciting experience",
            example: "Their trip to Africa was a real adventure.",
            exampleTranslation: "他们的非洲之旅是一次真正的冒险。",
            collocations: "go on an adventure 去冒险 | adventure story 冒险故事"
        },
        {
            word: "advocate",
            phonetic: "/ˈædvəkeɪt/",
            meaningCn: "v. 提倡；主张；n. 倡导者",
            meaningEn: "to publicly recommend or support",
            example: "She advocates equal rights for women.",
            exampleTranslation: "她主张妇女平等权利。",
            collocations: "advocate for 提倡 | strong advocate 坚定的倡导者"
        },
        {
            word: "affair",
            phonetic: "/əˈfer/",
            meaningCn: "n. 事务；事件；私通",
            meaningEn: "a matter or situation of a particular kind",
            example: "The government is dealing with foreign affairs.",
            exampleTranslation: "政府正在处理外交事务。",
            collocations: "foreign affairs 外交事务 | current affairs 时事"
        },
        {
            word: "affect",
            phonetic: "/əˈfekt/",
            meaningCn: "v. 影响；感动；假装",
            meaningEn: "to have an effect on; to make a difference to",
            example: "The weather can affect your mood.",
            exampleTranslation: "天气会影响你的情绪。",
            collocations: "be affected by 受...影响 | deeply affect 深深影响"
        },
        {
            word: "afford",
            phonetic: "/əˈfɔːrd/",
            meaningCn: "v. 买得起；承担得起；提供",
            meaningEn: "to have enough money to pay for something",
            example: "We can't afford to buy a new car right now.",
            exampleTranslation: "我们现在买不起新车。",
            collocations: "afford to do 负担得起做 | can't afford 买不起"
        },
        {
            word: "agency",
            phonetic: "/ˈeɪdʒənsi/",
            meaningCn: "n. 代理机构；专门机构",
            meaningEn: "a business or organization providing a particular service",
            example: "She works for a travel agency.",
            exampleTranslation: "她在一家旅行社工作。",
            collocations: "travel agency 旅行社 | advertising agency 广告公司"
        },
        {
            word: "agenda",
            phonetic: "/əˈdʒendə/",
            meaningCn: "n. 议程；议事日程",
            meaningEn: "a list of items to be discussed at a meeting",
            example: "The first item on the agenda is the budget.",
            exampleTranslation: "议程上的第一项是预算。",
            collocations: "on the agenda 在议程上 | hidden agenda 不可告人的动机"
        },
        {
            word: "aggressive",
            phonetic: "/əˈɡresɪv/",
            meaningCn: "adj. 侵略性的；好斗的；进取的",
            meaningEn: "ready or likely to attack or confront",
            example: "The dog became aggressive when strangers approached.",
            exampleTranslation: "陌生人靠近时，这条狗变得有攻击性。",
            collocations: "aggressive behavior 攻击性行为 | aggressive marketing 激进营销"
        },
        {
            word: "agreement",
            phonetic: "/əˈɡriːmənt/",
            meaningCn: "n. 协议；同意；一致",
            meaningEn: "a negotiated arrangement between two parties",
            example: "We reached an agreement on the price.",
            exampleTranslation: "我们就价格达成了协议。",
            collocations: "reach an agreement 达成协议 | in agreement 意见一致"
        },
        {
            word: "agriculture",
            phonetic: "/ˈæɡrɪkʌltʃər/",
            meaningCn: "n. 农业；农艺",
            meaningEn: "the science or practice of farming",
            example: "Agriculture is the main industry in this region.",
            exampleTranslation: "农业是这个地区的主要产业。",
            collocations: "modern agriculture 现代农业 | agricultural products 农产品"
        },
        {
            word: "alert",
            phonetic: "/əˈlɜːrt/",
            meaningCn: "adj. 警觉的；敏捷的；n. 警报",
            meaningEn: "quick to notice danger; watchful",
            example: "Stay alert while driving at night.",
            exampleTranslation: "夜间开车要保持警觉。",
            collocations: "on alert 警戒 | alert system 警报系统"
        },
        {
            word: "alike",
            phonetic: "/əˈlaɪk/",
            meaningCn: "adj. 相似的；同样的；adv. 同样地",
            meaningEn: "similar; in a similar way",
            example: "The twins look very much alike.",
            exampleTranslation: "这对双胞胎长得非常像。",
            collocations: "treat alike 同等对待 | very much alike 非常相似"
        },
        {
            word: "alliance",
            phonetic: "/əˈlaɪəns/",
            meaningCn: "n. 联盟；联合；联姻",
            meaningEn: "a union or association formed for mutual benefit",
            example: "The two countries formed a military alliance.",
            exampleTranslation: "两国结成了军事联盟。",
            collocations: "form an alliance 结盟 | strategic alliance 战略联盟"
        },
        {
            word: "allow",
            phonetic: "/əˈlaʊ/",
            meaningCn: "v. 允许；准许；给予",
            meaningEn: "to let someone do something; to permit",
            example: "My parents don't allow me to stay out late.",
            exampleTranslation: "我父母不允许我在外面待到很晚。",
            collocations: "allow sb to do 允许某人做 | allow for 考虑到"
        },
        {
            word: "alliance",
            phonetic: "/əˈlaɪəns/",
            meaningCn: "n. 联盟；联合",
            meaningEn: "a union or association formed for mutual benefit",
            example: "The companies formed a strategic alliance.",
            exampleTranslation: "这些公司组成了战略联盟。",
            collocations: "form an alliance 结盟 | in alliance with 与...结盟"
        },
        {
            word: "allocate",
            phonetic: "/ˈæləkeɪt/",
            meaningCn: "v. 分配；分派；拨给",
            meaningEn: "to distribute resources or duties for a particular purpose",
            example: "The government allocated funds for education.",
            exampleTranslation: "政府拨出了教育资金。",
            collocations: "allocate resources 分配资源 | allocate time 分配时间"
        },
        {
            word: "alternative",
            phonetic: "/ɔːlˈtɜːrnətɪv/",
            meaningCn: "adj. 供替代的；另类的；n. 替代品",
            meaningEn: "one of two or more available possibilities",
            example: "We need to find an alternative solution.",
            exampleTranslation: "我们需要找到一个替代解决方案。",
            collocations: "alternative energy 替代能源 | have no alternative 别无选择"
        },
        {
            word: "although",
            phonetic: "/ɔːlˈðoʊ/",
            meaningCn: "conj. 虽然；尽管；然而",
            meaningEn: "in spite of the fact that; even though",
            example: "Although it was raining, we went for a walk.",
            exampleTranslation: "虽然在下雨，我们还是去散步了。",
            collocations: "although...yet 虽然...但是"
        },
        {
            word: "amaze",
            phonetic: "/əˈmeɪz/",
            meaningCn: "v. 使吃惊；使惊叹",
            meaningEn: "to surprise someone very much",
            example: "Her performance amazed the audience.",
            exampleTranslation: "她的表演让观众惊叹不已。",
            collocations: "be amazed at 对...感到惊讶 | amazed by 被...震惊"
        },
        {
            word: "ambition",
            phonetic: "/æmˈbɪʃn/",
            meaningCn: "n. 雄心；抱负；野心",
            meaningEn: "a strong desire to achieve something",
            example: "Her ambition is to become a successful writer.",
            exampleTranslation: "她的抱负是成为一名成功的作家。",
            collocations: "achieve one's ambition 实现抱负 | full of ambition 雄心勃勃"
        },
        {
            word: "amuse",
            phonetic: "/əˈmjuːz/",
            meaningCn: "v. 逗乐；使愉快；消遣",
            meaningEn: "to cause someone to find something funny or entertaining",
            example: "The clown amused the children with his tricks.",
            exampleTranslation: "小丑用他的把戏逗乐了孩子们。",
            collocations: "amuse oneself 自娱自乐 | be amused by 被...逗乐"
        },
        {
            word: "analyze",
            phonetic: "/ˈænəlaɪz/",
            meaningCn: "v. 分析；解析；分解",
            meaningEn: "to examine in detail in order to understand",
            example: "We need to analyze the data carefully.",
            exampleTranslation: "我们需要仔细分析这些数据。",
            collocations: "analyze data 分析数据 | analyze the problem 分析问题"
        }
    ],
    cet6: [
        {
            word: "abrupt",
            phonetic: "/əˈbrʌpt/",
            meaningCn: "adj. 突然的；唐突的；陡峭的",
            meaningEn: "sudden and unexpected; brief to the point of rudeness",
            example: "The meeting came to an abrupt end.",
            exampleTranslation: "会议突然结束了。",
            collocations: "abrupt change 突然变化 | abrupt manner 唐突的态度"
        },
        {
            word: "absurd",
            phonetic: "/əbˈsɜːrd/",
            meaningCn: "adj. 荒谬的；可笑的",
            meaningEn: "wildly unreasonable or illogical",
            example: "The idea that the earth is flat is absurd.",
            exampleTranslation: "地球是平的这个想法很荒谬。",
            collocations: "absurd idea 荒谬的想法 | absurd situation 荒谬的处境"
        },
        {
            word: "abundant",
            phonetic: "/əˈbʌndənt/",
            meaningCn: "adj. 丰富的；充裕的；大量的",
            meaningEn: "existing or available in large quantities",
            example: "The country has abundant natural resources.",
            exampleTranslation: "这个国家拥有丰富的自然资源。",
            collocations: "abundant evidence 充分的证据 | abundant supply 充足供应"
        },
        {
            word: "abuse",
            phonetic: "/əˈbjuːs/",
            meaningCn: "v./n. 滥用；虐待；辱骂",
            meaningEn: "to use something to bad effect; to treat with cruelty",
            example: "He was arrested for child abuse.",
            exampleTranslation: "他因虐待儿童被捕。",
            collocations: "drug abuse 药物滥用 | abuse of power 滥用职权"
        },
        {
            word: "academic",
            phonetic: "/ˌækəˈdemɪk/",
            meaningCn: "adj. 学术的；学院的；理论的",
            meaningEn: "related to education and scholarship",
            example: "The university has high academic standards.",
            exampleTranslation: "这所大学有很高的学术标准。",
            collocations: "academic achievement 学术成就 | academic research 学术研究"
        },
        {
            word: "accelerate",
            phonetic: "/əkˈseləreɪt/",
            meaningCn: "v. 加速；促进；提前",
            meaningEn: "to begin to move more quickly; to cause to happen sooner",
            example: "The government plans to accelerate economic reform.",
            exampleTranslation: "政府计划加速经济改革。",
            collocations: "accelerate development 加速发展 | accelerate growth 促进增长"
        },
        {
            word: "accessory",
            phonetic: "/əkˈsesəri/",
            meaningCn: "n. 附件；配件；配饰；从犯",
            meaningEn: "a thing that can be added to complement; a helper in crime",
            example: "She bought some fashion accessories to match her dress.",
            exampleTranslation: "她买了一些时尚配饰来搭配她的裙子。",
            collocations: "fashion accessory 时尚配饰 | car accessories 汽车配件"
        },
        {
            word: "accommodate",
            phonetic: "/əˈkɑːmədeɪt/",
            meaningCn: "v. 容纳；提供住宿；使适应",
            meaningEn: "to provide lodging for; to fit in with the wishes or needs of",
            example: "The new hotel can accommodate 2000 guests.",
            exampleTranslation: "这家新酒店可容纳 2000 名客人。",
            collocations: "accommodate needs 满足需求 | accommodate to 适应"
        },
        {
            word: "accomplish",
            phonetic: "/əˈkɑːmplɪʃ/",
            meaningCn: "v. 完成；实现；达到目的",
            meaningEn: "to succeed in doing or completing something",
            example: "She accomplished her mission successfully.",
            exampleTranslation: "她成功地完成了任务。",
            collocations: "accomplish a goal 实现目标 | accomplish the task 完成任务"
        },
        {
            word: "accord",
            phonetic: "/əˈkɔːrd/",
            meaningCn: "v. 给予；使一致；n. 协议；一致",
            meaningEn: "to give or grant; official agreement",
            example: "The two countries signed a peace accord.",
            exampleTranslation: "两国签署了和平协议。",
            collocations: "in accord with 与...一致 | of one's own accord 自愿地"
        },
        {
            word: "accountable",
            phonetic: "/əˈkaʊntəbl/",
            meaningCn: "adj. 有责任的；可解释的",
            meaningEn: "required or expected to justify actions or decisions",
            example: "Managers are accountable for their team's performance.",
            exampleTranslation: "经理要对其团队的表现负责。",
            collocations: "be accountable for 对...负责 | hold accountable 追究责任"
        },
        {
            word: "accumulate",
            phonetic: "/əˈkjuːmjəleɪt/",
            meaningCn: "v. 积累；积聚；堆积",
            meaningEn: "to gather together or acquire an increasing number of",
            example: "He has accumulated a fortune through hard work.",
            exampleTranslation: "他通过努力工作积累了财富。",
            collocations: "accumulate wealth 积累财富 | accumulate experience 积累经验"
        },
        {
            word: "accustom",
            phonetic: "/əˈkʌstəm/",
            meaningCn: "v. 使习惯；使适应",
            meaningEn: "to make someone or something used to something",
            example: "It took me a while to accustom myself to the new job.",
            exampleTranslation: "我花了一段时间才适应新工作。",
            collocations: "accustom oneself to 使自己习惯于 | be accustomed to 习惯于"
        },
        {
            word: "acknowledge",
            phonetic: "/əkˈnɑːlɪdʒ/",
            meaningCn: "v. 承认；确认；感谢",
            meaningEn: "to accept or admit the existence or truth of",
            example: "The company acknowledged its responsibility.",
            exampleTranslation: "公司承认了自己的责任。",
            collocations: "acknowledge receipt 确认收到 | acknowledge help 致谢"
        },
        {
            word: "acquaint",
            phonetic: "/əˈkweɪnt/",
            meaningCn: "v. 使了解；使认识；使熟悉",
            meaningEn: "to make someone aware of or familiar with",
            example: "Please acquaint yourself with the rules before starting.",
            exampleTranslation: "开始前请先熟悉规则。",
            collocations: "acquaint with 使熟悉 | be acquainted with 认识；了解"
        },
        {
            word: "acquisition",
            phonetic: "/ˌækwɪˈzɪʃn/",
            meaningCn: "n. 获得；收购； acquisitions",
            meaningEn: "the act of acquiring or gaining possession",
            example: "The company's latest acquisition is a tech startup.",
            exampleTranslation: "该公司最新的收购是一家科技初创公司。",
            collocations: "language acquisition 语言习得 | business acquisition 企业收购"
        },
        {
            word: "adapt",
            phonetic: "/əˈdæpt/",
            meaningCn: "v. 适应；改编；改造",
            meaningEn: "to become adjusted to new conditions",
            example: "The novel was adapted for television.",
            exampleTranslation: "这部小说被改编成了电视剧。",
            collocations: "adapt to 适应 | adapt from 改编自"
        },
        {
            word: "adequate",
            phonetic: "/ˈædɪkwət/",
            meaningCn: "adj. 足够的；适当的；能胜任的",
            meaningEn: "satisfactory or acceptable in quality or quantity",
            example: "We need to ensure adequate safety measures.",
            exampleTranslation: "我们需要确保适当的安全措施。",
            collocations: "adequate preparation 充分准备 | adequate resources 充足资源"
        },
        {
            word: "adhere",
            phonetic: "/ədˈhɪr/",
            meaningCn: "v. 坚持；粘附；遵守",
            meaningEn: "to stick firmly; to follow a rule or agreement",
            example: "All members must adhere to the code of conduct.",
            exampleTranslation: "所有成员都必须遵守行为准则。",
            collocations: "adhere to 坚持；遵守 | adhere firmly 牢牢粘附"
        },
        {
            word: "adjacent",
            phonetic: "/əˈdʒeɪsnt/",
            meaningCn: "adj. 邻近的；毗连的",
            meaningEn: "next to or adjoining something else",
            example: "The hotel is adjacent to the shopping mall.",
            exampleTranslation: "这家酒店紧邻购物中心。",
            collocations: "adjacent to 邻近 | adjacent room 相邻房间"
        },
        {
            word: "adjust",
            phonetic: "/əˈdʒʌst/",
            meaningCn: "v. 调整；调节；适应",
            meaningEn: "to alter or move slightly for improvement",
            example: "You need to adjust your approach to the problem.",
            exampleTranslation: "你需要调整解决问题的方法。",
            collocations: "adjust to 适应 | adjust the settings 调整设置"
        },
        {
            word: "administer",
            phonetic: "/ədˈmɪnɪstər/",
            meaningCn: "v. 管理；执行；给予",
            meaningEn: "to be in charge of; to give or apply",
            example: "The nurse administered the injection.",
            exampleTranslation: "护士进行了注射。",
            collocations: "administer justice 执行正义 | administer a test 进行测试"
        },
        {
            word: "administration",
            phonetic: "/ədˌmɪnɪˈstreɪʃn/",
            meaningCn: "n. 管理；行政；行政部门",
            meaningEn: "the process of running a business or organization",
            example: "The university administration announced new policies.",
            exampleTranslation: "大学行政部门宣布了新政策。",
            collocations: "public administration 公共行政 | business administration 工商管理"
        },
        {
            word: "admire",
            phonetic: "/ədˈmaɪər/",
            meaningCn: "v. 钦佩；赞赏；羡慕",
            meaningEn: "to regard with respect or warm approval",
            example: "I admire her dedication to her work.",
            exampleTranslation: "我钦佩她对工作的奉献精神。",
            collocations: "admire sb for 因...钦佩某人 | admire from afar 远观"
        },
        {
            word: "admission",
            phonetic: "/ədˈmɪʃn/",
            meaningCn: "n. 准许进入；入场费；承认",
            meaningEn: "the process of allowing someone to enter",
            example: "Admission to the museum is free on Sundays.",
            exampleTranslation: "周日博物馆免费入场。",
            collocations: "gain admission 获得入场 | free admission 免费入场"
        },
        {
            word: "admit",
            phonetic: "/ədˈmɪt/",
            meaningCn: "v. 承认；准许进入；接纳",
            meaningEn: "to confess to be true; to allow entry",
            example: "He admitted making a mistake.",
            exampleTranslation: "他承认犯了错误。",
            collocations: "admit defeat 认输 | admit to 承认"
        },
        {
            word: "adopt",
            phonetic: "/əˈdɑːpt/",
            meaningCn: "v. 采用；收养；采纳",
            meaningEn: "to choose to take up or follow; to legally take another's child",
            example: "The committee adopted the proposal unanimously.",
            exampleTranslation: "委员会一致通过了这项提议。",
            collocations: "adopt a policy 采用政策 | adopt a child 收养孩子"
        },
        {
            word: "adore",
            phonetic: "/əˈdɔːr/",
            meaningCn: "v. 崇拜；爱慕；非常喜欢",
            meaningEn: "to love and respect deeply; to like very much",
            example: "She adores her grandchildren.",
            exampleTranslation: "她非常疼爱她的孙辈。",
            collocations: "adore sb 爱慕某人 | absolutely adore 非常喜欢"
        },
        {
            word: "advance",
            phonetic: "/ədˈvæns/",
            meaningCn: "v. 前进；提前；n. 进展；预付款",
            meaningEn: "to move forward in position; to make progress",
            example: "Scientific advances have improved our lives.",
            exampleTranslation: "科学进步改善了我们的生活。",
            collocations: "in advance 提前 | advance payment 预付款"
        },
        {
            word: "advantage",
            phonetic: "/ədˈvæntɪdʒ/",
            meaningCn: "n. 优势；有利条件；利益",
            meaningEn: "a condition giving a greater chance of success",
            example: "The team has the advantage of experience.",
            exampleTranslation: "这支队伍拥有经验优势。",
            collocations: "take advantage of 利用 | competitive advantage 竞争优势"
        },
        {
            word: "advent",
            phonetic: "/ˈædvɛnt/",
            meaningCn: "n. 到来；出现；降临",
            meaningEn: "the arrival of a notable person, thing, or event",
            example: "The advent of computers changed the world.",
            exampleTranslation: "计算机的出现改变了世界。",
            collocations: "with the advent of 随着...的到来 | advent calendar 降临节日历"
        },
        {
            word: "adventure",
            phonetic: "/ədˈventʃər/",
            meaningCn: "n. 冒险；奇遇；刺激的经历",
            meaningEn: "an unusual and exciting or daring experience",
            example: "Life is a great adventure.",
            exampleTranslation: "生活是一场伟大的冒险。",
            collocations: "go on an adventure 去冒险 | adventure story 冒险故事"
        },
        {
            word: "advocate",
            phonetic: "/ˈædvəkeɪt/",
            meaningCn: "v. 提倡；主张；n. 倡导者；律师",
            meaningEn: "to publicly recommend or support",
            example: "He advocates reform of the prison system.",
            exampleTranslation: "他主张改革监狱系统。",
            collocations: "advocate for 提倡 | strong advocate 坚定的倡导者"
        },
        {
            word: "aesthetic",
            phonetic: "/esˈθetɪk/",
            meaningCn: "adj. 美学的；审美的；n. 美学观",
            meaningEn: "concerned with beauty or the appreciation of beauty",
            example: "The building has little aesthetic value.",
            exampleTranslation: "这座建筑几乎没有美学价值。",
            collocations: "aesthetic appeal 美学吸引力 | aesthetic sense 审美感"
        },
        {
            word: "affirm",
            phonetic: "/əˈfɜːrm/",
            meaningCn: "v. 断言；肯定；确认",
            meaningEn: "to state as a fact; to confirm publicly",
            example: "The court affirmed the original decision.",
            exampleTranslation: "法院维持了原判。",
            collocations: "affirm one's belief 坚定信念 | affirm the truth 确认真相"
        },
        {
            word: "affluent",
            phonetic: "/ˈæfluənt/",
            meaningCn: "adj. 富裕的；丰富的；流畅的",
            meaningEn: "having a great deal of money; wealthy",
            example: "They live in an affluent neighborhood.",
            exampleTranslation: "他们住在一个富裕的社区。",
            collocations: "affluent society 富裕社会 | affluent family 富裕家庭"
        },
        {
            word: "agency",
            phonetic: "/ˈeɪdʒənsi/",
            meaningCn: "n. 代理机构；专门机构；作用",
            meaningEn: "a business or organization providing a particular service",
            example: "She found a job through an employment agency.",
            exampleTranslation: "她通过职业介绍所找到了一份工作。",
            collocations: "travel agency 旅行社 | government agency 政府机构"
        },
        {
            word: "agenda",
            phonetic: "/əˈdʒendə/",
            meaningCn: "n. 议程；议事日程；待办事项",
            meaningEn: "a list of items to be discussed at a meeting",
            example: "Environmental protection is high on the government's agenda.",
            exampleTranslation: "环境保护在政府的议程上排在很高的位置。",
            collocations: "on the agenda 在议程上 | hidden agenda 不可告人的动机"
        },
        {
            word: "aggravate",
            phonetic: "/ˈæɡrəveɪt/",
            meaningCn: "v. 加重；恶化；激怒",
            meaningEn: "to make a problem worse; to annoy",
            example: "The injury was aggravated by continued playing.",
            exampleTranslation: "继续比赛使伤势加重了。",
            collocations: "aggravate the situation 使局势恶化 | aggravate symptoms 加重症状"
        },
        {
            word: "aggregate",
            phonetic: "/ˈæɡrɪɡət/",
            meaningCn: "n. 总数；合计；adj. 总的；v. 聚集",
            meaningEn: "a whole formed by combining several elements",
            example: "The aggregate of all donations was impressive.",
            exampleTranslation: "所有捐款的总额令人印象深刻。",
            collocations: "in the aggregate 总体上 | aggregate demand 总需求"
        },
        {
            word: "aggressive",
            phonetic: "/əˈɡresɪv/",
            meaningCn: "adj. 侵略性的；好斗的；有进取心的",
            meaningEn: "ready or likely to attack or confront",
            example: "The company has an aggressive marketing strategy.",
            exampleTranslation: "这家公司有激进的营销策略。",
            collocations: "aggressive behavior 攻击性行为 | aggressive sales 激进销售"
        },
        {
            word: "agitate",
            phonetic: "/ˈædʒɪteɪt/",
            meaningCn: "v. 搅动；煽动；使不安",
            meaningEn: "to stir up public opinion; to make someone troubled",
            example: "The workers agitated for better conditions.",
            exampleTranslation: "工人们为争取更好的条件而鼓动。",
            collocations: "agitate for 为...鼓动 | agitate against 煽动反对"
        },
        {
            word: "agony",
            phonetic: "/ˈæɡəni/",
            meaningCn: "n. 痛苦；极度痛苦；挣扎",
            meaningEn: "extreme physical or mental suffering",
            example: "He was in agony after the accident.",
            exampleTranslation: "事故后他痛苦不堪。",
            collocations: "in agony 痛苦中 | death agony 临终痛苦"
        },
        {
            word: "agreeable",
            phonetic: "/əˈɡriːəbl/",
            meaningCn: "adj. 令人愉快的；可接受的；同意的",
            meaningEn: "enjoyable; willing to agree",
            example: "The weather was agreeable for a picnic.",
            exampleTranslation: "天气很适合野餐。",
            collocations: "agreeable to 同意 | find agreeable 觉得愉快"
        },
        {
            word: "agreement",
            phonetic: "/əˈɡriːmənt/",
            meaningCn: "n. 协议；同意；一致",
            meaningEn: "a negotiated arrangement between two parties",
            example: "The two sides reached a tentative agreement.",
            exampleTranslation: "双方达成了临时协议。",
            collocations: "reach an agreement 达成协议 | in agreement 意见一致"
        },
        {
            word: "agriculture",
            phonetic: "/ˈæɡrɪkʌltʃər/",
            meaningCn: "n. 农业；农艺；农学",
            meaningEn: "the science or practice of farming",
            example: "Modern agriculture relies heavily on technology.",
            exampleTranslation: "现代农业严重依赖技术。",
            collocations: "sustainable agriculture 可持续农业 | agricultural industry 农业产业"
        },
        {
            word: "alarm",
            phonetic: "/əˈlɑːrm/",
            meaningCn: "n. 警报；惊恐；v. 使惊恐；警告",
            meaningEn: "a warning of danger; sudden fear",
            example: "The fire alarm went off in the middle of the night.",
            exampleTranslation: "火警警报在半夜响了。",
            collocations: "fire alarm 火警 | false alarm 虚惊一场"
        },
        {
            word: "alert",
            phonetic: "/əˈlɜːrt/",
            meaningCn: "adj. 警觉的；敏捷的；n. 警报；v. 警告",
            meaningEn: "quick to notice any unusual and potentially dangerous situations",
            example: "Security forces were placed on high alert.",
            exampleTranslation: "安全部队处于高度戒备状态。",
            collocations: "on alert 警戒 | alert system 警报系统"
        },
        {
            word: "alien",
            phonetic: "/ˈeɪliən/",
            meaningCn: "adj. 外国的；陌生的；n. 外国人；外星人",
            meaningEn: "belonging to a foreign country; unfamiliar",
            example: "Such ideas are alien to our culture.",
            exampleTranslation: "这样的想法与我们的文化格格不入。",
            collocations: "alien culture 外国文化 | feel alien 感到陌生"
        }
    ],
    ielts: [
        {
            word: "abandon",
            phonetic: "/əˈbændən/",
            meaningCn: "v. 放弃；抛弃；n. 放任",
            meaningEn: "to leave a place, thing, or person, usually forever",
            example: "They had to abandon their car and walk the rest of the way.",
            exampleTranslation: "他们不得不弃车步行剩下的路程。",
            collocations: "abandon hope 放弃希望 | abandon oneself to 沉溺于"
        },
        {
            word: "abbreviate",
            phonetic: "/əˈbriːvieɪt/",
            meaningCn: "v. 缩写；缩短；简化",
            meaningEn: "to shorten a word or phrase",
            example: "BBC is abbreviated from British Broadcasting Corporation.",
            exampleTranslation: "BBC 是英国广播公司的缩写。",
            collocations: "abbreviated version 简化版 | abbreviate a word 缩写单词"
        },
        {
            word: "abide",
            phonetic: "/əˈbaɪd/",
            meaningCn: "v. 遵守；忍受；停留",
            meaningEn: "to accept and act according to a rule or decision",
            example: "We must abide by the rules.",
            exampleTranslation: "我们必须遵守规则。",
            collocations: "abide by 遵守 | abide with 与...同住"
        },
        {
            word: "abolish",
            phonetic: "/əˈbɑːlɪʃ/",
            meaningCn: "v. 废除；取消；消灭",
            meaningEn: "to officially end a law, system, or institution",
            example: "Slavery was abolished in the 19th century.",
            exampleTranslation: "奴隶制在 19 世纪被废除了。",
            collocations: "abolish slavery 废除奴隶制 | abolish the death penalty 废除死刑"
        },
        {
            word: "abrupt",
            phonetic: "/əˈbrʌpt/",
            meaningCn: "adj. 突然的；唐突的；陡峭的",
            meaningEn: "sudden and unexpected; brief to the point of rudeness",
            example: "The meeting came to an abrupt end.",
            exampleTranslation: "会议突然结束了。",
            collocations: "abrupt change 突然变化 | abrupt manner 唐突的态度"
        },
        {
            word: "absolute",
            phonetic: "/ˈæbsəluːt/",
            meaningCn: "adj. 绝对的；完全的；n. 绝对",
            meaningEn: "complete and total; not limited in any way",
            example: "I have absolute confidence in you.",
            exampleTranslation: "我对你有绝对的信心。",
            collocations: "absolute power 绝对权力 | in absolute terms 绝对地说"
        },
        {
            word: "absorb",
            phonetic: "/əbˈzɔːrb/",
            meaningCn: "v. 吸收；吸引；理解",
            meaningEn: "to take in liquid, gas, or other substances; to engage fully",
            example: "Plants absorb sunlight for photosynthesis.",
            exampleTranslation: "植物吸收阳光进行光合作用。",
            collocations: "absorb knowledge 吸收知识 | be absorbed in 专心于"
        },
        {
            word: "abstract",
            phonetic: "/ˈæbstrækt/",
            meaningCn: "adj. 抽象的；n. 摘要；v. 提取",
            meaningEn: "existing as an idea; a summary of a text",
            example: "Beauty is an abstract concept.",
            exampleTranslation: "美是一个抽象的概念。",
            collocations: "abstract art 抽象艺术 | research abstract 研究摘要"
        },
        {
            word: "absurd",
            phonetic: "/əbˈsɜːrd/",
            meaningCn: "adj. 荒谬的；可笑的",
            meaningEn: "wildly unreasonable, illogical, or inappropriate",
            example: "The idea is completely absurd.",
            exampleTranslation: "这个想法完全荒谬。",
            collocations: "absurd idea 荒谬的想法 | absurd situation 荒谬的处境"
        },
        {
            word: "abundant",
            phonetic: "/əˈbʌndənt/",
            meaningCn: "adj. 丰富的；充裕的；大量的",
            meaningEn: "existing or available in large quantities; plentiful",
            example: "The region has abundant natural resources.",
            exampleTranslation: "该地区拥有丰富的自然资源。",
            collocations: "abundant evidence 充分的证据 | abundant supply 充足供应"
        },
        {
            word: "abuse",
            phonetic: "/əˈbjuːs/",
            meaningCn: "v./n. 滥用；虐待；辱骂",
            meaningEn: "to use something to bad effect; cruel or violent treatment",
            example: "The report highlights cases of child abuse.",
            exampleTranslation: "报告强调了儿童虐待案例。",
            collocations: "drug abuse 药物滥用 | verbal abuse 言语辱骂"
        },
        {
            word: "academic",
            phonetic: "/ˌækəˈdemɪk/",
            meaningCn: "adj. 学术的；学院的；理论的",
            meaningEn: "related to education and scholarship",
            example: "The university maintains high academic standards.",
            exampleTranslation: "这所大学保持着很高的学术标准。",
            collocations: "academic year 学年 | academic research 学术研究"
        },
        {
            word: "accelerate",
            phonetic: "/əkˈseləreɪt/",
            meaningCn: "v. 加速；促进；提前",
            meaningEn: "to begin to move more quickly; to cause to happen sooner",
            example: "The car accelerated rapidly.",
            exampleTranslation: "汽车迅速加速。",
            collocations: "accelerate growth 加速增长 | economic acceleration 经济加速"
        },
        {
            word: "accent",
            phonetic: "/ˈæksent/",
            meaningCn: "n. 口音；重音；v. 强调",
            meaningEn: "a distinctive way of pronouncing; stress on a syllable",
            example: "She speaks English with a French accent.",
            exampleTranslation: "她讲英语带有法国口音。",
            collocations: "regional accent 地方口音 | put accent on 强调"
        },
        {
            word: "access",
            phonetic: "/ˈækses/",
            meaningCn: "n. 入口；通道；访问权；v. 访问；获取",
            meaningEn: "the right or opportunity to use or benefit from something",
            example: "Students have access to the library 24/7.",
            exampleTranslation: "学生可以 24 小时使用图书馆。",
            collocations: "have access to 有权使用 | gain access 获得访问权限"
        },
        {
            word: "accessible",
            phonetic: "/əkˈsesəbl/",
            meaningCn: "adj. 可到达的；可接近的；易懂的",
            meaningEn: "able to be reached or entered; easy to understand",
            example: "The building is accessible to wheelchair users.",
            exampleTranslation: "这座建筑可供轮椅使用者使用。",
            collocations: "easily accessible 容易到达 | accessible information 易懂的信息"
        },
        {
            word: "accommodate",
            phonetic: "/əˈkɑːmədeɪt/",
            meaningCn: "v. 容纳；提供住宿；使适应",
            meaningEn: "to provide space for; to adapt to",
            example: "The hotel can accommodate up to 300 guests.",
            exampleTranslation: "这家酒店最多可容纳 300 位客人。",
            collocations: "accommodate needs 满足需求 | accommodate oneself to 适应"
        },
        {
            word: "accommodation",
            phonetic: "/əˌkɑːməˈdeɪʃn/",
            meaningCn: "n. 住宿；膳宿；和解",
            meaningEn: "a room, group of rooms, or building in which someone may live",
            example: "Student accommodation is available on campus.",
            exampleTranslation: "校园内提供学生住宿。",
            collocations: "student accommodation 学生宿舍 | book accommodation 预订住宿"
        },
        {
            word: "accompany",
            phonetic: "/əˈkʌmpəni/",
            meaningCn: "v. 陪伴；伴随；伴奏",
            meaningEn: "to go somewhere with someone; to occur at the same time",
            example: "May I accompany you to the station?",
            exampleTranslation: "我可以陪你去车站吗？",
            collocations: "accompany sb 陪伴某人 | accompanied by 伴有"
        },
        {
            word: "accomplish",
            phonetic: "/əˈkɑːmplɪʃ/",
            meaningCn: "v. 完成；实现；达到",
            meaningEn: "to succeed in doing or completing something",
            example: "She accomplished her goal of running a marathon.",
            exampleTranslation: "她实现了跑马拉松的目标。",
            collocations: "accomplish a task 完成任务 | accomplish one's aim 达到目的"
        }
    ]
};
