import { TeacherProject } from '../types';
import { INITIAL_TARGET_PRODUCTS } from './curriculumData';

export const BLANK_PROJECT_TEMPLATE: TeacherProject = {
  teacherName: "Nama Guru Pembelajar",
  teacherSchool: "Nama Satuan Pendidikan",
  teacherSubject: "Mata Pelajaran Anda",
  gradeLevel: "Fase / Kelas Sasaran",
  lastUpdated: new Date().toISOString().split('T')[0],
  completedSessions: [1],
  targetProducts: INITIAL_TARGET_PRODUCTS.map(p => ({ ...p, completed: false })),

  ws1: {
    subjectMatter: "",
    commonProblems: ["", "", ""],
    priorityProblem: "",
    evidenceIndications: "",
    studentConditions: "",
    studentNeeds: "",
    problemStatement: "Siswa mengalami ... sehingga membutuhkan ...",
    possibleTech: ""
  },

  ws2: {
    ck: "",
    pk: "",
    tk: "",
    pck: "",
    tck: "",
    tpk: "",
    tpackIntegrated: ""
  },

  ws3: {
    learningGoals: [""],
    goalEvidence: "",
    studentActivityBefore: "",
    studentActivityDuring: "",
    studentActivityAfter: "",
    selectedTech: "",
    selectedMedia: "",
    assessmentStrategy: "",
    techRationale: ""
  },

  rpp: {
    id: `rpp-${Date.now()}`,
    title: "Modul Ajar / RPP TPACK Mandiri",
    subject: "Mata Pelajaran",
    gradeLevel: "Kelas",
    topic: "Topik Pembelajaran",
    allocationTime: "2 JP",
    learningObjectives: [""],
    learningModel: "Inquiry-Based Learning / Problem-Based Learning",
    learningMethod: "Eksplorasi media interaktif dan diskusi terarah",
    mediaTechnology: "Media Pembelajaran Interaktif (MPI) TPACK",
    introStep: {
      teacherActivity: "",
      studentActivity: "",
      mpiIntegration: ""
    },
    mainStep: {
      teacherActivity: "",
      studentActivity: "",
      mpiIntegration: ""
    },
    closingStep: {
      teacherActivity: "",
      studentActivity: "",
      mpiIntegration: ""
    },
    diagnosticAssessment: "",
    formativeAssessment: "",
    summativeAssessment: "",
    differentiationNotes: "",
    reflectionNotes: ""
  },

  mpiScreens: [
    {
      id: 1,
      type: "cover",
      title: "Judul Media Pembelajaran Interaktif",
      subtitle: "Media Interaktif Berbasis TPACK",
      content: "Selamat datang di modul interaktif ini. Kamu akan diajak mengeksplorasi konsep materi melalui simulasi nyata.",
      studentAction: "Klik 'Mulai Belajar'.",
      systemFeedback: "Sistem memuat modul interaktif."
    },
    {
      id: 2,
      type: "objective",
      title: "Tujuan Pembelajaran",
      subtitle: "Apa yang akan kamu kuasai",
      content: "Tuliskan 1-2 tujuan pembelajaran yang ingin dicapai siswa...",
      studentAction: "Baca tujuan dan klik lanjut.",
      systemFeedback: "Tujuan dicatat."
    },
    {
      id: 3,
      type: "stimulus",
      title: "Masalah Pemantik Dunia Nyata",
      subtitle: "Apersepsi Masalah",
      content: "Sajikan fenomena yang memancing rasa penasaran siswa...",
      studentAction: "Tuliskan dugaan atau jawaban awalmu.",
      systemFeedback: "Jawaban awal tersimpan."
    },
    {
      id: 4,
      type: "content",
      title: "Materi Interaktif",
      subtitle: "Eksplorasi Konsep Inti",
      content: "Uraikan konsep materi secara jelas, bertahap, dan bebas miskonsepsi.",
      studentAction: "Klik tombol eksplorasi.",
      systemFeedback: "Penjelasan interaktif ditampilkan."
    },
    {
      id: 5,
      type: "activity",
      title: "Simulasi & Aktivitas Siswa",
      subtitle: "Praktik Langsung",
      content: "Berikan tantangan manipulasi variabel atau simulasi digital kepada siswa.",
      studentAction: "Geser kontrol atau uji coba kombinasi.",
      systemFeedback: "Simulasi merespon aksi siswa."
    },
    {
      id: 6,
      type: "quiz",
      title: "Kuis Formatif Interaktif",
      subtitle: "Uji Pemahaman Cepat",
      content: "Tuliskan pertanyaan kuis formatif di sini...",
      studentAction: "Pilih jawaban yang paling tepat.",
      systemFeedback: "Sistem memberikan skor dan penjelasan otomatis.",
      quizData: {
        question: "Tuliskan pertanyaan kuis?",
        options: ["Pilihan A (Benar)", "Pilihan B (Salah)", "Pilihan C (Salah)", "Pilihan D (Salah)"],
        correctIndex: 0,
        explanation: "Penjelasan mengapa pilihan A benar dan konsep di baliknya."
      }
    },
    {
      id: 7,
      type: "feedback",
      title: "Hasil & Umpan Balik Cerdas",
      subtitle: "Evaluasi Pemahaman",
      content: "Ulasan capaian belajar siswa dan apresiasi atas usahanya.",
      studentAction: "Tinjau hasil belajar.",
      systemFeedback: "Skor tercatat."
    },
    {
      id: 8,
      type: "reflection",
      title: "Refleksi & Tindak Lanjut",
      subtitle: "Penutupan Bermakna",
      content: "Apa yang paling berkesan dari pembelajaran hari ini?",
      studentAction: "Tuliskan refleksi personalmu.",
      systemFeedback: "Refleksi tersimpan."
    }
  ],

  aiPrompts: [
    {
      id: "ai-prompt-custom",
      name: "Template Prompt Guru Kreator",
      context: "",
      role: "",
      task: "",
      constraints: "",
      outputFormat: "",
      criteria: "",
      rawPrompt: "",
      validationScore: 0
    }
  ],

  visualScenes: [
    {
      id: 1,
      sceneName: "Scene 1: Pengenalan Fenomena",
      visualGoal: "",
      characterLocation: "",
      cameraAction: "",
      voiceOverText: "",
      durationSeconds: 15,
      imagePrompt: ""
    }
  ],

  assessments: [
    {
      id: "soal-custom-1",
      question: "Tuliskan butir soal asesmen digital di sini...",
      type: "multiple_choice",
      options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
      correctAnswer: 0,
      rubric: "",
      autoFeedback: "",
      learningGoalAlignment: "TP 1"
    }
  ],

  ws4Testing: {
    workingWell: "",
    confusingParts: "",
    contentFindings: "",
    pedagogicalFindings: "",
    technologyAccessFindings: "",
    plannedImprovements: []
  },

  peerFeedbacks: [],

  actionPlan: {
    paradigmShiftReflection: "",
    targetClass: "",
    firstTopic: "",
    plan7Days: "",
    plan14Days: "",
    plan30Days: "",
    successEvidence: "",
    reflectionSchedule: ""
  },

  rubricScores: {
    goalAlignmentScore: 3,
    pedagogyScore: 3,
    contentScore: 3,
    technologyTpackScore: 3,
    interactivityAssessmentScore: 3,
    assessorNotes: "",
    assessorName: "Fasilitator TPACK"
  }
};
