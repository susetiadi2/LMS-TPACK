export type UserRole = 'participant' | 'facilitator';

export type SessionPhase = 'brief' | 'demo' | 'do' | 'share' | 'revise';

export interface TargetProduct {
  id: number;
  name: string;
  sessionNumber: string;
  minCriteria: string;
  completed: boolean;
  notes?: string;
}

export interface SessionData {
  id: number;
  title: string;
  subtitle: string;
  goal: string;
  keyConcepts: string[];
  handsOnTasks: string[];
  productName: string;
  successIndicators: string[];
  facilitatorRole: string[];
  promptingQuestions: string[];
  estimatedMinutes: {
    brief: number;
    demo: number;
    do: number;
    share: number;
    revise: number;
  };
  relatedWorksheet?: 'ws1' | 'ws2' | 'ws3' | 'rpp' | 'storyboard' | 'mpi' | 'ai' | 'visual' | 'assessment' | 'implementation' | 'testing' | 'portfolio' | 'showcase' | 'action_plan';
}

export interface Worksheet1ProblemStatement {
  subjectMatter: string; // Materi yang diajarkan
  commonProblems: [string, string, string]; // 3 masalah umum
  priorityProblem: string; // 1 masalah prioritas
  evidenceIndications: string; // Bukti/indikasi masalah
  studentConditions: string; // Kondisi siswa & penyebab
  studentNeeds: string; // Kebutuhan siswa
  problemStatement: string; // Siswa mengalami ... sehingga membutuhkan ...
  possibleTech: string; // Teknologi yang mungkin membantu
}

export interface Worksheet2Tpack {
  ck: string; // Content Knowledge
  pk: string; // Pedagogical Knowledge
  tk: string; // Technological Knowledge
  pck: string; // Pedagogical Content Knowledge
  tck: string; // Technological Content Knowledge
  tpk: string; // Technological Pedagogical Knowledge
  tpackIntegrated: string; // Keputusan TPACK dalam satu paragraf desain
}

export interface Worksheet3LearningDesign {
  learningGoals: string[]; // 1-2 tujuan terukur
  goalEvidence: string; // Bukti ketercapaian tujuan
  studentActivityBefore: string; // Aktivitas sebelum media
  studentActivityDuring: string; // Aktivitas saat menggunakan media
  studentActivityAfter: string; // Aktivitas setelah media
  selectedTech: string; // Teknologi
  selectedMedia: string; // Media
  assessmentStrategy: string; // Asesmen pembuktian
  techRationale: string; // Alasan pemilihan teknologi
}

export interface RppItem {
  id: string;
  title: string;
  subject: string;
  gradeLevel: string;
  topic: string;
  allocationTime: string;
  learningObjectives: string[];
  learningModel: string; // e.g. Problem-Based Learning, Guided Inquiry
  learningMethod: string; // e.g. Diskusi kelompok, simulasi interaktif
  mediaTechnology: string;
  introStep: {
    teacherActivity: string;
    studentActivity: string;
    mpiIntegration: string;
  };
  mainStep: {
    teacherActivity: string;
    studentActivity: string;
    mpiIntegration: string;
  };
  closingStep: {
    teacherActivity: string;
    studentActivity: string;
    mpiIntegration: string;
  };
  diagnosticAssessment: string;
  formativeAssessment: string;
  summativeAssessment: string;
  differentiationNotes: string;
  reflectionNotes: string;
}

export interface MpiScreen {
  id: number;
  type: 'cover' | 'objective' | 'stimulus' | 'content' | 'activity' | 'quiz' | 'feedback' | 'reflection';
  title: string;
  subtitle?: string;
  content: string;
  studentAction: string; // Aksi siswa di layar
  systemFeedback: string; // Umpan balik yang diterima siswa
  mediaUrl?: string; // Image or illustration
  quizData?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
  interactiveData?: {
    label: string;
    initialValue?: number;
    targetValue?: number;
    unit?: string;
    hint?: string;
  };
}

export interface AiPromptTemplate {
  id: string;
  name: string;
  context: string;
  role: string;
  task: string;
  constraints: string;
  outputFormat: string;
  criteria: string;
  rawPrompt: string;
  generatedResult?: string;
  validationScore?: number;
}

export interface VisualStoryboardScene {
  id: number;
  sceneName: string;
  visualGoal: string;
  characterLocation: string;
  cameraAction: string;
  voiceOverText: string;
  durationSeconds: number;
  imagePrompt: string;
}

export interface AssessmentItem {
  id: string;
  question: string;
  type: 'multiple_choice' | 'case_study' | 'matching' | 'reflection';
  options?: string[];
  correctAnswer?: string | number;
  rubric: string;
  autoFeedback: string;
  learningGoalAlignment: string;
}

export interface Worksheet4Testing {
  workingWell: string;
  confusingParts: string;
  contentFindings: string;
  pedagogicalFindings: string;
  technologyAccessFindings: string;
  plannedImprovements: string[];
}

export interface PeerReviewFeedback {
  id: string;
  reviewerName: string;
  reviewerRole: string;
  timestamp: string;
  interestingPoints: string; // Menarik
  improvementPoints: string; // Perlu diperbaiki
  usagePotential: string; // Potensi penggunaan
  selectedAsPriorityByAuthor: boolean;
}

export interface ActionPlan30Days {
  paradigmShiftReflection: string;
  targetClass: string;
  firstTopic: string;
  plan7Days: string; // Gunakan satu produk
  plan14Days: string; // Revisi berdasarkan pengalaman
  plan30Days: string; // Bagikan praktik baik/data hasil
  successEvidence: string;
  reflectionSchedule: string;
}

export interface FinalRubricScores {
  goalAlignmentScore: number; // Kesesuaian Tujuan (1-4)
  pedagogyScore: number; // Pedagogi (1-4)
  contentScore: number; // Konten (1-4)
  technologyTpackScore: number; // Teknologi/TPACK (1-4)
  interactivityAssessmentScore: number; // Interaktivitas & Asesmen (1-4)
  assessorNotes?: string;
  assessorName?: string;
}

export interface TeacherProject {
  teacherName: string;
  teacherSchool: string;
  teacherSubject: string;
  gradeLevel: string;
  lastUpdated: string;
  completedSessions: number[]; // session IDs completed
  targetProducts: TargetProduct[];
  ws1: Worksheet1ProblemStatement;
  ws2: Worksheet2Tpack;
  ws3: Worksheet3LearningDesign;
  rpp: RppItem;
  mpiScreens: MpiScreen[];
  aiPrompts: AiPromptTemplate[];
  visualScenes: VisualStoryboardScene[];
  assessments: AssessmentItem[];
  ws4Testing: Worksheet4Testing;
  peerFeedbacks: PeerReviewFeedback[];
  actionPlan: ActionPlan30Days;
  rubricScores: FinalRubricScores;
}
