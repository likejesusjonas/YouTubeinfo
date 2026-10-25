import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Youtube,
  Sparkles,
  Copy,
  Check,
  Download,
  Share2,
  Key,
  Layers,
  MessageSquare,
  Bookmark,
  Quote,
  Lightbulb,
  FileText,
  Clock,
  Play,
  Settings,
  ChevronRight,
  RefreshCw,
  Search,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

// Sample pre-loaded sermons for immediate testing without API calls
const SAMPLE_SERMONS = [
  {
    id: "sample-1",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "절망의 끝에서 소망을 말하다",
    scripture: "사사기 6장 11-16절",
    speaker: "조나스 목사",
    date: "2026-10-18",
    duration: "34:20",
    exegeticalIdea: "상황 속에서 미디안 사람들의 압제에 숨어 타작하며 스스로 초라하게 여겼던 기드온을 하나님이 찾아오셔서 이스라엘의 구원자로 부르시고 동행을 약속하신다.",
    homileticalIdea: "자신의 한계와 절망의 현실을 넘어, 나와 함께하시는 하나님을 바라보고 믿음으로 일어서라.",
    summary: "본 설교는 불평과 절망을 묵상하는 데 익숙한 이 시대 속에서, 하나님의 시선으로 소망을 선포해야 함을 강력히 도전합니다. 미디안을 피해 포도즙 틀에 숨어 밀을 타작하던 기드온에게 나타나 '큰 용사여'라고 부르시는 하나님의 사건을 통해, 우리의 자격이나 환경이 아닌 '하나님의 동행'이 희망의 근거임을 선포합니다.",
    structure: {
      intro: {
        title: "Intro. 절망을 분석하는 세상 속, 소망을 선포하는 사람",
        content: "현대인들은 세상의 문제와 부조리를 분석하고 부정적인 뉴스에 댓글을 달며 절망을 묵상하는 데 익숙합니다. 그러나 하나님은 창조 때부터 현실의 결핍이 아닌 그 속에 담길 생명과 소망을 보셨습니다('보시기 좋았더라'). 그리스도인은 절망의 이유를 찾는 사람이 아니라, 하나님의 시선으로 절망 속에서 소망을 선포하는 사람입니다."
      },
      points: [
        {
          number: "Part 1",
          title: "오늘의 절망을 내일의 소망으로 바라보라",
          scriptureRef: "사사기 6:13",
          explanation: "기드온은 '하나님이 함께하시면 왜 이런 일이 일어납니까? 기적은 어디 있습니까?'라며 과거에 매여 현재를 한탄했습니다. 기드온의 계산에는 강력한 미디안 군대와 무력한 자신만 있었고 하나님이 빠져 있었습니다.",
          application: "믿음이란 우리의 부정적인 계산과 분석 속에 '하나님'이라는 변수를 포함시키는 것입니다. 상황과 한계만 보며 안 된다고 결론짓지 말고, 절망을 소망으로 바꾸실 하나님의 역사를 기대하십시오."
        },
        {
          number: "Part 2",
          title: "기적을 찾는 인생이 아니라 기적이 되는 인생을 살아가라",
          scriptureRef: "사사기 6:13-14",
          explanation: "기드온은 조상들의 옛 기적만 찾아 헤매며 관객의 자리에 머물고자 했습니다. 그러나 하나님은 '네가 가서 이스라엘을 구원하라'며 그를 기적의 현장 주체로 부르셨습니다.",
          application: "'하나님이 나에게 무엇을 해주실까?'라는 수동적 질문에서 '하나님이 나를 통해 무엇을 이루실까?'라는 사명적 질문으로 전환하십시오. 구경꾼이 아닌 기적의 통로가 되어야 합니다."
        },
        {
          number: "Part 3",
          title: "나의 능력이 아니라 하나님을 신뢰하라",
          scriptureRef: "사사기 6:15-16",
          explanation: "기드온은 '내 집안은 가장 약하고 나는 가장 어린 자'라며 거절감과 한계를 이유로 도망치려 했습니다. 하지만 하나님은 능력이나 군대를 약속하신 것이 아니라 '내가 너와 함께하겠다'는 임마누엘의 약속을 주셨습니다.",
          application: "하나님의 사람을 강하게 만드는 것은 나의 탁월함이 아니라 하나님의 '동행'입니다. 거절감과 능력의 한계 뒤에 숨지 말고, 나와 함께하시는 여호와를 의지해 담대히 순종의 발걸음을 내딛으십시오."
        }
      ],
      conclusion: {
        title: "Conclusion. 소망을 선포하는 믿음의 용사로 일어서라",
        content: "세상이 절망을 노래할 때 성도는 소망을 말해야 합니다. 나의 약함이나 절망적인 현실에 갇히지 말고, '용맹스러운 용사여, 여호와께서 너와 함께하신다!'라는 주님의 음성을 들으십시오. 하나님을 보고 일어나 세상을 변화시키는 소망의 통로가 되기를 축원합니다."
      }
    },
    keyQuotes: [
      "절망을 분석하는 데 익숙해질수록, 정작 소망을 바라보는 능력과 소망을 이야기하는 사람은 사라져 갑니다.",
      "믿음이란 현실을 부정하는 것이 아니라, 우리의 모든 계산에 '하나님'이라는 변수를 포함시키는 것입니다.",
      "기적을 바라보는 관객의 자리에서 내려와, 하나님의 손에 붙들려 기적의 통로가 되는 인생을 사십시오.",
      "하나님의 사람을 진정 강하게 만드는 것은 인간의 능력이나 스펙이 아니라, 하나님의 '동행'입니다."
    ],
    gbsQuestions: [
      {
        q: "1. 최근 내 삶이나 사회를 보며 '절망을 깊이 묵상하고 불평'했던 영역은 무엇이며, 하나님의 시선으로 다시 바라봐야 할 소망의 자리는 어디인가요?",
        type: "나눔 및 적용"
      },
      {
        q: "2. 기드온은 과거의 기적을 찾으며 불평했지만(13절), 하나님은 그를 기적의 주인공으로 보내셨습니다(14절). 내 삶에서 단순한 '기도 응답의 관객'에서 '사명에 순종하는 주체'로 변화되어야 할 부분은 무엇입니까?",
        type: "본문 묵상"
      },
      {
        q: "3. 부르심이나 사명 앞에서 '나는 부족하고 어리다'며 주저했던 경험이 있다면 나누어 보고, '내가 너와 함께하겠다' 하신 하나님의 약속을 어떻게 실천적으로 붙잡을지 결단해 봅시다.",
        type: "결단 및 기도"
      }
    ]
  },
  {
    id: "sample-2",
    youtubeUrl: "https://www.youtube.com/watch?v=sermon-sample-2",
    title: "풍랑 속에서 배우는 진짜 믿음",
    scripture: "마가복음 4장 35-41절",
    speaker: "김은혜 목사",
    date: "2026-10-11",
    duration: "28:45",
    exegeticalIdea: "예수께서 제자들과 함께 배를 타고 갈릴리 바다를 건너실 때 불어닥친 광풍 속에서, 자고 계신 주님을 깨우며 두려워하는 제자들의 믿음 없음을 책망하시고 바람과 바다를 평정하심으로 권능의 주님이심을 나타내신다.",
    homileticalIdea: "인생의 갑작스러운 풍랑 앞에서도 고물에서 우리와 함께 계시는 예수 그리스도의 주권을 신뢰함으로 거룩한 평안을 누리라.",
    summary: "예수님의 말씀에 순종하여 배를 타고 가도 예상치 못한 고난의 풍랑을 만날 수 있습니다. 본 설교는 풍랑 자체보다 '내 배에 누가 함께 타고 계신가'에 집중하게 합니다. 두려움에 빠져 주님을 원망했던 제자들의 모습을 통해 우리 안의 '지식적 믿음'을 점검하고, 온 우주를 통치하시는 주님의 인격과 권능을 온전히 신뢰하도록 인도합니다.",
    structure: {
      intro: {
        title: "Intro. 순종의 길에도 풍랑은 찾아온다",
        content: "많은 그리스도인들이 말씀대로 살고 순종하면 인생에 아무런 문제나 풍랑이 없을 것이라고 오해합니다. 하지만 제자들은 예수님의 말씀에 순종하여 저편으로 건너가던 중 광풍을 만났습니다. 고난은 하나님을 거역했을 때만 오는 것이 아니며, 때로는 하나님의 더 깊은 은혜와 오만을 깨트리기 위한 훈련의 과정입니다."
      },
      points: [
        {
          number: "Part 1",
          title: "풍랑의 크기보다 주님의 존재에 집중하라",
          scriptureRef: "막 4:37-38",
          explanation: "제자들은 배에 물이 채워지는 절망적인 상황 속에서 고물에서 베개를 베고 주무시는 예수님을 향해 '우리가 죽게 된 것을 돌보지 아니하시나이까'라고 원망했습니다. 그들은 풍랑만 바라보고 그 배에 온 우주의 주인이신 주님이 함께 계심을 잊었습니다.",
          application: "우리의 눈이 고난의 문제에만 고정되면 하나님마저 나를 버리셨다는 착각에 빠집니다. 나의 인생이라는 배에 주님이 함께 타고 계심을 순간마다 기억하십시오."
        },
        {
          number: "Part 2",
          title: "두려움을 이기는 힘은 오직 참된 신뢰이다",
          scriptureRef: "막 4:39-40",
          explanation: "예수님은 바람을 꾸짖으시고 바다를 잔잔케 하신 후 제자들에게 '어찌하여 이렇게 무서워하느냐 너희가 어찌 믿음이 없느냐'라고 물으셨습니다. 주님이 원하신 믿음은 문제의 부재가 아니라, 주님을 향한 인격적 신뢰였습니다.",
          application: "지식으로만 아는 믿음은 풍랑이 오면 무너집니다. 어떠한 풍랑 속에서도 나를 이끄시는 주님의 선하심을 의심하지 않는 불멸의 신뢰를 소유해야 합니다."
        }
      ],
      conclusion: {
        title: "Conclusion. 평안함으로 세상을 명하라",
        content: "바람과 바다도 순종하게 하시는 만유의 주님이 바로 우리의 구원자이십니다. 인생의 거센 풍랑 속에서도 주님의 평안이 우리의 마음을 지키도록 기도합시다. 주님이 함께하시면 아무리 깊은 바다도 결코 우리를 침몰시킬 수 없습니다."
      }
    },
    keyQuotes: [
      "예수님의 말씀에 순종하여 가는 길에도 풍랑은 불어올 수 있습니다.",
      "풍랑의 소리에 집중하지 말고, 내 배 고물에 함께 계시는 주님의 존재에 집중하십시오.",
      "믿음의 반대말은 불신앙이 아니라, 주님보다 상황을 더 크게 보는 '두려움'입니다."
    ],
    gbsQuestions: [
      {
        q: "1. 순종하며 살아가려 애씀에도 불구하고 근래 내 삶에 불어닥친 인생의 '풍랑'은 무엇입니까?",
        type: "상황 공유"
      },
      {
        q: "2. 제자들처럼 고난 중에 '하나님이 나를 안 돌아보시는가'라는 원망이나 두려움이 밀려왔던 순간을 함께 나누어봅시다.",
        type: "본문 묵상"
      },
      {
        q: "3. 인생의 풍랑을 잠잠케 하시는 주님의 통치와 권능을 내 삶에서 실천적으로 경험하기 위해 이번 주 시도할 기도의 행동은 무엇인가요?",
        type: "적용 및 결단"
      }
    ]
  }
];

