// All resume content. Strings are { zh, en }; anything that varies by industry
// is { tech, ai, media, startup, default }. `tracks` limits where an item shows,
// `rank` orders items per track (lower first, default 50).

export const data = {
  photos: {
    formal: { src: 'assets/img/portrait-formal.jpg', h: 900, pos: '50% 30%' },
    talk: { src: 'assets/img/portrait-talk.jpg', h: 870, pos: '50% 20%' },
  },

  order: {
    ai: {
      main: ['experience', 'projects', 'writing', 'talks', 'publications', 'education', 'awards', 'leadership'],
      side: ['skills', 'languages'],
    },
    tech: {
      main: ['experience', 'publications', 'projects', 'journalism', 'education', 'awards', 'leadership'],
      side: ['skills', 'languages'],
    },
    media: {
      main: ['experience', 'journalism', 'awards', 'writing', 'talks', 'projects', 'publications', 'education', 'leadership'],
      side: ['skills', 'languages'],
    },
    startup: {
      main: ['experience', 'projects', 'leadership', 'awards', 'talks', 'writing', 'education'],
      side: ['skills', 'publications', 'languages'],
    },
  },

  labels: {
    experience: { zh: '工作經歷', en: 'Experience' },
    projects: { zh: '專案與社群', en: 'Projects' },
    journalism: { zh: '資料新聞', en: 'Data Journalism' },
    publications: { zh: '學術發表', en: 'Publications' },
    talks: { zh: '演講', en: 'Talks' },
    writing: { zh: '專欄寫作', en: 'Writing' },
    education: { zh: '學歷', en: 'Education' },
    leadership: { zh: '領導經驗', en: 'Leadership' },
    awards: { zh: '獲獎', en: 'Awards' },
    skills: { zh: '技能', en: 'Skills' },
    languages: { zh: '語言', en: 'Languages' },
    highlights: { zh: '重點數據', en: 'Highlights' },
    more: { zh: '詳細內容', en: 'Details' },
  },

  profile: {
    name: { zh: '何家慈', en: 'Chia Tzu Ho' },
    role: {
      tech: { zh: '軟體工程師・後端與資料', en: 'Software Engineer — Backend & Data' },
      ai: { zh: '生成式 AI 工程師', en: 'Generative AI Engineer' },
      media: { zh: '媒體科技工程師・資料新聞', en: 'Newsroom Technologist & Data Journalist' },
      startup: { zh: '產品導向工程師', en: 'Product-minded Engineer' },
    },
    contact: [
      { label: 'Email', text: 'alan000322@gmail.com', href: 'mailto:alan000322@gmail.com' },
      { label: 'LinkedIn', text: 'in/chia-tzu-ho', href: 'https://www.linkedin.com/in/chia-tzu-ho-25198a181/' },
      { label: { zh: '專欄', en: 'Writing' }, text: 'vocus.cc/salon/chiatzu', href: 'https://vocus.cc/salon/chiatzu' },
      { label: 'Scholar', text: 'Google Scholar', href: 'https://scholar.google.com.tw/citations?user=suylzjkAAAAJ' },
      { label: 'GitHub', text: 'alan000322', href: 'https://github.com/alan000322' },
    ],
  },

  summary: {
    ai: {
      zh: '中央社媒體實驗室工程師，從零打造 **中央社 MCP Server** 並上架 Claude 官方 Connector Directory。生物資訊、新聞傳播、科技法律三個背景，讓我習慣把編輯室的真實需求拆成可以上線的 AI 產品——LLM、RAG、Agent，到認證、計費與部署都一手完成。',
      en: 'Engineer at the Central News Agency (CNA) Media Lab. I built **CNA’s MCP Server** from scratch and got it listed in Claude’s official Connector Directory. With a background spanning bioinformatics, journalism and tech law, I turn real newsroom needs into shipped AI products — LLMs, RAG and agents through to auth, billing and deployment.',
    },
    tech: {
      zh: '以後端與資料工程為主的工程師。在中央社用 TypeScript、Python（FastAPI）與 Elasticsearch 建置 MCP Server、搜尋與 NLP 服務，部署於 GCP。生物資訊碩士，發表第一作者期刊論文；重視清楚的規格、安全邊界，和能長期維護的程式。',
      en: 'Backend and data engineer. At CNA I build the MCP Server, search and NLP services with TypeScript, Python (FastAPI) and Elasticsearch on GCP. MS in Bioinformatics with a first-author journal paper. I care about clear specs, safe boundaries and code that stays maintainable.',
    },
    media: {
      zh: '在新聞室寫程式的人。台大新聞所、陽明交大生物資訊碩士，在中央社媒體實驗室打造編輯每天使用的 AI 工具，也讓中央社報導透過 MCP 進入 Claude、ChatGPT 等 AI 平台時，仍帶著可以查證的出處。另做資料新聞、主持 Podcast，並經營近百篇的科技專欄。',
      en: 'A developer inside the newsroom. With an MA in Journalism (NTU) and an MS in Bioinformatics (NYCU), I build the AI tools CNA editors use every day, and made sure CNA reporting keeps verifiable sources when it reaches Claude and ChatGPT through MCP. I also do data journalism, host a podcast and write a column of nearly 100 tech articles.',
    },
    startup: {
      zh: '喜歡把模糊的問題做成大家每天在用的產品。在中央社從原型一路做到上線：志明編輯助手、中央社 MCP，再到訂閱與計費；在校友總會用自動化補上人力缺口；也當過學生議會議長和社團社長。',
      en: 'I like turning fuzzy problems into products people use every day. At CNA I took ideas from prototype to production — the Jiming editor assistant, CNA’s MCP Server, then subscriptions and billing. I automated away staffing gaps for an alumni association, and led a student parliament and a social-enterprise club.',
    },
  },

  stats: {
    ai: [
      { value: '15', label: { zh: '個 MCP 工具上線', en: 'MCP tools in production' } },
      { value: '300', label: { zh: '次／日 全社 AI 工具使用', en: 'daily uses of newsroom AI tools' } },
      { value: '90%', label: { zh: '同事認為 AI 提升效率', en: 'of colleagues report higher efficiency' } },
      { value: '4', label: { zh: '大 AI 平台串接', en: 'AI platforms connected' } },
    ],
    media: [
      { value: '15', label: { zh: '個新聞 MCP 工具', en: 'news MCP tools' } },
      { value: '8', label: { zh: '項編輯室 AI 功能', en: 'newsroom AI features' } },
      { value: '4', label: { zh: '篇資料新聞專題', en: 'data stories' } },
      { value: { zh: '近百', en: '~100' }, label: { zh: '篇科技專欄', en: 'column articles' } },
    ],
    startup: [
      { value: '0→1', label: { zh: '從原型到付費上線', en: 'prototype to paid product' } },
      { value: '15', label: { zh: '個 MCP 工具', en: 'MCP tools shipped' } },
      { value: '300', label: { zh: '次／日 內部使用', en: 'daily internal uses' } },
      { value: '3', label: { zh: '個跨域背景', en: 'disciplines combined' } },
    ],
    default: null,
  },

  marquee: {
    default: ['MCP', 'AI Agents', 'RAG', 'Newsroom AI', '0 → 1', 'Data Journalism', 'Podcast', 'Bioinformatics', 'Tech Law'],
  },

  experience: [
    {
      title: {
        tech: { zh: '工程師', en: 'Software Engineer' },
        ai: { zh: '工程師（生成式 AI）', en: 'Engineer, Generative AI' },
        media: { zh: '工程師（媒體實驗室）', en: 'Engineer, Media Lab' },
        startup: { zh: '工程師（生成式 AI 產品）', en: 'Engineer, AI Products' },
      },
      org: { zh: '中央通訊社　資訊暨創新中心・媒體實驗室', en: 'Central News Agency (CNA) — Media Lab' },
      period: { zh: '2024.07 — 至今', en: '2024.07 — Present' },
      note: { zh: '2026.01 起為正職工程師（2024.07–2025.12 為特約工程師）', en: 'Full-time since 2026.01; contract engineer 2024.07–2025.12' },
      rank: { default: 0 },
      bullets: [
        {
          zh: '從零打造並主導 **中央社 MCP Server**：開放新聞、圖庫、譯名與事實查核等 15 個工具，2026.08 上架 Claude 官方 Connector Directory，並支援 ChatGPT、Gemini、Grok。',
          href: 'work/cna-mcp/',
          en: 'Built and led **CNA’s MCP Server** from scratch: 15 tools across news, photos, name translation and fact-checking; listed in Claude’s official Connector Directory (2026.08), with ChatGPT, Gemini and Grok support.',
        },
        {
          tracks: ['tech', 'ai'],
          zh: 'TypeScript + MCP SDK，OAuth 2.1 / PKCE 認證；Elasticsearch 搭配 Voyage rerank 做檢索，部署於 Cloud Run、Cloud SQL，以規格驅動開發管理 35 份規格。',
          en: 'TypeScript + MCP SDK with OAuth 2.1 / PKCE; Elasticsearch retrieval with Voyage rerank; deployed on Cloud Run and Cloud SQL, with 35 specs managed through spec-driven development.',
        },
        {
          tracks: ['media', 'ai', 'startup'],
          zh: '設計 MCP Apps（時間軸、懶人包、知識圖譜、報紙頭版）與三段式事實查核流程，讓 AI 的回答附上可驗證的中央社出處。',
          href: 'work/cna-mcp/',
          en: 'Designed MCP Apps (timeline, brief, knowledge graph, front page) and a three-step fact-check flow so AI answers carry verifiable CNA sources.',
        },
        {
          tracks: ['startup', 'ai', 'tech'],
          zh: '打通 MCP 商業化：跨系統 IdP 登入、訂閱 + credit 計費、金流串接與試用、團隊方案。',
          en: 'Shipped MCP monetization end to end: cross-system IdP sign-in, subscription + credit billing, payments, trials and team plans.',
        },
        {
          zh: '開發「**志明**」編輯室 AI 助手 Chrome 擴充功能（錯字、下標、翻譯、配圖等 8 項功能）與配額代理伺服器；全社每日近 300 次使用，逾 90% 同事認為有助提升效率。',
          href: 'work/newsroom-ai/',
          en: 'Developed **Jiming**, CNA’s newsroom AI Chrome extension (8 features incl. typo check, headlines, translation, photo matching) and its quota proxy; ~300 uses a day, with 90%+ of colleagues reporting higher efficiency.',
        },
        {
          tracks: ['media', 'ai', 'startup'],
          zh: '影音 AI：影片轉 SOT 稿系統、中央社短影音製作 Claude Code plugin、外電自動剪輯 PoC。',
          href: 'work/newsroom-ai/',
          en: 'Video AI: a video-to-SOT script drafter, a Claude Code plugin for CNA short-form video, and an auto-editing PoC for wire footage.',
        },
        {
          tracks: ['tech', 'ai', 'media'],
          zh: '建置斷詞、關鍵字與 NER 服務，以及配圖、影片推薦系統（GPT-4o Vision + Elasticsearch）。',
          href: 'work/newsroom-ai/',
          en: 'Built word-segmentation, keyword and NER services, plus photo and video recommendation (GPT-4o Vision + Elasticsearch).',
        },
        {
          tracks: ['media', 'tech'],
          zh: '參與數位專題：12 強棒球數據分析；選舉即時開票與中選會 API 串接。',
          href: 'work/data-journalism/',
          en: 'Digital features: baseball data analysis for the Premier12; live election results via the Central Election Commission API.',
        },
        {
          tracks: ['startup', 'ai'],
          zh: '擔任產品推進者：訪談編輯釐清需求、拆解功能，從原型到部署一手完成。',
          en: 'Acted as product driver: interviewed editors, broke needs into features, and carried them from prototype to deployment.',
        },
      ],
      tags: {
        tech: ['TypeScript', 'Python', 'FastAPI', 'Elasticsearch', 'GCP', 'OAuth 2.1'],
        ai: ['MCP', 'RAG', 'Agents', 'OpenAI · Claude · Gemini API', 'Elasticsearch', 'FastAPI'],
        media: ['MCP', 'Fact-check', 'Newsroom tools', 'Video AI'],
        startup: ['0 → 1', 'MCP', 'Billing', 'Chrome Extension'],
      },
    },
    {
      title: { zh: '兼任研究助理', en: 'Research Assistant' },
      org: { zh: '國立陽明交通大學　賴至慧老師', en: 'National Yang Ming Chiao Tung University — Prof. Chih-Hui Lai' },
      period: '2022.05 — 2024.09',
      note: { zh: '2023.12–2024.05 服替代役暫停', en: 'Paused 2023.12–2024.05 for alternative military service' },
      rank: { default: 10, media: 20 },
      tracks: ['tech', 'ai', 'media'],
      bullets: [
        { zh: '以爬蟲蒐集社群平台資料，用 Python 清理大型資料集。', en: 'Collected social media data with crawlers and cleaned large datasets in Python.' },
        { zh: '以 BERT 模型自動分類臉書貼文，供網絡分析使用。', en: 'Classified Facebook posts with BERT for network analysis.' },
      ],
    },
    {
      title: { zh: '兼任研究助理', en: 'Research Assistant' },
      org: { zh: '國立臺灣大學　劉好迪老師（Adrian Rauchfleisch）', en: 'National Taiwan University — Prof. Adrian Rauchfleisch' },
      period: '2022.05 — 2023.12',
      rank: { default: 20, media: 10 },
      tracks: ['tech', 'ai', 'media'],
      bullets: [
        { zh: '臺灣臉書科學傳播文本分析，成果發表於 Media and Communication（2023）。', en: 'Text analysis of science communication on Facebook in Taiwan, published in Media and Communication (2023).' },
      ],
    },
    {
      title: { zh: '研究助理・教學助教', en: 'Research & Teaching Assistant' },
      org: { zh: '國立陽明交通大學、國立臺灣大學', en: 'NYCU & National Taiwan University' },
      period: '2018 — 2024',
      rank: { default: 20 },
      tracks: ['startup'],
      bullets: [
        { zh: '以 BERT 分類臉書貼文、分析臺灣科學傳播；帶領助教團隊教授 Python、PHP、Golang。', en: 'Classified Facebook posts with BERT and studied science communication; led a TA team teaching Python, PHP and Go.' },
      ],
    },
    {
      title: { zh: '教學助教', en: 'Teaching Assistant' },
      org: { zh: '國立陽明交通大學　生物科技學系、外國語文學系', en: 'NYCU — Biological Science & Technology; Foreign Languages' },
      period: '2018 — 2021',
      rank: { default: 30 },
      tracks: ['tech', 'ai', 'media'],
      bullets: [
        { zh: '「程式設計」「生物資訊程式設計」「計算機概論」助教，帶領助教團隊協助 Python、PHP、Golang 教學。', en: 'TA for Programming, Bioinformatics Programming and Intro to Computer Science; led the TA team for Python, PHP and Go.' },
      ],
    },
    {
      title: { zh: '行政助理', en: 'Administrative Assistant' },
      org: { zh: '國立交通大學　科技法律學院', en: 'NCTU — School of Law' },
      period: '2020 — 2021',
      rank: { default: 40 },
      tracks: ['media', 'startup'],
      bullets: [
        { zh: '協辦《陽明交大 × 理律學堂》講座與科技法律跨領域寒假營隊。', en: 'Co-organised the NYCU × Lee and Li lecture series and an interdisciplinary tech-law winter camp.' },
      ],
    },
  ],

  projects: [
    {
      title: { zh: '陽明交大校友總會　流程自動化', en: 'NYCU Alumni Association — Automation' },
      href: 'posts/2024-10-03-claude-receipe/',
      period: { zh: '2024 — 至今', en: '2024 — Present' },
      rank: { default: 0 },
      bullets: [
        { zh: '為新成立、人力有限的校友總會建置自動開立收據、自動寄信與 LINE 快速回覆系統。', en: 'Built automatic receipts, email and LINE quick replies for a newly founded, short-staffed alumni association.' },
      ],
    },
    {
      title: { zh: 'Podcast《難得狐途》主持', en: 'Host, “Nan De Hu Tu” Podcast' },
      period: '2024 — 2025',
      rank: { default: 20, media: 0, startup: 10 },
      bullets: [
        { zh: '陽明交大校友總會職涯訪談節目：主持、平台上架與部分剪輯。', en: 'Career-interview show for the NYCU Alumni Association: hosting, publishing and some editing.' },
      ],
    },
    {
      title: { zh: 'LINE 防疫照護聊天機器人', en: 'LINE COVID-Care Chatbot' },
      href: 'posts/2022-06-23-line-bot-covid/',
      org: { zh: '陽明交大防疫志工團隊', en: 'NYCU COVID volunteer team' },
      period: '2022',
      rank: { default: 10 },
      bullets: [
        { zh: '與學校衛保組合作，建置疫調關懷系統、LINE 照護聊天機器人與一對一關懷流程。', en: 'Worked with the campus health office to build a case-care system, a LINE chatbot and one-to-one follow-up.' },
      ],
    },
    {
      title: { zh: '裁判書查詢 Chrome 擴充功能', en: 'Court-Ruling Lookup Chrome Extension' },
      period: '2022',
      rank: { default: 30 },
      tracks: ['tech', 'ai'],
      bullets: [
        { zh: '結合法律背景，製作查詢裁判書與聊天機器人的 Chrome 擴充功能。', en: 'Combined a legal background with code to build Chrome extensions for court-ruling lookup and chat.' },
      ],
    },
  ],

  journalism: [
    { title: { zh: '《棒球 12 強特別報導：火球投手暴增》', en: 'Premier12 special: the rise of the fireball pitcher' }, meta: { zh: '中央社｜主責「遺珠」章節球速與球種分析', en: 'CNA · led the pitch speed & type analysis chapter' }, period: '2024', href: 'https://www.cna.com.tw/project/20241113-fireball/index.html' },
    { title: { zh: '《莫要獨留青塚向黃昏：南山公墓墓葬群保存困境與展望》', en: 'Nanshan Cemetery: preserving a historic burial ground' }, meta: { zh: '網頁敘事與前端製作｜第七屆全球華文永續報導獎 學生組融媒體類優等獎', en: 'Interactive build · Merit Award, Student Multimedia, 7th Global Chinese Sustainability Journalism Awards' }, period: '2023', href: 'https://alan000322.github.io/cemetery_story/' },
    { title: { zh: '《為何個資外洩始終不減？》', en: 'Why Personal-Data Leaks Keep Happening' }, meta: { zh: '報導者｜主責資料處理與視覺化，共同採訪寫作（R、Python）', en: 'The Reporter · led data and visuals, co-reported (R, Python)' }, period: '2023', href: 'https://www.twreporter.org/a/personal-data-leaked-e-commerce' },
    { title: { zh: '《數據看棒球經典賽》', en: 'The World Baseball Classic in Data' }, meta: { zh: 'Baseball Savant、Flourish', en: 'Baseball Savant, Flourish' }, period: '2023', href: 'posts/2023-03-14-wbc-poola/' },
    { title: { zh: '《台灣觀眾 Netflix 觀劇全解析》', en: 'What Taiwan Watches on Netflix' }, meta: { zh: '爬取排行資料，R 分析與互動網頁', en: 'Scraped rankings, R analysis, interactive page' }, period: '2022', href: 'https://alan000322.github.io/KoreaDrama-TaiwanNetflixAnalysis/' },
    { title: { zh: '**全部作品與資料分析文章**', en: '**All work and data posts**' }, href: 'work/data-journalism/' },
  ],

  publications: [
    {
      title: { zh: '**Ho, C. T.**, et al. Discovering the Ultimate Limits of Protein Secondary Structure Prediction. Biomolecules, 11(11), 1627.', en: '**Ho, C. T.**, et al. Discovering the Ultimate Limits of Protein Secondary Structure Prediction. Biomolecules, 11(11), 1627.' },
      meta: { zh: '第一作者', en: 'First author' },
      period: '2021',
      href: 'https://doi.org/10.3390/biom11111627',
    },
    {
      title: { zh: 'Rauchfleisch, A., Kao, J. J., Tseng, T. H., **Ho, C. T.**, & Li, L. Y. Maximizing Science Outreach on Facebook. Media and Communication, 11(1).', en: 'Rauchfleisch, A., Kao, J. J., Tseng, T. H., **Ho, C. T.**, & Li, L. Y. Maximizing Science Outreach on Facebook. Media and Communication, 11(1).' },
      period: '2023',
      href: 'https://scholar.google.com.tw/citations?user=suylzjkAAAAJ',
    },
  ],

  talks: [
    {
      title: { zh: '走進中央社 MCP 開發歷程', en: 'Inside the Making of CNA’s MCP Server' },
      meta: { zh: 'A Newsroom 演講', en: 'A Newsroom talk' },
      period: '2026.09',
      href: 'https://h-chiatzu.github.io/presentations/0923-cna-mcp/',
    },
  ],

  writing: [
    {
      title: { zh: '資料新聞與科技應用文章精選', en: 'Selected data & tech posts' },
      meta: { zh: '舊部落格 18 篇：資料分析、專題幕後、工具實作', en: '18 posts from my old blog (in Chinese)' },
      period: '2022 — 2024',
      rank: { default: 60, media: 5 },
      href: 'posts/',
    },
    {
      title: { zh: '方格子沙龍「CT｜何家慈」', en: '“CT | Chia Tzu Ho” column on vocus' },
      meta: { zh: '近百篇 AI 開發、資料新聞與數位工具文章', en: 'Nearly 100 articles on AI development, data journalism and tools (in Chinese)' },
      period: { zh: '2022 — 至今', en: '2022 — Present' },
      href: 'https://vocus.cc/salon/chiatzu',
    },
    {
      title: { zh: '以開發者角度看「中央社 MCP」', en: 'CNA’s MCP, from the Developer’s Side' },
      period: '2026.09',
      href: 'https://vocus.cc/salon/chiatzu',
    },
    {
      title: { zh: '新聞可以不要 AI 做圖、做影片嗎？', en: 'Can Newsrooms Say No to AI Images and Video?' },
      period: '2026.07',
      tracks: ['media', 'startup'],
      href: 'https://vocus.cc/salon/chiatzu',
    },
    {
      title: { zh: 'Claude Code 開發團隊 Boris Cherny 親授：十大 AI 寫程式心法', en: 'Ten AI Coding Lessons from Claude Code’s Boris Cherny' },
      period: '2026.02',
      tracks: ['ai', 'tech', 'startup'],
      href: 'https://vocus.cc/salon/chiatzu',
    },
  ],

  education: [
    {
      title: { zh: '新聞研究所　碩士', en: 'M.A. in Journalism' },
      org: { zh: '國立臺灣大學', en: 'National Taiwan University' },
      period: '2021.09 — 2026.08',
      rank: { default: 0 },
      note: { zh: '論文：醫師亦是網紅？以大型語言模型輔助之台灣醫師 Facebook 貼文內容分析', en: 'Thesis: Doctors as influencers? An LLM-assisted content analysis of Taiwanese physicians’ Facebook posts' },
    },
    {
      title: { zh: '生物資訊及系統生物研究所　碩士', en: 'M.S. in Bioinformatics and Systems Biology' },
      org: { zh: '國立陽明交通大學', en: 'National Yang Ming Chiao Tung University' },
      period: '2021.09 — 2022.10',
      rank: { default: 10 },
      note: { zh: '論文：以大數據分析估計蛋白質二級結構預測上限', en: 'Thesis: Estimating the limits of protein secondary structure prediction by big-data analysis' },
    },
    {
      title: { zh: '生物科技學系　學士', en: 'B.S. in Biological Science and Technology' },
      org: { zh: '國立陽明交通大學', en: 'National Yang Ming Chiao Tung University' },
      period: '2017.09 — 2021.08',
      rank: { default: 20 },
      note: { zh: '跨域學程：科技法律（智慧財產權法）', en: 'Cross-disciplinary program: Intellectual Property Law' },
    },
  ],

  awards: [
    {
      title: { zh: '第七屆全球華文永續報導獎　學生組融媒體類優等獎', en: 'Merit Award, Student Multimedia — 7th Global Chinese Sustainability Journalism Awards' },
      meta: { zh: 'TVBS 信望愛永續基金會｜《莫要獨留青塚向黃昏》', en: 'TVBS Foundation · “Nanshan Cemetery” interactive story' },
      period: '2023',
      href: 'https://news.tvbs.com.tw/life/2273681',
    },
    {
      title: { zh: '國立陽明交通大學　傑出貢獻獎', en: 'NYCU Outstanding Contribution Award' },
      meta: { zh: '生物資訊及系統生物研究所', en: 'Institute of Bioinformatics and Systems Biology' },
    },
  ],

  leadership: [
    { title: { zh: '議長', en: 'Speaker' }, meta: { zh: '國立陽明交通大學學生會　交通分會學生議會', en: 'NYCU Student Parliament (Chiao Tung campus)' } },
    { title: { zh: '社長', en: 'President' }, meta: { zh: '國立陽明交通大學　社會企業創思社', en: 'NYCU Social Enterprise Club' } },
    { title: { zh: '副社長', en: 'Vice President' }, meta: { zh: '臺北市立成功高級中學　青年社', en: 'Youth Club, Taipei Municipal Chenggong High School' } },
  ],

  skills: [
    {
      group: { zh: 'AI 與 LLM', en: 'AI & LLM' },
      items: {
        ai: ['MCP', 'RAG', 'Agents', 'OpenAI Agents SDK', 'Claude Agent SDK', 'Google ADK', 'Prompt Engineering', 'Multimodal', 'LLM Evaluation'],
        tech: ['LLM APIs', 'RAG', 'MCP', 'BERT', 'NER'],
        media: ['MCP', 'RAG', 'LLM 內容分析', 'Fact-check workflows'],
        startup: ['MCP', 'RAG', 'Agents', 'AI coding'],
      },
    },
    {
      group: { zh: '後端與資料', en: 'Backend & Data' },
      items: {
        default: ['Python', 'FastAPI', 'TypeScript', 'Elasticsearch', 'MySQL', 'Redis'],
        media: ['Python', 'R', 'FastAPI', 'Elasticsearch', { zh: '爬蟲', en: 'Web scraping' }],
      },
    },
    {
      group: { zh: '雲端與部署', en: 'Cloud & Ops' },
      tracks: ['tech', 'ai'],
      items: { default: ['GCP', 'Cloud Run', 'Cloud SQL', 'Cloud Functions', 'Firebase', 'Docker', 'Linux'] },
    },
    {
      group: { zh: '前端', en: 'Frontend' },
      tracks: ['tech', 'ai', 'startup'],
      items: { default: ['React', 'Vue 3', 'JavaScript', 'Chrome Extension', 'HTML / CSS'] },
    },
    {
      group: { zh: '資料新聞與製作', en: 'Journalism & Production' },
      tracks: ['media', 'startup'],
      items: { default: ['R', 'Flourish', { zh: '採訪寫作', en: 'Reporting' }, { zh: 'Podcast 主持', en: 'Podcast hosting' }, 'InDesign'] },
    },
    {
      group: { zh: '產品', en: 'Product' },
      tracks: ['startup', 'ai'],
      items: { default: [{ zh: '需求訪談', en: 'User interviews' }, { zh: '功能拆解', en: 'Scoping' }, { zh: '原型到上線', en: 'Prototype → production' }, { zh: '訂閱與計費', en: 'Subscriptions & billing' }] },
    },
  ],

  languages: [
    { title: { zh: '中文', en: 'Mandarin Chinese' }, meta: { zh: '母語', en: 'Native' } },
    { title: { zh: '英文', en: 'English' }, meta: 'TOEIC 835' },
  ],
};
