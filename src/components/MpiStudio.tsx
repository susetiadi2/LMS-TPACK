import { useState } from 'react';
import { MpiScreen } from '../types';
import { 
  Play, 
  Settings2, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  CheckCircle, 
  XCircle, 
  Heart, 
  Sparkles, 
  Award, 
  Sliders, 
  HelpCircle, 
  MessageSquare, 
  FileText,
  Lightbulb,
  Maximize2
} from 'lucide-react';

interface MpiStudioProps {
  screens: MpiScreen[];
  onUpdateScreens: (screens: MpiScreen[]) => void;
  topicTitle?: string;
}

export const MpiStudio = ({
  screens,
  onUpdateScreens,
  topicTitle = "Sistem Peredaran Darah Manusia"
}: MpiStudioProps) => {
  const [viewMode, setViewMode] = useState<'player' | 'editor'>('player');
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  
  // Interactive Simulator States for the Player Mode
  const [interactiveBpm, setInteractiveBpm] = useState(75);
  const [isPumping, setIsPumping] = useState(false);
  const [selectedChamber, setSelectedChamber] = useState<string | null>('Bilik Kiri');
  const [studentQuizAnswer, setStudentQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [studentReflectionText, setStudentReflectionText] = useState("");
  const [studentHypothesis, setStudentHypothesis] = useState("");

  const currentScreen = screens[activeScreenIndex] || screens[0];

  const handleNext = () => {
    if (activeScreenIndex < screens.length - 1) {
      setActiveScreenIndex(activeScreenIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeScreenIndex > 0) {
      setActiveScreenIndex(activeScreenIndex - 1);
    }
  };

  const handleResetSimulation = () => {
    setActiveScreenIndex(0);
    setStudentQuizAnswer(null);
    setQuizSubmitted(false);
    setInteractiveBpm(75);
  };

  const handleUpdateScreenField = (field: keyof MpiScreen, value: any) => {
    const updated = [...screens];
    updated[activeScreenIndex] = {
      ...updated[activeScreenIndex],
      [field]: value
    };
    onUpdateScreens(updated);
  };

  const handleTriggerPump = () => {
    setIsPumping(true);
    setTimeout(() => setIsPumping(false), 900);
  };

  return (
    <div className="space-y-6">
      {/* Header Studio */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Sesi 6 & 7: Studio Media Pembelajaran Interaktif (MPI)
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">
            {topicTitle}: MPI Versi Terpadu 8 Layar
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Media interaktif dirancang bukan sebagai slide tontonan, melainkan simulator eksploratif siswa dengan alur pedagogis utuh.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto">
          <button
            onClick={() => setViewMode('player')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'player'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Play className="w-3.5 h-3.5" /> Pratinjau Siswa (Simulator)
          </button>
          <button
            onClick={() => setViewMode('editor')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'editor'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Settings2 className="w-3.5 h-3.5" /> Editor Storyboard (8 Layar)
          </button>
        </div>
      </div>

      {/* Screen Pagination Dots / Pills */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-md flex items-center justify-between overflow-x-auto gap-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-2">
          Alur 8 Layar:
        </span>
        <div className="flex items-center gap-2 shrink-0">
          {screens.map((scr, idx) => (
            <button
              key={scr.id}
              onClick={() => setActiveScreenIndex(idx)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeScreenIndex === idx
                  ? 'bg-blue-500 text-white shadow-sm ring-2 ring-blue-300'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-slate-700/80 text-[10px] flex items-center justify-center font-mono">
                {idx + 1}
              </span>
              <span className="capitalize">{scr.type}</span>
            </button>
          ))}
        </div>
        <button
          onClick={handleResetSimulation}
          title="Ulangi dari Layar 1"
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0 ml-2"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Main Container: PLAYER vs EDITOR */}
      {viewMode === 'player' ? (
        <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 rounded-3xl border-4 border-slate-800 shadow-2xl p-4 sm:p-8 text-white relative min-h-[580px] flex flex-col justify-between overflow-hidden">
          {/* Top Bar of the Interactive Device Frame */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-xs font-mono text-slate-400 ml-2">
                Simulasi Siswa • Layar {activeScreenIndex + 1} dari 8: <strong className="text-white uppercase">{currentScreen.type}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-blue-900/60 text-blue-300 border border-blue-700/50">
                Mode Pelajar Aktif
              </span>
            </div>
          </div>

          {/* Screen Content Body */}
          <div className="my-auto py-4">
            {/* SCREEN 1: COVER */}
            {currentScreen.type === 'cover' && (
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <div className="w-20 h-20 bg-rose-600/20 border-2 border-rose-500/40 rounded-3xl mx-auto flex items-center justify-center shadow-lg shadow-rose-900/40 animate-pulse">
                  <Heart className="w-10 h-10 text-rose-500 fill-rose-500/40" />
                </div>
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    {currentScreen.subtitle || "Media Interaktif Terpadu"}
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {currentScreen.title}
                  </h1>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                  {currentScreen.content}
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold shadow-lg shadow-rose-600/40 transition-all hover:scale-105 active:scale-95"
                  >
                    <span>Mulai Petualangan</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* SCREEN 2: OBJECTIVE */}
            {currentScreen.type === 'objective' && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl border border-blue-500/30">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{currentScreen.title}</h2>
                    <p className="text-xs text-blue-300">{currentScreen.subtitle}</p>
                  </div>
                </div>

                <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-4">
                  <p className="text-slate-200 text-sm whitespace-pre-line leading-relaxed">
                    {currentScreen.content}
                  </p>
                </div>

                <div className="bg-blue-950/40 border border-blue-800/60 rounded-xl p-4 flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-blue-200">
                    <strong className="text-white">Aksi Siswa:</strong> {currentScreen.studentAction}
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 3: STIMULUS */}
            {currentScreen.type === 'stimulus' && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-500/30">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{currentScreen.title}</h2>
                    <p className="text-xs text-amber-300">{currentScreen.subtitle}</p>
                  </div>
                </div>

                <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700 space-y-4">
                  <p className="text-slate-200 text-sm whitespace-pre-line leading-relaxed">
                    {currentScreen.content}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-700/80">
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Tulis Dugaan / Hipotesis Awalmu:
                    </label>
                    <textarea
                      value={studentHypothesis}
                      onChange={(e) => setStudentHypothesis(e.target.value)}
                      placeholder="Contoh: Darah memompa lebih cepat karena otot pelari butuh pasokan oksigen ekstra dari paru-paru..."
                      rows={3}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    {studentHypothesis && (
                      <p className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Hipotesismu telah tercatat di lembar kerja!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 4: CONTENT */}
            {currentScreen.type === 'content' && (
              <div className="max-w-3xl mx-auto space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">{currentScreen.title}</h2>
                  <p className="text-xs text-slate-400">{currentScreen.subtitle}</p>
                </div>

                {/* Interactive Diagram of Heart Chambers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Pilih Bagian Jantung untuk Memeriksa Fungsinya:
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {['Serambi Kiri', 'Bilik Kiri', 'Serambi Kanan', 'Bilik Kanan'].map(ch => (
                        <button
                          key={ch}
                          onClick={() => setSelectedChamber(ch)}
                          className={`p-3 rounded-xl text-xs font-bold text-left transition-all ${
                            selectedChamber === ch
                              ? ch.includes('Kiri') 
                                ? 'bg-rose-600 text-white shadow-md shadow-rose-900/50 ring-2 ring-rose-400'
                                : 'bg-blue-600 text-white shadow-md shadow-blue-900/50 ring-2 ring-blue-400'
                              : 'bg-slate-900 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{ch}</span>
                            <span className="text-[10px] opacity-75">
                              {ch.includes('Kiri') ? 'Kaya O₂' : 'Kaya CO₂'}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                      {selectedChamber === 'Bilik Kiri' && (
                        <div>
                          <strong className="text-rose-400 font-bold block mb-1">Bilik Kiri (Ventrikel Sinister):</strong>
                          Memiliki dinding miokardium paling tebal. Bertugas memompa darah kaya oksigen menuju aorta untuk diedarkan ke seluruh tubuh (Sirkulasi Besar).
                        </div>
                      )}
                      {selectedChamber === 'Serambi Kiri' && (
                        <div>
                          <strong className="text-rose-400 font-bold block mb-1">Serambi Kiri (Atrium Sinister):</strong>
                          Menerima darah segar kaya oksigen dari paru-paru melalui Vena Pulmonalis, lalu mengalirkannya melewati katup bikuspidalis ke Bilik Kiri.
                        </div>
                      )}
                      {selectedChamber === 'Bilik Kanan' && (
                        <div>
                          <strong className="text-blue-400 font-bold block mb-1">Bilik Kanan (Ventrikel Dexter):</strong>
                          Memompa darah miskin oksigen (kaya CO₂) menuju paru-paru melalui Arteri Pulmonalis untuk proses pembersihan (Sirkulasi Kecil).
                        </div>
                      )}
                      {selectedChamber === 'Serambi Kanan' && (
                        <div>
                          <strong className="text-blue-400 font-bold block mb-1">Serambi Kanan (Atrium Dexter):</strong>
                          Menerima darah dari seluruh jaringan tubuh melalui Vena Cava Superior dan Inferior dengan kandungan karbon dioksida tinggi.
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide block mb-2">Penjelasan Konseptual</span>
                      <p className="text-slate-300 text-xs leading-relaxed whitespace-pre-line">
                        {currentScreen.content}
                      </p>
                    </div>
                    <div className="mt-4 p-3 bg-indigo-950/40 border border-indigo-800/60 rounded-xl text-[11px] text-indigo-200">
                      💡 <strong>Konvensi Warna:</strong> Merah cerah = darah kaya Oksigen. Biru = darah miskin Oksigen (kaya CO₂).
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 5: ACTIVITY (SIMULATOR SLIDER) */}
            {currentScreen.type === 'activity' && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">{currentScreen.title}</h2>
                  <p className="text-xs text-emerald-400">{currentScreen.subtitle}</p>
                </div>

                {/* Heart Rate Engine Visualizer */}
                <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700 space-y-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl bg-rose-600/20 border border-rose-500/40 text-rose-500 transition-transform ${
                        isPumping ? 'scale-125' : 'scale-100'
                      }`}>
                        <Heart className={`w-8 h-8 fill-rose-500 ${isPumping ? 'animate-bounce' : ''}`} />
                      </div>
                      <div>
                        <div className="text-2xl font-black font-mono text-white">
                          {interactiveBpm} <span className="text-xs text-rose-400 font-normal">BPM</span>
                        </div>
                        <div className="text-xs text-slate-400">
                          Status: {interactiveBpm < 90 ? 'Istirahat Santai' : interactiveBpm < 120 ? 'Jalan Cepat' : 'Olahraga Sprint Maksimal'}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleTriggerPump}
                      className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-bold text-xs rounded-xl shadow-md shadow-rose-900/50 transition-all flex items-center gap-2"
                    >
                      <Heart className="w-4 h-4 fill-white" />
                      Denyutkan Jantung Sekarang
                    </button>
                  </div>

                  {/* Slider Control */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-slate-300">
                      <span>Rentang Detak Jantung:</span>
                      <span className="font-mono text-rose-400">{interactiveBpm} Detak / Menit</span>
                    </div>
                    <input
                      type="range"
                      min={60}
                      max={150}
                      value={interactiveBpm}
                      onChange={(e) => setInteractiveBpm(Number(e.target.value))}
                      className="w-full accent-rose-500 bg-slate-700 h-2.5 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                      <span>60 BPM (Tidur)</span>
                      <span>90 BPM (Normal)</span>
                      <span>120 BPM (Lari)</span>
                      <span>150 BPM (Sprint)</span>
                    </div>
                  </div>

                  {/* Feedback on Simulation State */}
                  <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-xl p-3.5 text-xs text-emerald-200">
                    <strong className="text-emerald-300">Dinamika Teramati:</strong> Pada {interactiveBpm} BPM, katup jantung membuka menutup lebih cepat untuk memasok oksigen ke mitokondria sel otot agar tidak terjadi penumpukan asam laktat.
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 6: QUIZ */}
            {currentScreen.type === 'quiz' && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-violet-500/20 text-violet-400 rounded-2xl border border-violet-500/30">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{currentScreen.title}</h2>
                    <p className="text-xs text-violet-300">{currentScreen.subtitle}</p>
                  </div>
                </div>

                <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700 space-y-4">
                  <p className="text-white text-sm font-semibold">
                    {currentScreen.quizData?.question || currentScreen.content}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {currentScreen.quizData?.options?.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setStudentQuizAnswer(idx);
                          setQuizSubmitted(true);
                        }}
                        className={`w-full text-left p-3.5 rounded-xl text-xs font-medium transition-all flex items-start gap-3 border ${
                          quizSubmitted
                            ? idx === currentScreen.quizData?.correctIndex
                              ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/40'
                              : idx === studentQuizAnswer
                              ? 'bg-rose-950/80 border-rose-500 text-rose-200'
                              : 'bg-slate-900/60 border-slate-800 text-slate-400'
                            : studentQuizAnswer === idx
                            ? 'bg-blue-600/30 border-blue-500 text-white'
                            : 'bg-slate-900 border-slate-700/80 text-slate-200 hover:bg-slate-800'
                        }`}
                      >
                        <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    ))}
                  </div>

                  {quizSubmitted && (
                    <div className={`p-4 rounded-xl border mt-4 text-xs leading-relaxed ${
                      studentQuizAnswer === currentScreen.quizData?.correctIndex
                        ? 'bg-emerald-900/40 border-emerald-700 text-emerald-200'
                        : 'bg-amber-900/40 border-amber-700 text-amber-200'
                    }`}>
                      <div className="font-bold flex items-center gap-1.5 mb-1 text-white">
                        {studentQuizAnswer === currentScreen.quizData?.correctIndex ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-emerald-400" /> Jawabanmu Benar!
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-amber-400" /> Masih Kurang Tepat, Mari Kita Pelajari:
                          </>
                        )}
                      </div>
                      <p>{currentScreen.quizData?.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* SCREEN 7: FEEDBACK */}
            {currentScreen.type === 'feedback' && (
              <div className="max-w-2xl mx-auto space-y-6 text-center">
                <div className="w-20 h-20 bg-emerald-500/20 border-2 border-emerald-500/40 rounded-3xl mx-auto flex items-center justify-center">
                  <Award className="w-10 h-10 text-emerald-400" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-2xl font-black text-white">{currentScreen.title}</h2>
                  <p className="text-xs text-emerald-300">{currentScreen.subtitle}</p>
                </div>
                <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 text-slate-200 text-sm leading-relaxed max-w-xl mx-auto">
                  {currentScreen.content}
                </div>
                <div className="p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-xl max-w-md mx-auto text-xs text-emerald-200 font-mono">
                  {currentScreen.systemFeedback}
                </div>
              </div>
            )}

            {/* SCREEN 8: REFLECTION */}
            {currentScreen.type === 'reflection' && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-pink-500/20 text-pink-400 rounded-2xl border border-pink-500/30">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{currentScreen.title}</h2>
                    <p className="text-xs text-pink-300">{currentScreen.subtitle}</p>
                  </div>
                </div>

                <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700 space-y-4">
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {currentScreen.content}
                  </p>

                  <div className="space-y-2 pt-2">
                    <label className="block text-xs font-semibold text-slate-300">
                      Komitmen Aksi Sehat / Refleksi Diri:
                    </label>
                    <textarea
                      value={studentReflectionText}
                      onChange={(e) => setStudentReflectionText(e.target.value)}
                      placeholder="Contoh: Mulai besok saya akan berolahraga jalan santai 30 menit setiap sore dan mengurangi makanan cepat saji tinggi kolesterol..."
                      rows={3}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>

                  {studentReflectionText && (
                    <div className="p-3 bg-pink-950/40 border border-pink-800/60 rounded-xl text-xs text-pink-200 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-pink-400 shrink-0" />
                      <span>Komitmenmu dicatat! Selamat telah menyelesaikan modul MPI TPACK ini.</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Device Controls */}
          <div className="border-t border-slate-800/80 pt-4 mt-6 flex items-center justify-between text-xs text-slate-400">
            <button
              onClick={handlePrev}
              disabled={activeScreenIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition-all ${
                activeScreenIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-slate-600'
                  : 'bg-slate-800 hover:bg-slate-700 text-white'
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Kembali
            </button>

            <span className="font-mono text-slate-400">
              Layar {activeScreenIndex + 1} / {screens.length}
            </span>

            <button
              onClick={handleNext}
              disabled={activeScreenIndex === screens.length - 1}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition-all ${
                activeScreenIndex === screens.length - 1
                  ? 'opacity-40 cursor-not-allowed text-slate-600'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-900/50'
              }`}
            >
              Lanjut <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* EDITOR MODE (Sesi 6 & Sesi 7 Storyboard Authoring) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Screen List Selector Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Daftar 8 Layar Storyboard:
              </h3>
              <div className="space-y-2">
                {screens.map((scr, idx) => (
                  <button
                    key={scr.id}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl transition-all border flex items-center justify-between ${
                      activeScreenIndex === idx
                        ? 'bg-blue-50 border-blue-400 text-blue-900 shadow-sm'
                        : 'bg-slate-50 border-slate-200/80 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                        activeScreenIndex === idx ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {idx + 1}
                      </span>
                      <div>
                        <div className="text-xs font-bold capitalize">{scr.type}</div>
                        <div className="text-[11px] text-slate-500 truncate max-w-[150px]">{scr.title}</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form Editor for the Current Screen */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="px-2.5 py-1 rounded text-xs font-bold bg-indigo-50 text-indigo-700 uppercase">
                  Edit Layar {activeScreenIndex + 1}: {currentScreen.type}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Konfigurasi Konten & Interaktivitas</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Judul Layar</label>
                <input
                  type="text"
                  value={currentScreen.title}
                  onChange={(e) => handleUpdateScreenField('title', e.target.value)}
                  className="w-full text-sm font-semibold border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Subjudul / Konteks Layar</label>
                <input
                  type="text"
                  value={currentScreen.subtitle || ''}
                  onChange={(e) => handleUpdateScreenField('subtitle', e.target.value)}
                  className="w-full text-xs border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Narasi Konten / Teks Utama Siswa</label>
                <textarea
                  value={currentScreen.content}
                  onChange={(e) => handleUpdateScreenField('content', e.target.value)}
                  rows={4}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <label className="block text-xs font-bold text-blue-900 mb-1 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-blue-600" /> Aksi Siswa pada Layar Ini
                  </label>
                  <p className="text-[11px] text-blue-700 mb-2">Apa tindakan aktif yang wajib dilakukan siswa (klik, geser, ketik)?</p>
                  <textarea
                    value={currentScreen.studentAction}
                    onChange={(e) => handleUpdateScreenField('studentAction', e.target.value)}
                    rows={2}
                    className="w-full text-xs border border-blue-200 bg-white rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                  <label className="block text-xs font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Umpan Balik Sistem yang Diterima Siswa
                  </label>
                  <p className="text-[11px] text-emerald-700 mb-2">Respon otomatis apa yang ditampilkan aplikasi kepada siswa?</p>
                  <textarea
                    value={currentScreen.systemFeedback}
                    onChange={(e) => handleUpdateScreenField('systemFeedback', e.target.value)}
                    rows={2}
                    className="w-full text-xs border border-emerald-200 bg-white rounded-lg p-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Quiz Configuration if screen is quiz */}
              {currentScreen.type === 'quiz' && currentScreen.quizData && (
                <div className="p-4 bg-violet-50 border border-violet-200 rounded-xl space-y-3">
                  <div className="text-xs font-bold text-violet-900 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-violet-600" /> Pengaturan Butir Kuis Interaktif
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-violet-800 mb-1">Pertanyaan Kuis</label>
                    <input
                      type="text"
                      value={currentScreen.quizData.question}
                      onChange={(e) => {
                        const updatedQuiz = { ...currentScreen.quizData!, question: e.target.value };
                        handleUpdateScreenField('quizData', updatedQuiz);
                      }}
                      className="w-full text-xs border border-violet-200 bg-white rounded-lg p-2 focus:ring-2 focus:ring-violet-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-violet-800 mb-1">Penjelasan Edukatif (Feedback)</label>
                    <textarea
                      value={currentScreen.quizData.explanation}
                      onChange={(e) => {
                        const updatedQuiz = { ...currentScreen.quizData!, explanation: e.target.value };
                        handleUpdateScreenField('quizData', updatedQuiz);
                      }}
                      rows={2}
                      className="w-full text-xs border border-violet-200 bg-white rounded-lg p-2 focus:ring-2 focus:ring-violet-500"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
