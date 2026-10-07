import { useState } from 'react';
import { AiPromptTemplate, VisualStoryboardScene } from '../types';
import { 
  Sparkles, 
  Send, 
  CheckCircle, 
  AlertTriangle, 
  Copy, 
  Film, 
  Wand2, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Video, 
  RefreshCw,
  SlidersHorizontal,
  FileCheck
} from 'lucide-react';

interface AiAssistantStudioProps {
  prompts: AiPromptTemplate[];
  visualScenes: VisualStoryboardScene[];
  onUpdatePrompts: (prompts: AiPromptTemplate[]) => void;
  onUpdateVisualScenes: (scenes: VisualStoryboardScene[]) => void;
}

export const AiAssistantStudio = ({
  prompts,
  visualScenes,
  onUpdatePrompts,
  onUpdateVisualScenes
}: AiAssistantStudioProps) => {
  const [activeTab, setActiveTab] = useState<'prompt' | 'visual'>('prompt');
  
  // Prompt State
  const [currentPrompt, setCurrentPrompt] = useState<AiPromptTemplate>(
    prompts[0] || {
      id: "ai-prompt-new",
      name: "Template Prompt Guru Kreator",
      context: "Kelas VIII SMP, materi Sistem Peredaran Darah Manusia.",
      role: "Fasilitator TPACK dan Konsultan Inkuiri Sains.",
      task: "Buatkan 3 pertanyaan pemantik inkuiri yang merangsang nalar kritis siswa mengenai sirkulasi darah ganda.",
      constraints: "Gunakan bahasa komunikatif, batasi maksimal 3 kalimat per pertanyaan, sertakan kata kunci konsep sains.",
      outputFormat: "Daftar bernomor 1-3 disertai penjelasan konsep di baliknya.",
      criteria: "Mendorong inkuiri siswa, bebas miskonsepsi.",
      rawPrompt: "",
      validationScore: 95
    }
  );

  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [aiOutput, setAiOutput] = useState(currentPrompt.generatedResult || "");
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Validation Checklist States
  const [checkFacts, setCheckFacts] = useState(true);
  const [checkGradeLevel, setCheckGradeLevel] = useState(true);
  const [checkPedagogy, setCheckPedagogy] = useState(true);
  const [checkTeacherControl, setCheckTeacherControl] = useState(true);

  // Compute completeness score
  const score = [
    Boolean(currentPrompt.context),
    Boolean(currentPrompt.role),
    Boolean(currentPrompt.task),
    Boolean(currentPrompt.constraints),
    Boolean(currentPrompt.outputFormat),
    Boolean(currentPrompt.criteria)
  ].filter(Boolean).length * 16.6;

  const combinedPrompt = `[PERAN]: ${currentPrompt.role}
[KONTEKS]: ${currentPrompt.context}
[TUGAS]: ${currentPrompt.task}
[BATASAN]: ${currentPrompt.constraints}
[FORMAT OUTPUT]: ${currentPrompt.outputFormat}
[KRITERIA KEBERHASILAN]: ${currentPrompt.criteria}`;

  const handleRunAi = async () => {
    setIsLoadingAi(true);
    try {
      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: combinedPrompt,
          systemInstruction: "Anda adalah Konsultan Ahli TPACK. Hasilkan konten terstruktur sesuai batasan format yang diminta guru."
        })
      });

      const data = await response.json();
      if (data.content) {
        setAiOutput(data.content);
        const updatedPrompt = { ...currentPrompt, generatedResult: data.content, rawPrompt: combinedPrompt };
        setCurrentPrompt(updatedPrompt);
        onUpdatePrompts(prompts.map(p => p.id === currentPrompt.id ? updatedPrompt : p));
      }
    } catch (err) {
      console.error(err);
      setAiOutput("Contoh tanggapan AI berhasil disimulasikan sesuai struktur 6 formula prompt TPACK.");
    } finally {
      setIsLoadingAi(false);
    }
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(combinedPrompt);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  const handleUpdateScene = (index: number, field: keyof VisualStoryboardScene, value: any) => {
    const updated = [...visualScenes];
    updated[index] = { ...updated[index], [field]: value };
    onUpdateVisualScenes(updated);
  };

  return (
    <div className="space-y-6">
      {/* Studio Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Sesi 8 & 9: AI Teaching Assistant & Visual Storytelling
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">
            Studio AI Sebagai Asisten Pengajar & Generator Visual
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            "AI mempercepat pekerjaan guru tanpa menyerahkan keputusan pedagogis kepada AI." Guru tetap pemegang kendali utama!
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveTab('prompt')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'prompt'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Wand2 className="w-3.5 h-3.5" /> Sesi 8: Prompt Engineering
          </button>
          <button
            onClick={() => setActiveTab('visual')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'visual'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Film className="w-3.5 h-3.5" /> Sesi 9: Storyboard Visual Video
          </button>
        </div>
      </div>

      {activeTab === 'prompt' ? (
        /* SESI 8: PROMPT ENGINEERING & VALIDASI */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Formulator (6 Elements) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Formula Prompt TPACK (6 Elemen Wajib)
                </h3>
                <p className="text-xs text-slate-500">
                  Struktur terstandar untuk menghasilkan bahan ajar presisi tinggi dari AI
                </p>
              </div>

              {/* Quality Meter */}
              <div className="text-right">
                <div className="text-xs font-bold text-indigo-700">Skor Kelengkapan: {Math.round(score)}%</div>
                <div className="w-24 bg-slate-100 h-2 rounded-full mt-1 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-full transition-all duration-300"
                    style={{ width: `${score}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span>1. Konteks Pembelajaran (Context)</span>
                  <span className="text-[10px] text-slate-400 font-normal">Jenjang, kelas, materi</span>
                </label>
                <input
                  type="text"
                  value={currentPrompt.context}
                  onChange={(e) => setCurrentPrompt({ ...currentPrompt, context: e.target.value })}
                  placeholder="Contoh: Siswa Kelas VIII SMP, materi Sirkulasi Darah, waktu 2 JP..."
                  className="w-full text-xs border border-slate-200 rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span>2. Peran AI (Role)</span>
                  <span className="text-[10px] text-slate-400 font-normal">Persona keahlian AI</span>
                </label>
                <input
                  type="text"
                  value={currentPrompt.role}
                  onChange={(e) => setCurrentPrompt({ ...currentPrompt, role: e.target.value })}
                  placeholder="Contoh: Bertindaklah sebagai Ahli Pedagogi Sains SMP dan Fasilitator TPACK..."
                  className="w-full text-xs border border-slate-200 rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span>3. Tugas Spesifik (Task)</span>
                  <span className="text-[10px] text-slate-400 font-normal">Instruksi kerja konkret</span>
                </label>
                <textarea
                  value={currentPrompt.task}
                  onChange={(e) => setCurrentPrompt({ ...currentPrompt, task: e.target.value })}
                  rows={2}
                  placeholder="Contoh: Buatkan 3 skenario masalah kehidupan sehari-hari untuk memantik rasa penasaran siswa..."
                  className="w-full text-xs border border-slate-200 rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span>4. Batasan & Larangan (Constraints)</span>
                  <span className="text-[10px] text-amber-600 font-semibold">Pencegah halusinasi & bias</span>
                </label>
                <input
                  type="text"
                  value={currentPrompt.constraints}
                  onChange={(e) => setCurrentPrompt({ ...currentPrompt, constraints: e.target.value })}
                  placeholder="Contoh: Hindari istilah medis rumit, jangan lebih dari 3 kalimat per kasus..."
                  className="w-full text-xs border border-slate-200 rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    5. Format Output
                  </label>
                  <input
                    type="text"
                    value={currentPrompt.outputFormat}
                    onChange={(e) => setCurrentPrompt({ ...currentPrompt, outputFormat: e.target.value })}
                    placeholder="Contoh: Daftar bernomor 1-3 dengan penjelasan..."
                    className="w-full text-xs border border-slate-200 rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    6. Kriteria Keberhasilan
                  </label>
                  <input
                    type="text"
                    value={currentPrompt.criteria}
                    onChange={(e) => setCurrentPrompt({ ...currentPrompt, criteria: e.target.value })}
                    placeholder="Contoh: Menumbuhkan nalar kritis siswa C4..."
                    className="w-full text-xs border border-slate-200 rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Generated Raw Prompt Preview & Action */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleCopyPrompt}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                {copiedNotification ? "Tersalin ke Clipboard!" : "Salin Prompt Utuh"}
              </button>

              <button
                onClick={handleRunAi}
                disabled={isLoadingAi}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                {isLoadingAi ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Memproses dengan AI...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Uji Prompt ke AI Teaching Assistant</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* AI Result & Validation Cockpit */}
          <div className="lg:col-span-5 space-y-5">
            {/* Output Display */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Hasil Respon AI
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 border border-indigo-800 px-2 py-0.5 rounded">
                  Gemini TPACK Assistant
                </span>
              </div>

              <div className="max-h-[300px] overflow-y-auto text-xs text-slate-300 whitespace-pre-line leading-relaxed font-sans pr-2">
                {aiOutput || "Hasil uji prompt akan muncul di sini secara terstruktur."}
              </div>
            </div>

            {/* Teacher Validation Checklist (Aktivitas 40: Validasi Fakta & Pedagogis) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 border-b border-slate-100 pb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Lembar Validasi Guru (Koreksi Pedagogis Wajib)
              </div>
              <p className="text-[11px] text-slate-500">
                Sebelum dimasukkan ke dalam RPP/MPI, guru wajib memvalidasi output AI:
              </p>

              <div className="space-y-2 pt-1 text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                  <input
                    type="checkbox"
                    checked={checkFacts}
                    onChange={(e) => setCheckFacts(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Fakta sains / materi 100% akurat & bebas miskonsepsi</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                  <input
                    type="checkbox"
                    checked={checkGradeLevel}
                    onChange={(e) => setCheckGradeLevel(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Tingkat bahasa & kognitif tepat untuk jenjang sasaran</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                  <input
                    type="checkbox"
                    checked={checkPedagogy}
                    onChange={(e) => setCheckPedagogy(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Mendukung strategi inkuiri aktif (bukan sekadar hafalan)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                  <input
                    type="checkbox"
                    checked={checkTeacherControl}
                    onChange={(e) => setCheckTeacherControl(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Keputusan pedagogis final tetap diambil oleh guru</span>
                </label>
              </div>

              {checkFacts && checkGradeLevel && checkPedagogy && checkTeacherControl && (
                <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5 mt-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Prompt dan Konten Tervalidasi Siap Digunakan!
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* SESI 9: STORYBOARD / PROMPT VISUAL */
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Storyboard Scene & Visual Prompts (Sesi 9)
                </h3>
                <p className="text-xs text-slate-500">
                  Prinsip: Satu scene satu tujuan visual. VO Bahasa Indonesia tidak mengulang semua teks di layar.
                </p>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full">
                4 Scene Terpilih untuk Konsep Abstrak
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visualScenes.map((scene, idx) => (
                <div
                  key={scene.id}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 hover:border-indigo-300 transition-colors"
                >
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-bold text-slate-900">{scene.sceneName}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {scene.durationSeconds} Detik
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="font-bold text-slate-700 block mb-0.5">Tujuan Visual:</span>
                      <p className="text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200">
                        {scene.visualGoal}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-slate-700 block mb-0.5">Kamera & Aksi Gerak:</span>
                      <p className="text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200">
                        {scene.cameraAction}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-slate-700 block mb-0.5">Voice Over (VO) Bahasa Indonesia:</span>
                      <p className="text-slate-800 italic bg-amber-50/60 p-2.5 rounded-lg border border-amber-200/80">
                        "{scene.voiceOverText}"
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-indigo-700 block mb-0.5 flex items-center gap-1">
                        <Wand2 className="w-3.5 h-3.5" /> Prompt Gambar/Animasi AI:
                      </span>
                      <div className="bg-slate-900 text-slate-200 font-mono text-[11px] p-2.5 rounded-lg border border-slate-800 break-words">
                        {scene.imagePrompt}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
