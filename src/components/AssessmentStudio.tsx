import { useState } from 'react';
import { AssessmentItem } from '../types';
import { 
  CheckCircle, 
  HelpCircle, 
  Plus, 
  Trash2, 
  Play, 
  Sparkles, 
  Award, 
  Check, 
  X,
  Target,
  FileCheck
} from 'lucide-react';

interface AssessmentStudioProps {
  assessments: AssessmentItem[];
  onUpdateAssessments: (items: AssessmentItem[]) => void;
}

export const AssessmentStudio = ({
  assessments,
  onUpdateAssessments
}: AssessmentStudioProps) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'test'>('editor');
  const [studentAnswers, setStudentAnswers] = useState<Record<string, number>>({});
  const [testSubmitted, setTestSubmitted] = useState(false);

  const handleAnswerSelect = (itemId: string, optionIdx: number) => {
    setStudentAnswers(prev => ({ ...prev, [itemId]: optionIdx }));
  };

  const handleResetTest = () => {
    setStudentAnswers({});
    setTestSubmitted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    assessments.forEach(item => {
      if (studentAnswers[item.id] === item.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / (assessments.length || 1)) * 100);
  };

  const handleAddQuestion = () => {
    const newItem: AssessmentItem = {
      id: `soal-${Date.now()}`,
      question: "Tuliskan pertanyaan pemantik atau masalah studi kasus baru di sini...",
      type: "multiple_choice",
      options: [
        "Pilihan A (Benar)",
        "Pilihan B (Distraktor)",
        "Pilihan C (Distraktor)",
        "Pilihan D (Distraktor)"
      ],
      correctAnswer: 0,
      rubric: "Kunci jawaban dan alasan pedagogis penilaian.",
      autoFeedback: "Feedback otomatis yang menjelaskan secara mendidik mengapa jawaban ini tepat.",
      learningGoalAlignment: "TP 1: Ketercapaian konsep materi."
    };
    onUpdateAssessments([...assessments, newItem]);
  };

  const handleDeleteQuestion = (id: string) => {
    onUpdateAssessments(assessments.filter(a => a.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Studio Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Sesi 10: Asesmen Digital Berbasis Feedback
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">
            Studio Pembuat Asesmen Digital & Bank Soal Selaras TP
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            "Setiap butir soal memiliki tujuan yang jelas dan feedback otomatis yang membimbing proses berpikir siswa."
          </p>
        </div>

        <div className="flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveTab('editor')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'editor'
                ? 'bg-violet-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" /> Desain Item Soal
          </button>
          <button
            onClick={() => setActiveTab('test')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'test'
                ? 'bg-violet-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Play className="w-3.5 h-3.5" /> Simulasi Uji Siswa
          </button>
        </div>
      </div>

      {activeTab === 'editor' ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Daftar {assessments.length} Item Asesmen Terdaftar
            </span>
            <button
              onClick={handleAddQuestion}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
            >
              <Plus className="w-4 h-4" /> Tambah Soal Baru
            </button>
          </div>

          <div className="space-y-4">
            {assessments.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-xl bg-violet-100 text-violet-800 text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg capitalize">
                      Tipe: {item.type.replace('_', ' ')}
                    </span>
                    <span className="text-xs font-medium text-violet-700 bg-violet-50 px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Target className="w-3 h-3" /> {item.learningGoalAlignment}
                    </span>
                  </div>

                  <button
                    onClick={() => handleDeleteQuestion(item.id)}
                    className="text-slate-400 hover:text-red-500 p-1.5 rounded-lg transition-colors"
                    title="Hapus Soal"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Rumusan Pertanyaan / Studi Kasus:
                    </label>
                    <textarea
                      value={item.question}
                      onChange={(e) => {
                        const updated = assessments.map(a => a.id === item.id ? { ...a, question: e.target.value } : a);
                        onUpdateAssessments(updated);
                      }}
                      rows={2}
                      className="w-full text-xs border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                    />
                  </div>

                  {item.options && (
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700">
                        Opsi Pilihan Ganda (Tandai Kunci Jawaban):
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {item.options.map((opt, optIdx) => (
                          <div
                            key={optIdx}
                            className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs ${
                              item.correctAnswer === optIdx
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                                : 'bg-slate-50 border-slate-200 text-slate-700'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`correct-${item.id}`}
                              checked={item.correctAnswer === optIdx}
                              onChange={() => {
                                const updated = assessments.map(a => a.id === item.id ? { ...a, correctAnswer: optIdx } : a);
                                onUpdateAssessments(updated);
                              }}
                              className="accent-emerald-600"
                            />
                            <span className="font-bold text-[11px] text-slate-500">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            <input
                              type="text"
                              value={opt}
                              onChange={(e) => {
                                const newOpts = [...item.options!];
                                newOpts[optIdx] = e.target.value;
                                const updated = assessments.map(a => a.id === item.id ? { ...a, options: newOpts } : a);
                                onUpdateAssessments(updated);
                              }}
                              className="w-full bg-transparent focus:outline-none text-xs"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <div className="bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/80">
                      <label className="block text-xs font-bold text-amber-900 mb-1">
                        Rubrik / Alasan Penetapan Kunci:
                      </label>
                      <textarea
                        value={item.rubric}
                        onChange={(e) => {
                          const updated = assessments.map(a => a.id === item.id ? { ...a, rubric: e.target.value } : a);
                          onUpdateAssessments(updated);
                        }}
                        rows={2}
                        className="w-full text-xs border border-amber-200 bg-white rounded-lg p-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>

                    <div className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200/80">
                      <label className="block text-xs font-bold text-emerald-900 mb-1">
                        Feedback Otomatis Edukatif untuk Siswa:
                      </label>
                      <textarea
                        value={item.autoFeedback}
                        onChange={(e) => {
                          const updated = assessments.map(a => a.id === item.id ? { ...a, autoFeedback: e.target.value } : a);
                          onUpdateAssessments(updated);
                        }}
                        rows={2}
                        className="w-full text-xs border border-emerald-200 bg-white rounded-lg p-2.5 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* LIVE TEST SIMULATION */
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Uji Coba Pengerjaan Asesmen Siswa</h3>
              <p className="text-xs text-slate-500">Cobalah menjawab untuk melihat respons umpan balik otomatis</p>
            </div>
            {testSubmitted && (
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-700">Skor Akhir:</span>
                <span className="text-xl font-black font-mono px-3.5 py-1 bg-violet-100 text-violet-800 rounded-xl">
                  {calculateScore()} / 100
                </span>
                <button
                  onClick={handleResetTest}
                  className="text-xs font-semibold px-3 py-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Ulangi Tes
                </button>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {assessments.map((item, idx) => {
              const selectedIdx = studentAnswers[item.id];
              const isCorrect = selectedIdx === item.correctAnswer;

              return (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-violet-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                      {item.question}
                    </p>
                  </div>

                  {item.options && (
                    <div className="space-y-2 pl-9">
                      {item.options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          disabled={testSubmitted}
                          onClick={() => handleAnswerSelect(item.id, oIdx)}
                          className={`w-full text-left p-3 rounded-xl text-xs font-medium transition-all flex items-center gap-3 border ${
                            testSubmitted
                              ? oIdx === item.correctAnswer
                                ? 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold'
                                : selectedIdx === oIdx
                                ? 'bg-rose-100 border-rose-300 text-rose-950'
                                : 'bg-white border-slate-200 text-slate-400'
                              : selectedIdx === oIdx
                              ? 'bg-violet-100 border-violet-400 text-violet-900 font-bold shadow-sm'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <span className="w-5 h-5 rounded-full bg-slate-200/80 flex items-center justify-center font-bold text-[10px] shrink-0">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span>{opt}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {testSubmitted && (
                    <div className={`ml-9 p-3.5 rounded-xl border text-xs leading-relaxed ${
                      isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-amber-50 border-amber-200 text-amber-900'
                    }`}>
                      <div className="font-bold flex items-center gap-1.5 mb-1">
                        {isCorrect ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-600" /> Tepat Sekali!
                          </>
                        ) : (
                          <>
                            <X className="w-4 h-4 text-amber-600" /> Perlu Dicermati Kembali:
                          </>
                        )}
                      </div>
                      <p>{item.autoFeedback}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!testSubmitted && (
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setTestSubmitted(true)}
                className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-600/30 transition-all hover:scale-105"
              >
                Kirim Jawaban & Lihat Feedback Otomatis
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
