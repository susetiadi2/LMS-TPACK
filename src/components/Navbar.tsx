import { useState, useRef } from 'react';
import { UserRole } from '../types';
import { 
  Sparkles, 
  Layers, 
  BookOpen, 
  FileText, 
  Play, 
  Wand2, 
  Target, 
  Users, 
  Award, 
  Compass, 
  Download, 
  Upload, 
  Printer, 
  Menu, 
  X,
  CheckCircle2
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  userRole: UserRole;
  onToggleRole: () => void;
  onExportJson: () => void;
  onImportJson: (file: File) => void;
  onPrint: () => void;
}

export const Navbar = ({
  activeTab,
  onSelectTab,
  userRole,
  onToggleRole,
  onExportJson,
  onImportJson,
  onPrint
}: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const navLinks = [
    { key: 'dashboard', label: 'Dashboard', icon: Layers },
    { key: 'sessions', label: '15 Sesi Kurikulum', icon: BookOpen },
    { key: 'worksheets', label: 'Lembar Kerja (WS)', icon: FileText },
    { key: 'mpi', label: 'Simulator MPI (8 Layar)', icon: Play },
    { key: 'ai', label: 'AI Teaching Assistant', icon: Wand2 },
    { key: 'assessment', label: 'Asesmen Digital', icon: Target },
    { key: 'showcase', label: 'Gallery Walk', icon: Users },
    { key: 'portfolio', label: 'Portofolio & Rubrik', icon: Award },
    { key: 'facilitator', label: 'Panduan Coach', icon: Compass },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImportJson(file);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro announcement bar */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-semibold text-white">LMS GURU KREATOR TPACK</span>
          <span className="hidden sm:inline text-slate-400">•</span>
          <span className="hidden sm:inline italic text-amber-300">
            “Jangan Hanya Menjadi Pengguna Teknologi. Jadilah Guru Kreator.”
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Role Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-800 px-2 py-0.5 rounded-lg border border-slate-700">
            <span className="text-[10px] text-slate-400">Mode:</span>
            <button
              onClick={onToggleRole}
              className={`text-[10px] font-bold px-2 py-0.5 rounded transition-all ${
                userRole === 'participant'
                  ? 'bg-blue-600 text-white'
                  : 'bg-emerald-600 text-white'
              }`}
            >
              {userRole === 'participant' ? 'Guru Pembelajar' : 'Fasilitator / Coach'}
            </button>
          </div>

          {/* Quick Import / Export */}
          <div className="hidden md:flex items-center gap-2 border-l border-slate-700 pl-3">
            <button
              onClick={onExportJson}
              title="Cadangkan Portofolio ke File JSON"
              className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Download className="w-3 h-3" />
              <span>Ekspor</span>
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              title="Pulihkan Portofolio dari File JSON"
              className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Upload className="w-3 h-3" />
              <span>Impor</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".json"
              className="hidden"
            />
            <button
              onClick={onPrint}
              title="Cetak Berkas"
              className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Printer className="w-3 h-3" />
              <span>Cetak</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Brand */}
        <div
          onClick={() => onSelectTab('dashboard')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white flex items-center justify-center font-black shadow-md shadow-indigo-600/20 group-hover:scale-105 transition-all">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5">
              <span>Guru Kreator</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold">
                TPACK
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              Model Pelatihan Berbasis Hands-On
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.key;

            return (
              <button
                key={link.key}
                onClick={() => onSelectTab(link.key)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Mobile / Tablet Menu Button */}
        <div className="xl:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white p-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.key;

            return (
              <button
                key={link.key}
                onClick={() => {
                  onSelectTab(link.key);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{link.label}</span>
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 flex items-center justify-around text-xs text-slate-600">
            <button onClick={onExportJson} className="flex items-center gap-1 py-1 px-2">
              <Download className="w-3.5 h-3.5" /> Ekspor JSON
            </button>
            <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-1 py-1 px-2">
              <Upload className="w-3.5 h-3.5" /> Impor JSON
            </button>
            <button onClick={onPrint} className="flex items-center gap-1 py-1 px-2">
              <Printer className="w-3.5 h-3.5" /> Cetak
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
