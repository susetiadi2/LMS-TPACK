import { useState } from 'react';
import { TRAINING_METADATA } from '../data/curriculumData';
import { 
  Users, 
  Clock, 
  HelpCircle, 
  CheckCircle, 
  Flame, 
  ShieldAlert, 
  Lightbulb, 
  Compass, 
  Sparkles,
  GitPullRequest
} from 'lucide-react';

export const FacilitatorGuide = () => {
  const [activeSessionTimer, setActiveSessionTimer] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {/* Facilitator Cockpit Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-800">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            <Users className="w-3.5 h-3.5" /> Ruang Kendali & Panduan Instruktur / Fasilitator
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Pedoman Fasilitasi: "Coach, Bukan Operator"
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Fasilitator bertugas memandu proses berpikir kritis guru (coaching) agar setiap keputusan teknologi didasari oleh kebutuhan pedagogis materi riil mereka, bukan mendikte atau mengerjakan produk mereka.
          </p>
        </div>
      </div>

      {/* 70 - 20 - 10 Time Ratio Monitor */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-slate-900">Distribusi Alokasi Waktu Emas Pelatihan</h3>
            <p className="text-xs text-slate-500">Prinsip dasar hands-on: peserta harus lebih banyak berproduksi daripada mendengarkan</p>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
            Rasio 70 : 20 : 10
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TRAINING_METADATA.philosophy.timeDistribution.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-2 relative overflow-hidden"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-black text-slate-900 font-mono">
                  {item.percentage}%
                </span>
                <span className="text-xs font-bold text-indigo-700">{item.label}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              <div className="w-full bg-slate-200 h-1.5 rounded-full mt-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Pemantik Kunci Coaching Fasilitator */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <HelpCircle className="w-5 h-5 text-indigo-600" />
          <div>
            <h3 className="text-base font-bold text-slate-900">Tiga Pertanyaan Pemantik Emas Saat Bimbingan</h3>
            <p className="text-xs text-slate-500">Gunakan pertanyaan ini ketika peserta mengalami kebuntuan atau kebingungan arah</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block">
              1. Fokus Konten & Capaian:
            </span>
            <strong className="text-slate-900 text-sm block">"Tujuan belajarnya apa?"</strong>
            <p className="text-slate-600">
              Mengingatkan guru bahwa teknologi tidak boleh mengaburkan kompetensi esensial materi yang wajib dikuasai siswa.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
              2. Fokus Aktivitas Siswa:
            </span>
            <strong className="text-slate-900 text-sm block">"Apa yang dilakukan siswa?"</strong>
            <p className="text-slate-600">
              Memastikan siswa aktif berpikir, memanipulasi data, atau bereksplorasi (bukan sekadar pasif menonton layar menyala).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
              3. Justifikasi Teknologi:
            </span>
            <strong className="text-slate-900 text-sm block">"Mengapa teknologi ini diperlukan?"</strong>
            <p className="text-slate-600">
              Menantang apakah perangkat digital benar-benar memecahkan masalah atau hanya gimmick kosmetik yang bisa digantikan papan tulis.
            </p>
          </div>
        </div>
      </div>

      {/* 7 Prinsip Fasilitasi (Bagian F) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          7 Prinsip Fasilitasi Guru Kreator (Bagian F Modul)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {TRAINING_METADATA.facilitationPrinciples.map((prin, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 flex items-start gap-2.5"
            >
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-slate-700 leading-relaxed">{prin}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap Keterkaitan (Bagian G) */}
      <div className="bg-indigo-50/50 border border-indigo-200 rounded-2xl p-6 text-xs space-y-3">
        <div className="flex items-center gap-2 text-sm font-bold text-indigo-950">
          <GitPullRequest className="w-4 h-4 text-indigo-700" />
          Keterkaitan dengan Roadmap Asal Pelatihan (Bagian G)
        </div>
        <p className="text-slate-700 leading-relaxed">
          Modul ini mempertahankan urutan praktik dari roadmap: <em>Mindset → Why Digital → Digital Learning Framework → Media Interaktif → Workshop Produksi → AI → Storyboard → Produksi Visual/Video → Integrasi → Showcase → Action Plan</em>.
        </p>
        <div className="p-3 bg-white rounded-xl border border-indigo-100 text-slate-800 font-medium">
          ✨ <strong>Penguatan Kunci Modul:</strong> Memperkuat integrasi TPACK riil, rancangan Modul Ajar terpadu, asesmen digital dengan feedback otomatis, validasi buta, dan siklus uji coba–revisi agar produk utama benar-benar siap digunakan besok pagi di ruang kelas nyata.
        </div>
      </div>
    </div>
  );
};
