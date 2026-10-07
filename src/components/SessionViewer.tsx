import { useState } from 'react';
import { SessionData } from '../types';
import { 
  CheckCircle, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  Pause, 
  RotateCcw, 
  Lightbulb, 
  Layers, 
  ArrowRight,
  FileCheck,
  CheckCircle2,
  Sparkles,
  Target
} from 'lucide-react';

interface SessionViewerProps {
  sessions: SessionData[];
  completedSessions: number[];
  onToggleCompleteSession: (sessionId: number) => void;
  onNavigateToTool: (toolKey: string) => void;
}

export const SessionViewer = ({
  sessions,
  completedSessions,
  onToggleCompleteSession,
  onNavigateToTool
}: SessionViewerProps) => {
  const [selectedSessionId, setSelectedSessionId] = useState<number>(1);
  const [activeCycleStep, setActiveCycleStep] = useState<'brief' | 'demo' | 'do' | 'share' | 'revise'>('brief');
  
  // Interactive Timer for the current cycle step
  const [timerSeconds, setTimerSeconds] = useState(600); // 10 minutes default
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const currentSession = sessions.find(s => s.id === selectedSessionId) || sessions[0];
  const isCompleted = completedSessions.includes(currentSession.id);

  const cycleSteps = [
    { key: 'brief' as const, name: 'BRIEF', duration: `${currentSession.estimatedMinutes.brief} Menit`, desc: 'Fasilitator memaparkan tujuan & tantangan praktik sesi ini.' },
    { key: 'demo' as const, name: 'DEMO', duration: `${currentSession.estimatedMinutes.demo} Menit`, desc: 'Fasilitator mendemonstrasikan 1 contoh konkret artefak.' },
    { key: 'do' as const, name: 'DO', duration: `${currentSession.estimatedMinutes.do} Menit`, desc: 'Peserta mengerjakan produk langsung di lembar kerja/studio.' },
    { key: 'share' as const, name: 'SHARE', duration: `${currentSession.estimatedMinutes.share} Menit`, desc: 'Peserta bertukar karya atau melakukan peer review berpasangan.' },
    { key: 'revise' as const, name: 'REVISE', duration: `${currentSession.estimatedMinutes.revise} Menit`, desc: 'Peserta langsung merevisi produk berdasarkan feedback rekan.' }
  ];

  const handleNextSession = () => {
    if (selectedSessionId < sessions.length) {
      setSelectedSessionId(selectedSessionId + 1);
      setActiveCycleStep('brief');
    }
  };

  const handlePrevSession = () => {
    if (selectedSessionId > 1) {
      setSelectedSessionId(selectedSessionId - 1);
      setActiveCycleStep('brief');
    }
  };

  const getToolJumpLabel = (toolKey?: string) => {
    switch (toolKey) {
      case 'ws1': return 'Buka Worksheet 1 (Problem Statement)';
      case 'ws2': return 'Buka Worksheet 2 (Peta TPACK)';
      case 'ws3': return 'Buka Worksheet 3 (Learning Design Canvas)';
      case 'rpp': return 'Buka RPP / Modul Ajar TPACK';
      case 'storyboard': return 'Buka Editor 8 Layar Storyboard';
      case 'mpi': return 'Buka Studio Produksi & Simulator MPI';
      case 'ai': return 'Buka AI Teaching Assistant Studio';
      case 'visual': return 'Buka Studio Storyboard Visual Video';
      case 'assessment': return 'Buka Studio Asesmen Digital';
      case 'implementation': return 'Buka Modul Implementasi Before-During-After';
      case 'testing': return 'Buka Worksheet 4 (Uji Coba Validasi)';
      case 'portfolio': return 'Buka Evaluasi Portofolio TPACK';
      case 'showcase': return 'Buka Gallery Walk & Peer Review';
      case 'action_plan': return 'Buka Action Plan 30 Hari';
      default: return 'Buka Studio Lembar Kerja';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Sidebar Session List */}
      <div className="lg:col-span-4 space-y-3">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              15 Sesi Pelatihan TPACK
            </span>
            <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full">
              {completedSessions.length} / 15 Selesai
            </span>
          </div>

          <div className="space-y-1.5 max-h-[640px] overflow-y-auto pr-1">
            {sessions.map((sess) => {
              const done = completedSessions.includes(sess.id);
              const active = selectedSessionId === sess.id;

              return (
                <button
                  key={sess.id}
                  onClick={() => {
                    setSelectedSessionId(sess.id);
                    setActiveCycleStep('brief');
                  }}
                  className={`w-full text-left p-3 rounded-xl transition-all border flex items-center justify-between ${
                    active
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : done
                      ? 'bg-emerald-50/60 border-emerald-200/80 text-emerald-950 hover:bg-emerald-100/60'
                      : 'bg-slate-50/70 border-slate-200/70 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                      active
                        ? 'bg-white text-blue-700'
                        : done
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      {sess.id}
                    </span>
                    <div className="truncate">
                      <div className="text-xs font-bold truncate">
                        Sesi {sess.id}: {sess.title.split('—')[1]?.trim() || sess.title}
                      </div>
                      <div className={`text-[10px] truncate ${active ? 'text-blue-100' : 'text-slate-500'}`}>
                        Target: {sess.productName}
                      </div>
                    </div>
                  </div>

                  {done && (
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${active ? 'text-white' : 'text-emerald-600'}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Session Content Pane */}
      <div className="lg:col-span-8 space-y-6">
        {/* Session Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Header & Mark Complete */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-4 border-b border-slate-100 gap-3">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                Modul Kurikulum • Sesi {currentSession.id} dari 15
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                {currentSession.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentSession.subtitle}
              </p>
            </div>

            <button
              onClick={() => onToggleCompleteSession(currentSession.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                isCompleted
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <CheckCircle className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-slate-400'}`} />
              <span>{isCompleted ? 'Sesi Selesai' : 'Tandai Selesai'}</span>
            </button>
          </div>

          {/* Golden Cycle: BRIEF -> DEMO -> DO -> SHARE -> REVISE */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold uppercase tracking-wider">
                Alur Metode Pelatihan: BRIEF → DEMO → DO → SHARE → REVISE
              </span>
              <span className="font-mono text-blue-400">Pola Konsisten</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {cycleSteps.map((step) => (
                <button
                  key={step.key}
                  onClick={() => setActiveCycleStep(step.key)}
                  className={`p-3 rounded-xl text-left transition-all border ${
                    activeCycleStep === step.key
                      ? 'bg-blue-600 border-blue-400 text-white shadow-md ring-2 ring-blue-300'
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black">{step.name}</span>
                    <span className="text-[10px] font-mono opacity-80">{step.duration}</span>
                  </div>
                  <p className="text-[10px] mt-1 line-clamp-2 opacity-75">{step.desc}</p>
                </button>
              ))}
            </div>

            {/* Step Explanation Callout */}
            <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 text-xs text-slate-200 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 uppercase">{activeCycleStep}: </strong>
                {cycleSteps.find(s => s.key === activeCycleStep)?.desc}
              </div>
            </div>
          </div>

          {/* Goal & Key Concepts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 space-y-2">
              <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-blue-600" /> Tujuan Sesi Ini
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {currentSession.goal}
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Materi Inti (Singkat & Padat)
              </span>
              <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                {currentSession.keyConcepts.map((kc, i) => (
                  <li key={i}>{kc}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hands-On Tasks (Aktivitas Peserta) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                Aktivitas Hands-On Peserta (Praktik Langsung)
              </span>
              <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                70% Waktu Pelatihan
              </span>
            </div>

            <div className="space-y-2">
              {currentSession.handsOnTasks.map((task, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs text-slate-700 flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Product & Success Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
              <span className="text-xs font-bold text-amber-900 block">
                📦 Produk / Artefak yang Wajib Dihasilkan:
              </span>
              <div className="text-sm font-black text-slate-900">
                {currentSession.productName}
              </div>
              <p className="text-[11px] text-amber-800">
                Artefak ini akan menjadi bahan mentah yang langsung digunakan pada sesi berikutnya.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
              <span className="text-xs font-bold text-emerald-900 block">
                ✅ Indikator Produk Berhasil:
              </span>
              <ul className="text-xs text-emerald-950 space-y-1 list-disc list-inside">
                {currentSession.successIndicators.map((ind, i) => (
                  <li key={i}>{ind}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Facilitator Prompting Questions */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" /> Pertanyaan Pemantik Coaching Fasilitator:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {currentSession.promptingQuestions.map((q, i) => (
                <div key={i} className="p-3 bg-slate-800 rounded-xl border border-slate-700 italic text-slate-300">
                  "{q}"
                </div>
              ))}
            </div>
          </div>

          {/* Direct Action Link to the Relevant Tool/Worksheet */}
          {currentSession.relatedWorksheet && (
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Kerjakan artefak Sesi {currentSession.id} di studio interaktif:
              </div>
              <button
                onClick={() => onNavigateToTool(currentSession.relatedWorksheet!)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>{getToolJumpLabel(currentSession.relatedWorksheet)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Prev / Next Pagination Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
            <button
              onClick={handlePrevSession}
              disabled={selectedSessionId === 1}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition-all ${
                selectedSessionId === 1
                  ? 'opacity-40 cursor-not-allowed text-slate-400'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Sesi Sebelumnya
            </button>

            <span className="font-mono text-slate-500">
              Sesi {selectedSessionId} / 15
            </span>

            <button
              onClick={handleNextSession}
              disabled={selectedSessionId === sessions.length}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition-all ${
                selectedSessionId === sessions.length
                  ? 'opacity-40 cursor-not-allowed text-slate-400'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Sesi Berikutnya <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