export default function App() {
  const [apiKey, setApiKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [youtubeInput, setYoutubeInput] = useState('');
  const [rawTranscript, setRawTranscript] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('summary'); // 'summary', 'structure', 'gbs', 'quotes', 'raw'
  const [copiedSection, setCopiedSection] = useState('');
  
  // Current analysis state initialized with sample data
  const [currentSermon, setCurrentSermon] = useState(SAMPLE_SERMONS[0]);
  const [statusMessage, setStatusMessage] = useState('');

  // Extract YouTube ID helper
  const extractVideoId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : (url.length === 11 ? url : null);
  };

  // Load sample sermon
  const handleSelectSample = (sample) => {
    setCurrentSermon(sample);
    setYoutubeInput(sample.youtubeUrl);
    setRawTranscript('');
    setStatusMessage(`예시 설교 [${sample.title}]가 불러와졌습니다.`);
    setTimeout(() => setStatusMessage(''), 3000);
  };

  // Call Gemini API to generate sermon analysis
  const handleAnalyzeSermon = async () => {
    if (!youtubeInput && !rawTranscript) {
      alert('YouTube URL 또는 설교 텍스트(녹취록/노트)를 입력해 주세요.');
      return;
    }

    setIsLoading(true);
    setStatusMessage('Gemini AI가 설교 내용을 분석 및 강해적으로 구조화하는 중입니다...');

    const promptText = `
다음은 설교 영상 정보 또는 설교 녹취록/텍스트입니다.
[입력 정보]: ${youtubeInput || '텍스트 직접 입력'}
[설교 내용/텍스트/주제]:
${rawTranscript || youtubeInput}

이 설교 내용을 분석하여 복음주의적 강해 설교 및 목회적 관점에 맞춰 아래의 JSON 형식으로 상세히 요약 및 구조화해 주세요. 
응답은 오직 유효한 JSON 형식만을 반환해야 하며, 마크다운 코드블록 이외의 추가 설명 문장은 포함하지 마세요.

JSON 구조 형식:
{
  "title": "설교 제목 (상황과 복음이 드러나는 명확한 제목)",
  "scripture": "본문 성경 구절 (예: 사사기 6장 11-16절)",
  "speaker": "설교자 이름 (알 수 없는 경우 '설교자'로 표기)",
  "date": "${new Date().toISOString().split('T')[0]}",
  "duration": "30:00",
  "exegeticalIdea": "석의적 핵심 명제 (Exegetical Idea: 본문 저자가 당시 수신자에게 전달하고자 한 핵심 메시지 1-2문장)",
  "homileticalIdea": "설교적 핵심 명제 (Homiletical Idea: 오늘날 회중에게 선포하는 단 하나의 강력한 메시지 1문장)",
  "summary": "설교 전체 내용을 3-4문장으로 요약한 핵심 패러그래프",
  "structure": {
    "intro": {
      "title": "Intro. 서론 제목",
      "content": "현대적 맥락 및 회중의 문제의식 유발, 본문과의 연결 내용 요약"
    },
    "points": [
      {
        "number": "Part 1",
        "title": "대지 1 제목",
        "scriptureRef": "본문 구절 참조",
        "explanation": "본문 석의 및 설교자의 해석 설명",
        "application": "회중의 삶과 사역에 적용할 실천적 메시지"
      },
      {
        "number": "Part 2",
        "title": "대지 2 제목",
        "scriptureRef": "본문 구절 참조",
        "explanation": "본문 석의 및 설교자의 해석 설명",
        "application": "회중의 삶과 사역에 적용할 실천적 메시지"
      }
    ],
    "conclusion": {
      "title": "Conclusion. 결론 및 결단",
      "content": "메시지의 종합, 십자가/복음적 소망 선포 및 최종 도전"
    }
  },
  "keyQuotes": [
    "설교 중 회중의 마음에 울림을 주는 핵심 명언/어록 1",
    "핵심 어록 2",
    "핵심 어록 3"
  ],
  "gbsQuestions": [
    {
      "q": "1. 소그룹 나눔 질문 (아이스브레이킹 / 삶의 경험 공유)",
      "type": "상황 공유"
    },
    {
      "q": "2. 소그룹 나눔 질문 (본문 및 설교 핵심 묵상 깊이 살피기)",
      "type": "본문 묵상"
    },
    {
      "q": "3. 소그룹 나눔 질문 (이번 주 삶에서의 실천적 결단 및 기도제목)",
      "type": "적용 및 결단"
    }
  ]
}
`;

    try {
      // Use standard Gemini endpoint with API Key if provided, else rely on runtime empty-key
      const effectiveKey = apiKey ? apiKey.trim() : '';
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${effectiveKey}`;

      const payload = {
        contents: [
          {
            role: 'user',
            parts: [{ text: promptText }]
          }
        ],
        generationConfig: {
          responseMimeType: "application/json"
        }
      };

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error(`API 호출 실패 (상태 코드: ${res.status})`);
      }

      const data = await res.json();
      const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!textResponse) {
        throw new Error('Gemini로부터 올바른 응답을 받지 못했습니다.');
      }

      const parsedData = JSON.parse(textResponse);
      parsedData.id = `gen-${Date.now()}`;
      parsedData.youtubeUrl = youtubeInput || '';

      setCurrentSermon(parsedData);
      setStatusMessage('성공적으로 설교 분석이 완료되었습니다!');
    } catch (err) {
      console.error(err);
      alert(`설교 분석 중 오류가 발생했습니다: ${err.message}\n(API 키를 설정했는지 확인하거나 샘플 데이터를 이용해 보세요.)`);
      setStatusMessage('분석에 실패했습니다. 다시 시도해 주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  // Copy helpers
  const handleCopy = (text, sectionName) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionName);
    setTimeout(() => setCopiedSection(''), 2000);
  };

  const getFullMarkdown = () => {
    if (!currentSermon) return '';
    let md = `# [설교 요약] ${currentSermon.title}\n`;
    md += `**본문:** ${currentSermon.scripture} | **설교자:** ${currentSermon.speaker || '미상'} | **날짜:** ${currentSermon.date}\n\n`;
    md += `--- \n`;
    md += `### 📌 명제 정리\n`;
    md += `- **Exegetical Idea (석의적 명제):** ${currentSermon.exegeticalIdea}\n`;
    md += `- **Homiletical Idea (설교적 명제):** ${currentSermon.homileticalIdea}\n\n`;
    md += `### 📝 설교 요약\n${currentSermon.summary}\n\n`;
    md += `--- \n`;
    md += `### 📂 설교 구조 (Structure)\n\n`;
    md += `#### ${currentSermon.structure?.intro?.title}\n${currentSermon.structure?.intro?.content}\n\n`;
    
    currentSermon.structure?.points?.forEach((pt) => {
      md += `#### ${pt.number}. ${pt.title} (${pt.scriptureRef || ''})\n`;
      md += `- **설명:** ${pt.explanation}\n`;
      md += `- **적용:** ${pt.application}\n\n`;
    });

    md += `#### ${currentSermon.structure?.conclusion?.title}\n${currentSermon.structure?.conclusion?.content}\n\n`;
    md += `--- \n`;
    md += `### 💬 핵심 어록 (Key Quotes)\n`;
    currentSermon.keyQuotes?.forEach((q) => {
      md += `> "${q}"\n\n`;
    });
    md += `--- \n`;
    md += `### 👥 소그룹 나눔 질문 (GBS)\n`;
    currentSermon.gbsQuestions?.forEach((g) => {
      md += `- **[${g.type}]** ${g.q}\n`;
    });

    return md;
  };

  const currentVideoId = extractVideoId(youtubeInput || currentSermon?.youtubeUrl);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans antialiased flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-600 rounded-lg shadow-inner">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight flex items-center gap-2">
                설교 요약 및 강해 노트 AI 
                <span className="text-xs bg-emerald-800/80 text-emerald-200 px-2 py-0.5 rounded-full font-normal border border-emerald-700/50">
                  Gemini 3 Flash
                </span>
              </h1>
              <p className="text-xs text-slate-400 hidden sm:block">YouTube 설교 분석 · 석의/설교적 명제 추출 · 소그룹 나눔 질문 자동 생성</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center space-x-1.5 text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-md border border-slate-700 transition"
            >
              <Key className="w-3.5 h-3.5 text-emerald-400" />
              <span>API 설정</span>
              {apiKey && <Check className="w-3 h-3 text-emerald-400" />}
            </button>

            <button
              onClick={() => handleCopy(getFullMarkdown(), 'full')}
              className="flex items-center space-x-1.5 text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-md font-medium shadow-sm transition"
            >
              {copiedSection === 'full' ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>복사 완료!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>전체 마크다운 복사</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Settings Drawer */}
        {showSettings && (
          <div className="bg-slate-800 border-t border-slate-700 p-4 transition-all duration-200">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex-1 w-full sm:w-auto">
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Gemini API Key (선택 사항 - 입력 시 개인 할당량 적용)
                </label>
                <input
                  type="password"
                  placeholder="AI Studio에서 발급받은 API Key 입력..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="text-xs text-slate-400 max-w-sm">
                * 키를 입력하지 않아도 프리뷰 환경 기본 API Key로 즉시 테스트가 가능합니다.
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Input Panel & Video Preview */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Input Box */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                <Youtube className="w-4 h-4 text-red-600" />
                설교 분석 요청
              </h2>
              <span className="text-xs text-slate-500">유튜브/텍스트 지원</span>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                YouTube 설교 영상 URL 또는 ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={youtubeInput}
                  onChange={(e) => setYoutubeInput(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition"
                />
                <Youtube className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-medium text-slate-700">
                  설교 텍스트 / 요약 노트 (선택)
                </label>
                <span className="text-[11px] text-slate-400">직접 입력 시 우선 정독</span>
              </div>
              <textarea
                rows={4}
                placeholder="설교 본문 및 대지, 또는 스크립트 텍스트를 붙여넣으시면 더욱 정교하게 분석합니다..."
                value={rawTranscript}
                onChange={(e) => setRawTranscript(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition"
              />
            </div>

            <button
              onClick={handleAnalyzeSermon}
              disabled={isLoading}
              className={`w-full py-2.5 px-4 rounded-lg text-white font-medium text-sm flex items-center justify-center space-x-2 transition shadow-sm ${
                isLoading 
                  ? 'bg-emerald-700 cursor-not-allowed opacity-80' 
                  : 'bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900'
              }`}
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>AI 분석 진행 중...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  <span>설교 요약 & 노트 생성하기</span>
                </>
              )}
            </button>

            {statusMessage && (
              <p className="text-xs text-center text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-100 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {statusMessage}
              </p>
            )}
          </div>

          {/* Video Player Preview if valid ID */}
          {currentVideoId && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-4 space-y-3">
              <h3 className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 text-emerald-600" />
                분석 대상 설교 영상
              </h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-900 border border-slate-200 shadow-inner">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${currentVideoId}`}
                  title="YouTube sermon video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Preloaded Preset Sermons */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-4 space-y-3">
            <h3 className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
              <Bookmark className="w-3.5 h-3.5 text-slate-500" />
              샘플 설교 데이터 바로 테스트
            </h3>
            <div className="space-y-2">
              {SAMPLE_SERMONS.map((sermon) => (
                <button
                  key={sermon.id}
                  onClick={() => handleSelectSample(sermon)}
                  className={`w-full text-left p-3 rounded-lg border text-xs transition flex items-start justify-between ${
                    currentSermon.id === sermon.id
                      ? 'border-emerald-600 bg-emerald-50/50 text-emerald-950 font-medium'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="font-semibold">{sermon.title}</div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-2">
                      <span>{sermon.scripture}</span>
                      <span>•</span>
                      <span>{sermon.speaker}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 mt-1 ${currentSermon.id === sermon.id ? 'text-emerald-600' : 'text-slate-300'}`} />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Generated Sermon Dashboard */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Header Card */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-600" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    {currentSermon.scripture || '본문 미지정'}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {currentSermon.date} ({currentSermon.duration || '약 30분'})
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {currentSermon.title}
                </h2>
              </div>
              <div className="text-right sm:text-right text-xs text-slate-500">
                <div>설교자: <span className="font-semibold text-slate-800">{currentSermon.speaker || '미상'}</span></div>
              </div>
            </div>

            {/* Exegetical vs Homiletical Idea Banner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200/70">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-slate-600" />
                  Exegetical Idea (석의적 명제)
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-serif">
                  "{currentSermon.exegeticalIdea}"
                </p>
              </div>

              <div className="bg-emerald-50/70 rounded-lg p-3.5 border border-emerald-200/60">
                <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Lightbulb className="w-3.5 h-3.5 text-emerald-600" />
                  Homiletical Idea (설교적 명제)
                </div>
                <p className="text-xs text-emerald-950 font-semibold leading-relaxed">
                  "{currentSermon.homileticalIdea}"
                </p>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-1.5 flex flex-wrap gap-1">
            {[
              { id: 'summary', label: '설교 요약', icon: BookOpen },
              { id: 'structure', label: '강해 대지 구조', icon: Layers },
              { id: 'gbs', label: 'GBS 소그룹 나눔', icon: MessageSquare },
              { id: 'quotes', label: '핵심 어록', icon: Quote },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-[120px] py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-center space-x-1.5 transition ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: Summary */}
          {activeTab === 'summary' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    전체 개요 및 메시지 요약
                  </h3>
                  <button
                    onClick={() => handleCopy(currentSermon.summary, 'summary')}
                    className="text-xs text-slate-500 hover:text-emerald-700 flex items-center gap-1"
                  >
                    {copiedSection === 'summary' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>복사</span>
                  </button>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100 whitespace-pre-line">
                  {currentSermon.summary}
                </p>
              </div>

              {/* Quick Highlight Cards */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">설교의 핵심 흐름</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-100 space-y-1">
                    <span className="text-[11px] font-bold text-amber-800">1. 서론적 문제제기</span>
                    <p className="text-xs text-amber-900/80 line-clamp-3">{currentSermon.structure?.intro?.content}</p>
                  </div>
                  <div className="p-3 bg-blue-50/60 rounded-lg border border-blue-100 space-y-1">
                    <span className="text-[11px] font-bold text-blue-800">2. 복음적 대지 전개</span>
                    <p className="text-xs text-blue-900/80 line-clamp-3">
                      {currentSermon.structure?.points?.[0]?.title} 외 {currentSermon.structure?.points?.length || 1}개 대지
                    </p>
                  </div>
                  <div className="p-3 bg-emerald-50/60 rounded-lg border border-emerald-100 space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800">3. 결단 및 순종</span>
                    <p className="text-xs text-emerald-900/80 line-clamp-3">{currentSermon.structure?.conclusion?.content}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Homiletical Structure */}
          {activeTab === 'structure' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-600" />
                  강해 설교 대지 구조화 (Structure)
                </h3>
                <span className="text-xs text-slate-400">Expository Outline</span>
              </div>

              <div className="space-y-4">
                {/* Intro */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-slate-500 uppercase">Introduction</span>
                  <h4 className="text-sm font-semibold text-slate-900">{currentSermon.structure?.intro?.title}</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">{currentSermon.structure?.intro?.content}</p>
                </div>

                {/* Main Points */}
                {currentSermon.structure?.points?.map((pt, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border-2 border-slate-100 hover:border-emerald-200 transition space-y-3 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="bg-emerald-700 text-white text-xs px-2.5 py-0.5 rounded-full font-bold">
                          {pt.number}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">{pt.title}</h4>
                      </div>
                      {pt.scriptureRef && (
                        <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                          {pt.scriptureRef}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 text-xs text-slate-700">
                      <div className="bg-slate-50/80 p-2.5 rounded border border-slate-100">
                        <span className="font-semibold text-slate-900 block mb-0.5">📖 본문 해석 및 의미:</span>
                        <p className="leading-relaxed">{pt.explanation}</p>
                      </div>
                      <div className="bg-emerald-50/50 p-2.5 rounded border border-emerald-100">
                        <span className="font-semibold text-emerald-900 block mb-0.5">🌱 회중 삶으로의 적용:</span>
                        <p className="leading-relaxed text-emerald-950">{pt.application}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Conclusion */}
                <div className="p-4 bg-slate-900 text-white rounded-xl space-y-1.5">
                  <span className="text-xs font-bold text-emerald-400 uppercase">Conclusion</span>
                  <h4 className="text-sm font-semibold text-white">{currentSermon.structure?.conclusion?.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{currentSermon.structure?.conclusion?.content}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GBS Questions */}
          {activeTab === 'gbs' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    소그룹 나눔 질문 (GBS Guide)
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">구역예배 및 청년부 순모임 나눔 교재용</p>
                </div>
                <button
                  onClick={() => handleCopy(currentSermon.gbsQuestions?.map(g => g.q).join('\n\n'), 'gbs')}
                  className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded flex items-center gap-1 transition"
                >
                  {copiedSection === 'gbs' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>질문 모음 복사</span>
                </button>
              </div>

              <div className="space-y-4">
                {currentSermon.gbsQuestions?.map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        {item.type || `질문 ${idx + 1}`}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-800 leading-relaxed">
                      {item.q}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Key Quotes */}
          {activeTab === 'quotes' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Quote className="w-4 h-4 text-emerald-600" />
                  설교 핵심 어록 & 명언
                </h3>
                <span className="text-xs text-slate-400">Core Key Quotes</span>
              </div>

              <div className="space-y-3">
                {currentSermon.keyQuotes?.map((quote, idx) => (
                  <div key={idx} className="p-4 bg-emerald-50/40 rounded-xl border-l-4 border-emerald-600 space-y-1 relative group">
                    <p className="text-sm font-serif text-slate-800 italic leading-relaxed">
                      "{quote}"
                    </p>
                    <button
                      onClick={() => handleCopy(`"${quote}" - ${currentSermon.title}`, `quote-${idx}`)}
                      className="text-[11px] text-emerald-700 hover:underline flex items-center gap-1 pt-1 opacity-80 group-hover:opacity-100 transition"
                    >
                      {copiedSection === `quote-${idx}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>어록 복사</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>YouTube Sermon Summarizer & Homiletical Exegesis Assistant · Powered by Google Gemini API</p>
          <p className="mt-1 text-slate-400">복음주의 성경적 강해설교 분석 및 소그룹 모임 교재 생성을 지원합니다.</p>
        </div>
      </footer>
    </div>
  );
}