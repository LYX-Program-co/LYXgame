// ==================== 游戏基础配置 ====================
const GAME_CONFIG = {
    // 符号配置 - 使用图片路径
    symbols: ['symbols/01.png', 'symbols/02.png', 'symbols/03.png', 'symbols/04.png', 'symbols/05.png', 
              'symbols/06.png', 'symbols/07.png', 'symbols/08.png', 'symbols/09.png', 'symbols/10.png',
              'symbols/11.png', 'symbols/12.png', 'symbols/13.png'],
    
    // 卷轴配置
    reelCount: 5,
    visibleSymbols: 3,
    symbolsPerReel: 20,
    
    // 金额配置 - 新增下注额选项
    initialBalance: 1000,
    initialJackpot: 5000,
    minBet: 0.25,
    maxBet: 1000,
    betSteps: [0.25, 0.50, 1, 2, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    betStep: 1,
    
    // 动画配置
    spinDuration: 3000,
    reelStopDelay: 300,
    spinSpeed: 50,
    
    // 游戏规则
    freeSpinsMultiplier: 5,  // 免费旋转倍数改为5倍
    freeSpinsCount: 10,
    jackpotProbability: 0.0002,  // 0.02%
    bigWinThreshold: 50,
    
    // 特殊符号 - 使用图片路径
    wildSymbol: 'symbols/11.png',
    scatterSymbol: 'symbols/12.png',
    bonusSymbol: 'symbols/13.png',
    
    // ==================== 音乐配置 ====================
    musicPaths: {
        background: 'music/background/bg.mp3', 
        spin: 'music/spin.mp3',
        win: 'music/win.mp3',
        bigWin: 'music/bigwin.mp3',
        jackpot: 'music/jackpot.mp3',
        freeSpins: 'music/freespins.mp3',
        stop: 'music/stop.mp3'
    }
};

// ==================== RTP配置 ====================
const RTP_CONFIG = {
    // 基础RTP设置 - 修改为35%
    targetRTP: 35.0,
    volatility: 'medium',
    hitFrequency: 18,
    
    // RTP分配比例
    rtpDistribution: {
        baseGame: 29.0,
        freeSpins: 4.0,
        jackpot: 1.5,
        bonus: 0.5
    },
    
    // 符号出现频率调整 (基于35% RTP)
    symbolFrequencies: {
        'symbols/10.png': 16.5,
        'symbols/07.png': 13.5,
        'symbols/09.png': 9.2,
        'symbols/04.png': 7.0,
        'symbols/05.png': 7.0,
        'symbols/06.png': 7.0,
        'symbols/08.png': 2.1,
        'symbols/01.png': 1.1,
        'symbols/02.png': 1.2,
        'symbols/03.png': 1.3,
        'symbols/11.png': 0.9,
        'symbols/12.png': 0.7,
        'symbols/13.png': 0.5
    },
    
    // 动态调整参数
    adjustment: {
        enabled: true,
        checkInterval: 100,
        maxAdjustment: 3.0,
        minRTP: 32.0,
        maxRTP: 38.0
    },
    
    // 波动率配置
    volatilityProfiles: {
        low: {
            baseHitRate: 20,
            bigWinMultiplier: 40,
            drySpellMax: 8,
            symbolFrequencyMultiplier: 1.2
        },
        medium: {
            baseHitRate: 18,
            bigWinMultiplier: 60,
            drySpellMax: 12,
            symbolFrequencyMultiplier: 1.0
        },
        high: {
            baseHitRate: 12,
            bigWinMultiplier: 100,
            drySpellMax: 20,
            symbolFrequencyMultiplier: 0.8
        }
    }
};

// ==================== 赔付表配置 (25线) - 修正错误 ====================
const PAYTABLE_25 = {
    'symbols/01.png': { 3: 50, 4: 200, 5: 800, name: '龙', type: 'high' },
    'symbols/02.png': { 3: 40, 4: 150, 5: 600, name: '凤凰', type: 'high' },
    'symbols/03.png': { 3: 30, 4: 120, 5: 500, name: '元宝', type: 'high' },
    'symbols/04.png': { 3: 20, 4: 80, 5: 300, name: '竹节', type: 'medium' },
    'symbols/05.png': { 3: 20, 4: 80, 5: 300, name: '福字', type: 'medium' },
    'symbols/06.png': { 3: 15, 4: 60, 5: 200, name: '锦鲤', type: 'medium' },
    'symbols/07.png': { 3: 10, 4: 40, 5: 150, name: '金币', type: 'low' },
    'symbols/08.png': { 3: 25, 4: 100, 5: 400, name: '幸运7', type: 'high' },
    'symbols/09.png': { 3: 8, 4: 30, 5: 100, name: '铃铛', type: 'low' },
    'symbols/10.png': { 3: 5, 4: 20, 5: 80, name: '美元', type: 'low' },
    'symbols/11.png': { special: 'Wild - 替代任何符号', name: 'Wild', type: 'special' },
    'symbols/12.png': { special: 'Scatter - 3个触发免费旋转', name: 'Scatter', type: 'special' },
    'symbols/13.png': { special: 'Bonus - 触发奖金游戏', name: 'Bonus', type: 'special' }
};

// ==================== 赔付表配置 (40线) - 修正错误 ====================
const PAYTABLE_40 = {
    'symbols/01.png': { 3: 30, 4: 120, 5: 400, name: '龙', type: 'high' },
    'symbols/02.png': { 3: 25, 4: 100, 5: 300, name: '凤凰', type: 'high' },
    'symbols/03.png': { 3: 20, 4: 80, 5: 250, name: '元宝', type: 'high' },
    'symbols/04.png': { 3: 15, 4: 60, 5: 180, name: '竹节', type: 'medium' },
    'symbols/05.png': { 3: 15, 4: 60, 5: 180, name: '福字', type: 'medium' },
    'symbols/06.png': { 3: 12, 4: 45, 5: 120, name: '锦鲤', type: 'medium' },
    'symbols/07.png': { 3: 8, 4: 30, 5: 80, name: '金币', type: 'low' },
    'symbols/08.png': { 3: 18, 4: 70, 5: 200, name: '幸运7', type: 'high' },
    'symbols/09.png': { 3: 6, 4: 20, 5: 60, name: '铃铛', type: 'low' },
    'symbols/10.png': { 3: 4, 4: 15, 5: 40, name: '美元', type: 'low' },
    'symbols/11.png': { special: 'Wild - 替代任何符号', name: 'Wild', type: 'special' },
    'symbols/12.png': { special: 'Scatter - 3个触发免费旋转', name: 'Scatter', type: 'special' },
    'symbols/13.png': { special: 'Bonus - 触发奖金游戏', name: 'Bonus', type: 'special' }
};

// ==================== 中奖线配置 (40条) ====================
const WIN_LINES = [
    // 水平线
    { id: 1, positions: [1, 1, 1, 1, 1], name: '线 1', color: '#FFD700' },
    { id: 2, positions: [0, 0, 0, 0, 0], name: '线 2', color: '#FF6B6B' },
    { id: 3, positions: [2, 2, 2, 2, 2], name: '线 3', color: '#4ECDC4' },
    // V型线
    { id: 4, positions: [0, 1, 2, 1, 0], name: '线 4', color: '#45B7D1' },
    { id: 5, positions: [2, 1, 0, 1, 2], name: '线 5', color: '#96CEB4' },
    // 其他形状
    { id: 6, positions: [1, 0, 0, 0, 1], name: '线 6', color: '#E74C3C' },
    { id: 7, positions: [1, 2, 2, 2, 1], name: '线 7', color: '#9B59B6' },
    { id: 8, positions: [0, 0, 1, 2, 2], name: '线 8', color: '#F39C12' },
    { id: 9, positions: [2, 2, 1, 0, 0], name: '线 9', color: '#1ABC9C' },
    { id: 10, positions: [1, 0, 1, 2, 1], name: '线 10', color: '#E67E22' },
    // 更多线 (11-40)
    { id: 11, positions: [0, 1, 0, 1, 0], name: '线 11', color: '#FFD700' },
    { id: 12, positions: [2, 1, 2, 1, 2], name: '线 12', color: '#FF6B6B' },
    { id: 13, positions: [0, 1, 1, 1, 0], name: '线 13', color: '#4ECDC4' },
    { id: 14, positions: [2, 1, 1, 1, 2], name: '线 14', color: '#45B7D1' },
    { id: 15, positions: [0, 0, 1, 0, 0], name: '线 15', color: '#96CEB4' },
    { id: 16, positions: [2, 2, 1, 2, 2], name: '线 16', color: '#E74C3C' },
    { id: 17, positions: [1, 0, 2, 0, 1], name: '线 17', color: '#9B59B6' },
    { id: 18, positions: [1, 2, 0, 2, 1], name: '线 18', color: '#F39C12' },
    { id: 19, positions: [0, 2, 0, 2, 0], name: '线 19', color: '#1ABC9C' },
    { id: 20, positions: [2, 0, 2, 0, 2], name: '线 20', color: '#E67E22' },
    { id: 21, positions: [0, 0, 2, 0, 0], name: '线 21', color: '#FFD700' },
    { id: 22, positions: [2, 2, 0, 2, 2], name: '线 22', color: '#FF6B6B' },
    { id: 23, positions: [1, 1, 0, 1, 1], name: '线 23', color: '#4ECDC4' },
    { id: 24, positions: [1, 1, 2, 1, 1], name: '线 24', color: '#45B7D1' },
    { id: 25, positions: [0, 2, 1, 2, 0], name: '线 25', color: '#96CEB4' },
    { id: 26, positions: [2, 0, 1, 0, 2], name: '线 26', color: '#E74C3C' },
    { id: 27, positions: [0, 1, 2, 2, 2], name: '线 27', color: '#9B59B6' },
    { id: 28, positions: [2, 1, 0, 0, 0], name: '线 28', color: '#F39C12' },
    { id: 29, positions: [0, 2, 1, 0, 0], name: '线 29', color: '#1ABC9C' },
    { id: 30, positions: [2, 0, 1, 2, 2], name: '线 30', color: '#E67E22' },
    { id: 31, positions: [1, 0, 1, 0, 1], name: '线 31', color: '#FFD700' },
    { id: 32, positions: [1, 2, 1, 0, 1], name: '线 32', color: '#FF6B6B' },
    { id: 33, positions: [0, 1, 0, 1, 2], name: '线 33', color: '#4ECDC4' },
    { id: 34, positions: [2, 1, 2, 1, 0], name: '线 34', color: '#45B7D1' },
    { id: 35, positions: [0, 2, 2, 1, 0], name: '线 35', color: '#96CEB4' },
    { id: 36, positions: [2, 0, 0, 1, 2], name: '线 36', color: '#E74C3C' },
    { id: 37, positions: [1, 0, 0, 1, 2], name: '线 37', color: '#9B59B6' },
    { id: 38, positions: [1, 2, 2, 1, 0], name: '线 38', color: '#F39C12' },
    { id: 39, positions: [0, 1, 1, 2, 2], name: '线 39', color: '#1ABC9C' },
    { id: 40, positions: [2, 1, 1, 0, 0], name: '线 40', color: '#E67E22' }
];

// ==================== 全局常量 ====================
const SPECIAL_SYMBOLS = new Set(['symbols/12.png', 'symbols/13.png', 'symbols/11.png']);
const HIGH_VALUE_SYMBOLS = new Set(['symbols/01.png', 'symbols/02.png', 'symbols/03.png', 'symbols/08.png']);
const MEDIUM_VALUE_SYMBOLS = new Set(['symbols/04.png', 'symbols/05.png', 'symbols/06.png']);
const LOW_VALUE_SYMBOLS = new Set(['symbols/07.png', 'symbols/09.png', 'symbols/10.png']);

// 赔付表集合
const PAYTABLES = {
    25: PAYTABLE_25,
    40: PAYTABLE_40
};

// ==================== 虚拟玩家系统配置 ====================
const VIRTUAL_PLAYER_CONFIG = {
    enabled: true,
    minOnlinePlayers: 65,
    maxOnlinePlayers: 120,
    playerUpdateInterval: { min: 30000, max: 120000 }, // 30秒-2分钟更新在线人数
    announcementInterval: { min: 45000, max: 240000 },
    jackpotTrigger: 500000,
    virtualPlayerRTP: 35,
    
    // 虚拟玩家行为
    playerActivities: [
        "正在旋转...", "查看赔付表", "调整下注额", "切换线数", 
        "获得免费旋转", "赢得奖金", "连续中奖", "尝试最大下注"
    ],
    
    // 马来西亚风格名字组件
    nameComponents: {
        // 马来人名字
        malayFirst: [
            "Ahmad", "Mohd", "Muhammad", "Abdul", "Ali", "Hassan", "Ismail", "Osman", 
            "Rahman", "Ibrahim", "Salleh", "Halim", "Zainal", "Kamal", "Rosli", "Yusof",
            "Zulkifli", "Shamsudin", "Firdaus", "Hakim", "Razak", "Najib", "Mahathir",
            "Anwar", "Wan", "Nik", "Megat", "Tengku", "Raja", "Syed"
        ],
        malayLast: [
            "bin Abdullah", "bin Ismail", "bin Hassan", "bin Ahmad", "bin Mohamed", 
            "bin Ali", "bin Omar", "bin Ibrahim", "bin Yusof", "bin Rahman",
            "binti Abdullah", "binti Ahmad", "binti Hassan", "binti Ismail", "binti Omar"
        ],
        
        // 华人名字（马来西亚风格）
        chineseFirst: [
            "Lim", "Tan", "Lee", "Chan", "Wong", "Ng", "Teh", "Ooi", "Yap", "Chong",
            "Goh", "Khoo", "Lau", "Cheah", "Foo", "Khaw", "Loh", "Pang", "Quek", "Sim",
            "Tee", "Yong", "Zain", "Rizal", "Hakim", "Farid", "Amir", "Zul", "Shah"
        ],
        chineseLast: [
            "Seng", "Heng", "Kong", "Leong", "Peng", "Soon", "Wai", "Chuan", "Kiat",
            "Hock", "Keong", "Chin", "Meng", "Wei", "Jing", "Ling", "Ying", "Mei",
            "Hui", "Lian", "Fong", "Sim", "Ling", "Yen", "Li", "Min", "Xin", "Jun"
        ],
        
        // 印度人名字
        indianFirst: [
            "Raj", "Kumar", "Mohan", "Suresh", "Ramesh", "Anand", "Vijay", "Prakash",
            "Santosh", "Dinesh", "Harish", "Murali", "Gopal", "Arjun", "Vikram",
            "Shankar", "Bala", "Krishnan", "Mani", "Selvam", "Nathan", "Kannan"
        ],
        indianLast: [
            "a/l", "a/p", "s/o", "d/o", "Ram", "Krishna", "Sharma", "Patel", "Singh",
            "Kaur", "Devi", "Lingam", "Pillai", "Nair", "Menon", "Nadar", "Reddy"
        ],
        
        // 昵称和称号
        nicknames: [
            "Pro", "Master", "King", "Queen", "Legend", "VIP", "Dragon", "Tiger",
            "Lucky", "Rich", "Gold", "Diamond", "Platinum", "Elite", "Supreme",
            "Millionaire", "Boss", "Captain", "Chief", "Lord", "Sir", "Madam"
        ],
        numbers: ["888", "999", "777", "666", "123", "321", "100", "200", "500", "1000"]
    },
    
    // 已使用的名字集合（确保不重复）
    usedNames: new Set(),
    namePool: [],
    onlinePlayers: new Set(),
    
    // 中奖金额范围
    winAmounts: {
        small: { min: 20, max: 200 },
        medium: { min: 200, max: 800 },
        large: { min: 800, max: 5000 },
        jackpot: { min: 10000, max: 50000 }
    }
};

// ==================== 马来西亚名字生成器 ====================
VIRTUAL_PLAYER_CONFIG.generateMalaysianName = function() {
    const comp = this.nameComponents;
    let name, attempts = 0;
    
    do {
        const race = Math.random();
        if (race < 0.5) {
            // 马来人名字 (50%)
            const first = comp.malayFirst[Math.floor(Math.random() * comp.malayFirst.length)];
            const last = comp.malayLast[Math.floor(Math.random() * comp.malayLast.length)];
            name = `${first} ${last}`;
        } else if (race < 0.8) {
            // 华人名字 (30%)
            const first = comp.chineseFirst[Math.floor(Math.random() * comp.chineseFirst.length)];
            const last = comp.chineseLast[Math.floor(Math.random() * comp.chineseLast.length)];
            name = `${first} ${last}`;
        } else {
            // 印度人名字 (20%)
            const first = comp.indianFirst[Math.floor(Math.random() * comp.indianFirst.length)];
            const last = comp.indianLast[Math.floor(Math.random() * comp.indianLast.length)];
            name = `${first} ${last}`;
        }
        
        // 30%概率添加昵称
        if (Math.random() < 0.3) {
            const nickname = comp.nicknames[Math.floor(Math.random() * comp.nicknames.length)];
            const number = comp.numbers[Math.floor(Math.random() * comp.numbers.length)];
            name = `${nickname}${number}_${name}`;
        }
        
        attempts++;
        if (attempts > 50) {
            // 如果尝试50次还有重复，添加随机后缀
            name = `${name}_${Math.random().toString(36).substr(2, 3)}`;
            break;
        }
    } while (this.usedNames.has(name));
    
    this.usedNames.add(name);
    return name;
};

// ==================== 预生成玩家名字池 ====================
VIRTUAL_PLAYER_CONFIG.initializeNamePool = function(size = 200) {
    this.namePool = [];
    for (let i = 0; i < size; i++) {
        this.namePool.push(this.generateMalaysianName());
    }
    console.log(`已生成 ${size} 个马来西亚风格虚拟玩家名称`);
};

// ==================== 获取随机玩家名字 ====================
VIRTUAL_PLAYER_CONFIG.getRandomPlayerName = function() {
    if (!this.namePool || this.namePool.length === 0) {
        this.initializeNamePool();
    }
    
    if (this.namePool.length > 0) {
        const index = Math.floor(Math.random() * this.namePool.length);
        return this.namePool[index];
    }
    
    // 备用方案
    return this.generateMalaysianName();
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        GAME_CONFIG,
        RTP_CONFIG,
        PAYTABLE_25,
        PAYTABLE_40,
        WIN_LINES,
        SPECIAL_SYMBOLS,
        HIGH_VALUE_SYMBOLS,
        MEDIUM_VALUE_SYMBOLS,
        LOW_VALUE_SYMBOLS,
        PAYTABLES,
        VIRTUAL_PLAYER_CONFIG
    };
}