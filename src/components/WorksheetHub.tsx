import { useState } from 'react';
import { 
  Worksheet1ProblemStatement, 
  Worksheet2Tpack, 
  Worksheet3LearningDesign, 
  RppItem, 
  Worksheet4Testing, 
  ActionPlan30Days 
} from '../types';
import { TpackDiagram } from './TpackDiagram';
import { 
  FileText, 
  Layers, 
  Target, 
  BookOpen, 
  CheckSquare, 
  Calendar, 
  Save, 
  Download, 
  Sparkles,
  HelpCircle,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

interface WorksheetHubProps {
  ws1: Worksheet1ProblemStatement;
  ws2: Worksheet2Tpack;
  ws3: Worksheet3LearningDesign;
  rpp: RppItem;
  ws4: Worksheet4Testing;
  actionPlan: ActionPlan30Days;
  onUpdateWs1: (data: Worksheet1ProblemStatement) => void;
  onUpdateWs2: (data: Worksheet2Tpack) => void;
  onUpdateWs3: (data: Worksheet3LearningDesign) => void;
  onUpdateRpp: (data: RppItem) => void;
  onUpdateWs4: (data: Worksheet4Testing) => void;
  onUpdateActionPlan: (data: ActionPlan30Days) => void;
  initialTab?: 'ws1' | 'ws2' | 'ws3' | 'rpp' | 'ws4' | 'action_plan';
}

export const WorksheetHub = ({
  ws1,
  ws2,
  ws3,
  rpp,
  ws4,
  actionPlan,
  onUpdateWs1,
  onUpdateWs2,
  onUpdateWs3,
  onUpdateRpp,
  onUpdateWs4,
  onUpdateActionPlan,
  initialTab = 'ws1'
}: WorksheetHubProps) => {
  const [activeTab, setActiveTab] = useState<'ws1' | 'ws2' | 'ws3' | 'rpp' | 'ws4' | 'action_plan'>(initialTab);
  const [savedBadge, setSavedBadge] = useState(false);

  const triggerSaveNotification = () => {
    setSavedBadge(true);
    setTimeout(() => setSavedBadge(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={() => setActiveTab('ws1')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'ws1'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" /> WS 1: Problem Statement
          </button>

          <button
            onClick={() => setActiveTab('ws2')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'ws2'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> WS 2: Peta TPACK
          </button>

          <button
            onClick={() => setActiveTab('ws3')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'ws3'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Target className="w-3.5 h-3.5" /> WS 3: Learning Design Canvas
          </button>

          <button
            onClick={() => setActiveTab('rpp')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'rpp'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" /> RPP / Modul Ajar TPACK
          </button>

          <button
            onClick={() => setActiveTab('ws4')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'ws4'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" /> WS 4: Uji Coba MPI
          </button>

          <button
            onClick={() => setActiveTab('action_plan')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'action_plan'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" /> Action Plan 30 Hari
          </button>
        </div>

        {savedBadge && (
          <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 flex items-center gap-1.5 self-center">
            <CheckCircle2 className="w-3.5 h-3.5" /> Lembar kerja tersimpan otomatis
          </div>
        )}
      </div>

      {/* WORKSHEET 1: PROBLEM STATEMENT */}
      {activeTab === 'ws1' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Sesi 1 & 2: Identifikasi Masalah Riil Pembelajaran
            </div>
            <h2 className="text-xl font-bold text-slate-900">Worksheet 1 — Problem Statement & Peta Masalah</h2>
            <p className="text-xs text-slate-500 mt-1">
              "Peserta tidak memulai dari aplikasi; peserta memulai dari masalah nyata dan kebutuhan siswa."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Materi yang Saya Ajarkan
                </label>
                <input
                  type="text"
                  value={ws1.subjectMatter}
                  onChange={(e) => {
                    onUpdateWs1({ ...ws1, subjectMatter: e.target.value });
                    triggerSaveNotification();
                  }}
                  className="w-full text-xs font-semibold border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Contoh: Sistem Peredaran Darah Manusia"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  3 Masalah yang Sering Muncul Saat Mengajarkan Materi Tersebut
                </label>
                <div className="space-y-2">
                  {[0, 1, 2].map((idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <input
                        type="text"
                        value={ws1.commonProblems[idx] || ""}
                        onChange={(e) => {
                          const updated = [...ws1.commonProblems] as [string, string, string];
                          updated[idx] = e.target.value;
                          onUpdateWs1({ ...ws1, commonProblems: updated });
                          triggerSaveNotification();
                        }}
                        className="w-full text-xs border border-slate-200 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder={`Masalah ke-${idx + 1}...`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-blue-900 mb-1">
                  1 Masalah Prioritas (Akar Masalah Kritis)
                </label>
                <textarea
                  value={ws1.priorityProblem}
                  onChange={(e) => {
                    onUpdateWs1({ ...ws1, priorityProblem: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={3}
                  className="w-full text-xs border border-blue-200 bg-blue-50/40 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Pilih 1 masalah yang paling mendesak untuk dipecahkan dengan inovasi teknologi..."
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Bukti / Indikasi Masalah di Kelas
                </label>
                <textarea
                  value={ws1.evidenceIndications}
                  onChange={(e) => {
                    onUpdateWs1({ ...ws1, evidenceIndications: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={2}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Contoh: 70% siswa salah menjawab soal jalur bilik kiri saat ulangan harian..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Kebutuhan Belajar Siswa
                </label>
                <textarea
                  value={ws1.studentNeeds}
                  onChange={(e) => {
                    onUpdateWs1({ ...ws1, studentNeeds: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={2}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Kebutuhan visualisasi, simulasi kendali interaktif, feedback..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Teknologi yang Mungkin Membantu (Alasan Pedagogis)
                </label>
                <textarea
                  value={ws1.possibleTech}
                  onChange={(e) => {
                    onUpdateWs1({ ...ws1, possibleTech: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={2}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Media interaktif berbasis slider, aplikasi simulasi web, kuis adaptif..."
                />
              </div>
            </div>
          </div>

          {/* Golden Problem Statement */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-6 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-200">
              <Target className="w-4 h-4 text-amber-400" />
              RUMUSAN PROBLEM STATEMENT FINAL (Sesi 1 - Aktivitas 5)
            </div>
            <p className="text-xs text-blue-300">
              Format Wajib: <em>"Siswa mengalami ... sehingga membutuhkan ..."</em>
            </p>
            <textarea
              value={ws1.problemStatement}
              onChange={(e) => {
                onUpdateWs1({ ...ws1, problemStatement: e.target.value });
                triggerSaveNotification();
              }}
              rows={3}
              className="w-full text-sm font-medium bg-slate-950/80 border border-blue-500/50 rounded-xl p-3.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>
      )}

      {/* WORKSHEET 2: TPACK MAP */}
      {activeTab === 'ws2' && (
        <div className="space-y-6">
          <TpackDiagram
            ckText={ws2.ck}
            pkText={ws2.pk}
            tkText={ws2.tk}
            tpackText={ws2.tpackIntegrated}
          />

          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">Worksheet 2 — Rincian Pemetaan Komponen TPACK</h3>
              <p className="text-xs text-slate-500">
                Lengkapi rincian 3 domain dasar (CK, PK, TK) dan irisan integrasinya:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-2">
                <span className="text-xs font-bold text-emerald-900 block">CK — Pengetahuan Konten</span>
                <textarea
                  value={ws2.ck}
                  onChange={(e) => {
                    onUpdateWs2({ ...ws2, ck: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={4}
                  className="w-full text-xs bg-white border border-emerald-200 rounded-lg p-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 space-y-2">
                <span className="text-xs font-bold text-blue-900 block">PK — Strategi / Pedagogi</span>
                <textarea
                  value={ws2.pk}
                  onChange={(e) => {
                    onUpdateWs2({ ...ws2, pk: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={4}
                  className="w-full text-xs bg-white border border-blue-200 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/40 space-y-2">
                <span className="text-xs font-bold text-purple-900 block">TK — Teknologi</span>
                <textarea
                  value={ws2.tk}
                  onChange={(e) => {
                    onUpdateWs2({ ...ws2, tk: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={4}
                  className="w-full text-xs bg-white border border-purple-200 rounded-lg p-2.5 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-teal-200 bg-teal-50/30 space-y-2">
                <span className="text-xs font-bold text-teal-900 block">PCK — Integrasi Konten-Pedagogi</span>
                <textarea
                  value={ws2.pck}
                  onChange={(e) => {
                    onUpdateWs2({ ...ws2, pck: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={3}
                  className="w-full text-xs bg-white border border-teal-200 rounded-lg p-2.5 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/30 space-y-2">
                <span className="text-xs font-bold text-indigo-900 block">TCK — Integrasi Konten-Teknologi</span>
                <textarea
                  value={ws2.tck}
                  onChange={(e) => {
                    onUpdateWs2({ ...ws2, tck: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={3}
                  className="w-full text-xs bg-white border border-indigo-200 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div className="p-4 rounded-xl border border-violet-200 bg-violet-50/30 space-y-2">
                <span className="text-xs font-bold text-violet-900 block">TPK — Integrasi Pedagogi-Teknologi</span>
                <textarea
                  value={ws2.tpk}
                  onChange={(e) => {
                    onUpdateWs2({ ...ws2, tpk: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={3}
                  className="w-full text-xs bg-white border border-violet-200 rounded-lg p-2.5 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Paragraf Desain Terpadu TPACK */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-300 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                <Sparkles className="w-4 h-4 text-amber-600" />
                TPACK — KEPUTUSAN DESAIN TERPADU (Satu Paragraf Utuh)
              </div>
              <textarea
                value={ws2.tpackIntegrated}
                onChange={(e) => {
                  onUpdateWs2({ ...ws2, tpackIntegrated: e.target.value });
                  triggerSaveNotification();
                }}
                rows={3}
                className="w-full text-xs bg-white border border-amber-300 rounded-xl p-3 focus:ring-2 focus:ring-amber-500 focus:outline-none leading-relaxed"
              />
            </div>
          </div>
        </div>
      )}

      {/* WORKSHEET 3: LEARNING DESIGN CANVAS */}
      {activeTab === 'ws3' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Sesi 4: Digital Learning Design
            </div>
            <h2 className="text-xl font-bold text-slate-900">Worksheet 3 — Learning Design Canvas</h2>
            <p className="text-xs text-slate-500 mt-1">
              Formula: <strong>TUJUAN → PEDAGOGI → AKTIVITAS → TEKNOLOGI → MEDIA → ASESMEN</strong>
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  1. Tujuan Pembelajaran (1–2 TP Terukur)
                </label>
                <textarea
                  value={ws3.learningGoals.join('\n')}
                  onChange={(e) => {
                    onUpdateWs3({ ...ws3, learningGoals: e.target.value.split('\n') });
                    triggerSaveNotification();
                  }}
                  rows={3}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Tuliskan tujuan dengan kata kerja operasional terukur (1 per baris)..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  2. Bukti Ketercapaian Tujuan (Evidensi Nyata)
                </label>
                <textarea
                  value={ws3.goalEvidence}
                  onChange={(e) => {
                    onUpdateWs3({ ...ws3, goalEvidence: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={3}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Apa bukti konkret bahwa siswa telah mencapai tujuan di atas?"
                />
              </div>
            </div>

            {/* 3 Phases of Student Activity */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                3. Alur Aktivitas Siswa Aktif: Before – During – After
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-blue-700 block mb-1">BEFORE (Sebelum Media)</span>
                  <p className="text-[11px] text-slate-500 mb-2">Apersepsi, pemantik masalah, hipotesis awal</p>
                  <textarea
                    value={ws3.studentActivityBefore}
                    onChange={(e) => {
                      onUpdateWs3({ ...ws3, studentActivityBefore: e.target.value });
                      triggerSaveNotification();
                    }}
                    rows={4}
                    className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-emerald-700 block mb-1">DURING (Saat Pakai Media)</span>
                  <p className="text-[11px] text-slate-500 mb-2">Eksplorasi mandiri, manipulasi simulator, kuis</p>
                  <textarea
                    value={ws3.studentActivityDuring}
                    onChange={(e) => {
                      onUpdateWs3({ ...ws3, studentActivityDuring: e.target.value });
                      triggerSaveNotification();
                    }}
                    rows={4}
                    className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-indigo-700 block mb-1">AFTER (Setelah Media)</span>
                  <p className="text-[11px] text-slate-500 mb-2">Diskusi kelompok, sintesis konsep, refleksi</p>
                  <textarea
                    value={ws3.studentActivityAfter}
                    onChange={(e) => {
                      onUpdateWs3({ ...ws3, studentActivityAfter: e.target.value });
                      triggerSaveNotification();
                    }}
                    rows={4}
                    className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  4. Teknologi & Media Terpilih
                </label>
                <input
                  type="text"
                  value={ws3.selectedTech}
                  onChange={(e) => {
                    onUpdateWs3({ ...ws3, selectedTech: e.target.value });
                    triggerSaveNotification();
                  }}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none mb-2"
                  placeholder="Teknologi yang digunakan..."
                />
                <input
                  type="text"
                  value={ws3.selectedMedia}
                  onChange={(e) => {
                    onUpdateWs3({ ...ws3, selectedMedia: e.target.value });
                    triggerSaveNotification();
                  }}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Format media (MPI interaktif web, animasi, dsb)..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  5. Strategi Asesmen Pembuktian
                </label>
                <textarea
                  value={ws3.assessmentStrategy}
                  onChange={(e) => {
                    onUpdateWs3({ ...ws3, assessmentStrategy: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={3}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Asesmen yang membuktikan ketercapaian tujuan..."
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                6. Alasan Pemilihan Teknologi (Mengapa Tidak Bisa Cuma Ceramah/Buku?)
              </label>
              <textarea
                value={ws3.techRationale}
                onChange={(e) => {
                  onUpdateWs3({ ...ws3, techRationale: e.target.value });
                  triggerSaveNotification();
                }}
                rows={2}
                className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* RPP / MODUL AJAR TPACK BUILDER */}
      {activeTab === 'rpp' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Sesi 5 & 11: Modul Ajar / RPP Berbasis TPACK
              </div>
              <h2 className="text-xl font-bold text-slate-900">{rpp.title}</h2>
              <p className="text-xs text-slate-500 mt-1">
                Aktivitas guru dan siswa dipisahkan secara tegas; integrasi MPI spesifik pada setiap tahapan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block font-semibold">Mata Pelajaran:</span>
              <strong className="text-slate-800">{rpp.subject}</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold">Jenjang / Kelas:</span>
              <strong className="text-slate-800">{rpp.gradeLevel}</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold">Topik Materi:</span>
              <strong className="text-slate-800">{rpp.topic}</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold">Alokasi Waktu:</span>
              <strong className="text-slate-800">{rpp.allocationTime}</strong>
            </div>
          </div>

          {/* Model & Method */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Model Pembelajaran</label>
              <input
                type="text"
                value={rpp.learningModel}
                onChange={(e) => {
                  onUpdateRpp({ ...rpp, learningModel: e.target.value });
                  triggerSaveNotification();
                }}
                className="w-full text-xs border border-slate-200 rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Metode & Integrasi Media</label>
              <input
                type="text"
                value={rpp.learningMethod}
                onChange={(e) => {
                  onUpdateRpp({ ...rpp, learningMethod: e.target.value });
                  triggerSaveNotification();
                }}
                className="w-full text-xs border border-slate-200 rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Steps Table: Intro, Main, Closing */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              Sintaks Pembelajaran Terintegrasi MPI (Aktivitas Guru vs Siswa):
            </span>

            {/* Pendahuluan */}
            <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 space-y-3">
              <span className="text-xs font-bold text-blue-800 uppercase block">1. Tahap Pendahuluan (10–15 Menit)</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Aktivitas Guru:</label>
                  <textarea
                    value={rpp.introStep.teacherActivity}
                    onChange={(e) => {
                      onUpdateRpp({ ...rpp, introStep: { ...rpp.introStep, teacherActivity: e.target.value } });
                      triggerSaveNotification();
                    }}
                    rows={3}
                    className="w-full text-xs bg-white border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Aktivitas Siswa:</label>
                  <textarea
                    value={rpp.introStep.studentActivity}
                    onChange={(e) => {
                      onUpdateRpp({ ...rpp, introStep: { ...rpp.introStep, studentActivity: e.target.value } });
                      triggerSaveNotification();
                    }}
                    rows={3}
                    className="w-full text-xs bg-white border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-blue-700 mb-1">Integrasi MPI:</label>
                  <textarea
                    value={rpp.introStep.mpiIntegration}
                    onChange={(e) => {
                      onUpdateRpp({ ...rpp, introStep: { ...rpp.introStep, mpiIntegration: e.target.value } });
                      triggerSaveNotification();
                    }}
                    rows={3}
                    className="w-full text-xs bg-blue-50/50 border border-blue-200 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Inti */}
            <div className="border border-indigo-200 rounded-2xl p-4 bg-indigo-50/20 space-y-3">
              <span className="text-xs font-bold text-indigo-900 uppercase block">2. Tahap Inti (50–55 Menit) — Eksplorasi & Simulasi MPI</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Aktivitas Guru (Coaching):</label>
                  <textarea
                    value={rpp.mainStep.teacherActivity}
                    onChange={(e) => {
                      onUpdateRpp({ ...rpp, mainStep: { ...rpp.mainStep, teacherActivity: e.target.value } });
                      triggerSaveNotification();
                    }}
                    rows={4}
                    className="w-full text-xs bg-white border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Aktivitas Siswa (Dominan):</label>
                  <textarea
                    value={rpp.mainStep.studentActivity}
                    onChange={(e) => {
                      onUpdateRpp({ ...rpp, mainStep: { ...rpp.mainStep, studentActivity: e.target.value } });
                      triggerSaveNotification();
                    }}
                    rows={4}
                    className="w-full text-xs bg-white border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-indigo-700 mb-1">Integrasi MPI:</label>
                  <textarea
                    value={rpp.mainStep.mpiIntegration}
                    onChange={(e) => {
                      onUpdateRpp({ ...rpp, mainStep: { ...rpp.mainStep, mpiIntegration: e.target.value } });
                      triggerSaveNotification();
                    }}
                    rows={4}
                    className="w-full text-xs bg-indigo-50/60 border border-indigo-200 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Penutup */}
            <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 space-y-3">
              <span className="text-xs font-bold text-slate-800 uppercase block">3. Tahap Penutup (10–15 Menit) — Konfirmasi & Refleksi</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Aktivitas Guru:</label>
                  <textarea
                    value={rpp.closingStep.teacherActivity}
                    onChange={(e) => {
                      onUpdateRpp({ ...rpp, closingStep: { ...rpp.closingStep, teacherActivity: e.target.value } });
                      triggerSaveNotification();
                    }}
                    rows={3}
                    className="w-full text-xs bg-white border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Aktivitas Siswa:</label>
                  <textarea
                    value={rpp.closingStep.studentActivity}
                    onChange={(e) => {
                      onUpdateRpp({ ...rpp, closingStep: { ...rpp.closingStep, studentActivity: e.target.value } });
                      triggerSaveNotification();
                    }}
                    rows={3}
                    className="w-full text-xs bg-white border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Integrasi MPI:</label>
                  <textarea
                    value={rpp.closingStep.mpiIntegration}
                    onChange={(e) => {
                      onUpdateRpp({ ...rpp, closingStep: { ...rpp.closingStep, mpiIntegration: e.target.value } });
                      triggerSaveNotification();
                    }}
                    rows={3}
                    className="w-full text-xs bg-white border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WORKSHEET 4: UJI COBA MPI */}
      {activeTab === 'ws4' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Sesi 12: Uji Coba, Validasi, dan Revisi
            </div>
            <h2 className="text-xl font-bold text-slate-900">Worksheet 4 — Uji Coba & Temuan Revisi MPI</h2>
            <p className="text-xs text-slate-500 mt-1">
              "Catat minimal 3 temuan nyata dari sesi uji buta (blind testing) bersama rekan sejawat."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-emerald-900 mb-1">
                  Bagian yang Berhasil & Berjalan Efektif:
                </label>
                <textarea
                  value={ws4.workingWell}
                  onChange={(e) => {
                    onUpdateWs4({ ...ws4, workingWell: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={3}
                  className="w-full text-xs border border-emerald-200 bg-emerald-50/30 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-900 mb-1">
                  Bagian yang Membingungkan Penguji:
                </label>
                <textarea
                  value={ws4.confusingParts}
                  onChange={(e) => {
                    onUpdateWs4({ ...ws4, confusingParts: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={3}
                  className="w-full text-xs border border-amber-200 bg-amber-50/30 rounded-xl p-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Temuan Konten / Materi:
                </label>
                <textarea
                  value={ws4.contentFindings}
                  onChange={(e) => {
                    onUpdateWs4({ ...ws4, contentFindings: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={2}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Temuan Pedagogi & Alur Siswa:
                </label>
                <textarea
                  value={ws4.pedagogicalFindings}
                  onChange={(e) => {
                    onUpdateWs4({ ...ws4, pedagogicalFindings: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={3}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Temuan Teknologi / Aksesibilitas:
                </label>
                <textarea
                  value={ws4.technologyAccessFindings}
                  onChange={(e) => {
                    onUpdateWs4({ ...ws4, technologyAccessFindings: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={2}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-blue-900 mb-1">
                  Daftar Perbaikan Nyata yang Dilakukan (Minimal 3 Poin):
                </label>
                <textarea
                  value={ws4.plannedImprovements.join('\n')}
                  onChange={(e) => {
                    onUpdateWs4({ ...ws4, plannedImprovements: e.target.value.split('\n') });
                    triggerSaveNotification();
                  }}
                  rows={3}
                  className="w-full text-xs border border-blue-200 bg-blue-50/30 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="1. Perbaikan navigasi tombol...&#10;2. Penambahan konvensi warna...&#10;3. Penjelasan feedback..."
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ACTION PLAN 30 HARI */}
      {activeTab === 'action_plan' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Sesi 15: Komitmen Penerapan & Peta Jalan 30 Hari
            </div>
            <h2 className="text-xl font-bold text-slate-900">Rencana Aksi 30 Hari Guru Kreator</h2>
            <p className="text-xs text-slate-500 mt-1">
              "Memastikan inovasi produk benar-benar diimplementasikan di kelas dan diseminasikan ke komunitas sekolah."
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Refleksi Personal: Apa yang Berubah dari Cara Saya Merancang Pembelajaran?
              </label>
              <textarea
                value={actionPlan.paradigmShiftReflection}
                onChange={(e) => {
                  onUpdateActionPlan({ ...actionPlan, paradigmShiftReflection: e.target.value });
                  triggerSaveNotification();
                }}
                rows={3}
                className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Target Kelas Pertama Implementasi:
                </label>
                <input
                  type="text"
                  value={actionPlan.targetClass}
                  onChange={(e) => {
                    onUpdateActionPlan({ ...actionPlan, targetClass: e.target.value });
                    triggerSaveNotification();
                  }}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Materi Pertama untuk Implementasi:
                </label>
                <input
                  type="text"
                  value={actionPlan.firstTopic}
                  onChange={(e) => {
                    onUpdateActionPlan({ ...actionPlan, firstTopic: e.target.value });
                    triggerSaveNotification();
                  }}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* 7 - 14 - 30 Day Concrete Plan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 space-y-2">
                <span className="text-xs font-bold text-blue-900 block">7 HARI PERTAMA: Gunakan Satu Produk</span>
                <textarea
                  value={actionPlan.plan7Days}
                  onChange={(e) => {
                    onUpdateActionPlan({ ...actionPlan, plan7Days: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={4}
                  className="w-full text-xs bg-white border border-blue-200 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2">
                <span className="text-xs font-bold text-amber-900 block">14 HARI: Revisi Berdasarkan Respon Murid</span>
                <textarea
                  value={actionPlan.plan14Days}
                  onChange={(e) => {
                    onUpdateActionPlan({ ...actionPlan, plan14Days: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={4}
                  className="w-full text-xs bg-white border border-amber-200 rounded-lg p-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-2">
                <span className="text-xs font-bold text-emerald-900 block">30 HARI: Bagikan Praktik Baik / MGMP</span>
                <textarea
                  value={actionPlan.plan30Days}
                  onChange={(e) => {
                    onUpdateActionPlan({ ...actionPlan, plan30Days: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={4}
                  className="w-full text-xs bg-white border border-emerald-200 rounded-lg p-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Indikator Bukti Keberhasilan:
                </label>
                <textarea
                  value={actionPlan.successEvidence}
                  onChange={(e) => {
                    onUpdateActionPlan({ ...actionPlan, successEvidence: e.target.value });
                    triggerSaveNotification();
                  }}
                  rows={2}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Jadwal Refleksi Rutin Mandiri:
                </label>
                <input
                  type="text"
                  value={actionPlan.reflectionSchedule}
                  onChange={(e) => {
                    onUpdateActionPlan({ ...actionPlan, reflectionSchedule: e.target.value });
                    triggerSaveNotification();
                  }}
                  className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
