import { useState } from 'react';
import { TeacherProject, TargetProduct } from '../types';
import { TRAINING_METADATA } from '../data/curriculumData';
import { 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Award, 
  Layers, 
  Cpu, 
  Users, 
  Play, 
  FolderDown, 
  RotateCcw,
  Clock,
  Compass
} from 'lucide-react';

interface DashboardProps {
  project: TeacherProject;
  onNavigateTab: (tabKey: string) => void;
  onSelectSession: (sessionId: number) => void;
  onToggleProduct: (productId: number) => void;
  onLoadExample: (exampleKey: 'biology' | 'math' | 'blank') => void;
}

export const Dashboard = ({
  project,
  onNavigateTab,
  onSelectSession,
  onToggleProduct,
  onLoadExample
}: DashboardProps) => {
  const completedProductsCount = project.targetProducts.filter(p => p.completed).length;
  const productPercentage = Math.round((completedProductsCount / 12) * 100);
  const sessionPercentage = Math.round((project.completedSessions.length / 15) * 100);

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white p-6 sm:p-10 shadow-xl border border-slate-800">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{TRAINING_METADATA.model}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Digitalisasi Pembelajaran Berbasis TPACK
          </h1>

          <p className="text-base sm:text-lg text-amber-300 font-semibold italic">
            “{TRAINING_METADATA.tagline}”
          </p>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Selamat datang, <strong className="text-white">{project.teacherName}</strong> ({project.teacherSchool}). Pelatihan ini dirancang berbasis praktik-produksi. Peserta membawa 1 materi nyata, mengubahnya secara bertahap menjadi desain TPACK, RPP operasional, Media Pembelajaran Interaktif (MPI), asesmen digital, hingga rencana aksi 30 hari.
          </p>

          {/* Quick Actions & Preset Selector */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateTab('sessions')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <span>Mulai Belajar (15 Sesi)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigateTab('mpi')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 hover:bg-slate-700/80 text-white rounded-xl text-xs font-bold border border-slate-700 transition-all"
            >
              <Play className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>Simulator MPI (8 Layar)</span>
            </button>

            <button
              onClick={() => onNavigateTab('portfolio')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 hover:bg-slate-700/80 text-amber-300 rounded-xl text-xs font-bold border border-slate-700 transition-all"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Rubrik & Sertifikat 32 JP</span>
            </button>

            {/* Presets */}
            <div className="flex items-center gap-1.5 ml-auto text-[11px] bg-slate-900/90 p-1 rounded-xl border border-slate-800">
              <span className="text-slate-400 px-2 font-mono">Contoh:</span>
              <button
                onClick={() => onLoadExample('biology')}
                className="px-2.5 py-1 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-blue-200 transition-colors font-medium"
              >
                IPA Biologi
              </button>
              <button
                onClick={() => onLoadExample('math')}
                className="px-2.5 py-1 rounded-lg bg-purple-900/60 hover:bg-purple-800 text-purple-200 transition-colors font-medium"
              >
                Matematika
              </button>
              <button
                onClick={() => onLoadExample('blank')}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors font-medium"
              >
                Proyek Baru
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Graphic Backdrop */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-10 translate-y-10">
          <Layers className="w-96 h-96 text-white" />
        </div>
      </div>

      {/* Progress & 70-20-10 Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Products Completed */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              12 Target Produk
            </span>
            <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
              {completedProductsCount} / 12 Selesai
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900 font-mono">
              {productPercentage}%
            </span>
            <span className="text-xs text-slate-500">Kesiapan Artefak Portofolio</span>
          </div>

          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-blue-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${productPercentage}%` }}
            ></div>
          </div>
          <p className="text-[11px] text-slate-500">
            Setiap artefak saling terhubung dan menjadi bahan untuk sesi berikutnya.
          </p>
        </div>

        {/* Sessions Completed */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Kurikulum 15 Sesi
            </span>
            <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
              {project.completedSessions.length} / 15 Sesi
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900 font-mono">
              {sessionPercentage}%
            </span>
            <span className="text-xs text-slate-500">Penyelesaian Siklus Pelatihan</span>
          </div>

          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${sessionPercentage}%` }}
            ></div>
          </div>
          <p className="text-[11px] text-slate-500">
            Pola konsisten: BRIEF → DEMO → DO → SHARE → REVISE.
          </p>
        </div>

        {/* 70/20/10 Rule */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Filosofi Waktu
            </span>
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
              Hands-On
            </span>
          </div>

          <div className="flex items-center justify-between text-xs font-bold pt-1">
            <span className="text-blue-700">70% Praktik</span>
            <span className="text-amber-700">20% Diskusi</span>
            <span className="text-emerald-700">10% Konsep</span>
          </div>

          <div className="w-full flex h-2 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full" style={{ width: '70%' }}></div>
            <div className="bg-amber-500 h-full" style={{ width: '20%' }}></div>
            <div className="bg-emerald-500 h-full" style={{ width: '10%' }}></div>
          </div>

          <p className="text-[11px] text-slate-500">
            Maksimal paparan konsep 10-15 menit, langsung diikuti praktik produksi.
          </p>
        </div>
      </div>

      {/* 12 Target Products Checklist Matrix (Bagian B Modul) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Bagian B Modul Pelatihan
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Matriks 12 Target Produk / Artefak Peserta
            </h2>
            <p className="text-xs text-slate-500">
              Setiap produk memiliki kriteria minimal yang wajib dipenuhi sebelum melanjutkan ke sesi berikutnya
            </p>
          </div>

          <button
            onClick={() => onNavigateTab('worksheets')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors self-start sm:self-auto"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Buka Seluruh Lembar Kerja</span>
          </button>
        </div>

        {/* Products Table Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.targetProducts.map((prod) => (
            <div
              key={prod.id}
              className={`p-4 rounded-2xl border transition-all space-y-2.5 flex flex-col justify-between ${
                prod.completed
                  ? 'bg-emerald-50/50 border-emerald-200/90'
                  : 'bg-slate-50/60 border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-5 h-5 rounded-md bg-slate-200/80 text-slate-700 font-bold text-[10px] flex items-center justify-center font-mono">
                    #{prod.id}
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                    Sesi {prod.sessionNumber}
                  </span>
                </div>

                <h3 className="text-xs font-bold text-slate-900">
                  {prod.name}
                </h3>

                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  <span className="font-semibold text-slate-700">Kriteria:</span> {prod.minCriteria}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                <button
                  onClick={() => onToggleProduct(prod.id)}
                  className={`flex items-center gap-1 text-[11px] font-semibold transition-colors ${
                    prod.completed ? 'text-emerald-700' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {prod.completed ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Selesai & Valid
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4 text-slate-400" /> Belum Selesai
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    if (prod.id === 1) onNavigateTab('worksheets');
                    else if (prod.id === 2) onNavigateTab('worksheets');
                    else if (prod.id === 3) onNavigateTab('worksheets');
                    else if (prod.id === 4) onNavigateTab('worksheets');
                    else if (prod.id === 5 || prod.id === 6 || prod.id === 10) onNavigateTab('mpi');
                    else if (prod.id === 7) onNavigateTab('ai');
                    else if (prod.id === 8) onNavigateTab('assessment');
                    else if (prod.id === 9) onNavigateTab('worksheets');
                    else if (prod.id === 11) onNavigateTab('showcase');
                    else if (prod.id === 12) onNavigateTab('worksheets');
                  }}
                  className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-0.5"
                >
                  Buka Artefak <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
