import { useState } from 'react';
import { Sparkles, BookOpen, Cpu, GraduationCap, CheckCircle2 } from 'lucide-react';

interface TpackDiagramProps {
  activeDomain?: string;
  onSelectDomain?: (domain: string) => void;
  ckText?: string;
  pkText?: string;
  tkText?: string;
  tpackText?: string;
}

export const TpackDiagram = ({
  activeDomain: initialDomain = 'TPACK',
  onSelectDomain,
  ckText,
  pkText,
  tkText,
  tpackText,
}: TpackDiagramProps) => {
  const [selected, setSelected] = useState<string>(initialDomain);

  const handleSelect = (domain: string) => {
    setSelected(domain);
    if (onSelectDomain) {
      onSelectDomain(domain);
    }
  };

  const domainInfo: Record<string, { title: string; subtitle: string; color: string; desc: string; sample: string }> = {
    CK: {
      title: "CK (Content Knowledge)",
      subtitle: "Pengetahuan Konten / Substansi Materi",
      color: "bg-emerald-500 text-white border-emerald-600",
      desc: "Pemahaman mendalam mengenai fakta, konsep, teori, dan struktur disiplin ilmu yang diajarkan tanpa distorsi ilmiah.",
      sample: ckText || "Anatomi 4 ruang jantung, perbedaan sirkulasi darah besar vs kecil, pertukaran O2 dan CO2."
    },
    PK: {
      title: "PK (Pedagogical Knowledge)",
      subtitle: "Pengetahuan Pedagogik / Strategi Mengajar",
      color: "bg-blue-500 text-white border-blue-600",
      desc: "Pengetahuan tentang proses, metode, pengelolaan kelas, tahapan perkembangan siswa, dan strategi asesmen.",
      sample: pkText || "Model Problem-Based Learning, siklus inkuiri Before-During-After, diskusi terpandu."
    },
    TK: {
      title: "TK (Technological Knowledge)",
      subtitle: "Pengetahuan Teknologi / Perangkat Digital",
      color: "bg-purple-500 text-white border-purple-600",
      desc: "Kemampuan mengoperasikan teknologi digital, software, aplikasi simulasi, browser, dan alat bantu digital lainnya.",
      sample: tkText || "Media Pembelajaran Interaktif (MPI) web-based, slider dinamis, kuis otomatis."
    },
    PCK: {
      title: "PCK (Pedagogical Content Knowledge)",
      subtitle: "Irisan Pedagogi & Konten",
      color: "bg-teal-600 text-white border-teal-700",
      desc: "Cara terbaik menyajikan konsep konten materi agar mudah dipahami siswa melalui strategi pedagogis yang tepat.",
      sample: "Menggunakan analogi dua pompa air sirkuit tertutup untuk menjelaskan cara kerja bilik kiri dan kanan."
    },
    TCK: {
      title: "TCK (Technological Content Knowledge)",
      subtitle: "Irisan Teknologi & Konten",
      color: "bg-indigo-600 text-white border-indigo-700",
      desc: "Bagaimana teknologi merepresentasikan konsep materi secara akurat (misal: simulasi warna molekul darah).",
      sample: "Animasi perubahan gradasi warna merah-biru yang merepresentasikan kadar oksigen saat melewati alveolus."
    },
    TPK: {
      title: "TPK (Technological Pedagogical Knowledge)",
      subtitle: "Irisan Teknologi & Pedagogi",
      color: "bg-violet-600 text-white border-violet-700",
      desc: "Bagaimana teknologi mengubah dan memperkuat pengalaman belajar (misal: interaktivitas mandiri siswa).",
      sample: "Memberikan kontrol mandiri kepada siswa mengeksplorasi kecepatan simulasi sebelum diskusi kelas."
    },
    TPACK: {
      title: "TPACK (Technological Pedagogical Content Knowledge)",
      subtitle: "Puncak Harmoni Ketiga Domain",
      color: "bg-amber-500 text-slate-900 border-amber-600",
      desc: "Integrasi menyeluruh di mana teknologi, pedagogi, dan konten bersinergi menciptakan pengalaman belajar yang transformatif.",
      sample: tpackText || "Siswa memecahkan masalah sirkulasi ganda melalui simulasi MPI mandiri, menguji hipotesis, dan menerima feedback formatif instan."
    }
  };

  const current = domainInfo[selected] || domainInfo['TPACK'];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 mb-1">
            <Sparkles className="w-3.5 h-3.5" /> Model Teoretis TPACK
          </div>
          <h3 className="text-lg font-bold text-slate-900">Peta Konseptual Kerangka Kerja TPACK</h3>
          <p className="text-xs text-slate-500">Klik setiap lingkaran atau irisan untuk memahami peran masing-masing domain pembelajaran</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {Object.keys(domainInfo).map(key => (
            <button
              key={key}
              onClick={() => handleSelect(key)}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                selected === key
                  ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-200'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-6">
        {/* SVG Interactive Venn Diagram */}
        <div className="lg:col-span-6 flex items-center justify-center p-2">
          <div className="relative w-full max-w-[360px] aspect-square">
            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-sm select-none">
              {/* Outer Context Circle */}
              <circle
                cx="200"
                cy="200"
                r="190"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="opacity-60"
              />
              <text x="200" y="24" textAnchor="middle" className="text-[11px] font-bold fill-slate-500 uppercase tracking-wider">
                Konteks Pembelajaran (Siswa, Sekolah & Lingkungan)
              </text>

              {/* TK Circle (Top-Left, Purple) */}
              <circle
                cx="155"
                cy="165"
                r="95"
                fill="#a855f7"
                fillOpacity={selected === 'TK' || selected === 'TPACK' ? '0.35' : '0.18'}
                stroke="#9333ea"
                strokeWidth={selected === 'TK' ? '3' : '1.5'}
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => handleSelect('TK')}
              />

              {/* PK Circle (Top-Right, Blue) */}
              <circle
                cx="245"
                cy="165"
                r="95"
                fill="#3b82f6"
                fillOpacity={selected === 'PK' || selected === 'TPACK' ? '0.35' : '0.18'}
                stroke="#2563eb"
                strokeWidth={selected === 'PK' ? '3' : '1.5'}
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => handleSelect('PK')}
              />

              {/* CK Circle (Bottom-Center, Emerald) */}
              <circle
                cx="200"
                cy="245"
                r="95"
                fill="#10b981"
                fillOpacity={selected === 'CK' || selected === 'TPACK' ? '0.35' : '0.18'}
                stroke="#059669"
                strokeWidth={selected === 'CK' ? '3' : '1.5'}
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => handleSelect('CK')}
              />

              {/* Labels for Primary Domains */}
              <text
                x="115"
                y="130"
                className="text-[15px] font-extrabold fill-purple-900 cursor-pointer"
                onClick={() => handleSelect('TK')}
              >
                TK
              </text>
              <text
                x="285"
                y="130"
                className="text-[15px] font-extrabold fill-blue-900 cursor-pointer"
                onClick={() => handleSelect('PK')}
              >
                PK
              </text>
              <text
                x="200"
                y="315"
                textAnchor="middle"
                className="text-[15px] font-extrabold fill-emerald-900 cursor-pointer"
                onClick={() => handleSelect('CK')}
              >
                CK
              </text>

              {/* Intersections Labels */}
              <text
                x="200"
                y="145"
                textAnchor="middle"
                className="text-[12px] font-bold fill-violet-900 cursor-pointer hover:underline"
                onClick={() => handleSelect('TPK')}
              >
                TPK
              </text>
              <text
                x="145"
                y="225"
                textAnchor="middle"
                className="text-[12px] font-bold fill-indigo-900 cursor-pointer hover:underline"
                onClick={() => handleSelect('TCK')}
              >
                TCK
              </text>
              <text
                x="255"
                y="225"
                textAnchor="middle"
                className="text-[12px] font-bold fill-teal-900 cursor-pointer hover:underline"
                onClick={() => handleSelect('PCK')}
              >
                PCK
              </text>

              {/* Central TPACK Heart */}
              <ellipse
                cx="200"
                cy="195"
                rx="35"
                ry="25"
                fill="#f59e0b"
                fillOpacity={selected === 'TPACK' ? '0.9' : '0.6'}
                stroke="#d97706"
                strokeWidth={selected === 'TPACK' ? '3' : '1.5'}
                className="cursor-pointer animate-pulse transition-all"
                onClick={() => handleSelect('TPACK')}
              />
              <text
                x="200"
                y="199"
                textAnchor="middle"
                className="text-[13px] font-black fill-slate-950 cursor-pointer tracking-wider"
                onClick={() => handleSelect('TPACK')}
              >
                TPACK
              </text>
            </svg>
          </div>
        </div>

        {/* Detail Card for Selected Domain */}
        <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${current.color}`}>
              {selected}
            </span>
            <span className="text-sm font-semibold text-slate-800">{current.subtitle}</span>
          </div>

          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            {current.desc}
          </p>

          <div className="bg-white rounded-lg p-3.5 border border-slate-200">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Implementasi pada Materi Guru:
            </div>
            <div className="text-xs text-slate-600 leading-relaxed whitespace-pre-line font-mono bg-slate-50 p-2.5 rounded border border-slate-100">
              {current.sample}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Formula: <strong>Mishra & Koehler (2006)</strong></span>
            <span className="text-indigo-600 font-medium">Sesi 3 & Lembar Kerja 2</span>
          </div>
        </div>
      </div>
    </div>
  );
};
