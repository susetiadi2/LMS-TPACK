import { useState } from 'react';
import confetti from 'canvas-confetti';
import { FinalRubricScores, TeacherProject } from '../types';
import { FINAL_RUBRIC_CONFIG } from '../data/curriculumData';
import { 
  Award, 
  CheckCircle2, 
  FileCheck, 
  Download, 
  Printer, 
  Sparkles, 
  Star, 
  User, 
  QrCode, 
  Check, 
  SlidersHorizontal,
  FolderArchive
} from 'lucide-react';

interface PortfolioRubricProps {
  project: TeacherProject;
  scores: FinalRubricScores;
  onUpdateScores: (scores: FinalRubricScores) => void;
}

export const PortfolioRubric = ({
  project,
  scores,
  onUpdateScores
}: PortfolioRubricProps) => {
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [assessorNotes, setAssessorNotes] = useState(scores.assessorNotes || "");

  // Score mapping
  const currentScores: Record<string, number> = {
    goalAlignment: scores.goalAlignmentScore,
    pedagogy: scores.pedagogyScore,
    content: scores.contentScore,
    technologyTpack: scores.technologyTpackScore,
    interactivityAssessment: scores.interactivityAssessmentScore
  };

  const handleScoreChange = (rubricId: string, val: number) => {
    const updated = { ...scores };
    if (rubricId === 'goalAlignment') updated.goalAlignmentScore = val;
    if (rubricId === 'pedagogy') updated.pedagogyScore = val;
    if (rubricId === 'content') updated.contentScore = val;
    if (rubricId === 'technologyTpack') updated.technologyTpackScore = val;
    if (rubricId === 'interactivityAssessment') updated.interactivityAssessmentScore = val;
    onUpdateScores(updated);
  };

  // Weighted total score (each is 20%, maximum is 4 points each -> 4 * 5 = 20 max total -> score / 20 * 100)
  const totalScoreVal = Object.values(currentScores).reduce((a, b) => a + b, 0);
  const percentageScore = Math.round((totalScoreVal / 20) * 100);

  const getPredicate = (pct: number) => {
    if (pct >= 90) return { label: "Sangat Baik (A) - Guru Kreator Paripurna", color: "text-emerald-700 bg-emerald-50 border-emerald-200" };
    if (pct >= 80) return { label: "Baik (B) - Guru Kreator Kompeten", color: "text-blue-700 bg-blue-50 border-blue-200" };
    if (pct >= 70) return { label: "Cukup (C) - Perlu Revisi Mandiri", color: "text-amber-700 bg-amber-50 border-amber-200" };
    return { label: "Kurang (D) - Wajib Remedi", color: "text-rose-700 bg-rose-50 border-rose-200" };
  };

  const predicate = getPredicate(percentageScore);

  const handleOpenCertificate = () => {
    setShowCertificateModal(true);
    // Fire confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Confetti fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Sesi 13 & Bagian E: Evaluasi Portofolio & Rubrik Penilaian Akhir
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">
            Rubrik Penilaian Produk Akhir Guru Kreator TPACK
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            5 Aspek Inti berbobot sama 20% masing-masing dengan rentang skor 1 (Kurang) hingga 4 (Sangat Baik).
          </p>
        </div>

        <button
          onClick={handleOpenCertificate}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black rounded-xl text-xs shadow-md shadow-amber-500/20 transition-all hover:scale-105 active:scale-95 self-start md:self-auto"
        >
          <Award className="w-4 h-4" /> Buka Sertifikat Kelulusan (32 JP)
        </button>
      </div>

      {/* Score Summary Cockpit */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center lg:text-left">
          <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider">
            Hasil Penilaian Terpadu Artefak Pelatihan
          </span>
          <h3 className="text-2xl font-black text-white">{project.teacherName}</h3>
          <p className="text-xs text-slate-300">
            {project.teacherSchool} • Topik: <strong>{project.ws1.subjectMatter}</strong>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="bg-slate-800/80 px-5 py-3 rounded-2xl border border-slate-700 text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-mono">Total Akumulasi</span>
            <span className="text-3xl font-black text-amber-400 font-mono">{totalScoreVal} / 20</span>
          </div>

          <div className="bg-slate-800/80 px-6 py-3 rounded-2xl border border-slate-700 text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-mono">Nilai Akhir (0-100)</span>
            <span className="text-3xl font-black text-emerald-400 font-mono">{percentageScore}</span>
          </div>

          <div className="bg-slate-800/80 px-4 py-3 rounded-2xl border border-slate-700 text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-mono">Status Kelulusan</span>
            <span className="text-xs font-bold text-white block mt-1">{predicate.label}</span>
          </div>
        </div>
      </div>

      {/* 5 Aspects Rubric Cards */}
      <div className="space-y-4">
        {FINAL_RUBRIC_CONFIG.map((rubric, idx) => {
          const selectedScore = currentScores[rubric.id] || 4;

          return (
            <div
              key={rubric.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-800 text-sm font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900">{rubric.aspect}</h4>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        Bobot {rubric.weight}%
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{rubric.indicator}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 self-end sm:self-auto">
                  <span className="text-xs font-bold text-slate-600 mr-2">Skor:</span>
                  {[1, 2, 3, 4].map((s) => (
                    <button
                      key={s}
                      onClick={() => handleScoreChange(rubric.id, s)}
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                        selectedScore === s
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 ring-2 ring-blue-300 scale-105'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Descriptor Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                {rubric.criteria.map((c) => (
                  <div
                    key={c.level}
                    onClick={() => handleScoreChange(rubric.id, c.level)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      selectedScore === c.level
                        ? 'bg-blue-50/80 border-blue-400 text-blue-950 font-medium shadow-xs ring-1 ring-blue-300'
                        : 'bg-slate-50/60 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-[11px] uppercase tracking-wide text-slate-700">
                        {c.label}
                      </span>
                      {selectedScore === c.level && (
                        <Check className="w-3.5 h-3.5 text-blue-600" />
                      )}
                    </div>
                    <p className="text-[11px] leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Assessor Feedback Notes */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
        <label className="block text-xs font-bold text-slate-900">
          Catatan & Rekomendasi Fasilitator / Asesor Portofolio:
        </label>
        <textarea
          value={assessorNotes}
          onChange={(e) => {
            setAssessorNotes(e.target.value);
            onUpdateScores({ ...scores, assessorNotes: e.target.value });
          }}
          rows={3}
          placeholder="Tuliskan catatan apresiasi dan rekomendasi perbaikan untuk guru..."
          className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none leading-relaxed"
        />
      </div>

      {/* OFFICIAL CERTIFICATE MODAL */}
      {showCertificateModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-4xl w-full p-4 sm:p-8 space-y-6 my-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Pratinjau Sertifikat Pelatihan Resmi (32 Jam Pelajaran)
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
                >
                  <Printer className="w-3.5 h-3.5" /> Cetak / Simpan PDF
                </button>
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="text-slate-400 hover:text-slate-600 font-bold p-1 text-base"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Certificate Frame */}
            <div className="border-8 border-double border-amber-600/40 rounded-2xl p-6 sm:p-10 bg-gradient-to-b from-amber-50/30 via-white to-amber-50/20 text-center relative overflow-hidden shadow-inner">
              {/* Corner Ornaments */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-600"></div>
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-600"></div>
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-600"></div>
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-600"></div>

              {/* Header */}
              <div className="space-y-1 mb-6">
                <div className="text-[11px] font-bold tracking-widest text-slate-600 uppercase">
                  PROGRAM PENGEMBANGAN KEPROFESIAN BERKELANJUTAN GURU
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-wide uppercase font-serif">
                  SERTIFIKAT KELULUSAN
                </h1>
                <div className="text-xs font-mono text-amber-800">
                  Nomor: 800/TPACK-GK/X/{new Date().getFullYear()}/042
                </div>
              </div>

              <div className="space-y-4 max-w-2xl mx-auto my-6 text-sm text-slate-700">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Diberikan dengan hormat kepada:
                </p>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-950 font-serif border-b-2 border-slate-200 pb-2 inline-block px-8">
                  {project.teacherName}
                </h2>

                <p className="text-xs text-slate-600">
                  Unit Kerja: <strong>{project.teacherSchool}</strong>
                </p>

                <p className="text-xs leading-relaxed max-w-xl mx-auto pt-2">
                  Telah dinyatakan <strong>LULUS DENGAN PREDIKAT {predicate.label.toUpperCase()}</strong> (Skor: {percentageScore}/100) pada kegiatan:
                </p>

                <div className="p-3 bg-amber-100/50 rounded-xl border border-amber-300/80 font-bold text-slate-900 text-sm">
                  PELATIHAN GURU: DIGITALISASI PEMBELAJARAN BERBASIS TPACK<br />
                  <span className="text-xs font-normal text-slate-600 italic">
                    "Model Pelatihan Hands-On / Learning by Doing (Pola 15 Sesi & 12 Target Produk)"
                  </span>
                </div>

                <p className="text-xs text-slate-500">
                  Diselenggarakan secara terstruktur setara <strong>32 Jam Pelajaran (JP)</strong>.
                </p>
              </div>

              {/* Signatures & QR */}
              <div className="grid grid-cols-3 items-end pt-8 mt-6 border-t border-slate-200 text-xs">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-slate-100 border border-slate-300 rounded-lg flex items-center justify-center p-1 mb-1">
                    <QrCode className="w-full h-full text-slate-800" />
                  </div>
                  <span className="text-[10px] text-slate-400 block font-mono">Verifikasi Resmi</span>
                </div>

                <div></div>

                <div className="text-center space-y-1">
                  <div className="text-[11px] text-slate-500">Ditetapkan pada, 07 Oktober 2026</div>
                  <div className="font-serif italic text-base text-indigo-900 font-bold py-2">
                    Dr. Hendra Gunawan, M.Ed.
                  </div>
                  <div className="text-[11px] font-bold text-slate-800">Master Fasilitator TPACK Nasional</div>
                  <div className="text-[10px] text-slate-500 font-mono">NIP. 19780512 200212 1 003</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
