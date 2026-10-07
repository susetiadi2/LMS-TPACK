import { useState } from 'react';
import { PeerReviewFeedback } from '../types';
import { 
  Users, 
  MessageSquare, 
  Star, 
  CheckCircle, 
  Plus, 
  Share2, 
  Sparkles, 
  Lightbulb, 
  ThumbsUp, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';

interface ShowcaseGalleryProps {
  feedbacks: PeerReviewFeedback[];
  onUpdateFeedbacks: (feedbacks: PeerReviewFeedback[]) => void;
  projectName: string;
  authorName: string;
}

export const ShowcaseGallery = ({
  feedbacks,
  onUpdateFeedbacks,
  projectName,
  authorName
}: ShowcaseGalleryProps) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newReviewerName, setNewReviewerName] = useState("");
  const [newReviewerRole, setNewReviewerRole] = useState("Guru Penguji / Rekan Sejawat");
  const [newInteresting, setNewInteresting] = useState("");
  const [newImprovement, setNewImprovement] = useState("");
  const [newPotential, setNewPotential] = useState("");

  const handleTogglePriority = (id: string) => {
    const updated = feedbacks.map(f => {
      if (f.id === id) {
        return { ...f, selectedAsPriorityByAuthor: !f.selectedAsPriorityByAuthor };
      }
      return f;
    });
    onUpdateFeedbacks(updated);
  };

  const handleAddFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewerName || !newInteresting || !newImprovement) return;

    const newFeedback: PeerReviewFeedback = {
      id: `fb-${Date.now()}`,
      reviewerName: newReviewerName,
      reviewerRole: newReviewerRole,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
      interestingPoints: newInteresting,
      improvementPoints: newImprovement,
      usagePotential: newPotential || "Sangat relevan untuk diadopsi di kelas.",
      selectedAsPriorityByAuthor: false
    };

    onUpdateFeedbacks([newFeedback, ...feedbacks]);
    setShowAddModal(false);
    setNewReviewerName("");
    setNewInteresting("");
    setNewImprovement("");
    setNewPotential("");
  };

  const priorityCount = feedbacks.filter(f => f.selectedAsPriorityByAuthor).length;

  return (
    <div className="space-y-6">
      {/* Gallery Walk Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Sesi 14: Gallery Walk / Showcase Pameran Karya
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">
            Pameran Karya & Kartu Umpan Balik Rekan Sejawat
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            "Prinsip feedback berkualitas: Spesifik, Konstruktif, dan Dapat Ditindaklanjuti. Pemilik karya memilih 2 masukan prioritas."
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-600/30 transition-all self-start md:self-auto"
        >
          <Plus className="w-4 h-4" /> Tulis Kartu Feedback Baru
        </button>
      </div>

      {/* Author Showcase Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono text-indigo-300 uppercase tracking-wider">
            Karya Guru Kreator yang Dipajang
          </span>
          <h3 className="text-lg font-bold text-white">{projectName}</h3>
          <p className="text-xs text-slate-300">Karya Inovasi oleh: <strong>{authorName}</strong></p>
        </div>

        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-xs">
          <div className="text-slate-400">Status Masukan Prioritas:</div>
          <div className="font-bold text-amber-400 mt-0.5">
            {priorityCount} / 2 Masukan Terpilih untuk Revisi
          </div>
        </div>
      </div>

      {/* Feedbacks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {feedbacks.map((fb) => (
          <div
            key={fb.id}
            className={`bg-white rounded-2xl border p-6 shadow-sm space-y-4 transition-all relative ${
              fb.selectedAsPriorityByAuthor
                ? 'border-amber-400 ring-2 ring-amber-200/80 bg-amber-50/20'
                : 'border-slate-200'
            }`}
          >
            {/* Reviewer Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                  {fb.reviewerName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{fb.reviewerName}</h4>
                  <p className="text-[11px] text-slate-500">{fb.reviewerRole} • {fb.timestamp}</p>
                </div>
              </div>

              {/* Priority Star Toggle */}
              <button
                onClick={() => handleTogglePriority(fb.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  fb.selectedAsPriorityByAuthor
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                title="Pilih sebagai 1 dari 2 masukan prioritas perbaikan"
              >
                <Star className={`w-3.5 h-3.5 ${fb.selectedAsPriorityByAuthor ? 'fill-white' : ''}`} />
                <span>{fb.selectedAsPriorityByAuthor ? 'Prioritas Revisi' : 'Tandai Prioritas'}</span>
              </button>
            </div>

            {/* Structured Feedback: Menarik, Perlu Diperbaiki, Potensi */}
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200/80">
                <div className="font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
                  <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
                  1. Hal yang Menarik & Berhasil:
                </div>
                <p className="text-slate-700 leading-relaxed">{fb.interestingPoints}</p>
              </div>

              <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/80">
                <div className="font-bold text-amber-900 flex items-center gap-1.5 mb-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  2. Hal yang Perlu Diperbaiki:
                </div>
                <p className="text-slate-700 leading-relaxed">{fb.improvementPoints}</p>
              </div>

              <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200/80">
                <div className="font-bold text-blue-900 flex items-center gap-1.5 mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                  3. Potensi Penggunaan di Kelas:
                </div>
                <p className="text-slate-700 leading-relaxed">{fb.usagePotential}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Feedback Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Tulis Kartu Umpan Balik Sejawat</h3>
                <p className="text-xs text-slate-500">Beri masukan objektif untuk karya {authorName}</p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddFeedback} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Nama Rekan Penilai:</label>
                  <input
                    type="text"
                    required
                    value={newReviewerName}
                    onChange={(e) => setNewReviewerName(e.target.value)}
                    placeholder="Contoh: Budi Santoso, M.Pd."
                    className="w-full text-xs border border-slate-200 rounded-xl p-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Asal Sekolah / Jabatan:</label>
                  <input
                    type="text"
                    value={newReviewerRole}
                    onChange={(e) => setNewReviewerRole(e.target.value)}
                    placeholder="Contoh: Guru IPA SMP 2"
                    className="w-full text-xs border border-slate-200 rounded-xl p-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-emerald-900 mb-1">1. Apa yang Paling Menarik?</label>
                <textarea
                  required
                  value={newInteresting}
                  onChange={(e) => setNewInteresting(e.target.value)}
                  rows={2}
                  placeholder="Kelebihan konsep, kreativitas interaksi, atau relevansi materi..."
                  className="w-full text-xs border border-emerald-200 rounded-xl p-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-900 mb-1">2. Apa yang Perlu Diperbaiki?</label>
                <textarea
                  required
                  value={newImprovement}
                  onChange={(e) => setNewImprovement(e.target.value)}
                  rows={2}
                  placeholder="Saran spesifik dan konstruktif..."
                  className="w-full text-xs border border-amber-200 rounded-xl p-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-blue-900 mb-1">3. Potensi Penggunaan di Kelas:</label>
                <input
                  type="text"
                  value={newPotential}
                  onChange={(e) => setNewPotential(e.target.value)}
                  placeholder="Potensi penerapan untuk mata pelajaran / tingkat kelas lain..."
                  className="w-full text-xs border border-blue-200 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md transition-all"
                >
                  Simpan Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
