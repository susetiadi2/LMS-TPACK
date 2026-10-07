import { TeacherProject } from '../types';
import { INITIAL_TARGET_PRODUCTS } from './curriculumData';

export const SAMPLE_PROJECT_MATH: TeacherProject = {
  teacherName: "Ahmad Zulkarnain, M.Pd.",
  teacherSchool: "SMP Teladan Nusantara",
  teacherSubject: "Matematika",
  gradeLevel: "Kelas VII (Fase D)",
  lastUpdated: "2026-10-07",
  completedSessions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  targetProducts: INITIAL_TARGET_PRODUCTS.map(p => ({ ...p, completed: true })),

  ws1: {
    subjectMatter: "Pecahan Senilai dan Operasi Penjumlahan Pecahan Beda Penyebut",
    commonProblems: [
      "Siswa sering menjumlahkan pecahan dengan cara menjumlahkan pembilang dengan pembilang dan penyebut dengan penyebut secara keliru (misal 1/2 + 1/3 = 2/5).",
      "Siswa hanya menghafal prosedur KPK tanpa memahami makna konseptual mengapa penyebut harus disamakan.",
      "Gambar irisan pizza di buku teks bersifat statis sehingga siswa tidak dapat memanipulasi pemotongan bagian secara interaktif."
    ],
    priorityProblem: "Miskonsepsi mendasar bahwa '1/2 + 1/3 = 2/5' akibat tidak adanya visualisasi fisik bahwa ukuran potongan pecahan harus sepadan sebelum digabungkan.",
    evidenceIndications: "68% siswa kelas 7 mengulang kesalahan yang sama saat tes diagnostik awal penjumlahan pecahan.",
    studentConditions: "Siswa berada pada fase transisi konkret ke abstrak (Piaget) dan membutuhkan manipulasi visual interaktif.",
    studentNeeds: "Alat peraga digital di mana siswa dapat membagi balok/lingkaran pecahan secara dinamis dengan slider penyebut.",
    problemStatement: "Siswa mengalami kesulitan memahami konsep kesetaraan ukuran potongan pecahan, sehingga membutuhkan media manipulatif digital interaktif yang memungkinkan mereka melihat proses pemotongan penyebut secara nyata.",
    possibleTech: "Aplikasi Web Interaktif dengan simulator pecahan batang (fraction bars) dinamis dan feedback visual instan."
  },

  ws2: {
    ck: "Pengetahuan Konten (CK):\n- Konsep pecahan sebagai bagian dari keseluruhan (part-whole relationship).\n- Pecahan senilai (equivalent fractions).\n- Prinsip penyamaan penyebut melalui Kelipatan Persekutuan Terkecil (KPK).",
    pk: "Pengetahuan Pedagogik (PK):\n- Pendekatan Pendidikan Matematika Realistik Indonesia (PMRI) berbasis konkret-piktorial-abstrak (CPA approach).\n- Pembelajaran berbasis penemuan terbimbing (Guided Discovery).",
    tk: "Pengetahuan Teknologi (TK):\n- Media Pembelajaran Interaktif (MPI) web-based dengan simulator slider pecahan dinamis.\n- Umpan balik otomatis terhadap jawaban pecahan.",
    pck: "Integrasi Konten-Pedagogi (PCK):\nMenggunakan konteks membagi cokelat batang batangan yang dipotong menjadi kotak-kotak kecil sama besar.",
    tck: "Integrasi Konten-Teknologi (TCK):\nVisualisasi balok pecahan yang terbelah otomatis saat siswa mengubah angka penyebut pada slider.",
    tpk: "Integrasi Pedagogi-Teknologi (TPK):\nSiswa bereksplorasi mandiri menggeser pemotong pecahan hingga menemukan irisan yang pas sebelum guru memberikan rumus formal KPK.",
    tpackIntegrated: "Guru mendesain pembelajaran inkuiri matematika berbantuan MPI simulator pecahan. Siswa menemukan sendiri perlunya menyamakan ukuran pecahan sebelum menjumlahkan melalui manipulasi slider interaktif dan kuis formatif terpandu."
  },

  ws3: {
    learningGoals: [
      "Peserta didik dapat membuktikan secara visual kesetaraan dua pecahan senilai dengan tepat.",
      "Peserta didik dapat menyelesaikan penjumlahan dua pecahan berpenyebut berbeda dengan penalaran matematis yang benar."
    ],
    goalEvidence: "Siswa mampu menyelesaikan tantangan visual penyetaraan balok pecahan dan memperoleh skor minimal 80 pada kuis formatif.",
    studentActivityBefore: "Siswa melipat kertas origami menjadi 2 bagian dan 4 bagian untuk mengamati kesamaan luas.",
    studentActivityDuring: "Siswa membuka simulator MPI pecahan, mengubah-ubah nilai penyebut, dan mencocokkan garis pecahan yang saling berhimpit.",
    studentActivityAfter: "Siswa merumuskan kesimpulan rumus umum pecahan senilai dan mengerjakan asesmen digital.",
    selectedTech: "Web Apps MPI Interaktif responsive.",
    selectedMedia: "Fraction Bars Simulator interaktif.",
    assessmentStrategy: "Kuis formatif dengan gambar pecahan dinamis dan feedback pembuktian.",
    techRationale: "Memungkinkan pembagian pecahan hingga 1/12 secara instan dan presisi yang sulit dilakukan dengan guntingan kertas."
  },

  rpp: {
    id: "rpp-math-001",
    title: "Modul Ajar TPACK: Eksplorasi Pecahan Senilai",
    subject: "Matematika",
    gradeLevel: "Kelas VII SMP / Fase D",
    topic: "Pecahan Senilai dan Penjumlahan Pecahan Beda Penyebut",
    allocationTime: "2 JP (2 x 40 Menit)",
    learningObjectives: [
      "Menemukan konsep pecahan senilai melalui simulasi digital batang pecahan.",
      "Menentukan hasil penjumlahan pecahan berpenyebut berbeda secara tepat."
    ],
    learningModel: "Guided Discovery Learning berbantuan MPI Interaktif",
    learningMethod: "Manipulasi digital interaktif, diskusi terbimbing, dan asesmen formatif adaptif.",
    mediaTechnology: "Chromebook/Laptop siswa, MPI Guru Kreator Pecahan Senilai.",
    introStep: {
      teacherActivity: "Guru menyajikan masalah: 'Budi punya 1/2 loyang martabak, Siti punya 2/4 loyang martabak. Siapa yang makan lebih banyak?'",
      studentActivity: "Siswa berdiskusi dan memberikan pendapat awal.",
      mpiIntegration: "Guru menayangkan Layar 1 & 3 MPI pada proyektor kelas."
    },
    mainStep: {
      teacherActivity: "Guru memandu siswa membuka tautan MPI dan berkeliling memfasilitasi inkuiri manipulasi batang pecahan.",
      studentActivity: "Siswa menggeser slider pemotong pecahan di Layar 5 dan mencatat pola pecahan yang nilainya sama.",
      mpiIntegration: "Siswa memanipulasi simulator pecahan batang di gawai masing-masing."
    },
    closingStep: {
      teacherActivity: "Guru merangkum konsep penyamaan penyebut bersama siswa.",
      studentActivity: "Siswa mengisi refleksi pemahaman di Layar 8 MPI.",
      mpiIntegration: "Siswa melihat skor kuis akhir di MPI."
    },
    diagnosticAssessment: "Kuis pra-syarat pecahan dasar dan operasi perkalian sederhana.",
    formativeAssessment: "Tantangan mencocokkan balok pecahan senilai di MPI.",
    summativeAssessment: "Tes pemecahan masalah kontekstual penjumlahan pecahan.",
    differentiationNotes: "Siswa yang cepat diberikan tantangan pecahan campuran 3 penyebut.",
    reflectionNotes: "Perhatikan apakah siswa masih tergoda menjumlahkan langsung penyebut."
  },

  mpiScreens: [
    {
      id: 1,
      type: "cover",
      title: "Petualangan Pecahan Senilai",
      subtitle: "Media Interaktif Matematika Kelas VII",
      content: "Selamat datang di dunia pecahan interaktif! Di sini kamu akan membuktikan bahwa angka pecahan yang kelihatannya berbeda bisa memiliki nilai yang sama besar.",
      studentAction: "Klik 'Mulai Petualangan' untuk masuk ke arena simulator pecahan.",
      systemFeedback: "Simulator memuat modul batang pecahan interaktif."
    },
    {
      id: 2,
      type: "objective",
      title: "Tujuan Misi Matematika",
      subtitle: "Capaian Belajar Hari Ini",
      content: "1. Menemukan pecahan senilai dari suatu pecahan tertentu.\n2. Menguraikan alasan mengapa pecahan harus memiliki ukuran potongan yang sama sebelum dijumlahkan.",
      studentAction: "Klik 'Saya Siap Bereksplorasi'.",
      systemFeedback: "Lanjut ke penyelidikan masalah martabak."
    },
    {
      id: 3,
      type: "stimulus",
      title: "Misteri Martabak Budi & Siti",
      subtitle: "Masalah Dunia Nyata",
      content: "Budi memotong martabaknya menjadi 2 bagian besar dan memakan 1 potong (1/2).\nSiti memotong martabaknya menjadi 4 bagian sedang dan memakan 2 potong (2/4).\n\nApakah Budi makan lebih banyak dari Siti?",
      studentAction: "Ketik dugaanmu sebelum menggeser simulator pembagi.",
      systemFeedback: "Dugaanmu dicatat! Mari kita buktikan di simulator."
    },
    {
      id: 4,
      type: "content",
      title: "Konsep Dasar Pecahan Senilai",
      subtitle: "Pembedahan Konseptual",
      content: "Pecahan senilai adalah pecahan yang nilainya tetap sama meskipun pembilang dan penyebutnya dikalikan atau dibagi dengan bilangan yang sama.\n\nContoh: 1/2 = 2/4 = 3/6 = 4/8.",
      studentAction: "Klik tombol pecahan senilai untuk melihat representasi warnanya.",
      systemFeedback: "Perhatikan bahwa area yang diwarnai memiliki luas yang persis sama!"
    },
    {
      id: 5,
      type: "activity",
      title: "Simulator Pemotong Batang Pecahan",
      subtitle: "Manipulasi Interaktif Siswa",
      content: "Geser slider untuk membagi batang pecahan dari 2 bagian sampai 12 bagian. Temukan pecahan yang garis batasnya sejajar dengan 1/2!",
      studentAction: "Geser slider penyebut pecahan dan amati garis keselarasan.",
      systemFeedback: "Hebat! Ketika penyebut diatur ke 4, 6, dan 8, garis potong tepat sejajar dengan 1/2.",
      interactiveData: {
        label: "Jumlah Pembagian Batang",
        initialValue: 2,
        targetValue: 4,
        unit: "Bagian Sama Besar"
      }
    },
    {
      id: 6,
      type: "quiz",
      title: "Uji Nalar: Penjumlahan Pecahan",
      subtitle: "Kuis Formatif Interaktif",
      content: "Berapakah hasil dari 1/2 + 1/4?",
      studentAction: "Pilih jawaban yang paling benar.",
      systemFeedback: "Jawaban langsung dievaluasi dengan visualisasi.",
      quizData: {
        question: "Berapakah hasil dari 1/2 + 1/4 yang benar?",
        options: [
          "3/4 (karena 1/2 diubah menjadi 2/4 terlebih dahulu)",
          "2/6 (menjumlahkan 1+1 dan 2+4)",
          "2/4",
          "1/6"
        ],
        correctIndex: 0,
        explanation: "Benar sekali! 1/2 disamakan penyebutnya menjadi 2/4, lalu 2/4 + 1/4 = 3/4. Ingat: penyebut tidak pernah dijumlahkan langsung!"
      }
    },
    {
      id: 7,
      type: "feedback",
      title: "Hasil & Umpan Balik Cerdas",
      subtitle: "Penguasaan Konsep",
      content: "Kamu berhasil menguasai konsep pecahan senilai dan tidak terjebak dalam miskonsepsi penjumlahan pecahan!",
      studentAction: "Lanjut ke tahap refleksi diri.",
      systemFeedback: "Skor formatif: 100/100. Badge 'Master Pecahan Senilai' diperoleh!"
    },
    {
      id: 8,
      type: "reflection",
      title: "Refleksi Diri Pemelajar Matematika",
      subtitle: "Penutupan Sesi",
      content: "Mengapa penting bagi kita untuk menyamakan ukuran pecahan sebelum melakukan penjumlahan?",
      studentAction: "Tuliskan intisari pemahamanmu dalam kalimat sendiri.",
      systemFeedback: "Refleksimu tersimpan di portofolio Guru Kreator!"
    }
  ],

  aiPrompts: [
    {
      id: "ai-prompt-math-1",
      name: "Generator Analogi Nyata untuk Konsep Pecahan Senilai",
      context: "Siswa Kelas VII SMP yang baru belajar pecahan senilai.",
      role: "Pakar PMRI (Pendidikan Matematika Realistik Indonesia).",
      task: "Buatkan 3 analogi benda nyata di sekitar siswa untuk menjelaskan mengapa pecahan senilai itu sama ukurannya.",
      constraints: "Gunakan analogi makanan atau uang koin yang akrab bagi siswa SMP di Indonesia.",
      outputFormat: "Daftar bernomor 1-3 dengan penjelasan cara menggunakannya di kelas.",
      criteria: "Konsep matematis akurat, mudah dipahami siswa.",
      rawPrompt: "Sebagai pakar PMRI, buatkan 3 analogi benda nyata di sekitar siswa SMP terkait konsep pecahan senilai...",
      validationScore: 97,
      generatedResult: "1. Analogi Uang Koin: 1 lembar uang Rp 2.000 bernilai sama dengan 2 keping koin Rp 1.000 atau 4 keping koin Rp 500.\n2. Cokelat Batang: 1 patahan besar cokelat sama beratnya dengan 2 kotak kecil jika cokelat itu dipotong dua.\n3. Pizza / Martabak: Setengah loyang yang dipotong 2 sama persis dengan setengah loyang yang dipotong 4."
    }
  ],

  visualScenes: [
    {
      id: 1,
      sceneName: "Scene 1: Toko Martabak",
      visualGoal: "Menampilkan dua loyang martabak manis sama ukuran.",
      characterLocation: "Di dapur kedai martabak dengan juru masak memegang pisau pemotong.",
      cameraAction: "Wide shot memperlihatkan dua loyang martabak bersebelahan.",
      voiceOverText: "Dua martabak ini dibuat dengan cetakan yang persis sama. Namun, lihat bagaimana mereka dipotong...",
      durationSeconds: 15,
      imagePrompt: "Top down view of two identical round chocolate cheese martabak on wooden cutting board, culinary photography"
    }
  ],

  assessments: [
    {
      id: "soal-math-1",
      question: "Pecahan berikut yang senilai dengan 2/3 adalah...",
      type: "multiple_choice",
      options: ["4/6", "3/4", "5/8", "2/5"],
      correctAnswer: 0,
      rubric: "Kunci A: 2/3 x 2/2 = 4/6.",
      autoFeedback: "Tepat! Mengalikan pembilang dan penyebut dengan angka 2 menghasilkan pecahan senilai 4/6.",
      learningGoalAlignment: "TP 1: Membuktikan pecahan senilai."
    }
  ],

  ws4Testing: {
    workingWell: "Visual batang pecahan sangat jelas dan membantu siswa memahami konsep partisi.",
    confusingParts: "Siswa sempat bingung dengan warna pembagian batang jika penyebut terlalu besar di atas 10.",
    contentFindings: "Perlu ditambahkan batasan maksimal penyebut sampai 12 agar tidak terlalu padat di layar.",
    pedagogicalFindings: "Perlu pertanyaan pemantik sebelum siswa menggeser slider.",
    technologyAccessFindings: "Sangat responsif di browser Chrome.",
    plannedImprovements: [
      "Membatasi slider penyebut 2 sampai 12.",
      "Menambah teks instruksi pemantik sebelum simulasi.",
      "Memperjelas feedback garis keselarasan pecahan."
    ]
  },

  peerFeedbacks: [
    {
      id: "fb-math-1",
      reviewerName: "Rina Kartika, S.Pd.",
      reviewerRole: "Guru Matematika SMP 1",
      timestamp: "2026-10-06 16:00",
      interestingPoints: "Sangat visual dan memecahkan miskonsepsi umum penjumlahan pecahan!",
      improvementPoints: "Tambahkan opsi animasi saat dua pecahan digabungkan.",
      usagePotential: "Bagus untuk materi pengantar awal semester 1.",
      selectedAsPriorityByAuthor: true
    }
  ],

  actionPlan: {
    paradigmShiftReflection: "Mengajar matematika bukan hanya memberikan rumus cepat, melainkan memberi siswa media visual untuk menemukan makna di balik rumus tersebut.",
    targetClass: "Kelas VII-A (30 Siswa)",
    firstTopic: "Pecahan Senilai dan Operasi Hitung",
    plan7Days: "Uji coba simulator pecahan di kelas VII-A pada hari Selasa.",
    plan14Days: "Revisi kuis formatif berdasarkan catatan kesulitan siswa.",
    plan30Days: "Berbagi template MPI matematika ini di forum MGMP Matematika.",
    successEvidence: "Tidak ada siswa yang melakukan kesalahan menjumlahkan penyebut secara langsung.",
    reflectionSchedule: "Setiap selesai bab pecahan."
  },

  rubricScores: {
    goalAlignmentScore: 4,
    pedagogyScore: 4,
    contentScore: 4,
    technologyTpackScore: 4,
    interactivityAssessmentScore: 4,
    assessorNotes: "Perancangan yang sangat kuat secara CPA (Konkret-Piktorial-Abstrak) dan TPACK.",
    assessorName: "Dr. Hendra Gunawan, M.Ed."
  }
};
