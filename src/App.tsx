import { useState, useEffect } from 'react';
import { TeacherProject, UserRole } from './types';
import { SAMPLE_PROJECT_BIOLOGY } from './data/defaultProject';
import { SAMPLE_PROJECT_MATH } from './data/mathProject';
import { BLANK_PROJECT_TEMPLATE } from './data/blankProject';
import { SESSIONS_DATA } from './data/curriculumData';

import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { SessionViewer } from './components/SessionViewer';
import { WorksheetHub } from './components/WorksheetHub';
import { MpiStudio } from './components/MpiStudio';
import { AiAssistantStudio } from './components/AiAssistantStudio';
import { AssessmentStudio } from './components/AssessmentStudio';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { PortfolioRubric } from './components/PortfolioRubric';
import { FacilitatorGuide } from './components/FacilitatorGuide';

import { Sparkles, Heart, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

const STORAGE_KEY = 'guru_kreator_tpack_project_v1';

export default function App() {
  const [project, setProject] = useState<TeacherProject>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse saved project from localStorage:', e);
    }
    return SAMPLE_PROJECT_BIOLOGY;
  });

  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [userRole, setUserRole] = useState<UserRole>('participant');
  const [worksheetInitialTab, setWorksheetInitialTab] = useState<'ws1' | 'ws2' | 'ws3' | 'rpp' | 'ws4' | 'action_plan'>('ws1');

  // Auto-save to localStorage whenever project changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(project));
    } catch (e) {
      console.warn('Failed to save to localStorage:', e);
    }
  }, [project]);

  // Handle toggling completion of a target product
  const handleToggleProduct = (productId: number) => {
    setProject(prev => {
      const updatedProducts = prev.targetProducts.map(p => 
        p.id === productId ? { ...p, completed: !p.completed } : p
      );
      return { ...prev, targetProducts: updatedProducts, lastUpdated: new Date().toISOString().split('T')[0] };
    });
  };

  // Handle toggling completion of a curriculum session
  const handleToggleCompleteSession = (sessionId: number) => {
    setProject(prev => {
      const exists = prev.completedSessions.includes(sessionId);
      const updatedSessions = exists
        ? prev.completedSessions.filter(id => id !== sessionId)
        : [...prev.completedSessions, sessionId];
      return { ...prev, completedSessions: updatedSessions, lastUpdated: new Date().toISOString().split('T')[0] };
    });
  };

  // Navigate to matching tool from session viewer
  const handleNavigateToTool = (toolKey: string) => {
    if (toolKey === 'ws1' || toolKey === 'ws2' || toolKey === 'ws3' || toolKey === 'rpp' || toolKey === 'testing' || toolKey === 'action_plan') {
      const mappedTab = toolKey === 'testing' ? 'ws4' : toolKey === 'action_plan' ? 'action_plan' : (toolKey as any);
      setWorksheetInitialTab(mappedTab);
      setActiveTab('worksheets');
    } else if (toolKey === 'mpi' || toolKey === 'storyboard') {
      setActiveTab('mpi');
    } else if (toolKey === 'ai' || toolKey === 'visual') {
      setActiveTab('ai');
    } else if (toolKey === 'assessment') {
      setActiveTab('assessment');
    } else if (toolKey === 'showcase') {
      setActiveTab('showcase');
    } else if (toolKey === 'portfolio') {
      setActiveTab('portfolio');
    } else {
      setActiveTab('worksheets');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Load Preset Examples
  const handleLoadExample = (exampleKey: 'biology' | 'math' | 'blank') => {
    if (exampleKey === 'biology') {
      setProject(SAMPLE_PROJECT_BIOLOGY);
    } else if (exampleKey === 'math') {
      setProject(SAMPLE_PROJECT_MATH);
    } else {
      setProject(BLANK_PROJECT_TEMPLATE);
    }
  };

  // Export Project to JSON File
  const handleExportJson = () => {
    const jsonStr = JSON.stringify(project, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `portofolio-tpack-${project.teacherName.replace(/\s+/g, '-').toLowerCase() || 'guru'}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Import Project from JSON File
  const handleImportJson = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target?.result as string);
        if (parsed.teacherName && parsed.ws1) {
          setProject(parsed);
          alert(`Portofolio berhasil dimuat untuk: ${parsed.teacherName}`);
        } else {
          alert('Format file JSON tidak sesuai dengan skema portofolio Guru Kreator TPACK.');
        }
      } catch (err) {
        alert('Gagal membaca file JSON. Pastikan file valid.');
      }
    };
    reader.readAsText(file);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        userRole={userRole}
        onToggleRole={() => setUserRole(prev => prev === 'participant' ? 'facilitator' : 'participant')}
        onExportJson={handleExportJson}
        onImportJson={handleImportJson}
        onPrint={handlePrint}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Role Notice Banner if in Facilitator mode */}
        {userRole === 'facilitator' && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-950 text-white border border-emerald-800 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
              <div className="text-xs">
                <strong className="text-emerald-300 font-bold block">Mode Fasilitator & Asesor Aktif:</strong>
                Anda dapat membimbing alokasi waktu 70-20-10, mengajukan pertanyaan pemantik, dan mengisi rubrik penilaian portofolio produk akhir.
              </div>
            </div>
            <button
              onClick={() => setActiveTab('facilitator')}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-bold text-white transition-colors"
            >
              Buka Pedoman Coach
            </button>
          </div>
        )}

        {/* Tab 1: DASHBOARD */}
        {activeTab === 'dashboard' && (
          <Dashboard
            project={project}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectSession={(sessId) => {
              setActiveTab('sessions');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onToggleProduct={handleToggleProduct}
            onLoadExample={handleLoadExample}
          />
        )}

        {/* Tab 2: 15 SESSIONS */}
        {activeTab === 'sessions' && (
          <SessionViewer
            sessions={SESSIONS_DATA}
            completedSessions={project.completedSessions}
            onToggleCompleteSession={handleToggleCompleteSession}
            onNavigateToTool={handleNavigateToTool}
          />
        )}

        {/* Tab 3: WORKSHEETS HUB */}
        {activeTab === 'worksheets' && (
          <WorksheetHub
            ws1={project.ws1}
            ws2={project.ws2}
            ws3={project.ws3}
            rpp={project.rpp}
            ws4={project.ws4Testing}
            actionPlan={project.actionPlan}
            onUpdateWs1={(ws1) => setProject(p => ({ ...p, ws1 }))}
            onUpdateWs2={(ws2) => setProject(p => ({ ...p, ws2 }))}
            onUpdateWs3={(ws3) => setProject(p => ({ ...p, ws3 }))}
            onUpdateRpp={(rpp) => setProject(p => ({ ...p, rpp }))}
            onUpdateWs4={(ws4Testing) => setProject(p => ({ ...p, ws4Testing }))}
            onUpdateActionPlan={(actionPlan) => setProject(p => ({ ...p, actionPlan }))}
            initialTab={worksheetInitialTab}
          />
        )}

        {/* Tab 4: MPI STUDIO */}
        {activeTab === 'mpi' && (
          <MpiStudio
            screens={project.mpiScreens}
            onUpdateScreens={(screens) => setProject(p => ({ ...p, mpiScreens: screens }))}
            topicTitle={project.ws1.subjectMatter || "Modul MPI"}
          />
        )}

        {/* Tab 5: AI TEACHING ASSISTANT */}
        {activeTab === 'ai' && (
          <AiAssistantStudio
            prompts={project.aiPrompts}
            visualScenes={project.visualScenes}
            onUpdatePrompts={(aiPrompts) => setProject(p => ({ ...p, aiPrompts }))}
            onUpdateVisualScenes={(visualScenes) => setProject(p => ({ ...p, visualScenes }))}
          />
        )}

        {/* Tab 6: DIGITAL ASSESSMENT */}
        {activeTab === 'assessment' && (
          <AssessmentStudio
            assessments={project.assessments}
            onUpdateAssessments={(assessments) => setProject(p => ({ ...p, assessments }))}
          />
        )}

        {/* Tab 7: SHOWCASE & PEER REVIEW */}
        {activeTab === 'showcase' && (
          <ShowcaseGallery
            feedbacks={project.peerFeedbacks}
            onUpdateFeedbacks={(peerFeedbacks) => setProject(p => ({ ...p, peerFeedbacks }))}
            projectName={project.ws1.subjectMatter || "Karya Media Pembelajaran Interaktif"}
            authorName={project.teacherName}
          />
        )}

        {/* Tab 8: PORTFOLIO & FINAL RUBRIC */}
        {activeTab === 'portfolio' && (
          <PortfolioRubric
            project={project}
            scores={project.rubricScores}
            onUpdateScores={(scores) => setProject(p => ({ ...p, rubricScores: scores }))}
          />
        )}

        {/* Tab 9: FACILITATOR GUIDE */}
        {activeTab === 'facilitator' && (
          <FacilitatorGuide />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 sm:px-6 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
              GK
            </div>
            <span className="font-bold text-slate-800">LMS Pelatihan Guru: Digitalisasi Pembelajaran Berbasis TPACK</span>
          </div>

          <div className="text-center italic text-slate-600">
            “Jangan Hanya Menjadi Pengguna Teknologi. Jadilah Guru Kreator.”
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Model Pelatihan Hands-On</span>
            <span>•</span>
            <span>32 Jam Pelajaran</span>
            <span>•</span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Standar Kurikulum Terpadu
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
