import { TeacherProject } from '../types';
import { INITIAL_TARGET_PRODUCTS } from './curriculumData';

export const SAMPLE_PROJECT_BIOLOGY: TeacherProject = {
  teacherName: "Siti Rahmawati, S.Pd., Gr.",
  teacherSchool: "SMP Negeri 1 Merdeka Belajar",
  teacherSubject: "IPA Terpadu (Biologi)",
  gradeLevel: "Kelas VIII (Fase D)",
  lastUpdated: "2026-10-07",
  completedSessions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  targetProducts: INITIAL_TARGET_PRODUCTS.map(p => ({ ...p, completed: true })),
  
  ws1: {
    subjectMatter: "Sistem Peredaran Darah Manusia: Mekanisme Peredaran Darah Besar dan Kecil",
    commonProblems: [
      "Siswa kesulitan membayangkan jalur aliran darah tertutup ganda karena sifatnya abstrak dan dinamis di dalam organ tubuh.",
      "Siswa sering tertukar antara peran arteri dengan vena dan konsep darah kaya oksigen vs karbondioksida.",
      "Gambar statis 2D di buku paket tidak mampu menunjukkan arah denyut pompa jantung dan katup secara berurutan."
    ],
    priorityProblem: "Siswa tidak dapat membedakan secara visual dan konseptual antara Sirkulasi Darah Besar (Jantung ke seluruh tubuh) dan Sirkulasi Darah Kecil (Jantung ke paru-paru) beserta perbedaan kandungan gasnya.",
    evidenceIndications: "72% siswa salah pada soal ulangan harian yang menanyakan urutan ruang jantung (Bilik Kiri vs Bilik Kanan) saat darah dialirkan ke aorta, dan 65% siswa mengira semua arteri selalu berwarna merah cerah.",
    studentConditions: "Siswa kelas 8 memiliki gaya belajar visual-kinestetik tinggi namun pasif jika hanya membaca diagram panah teks yang rumit.",
    studentNeeds: "Visualisasi animasi interaktif di mana siswa dapat mengontrol laju detak jantung, mengklik ruang jantung, dan melacak pergerakan sel darah merah secara real-time.",
    problemStatement: "Siswa mengalami kesulitan memahami jalur sirkulasi ganda secara spasial dan dinamis, sehingga membutuhkan media simulasi interaktif yang memungkinkan mereka menguji arah aliran darah dan peran katup jantung secara langsung.",
    possibleTech: "Simulasi web interaktif (HTML5 Canvas / Interactive Web App) dengan slider kecepatan detak jantung, kuis drag-and-drop organ, dan feedback visual langsung."
  },

  ws2: {
    ck: "Pengetahuan Konten (CK):\n- Anatomi 4 ruang jantung (Serambi Kanan/Kiri, Bilik Kanan/Kiri) dan katup jantung.\n- Sirkulasi Sistemik (Besar): Bilik Kiri -> Aorta -> Tubuh -> Vena Cava -> Serambi Kanan (Kaya O2 ke miskin O2).\n- Sirkulasi Pulmonal (Kecil): Bilik Kanan -> Arteri Pulmonalis -> Paru-paru -> Vena Pulmonalis -> Serambi Kiri.",
    pk: "Pengetahuan Pedagogis (PK):\n- Pendekatan Guided Inquiry dengan model Problem-Based Learning (PBL).\n- Siklus belajar: Orientasi Masalah -> Eksplorasi Mandiri Terpandu -> Diskusi Analisis -> Pembuktian Konsep -> Refleksi Metakognitif.",
    tk: "Pengetahuan Teknologi (TK):\n- Media Pembelajaran Interaktif (MPI) berbasis Web interaktif responsif.\n- Komponen klikable, indikator warna molekul gas (O2/CO2), dan kuis formatif otomatis.",
    pck: "Integrasi Konten-Pedagogi (PCK):\nMengajarkan sirkulasi darah bukan dengan menghafalkan nama latin, melainkan dengan mengajak siswa menganalogikan jantung sebagai pompa air ganda dua ruang yang mengalirkan logistik oksigen.",
    tck: "Integrasi Konten-Teknologi (TCK):\nMenggunakan animasi warna gradasi dinamis (merah cerah untuk O2, biru untuk CO2) yang berubah saat melewati alveolus paru-paru dan kapiler jaringan tubuh.",
    tpk: "Integrasi Pedagogi-Teknologi (TPK):\nMemberikan kendali kecepatan simulasi kepada siswa untuk memicu inkuiri: 'Apa yang terjadi jika katup trikuspidalis bocor?' melalui interaksi digital eksploratif.",
    tpackIntegrated: "Dalam pembelajaran ini, guru merancang pengalaman belajar inkuiri di mana siswa memecahkan masalah sirkulasi ganda manusia melalui Media Pembelajaran Interaktif 8 Layar. Siswa secara mandiri mengontrol simulasi pompa jantung, mengamati perubahan kadar oksigen secara visual, dan langsung menguji hipotesis melalui kuis adaptif, sehingga konsep abstrak terkonkretkan tanpa menghilangkan kedalaman sains."
  },

  ws3: {
    learningGoals: [
      "Peserta didik dapat menganalisis urutan aliran darah pada sirkulasi sistemik dan pulmonal melalui media interaktif dengan akurasi 100%.",
      "Peserta didik dapat memprediksi dampak gangguan pada katup jantung terhadap distribusi oksigen ke jaringan tubuh dengan penalaran ilmiah logis."
    ],
    goalEvidence: "Siswa mampu menyelesaikan alur simulasi tantangan sirkulasi tanpa kesalahan dan memperoleh skor minimal 80 pada kuis formatif digital serta mampu mempresentasikan perbedaannya di depan kelas.",
    studentActivityBefore: "Siswa memeriksa denyut nadi pergelangan tangan sendiri setelah melompat 30 detik (menghubungkan fenomena fisik dengan kerja organ jantung) dan menjawab pertanyaan pemantik guru.",
    studentActivityDuring: "Siswa membuka MPI pada tablet/laptop: mengklik ruang-ruang jantung, memicu kontraksi bilik, melacak perjalanan molekul darah ke paru-paru vs seluruh tubuh, dan mencatat perbedaannya pada lembar panduan inkuiri.",
    studentActivityAfter: "Siswa berdiskusi kelompok merumuskan simpulan, mengerjakan kuis asesmen digital di layar MPI, dan merancang komitmen pola hidup sehat untuk menjaga elastisitas pembuluh darah.",
    selectedTech: "Aplikasi Web Interaktif MPI responsif ramah peramban (dapat diakses di Chromebook, PC, maupun Smartphone siswa).",
    selectedMedia: "Animasi sirkulasi pompa jantung interaktif dengan palet warna diferensiasi (Merah-Biru) dan sound effect denyut ritmis yang mendidik.",
    assessmentStrategy: "Asesmen formatif interaktif berupa identifikasi ruang jantung, kuis pilihan ganda berumpan balik instan, dan lembar refleksi 3-2-1.",
    techRationale: "Teknologi simulasi digital adalah satu-satunya cara aman dan terjangkau untuk memperlihatkan proses fisiologis internal jantung manusia secara dinamis tanpa pembedahan organ hewan."
  },

  rpp: {
    id: "rpp-001",
    title: "Modul Ajar TPACK: Dinamika Sirkulasi Darah Manusia",
    subject: "IPA Terpadu (Biologi)",
    gradeLevel: "Kelas VIII SMP / Fase D",
    topic: "Sirkulasi Darah Besar & Kecil dan Peran Jantung",
    allocationTime: "2 JP (2 x 40 Menit)",
    learningObjectives: [
      "Menguraikan mekanisme aliran darah pada peredaran darah besar dan kecil dengan runtut.",
      "Menganalisis perbedaan kandungan gas (O2 dan CO2) pada pembuluh arteri dan vena di kedua jalur sirkulasi."
    ],
    learningModel: "Inquiry-Based Learning berbantuan Media Pembelajaran Interaktif (MPI)",
    learningMethod: "Demonstrasi fenomena nyata, eksplorasi simulasi digital berpasangan, diskusi inkuiri, dan kuis adaptif.",
    mediaTechnology: "Laptop/Chromebook siswa, Proyektor kelas, Media Pembelajaran Interaktif (MPI) TPACK Guru Kreator.",
    introStep: {
      teacherActivity: "Guru membuka pelajaran, memandu siswa mengukur denyut nadi sendiri (30 detik), dan menampilkan pertanyaan pemantik: 'Mengapa jantungmu terus berdetak tanpa disuruh? Ke mana perginya darah setelah keluar dari bilik kiri?'",
      studentActivity: "Siswa menghitung denyut nadi, mencatat frekuensi detak, dan mengajukan hipotesis awal mengenai tujuan darah dipompa.",
      mpiIntegration: "Guru menayangkan Layar 1 (Cover) dan Layar 3 (Stimulus Kasus Denyut Atlet vs Santai) di layar proyektor kelas."
    },
    mainStep: {
      teacherActivity: "Guru memfasilitasi pembagian tautan MPI, berkeliling melakukan scaffolding/coaching, membimbing kelompok yang ragu mengenai arah katup, dan memantik diskusi kritis.",
      studentActivity: "Siswa bekerja berpasangan membuka MPI: mengeksplorasi Layar 4 (Materi Interaktif), menjalankan simulasi Layar 5 (Aktivitas Jalur Darah), dan menyelesaikan kuis formatif di Layar 6.",
      mpiIntegration: "Siswa berinteraksi langsung secara mandiri dengan seluruh kontrol simulasi, slider kecepatan pompa jantung, dan kuis digital berumpan balik seketika."
    },
    closingStep: {
      teacherActivity: "Guru memandu sesi konfirmasi konsep (After), meminta 2 perwakilan memaparkan temuan inkuiri, memberikan penguatan saintifik, dan menutup dengan refleksi.",
      studentActivity: "Siswa menyelesaikan Layar 8 (Refleksi Diri) pada MPI, menuliskan 1 hal baru yang dipahami dan 1 pertanyaan lanjutan, serta berdoa bersama.",
      mpiIntegration: "Siswa mengisi survei refleksi digital dan melihat rekap capaian skor kelulusan materi."
    },
    diagnosticAssessment: "Tes pemantik awal 2 soal cepat mengenai fungsi darah dan organ utama peredaran darah.",
    formativeAssessment: "Tantangan interaktif pada MPI dan kuis formatif 4 butir soal dengan feedback otomatis penjelas miskonsepsi.",
    summativeAssessment: "Tugas menyusun sketsa alur peredaran darah dengan keterangan kandungan oksigen dan katup pada jurnal sains.",
    differentiationNotes: "Diferensiasi proses: Siswa yang cepat dipersilakan menguji simulasi kondisi hipotetis (misal efek olahraga berat pada sirkulasi), siswa yang butuh bantuan diberikan petunjuk langkah bertahap di MPI.",
    reflectionNotes: "Guru merefleksikan apakah waktu eksplorasi 25 menit cukup bagi seluruh siswa menyelesaikan alur simulasi secara tuntas."
  },

  mpiScreens: [
    {
      id: 1,
      type: "cover",
      title: "Jelajah Darah: Sang Pengantar Kehidupan",
      subtitle: "Media Pembelajaran Interaktif Biologi Kelas VIII",
      content: "Selamat datang di laboratorium virtual sistem kardiovaskular. Kamu akan menjadi penjelajah molekul darah dan mengendalikan mesin pompa paling canggih di dunia: Jantung Manusia!",
      studentAction: "Klik tombol 'Mulai Petualangan' untuk memasuki laboratorium organ jantung.",
      systemFeedback: "Sistem memuat modul interaktif dan menyiapkan instrumen simulasi pompa darah."
    },
    {
      id: 2,
      type: "objective",
      title: "Target Misi & Tujuan Belajar",
      subtitle: "Kompetensi yang akan kamu kuasai hari ini",
      content: "Setelah menyelesaikan media ini, kamu akan mampu:\n1. Memetakan 4 ruang jantung dan fungsi katup penjaganya.\n2. Menelusuri jalur Sirkulasi Besar (ke seluruh tubuh) dan Sirkulasi Kecil (ke paru-paru).\n3. Membuktikan pertukaran oksigen (O2) dan karbon dioksida (CO2) di kapiler darah.",
      studentAction: "Baca target misi dan klik 'Saya Siap Belajar' untuk memulai stimulasi masalah.",
      systemFeedback: "Target kompetensi tersimpan di profil belajarmu. Lanjut ke layar kasus."
    },
    {
      id: 3,
      type: "stimulus",
      title: "Kasus Misteri: Mengapa Atlet Cepat Bernapas?",
      subtitle: "Stimulus Fenomena Dunia Nyata",
      content: "Setelah berlari sprint 100 meter, denyut jantung Doni melonjak dari 75 kali per menit menjadi 160 kali per menit, dan napasnya terengah-engah.\n\nApakah jantung hanya sekadar memompa air biasa? Mengapa paru-paru harus ikut bernapas kencang bersamaan dengan detak jantung?",
      studentAction: "Tuliskan dugaan/hipotesismu singkat sebelum melihat simulasi bagian dalam.",
      systemFeedback: "Dugaanmu dicatat! Mari kita intip apa yang sebenarnya terjadi di dalam ruang jantung Doni."
    },
    {
      id: 4,
      type: "content",
      title: "Mengenal 4 Ruang Jantung & Jalur Sirkulasi",
      subtitle: "Eksplorasi Konsep Interaktif",
      content: "Jantung terbagi menjadi 2 pompa terpisah:\n• Pompa Kanan (Serambi Kanan & Bilik Kanan): Menampung darah miskin oksigen (kebiruan) dari seluruh tubuh, lalu memompanya ke PARU-PARU untuk diisi oksigen baru (Sirkulasi Kecil).\n• Pompa Kiri (Serambi Kiri & Bilik Kiri): Menerima darah segar kaya oksigen (merah cerah) dari paru-paru, lalu memompanya kuat ke SELURUH TUBUH melalui aorta (Sirkulasi Besar).",
      studentAction: "Klik tombol 'Pompa Kiri' atau 'Pompa Kanan' untuk melihat aliran warna darah yang berbeda.",
      systemFeedback: "Kamu mengamati: Bilik Kiri memiliki otot paling tebal karena memompa darah ke seluruh tubuh hingga ujung kaki!"
    },
    {
      id: 5,
      type: "activity",
      title: "Simulasi Pompa Darah & Kendali Detak Jantung",
      subtitle: "Aktivitas Praktik Langsung Siswa",
      content: "Gunakan kontrol di bawah ini untuk mengatur denyut jantung per menit (BPM). Amati bagaimana katup membuka-menutup dan bagaimana darah berubah warna saat melewati alveolus paru-paru (pertukaran gas O2 & CO2).",
      studentAction: "Geser slider kecepatan detak jantung (60 BPM s/d 140 BPM) dan klik tombol 'Denyutkan Jantung'.",
      systemFeedback: "Luar biasa! Pada denyut 120 BPM, volume darah yang dialirkan per menit meningkat dua kali lipat untuk memasok oksigen ke otot rangka.",
      interactiveData: {
        label: "Frekuensi Pompa Jantung",
        initialValue: 75,
        targetValue: 120,
        unit: "BPM (Detak per Menit)",
        hint: "Geser ke 120 BPM untuk melihat simulasi saat tubuh berolahraga."
      }
    },
    {
      id: 6,
      type: "quiz",
      title: "Tantangan Pemahaman: Uji Sirkulasi Cepat",
      subtitle: "Kuis Formatif Interaktif",
      content: "Manakah pernyataan yang paling TEPAT mengenai aliran darah pada Sirkulasi Darah Besar?",
      studentAction: "Pilih salah satu jawaban yang menurutmu paling benar.",
      systemFeedback: "Jawaban langsung dievaluasi dengan penjelasan ilmiah.",
      quizData: {
        question: "Manakah rute yang benar untuk Sirkulasi Darah Besar (Sistemik) pada manusia?",
        options: [
          "Bilik Kiri -> Aorta -> Seluruh Tubuh -> Vena Cava -> Serambi Kanan",
          "Bilik Kanan -> Arteri Pulmonalis -> Paru-paru -> Vena Pulmonalis -> Serambi Kiri",
          "Serambi Kiri -> Bilik Kiri -> Paru-paru -> Seluruh Tubuh",
          "Bilik Kanan -> Seluruh Tubuh -> Vena Cava -> Serambi Kiri"
        ],
        correctIndex: 0,
        explanation: "Tepat sekali! Sirkulasi Besar berawal dari Bilik Kiri memompa darah kaya O2 melalui aorta ke seluruh tubuh, lalu kembali membawa CO2 melalui Vena Cava ke Serambi Kanan."
      }
    },
    {
      id: 7,
      type: "feedback",
      title: "Hasil Asesmen & Umpan Balik Cerdas",
      subtitle: "Evaluasi Capaian Pemahamanmu",
      content: "Selamat! Kamu telah membuktikan pemahaman yang sangat kuat mengenai anatomi fungsional sirkulasi darah ganda. Kamu telah memahami mengapa manusia memiliki sirkulasi tertutup ganda: agar darah kaya oksigen tidak pernah tercampur dengan darah miskin oksigen!",
      studentAction: "Tinjau kembali ringkasan pemahamanmu lalu lanjutkan ke refleksi akhir.",
      systemFeedback: "Skor formatif: 100/100 (Tuntas Paripurna). Badge 'Penjaga Jantung' terbuka!"
    },
    {
      id: 8,
      type: "reflection",
      title: "Refleksi Diri & Aksi Sehatku",
      subtitle: "Penutupan Pembelajaran Bermakna",
      content: "Setelah mengetahui betapa luar biasanya jantung bekerja tanpa henti memompa ribuan liter darah setiap hari, apa satu kebiasaan sehat yang akan kamu lakukan mulai hari ini untuk menjaga kesehatan pembuluh darahmu?",
      studentAction: "Tuliskan 1 komitmen gaya hidup sehat pada kolom refleksi.",
      systemFeedback: "Komitmenmu tersimpan! Terima kasih telah menjadi pembelajar hebat hari ini."
    }
  ],

  aiPrompts: [
    {
      id: "ai-prompt-1",
      name: "Generator Pertanyaan Pemantik & Apersepsi Berbasis Masalah",
      context: "Kelas VIII SMP, materi Sistem Peredaran Darah Manusia, durasi apersepsi 7 menit.",
      role: "Ahli Pedagogi Sains SMP dan Fasilitator TPACK berpengalaman.",
      task: "Buatkan 3 skenario fenomena sehari-hari yang memancing rasa penasaran siswa (HOTS) tentang mengapa darah harus dipompa dua kali oleh jantung.",
      constraints: "Gunakan bahasa komunikatif remaja SMP, hubungkan dengan olahraga atau makanan, hindari istilah teknis kedokteran yang terlalu rumit di awal.",
      outputFormat: "Daftar bernomor dengan: (1) Judul Kasus, (2) Narasi Singkat 3 Kalimat, (3) Pertanyaan Pemantik untuk Diskusi Kelas.",
      criteria: "Memicu rasa ingin tahu, mudah dipahami siswa SMP, langsung mengarah ke kebutuhan sirkulasi ganda.",
      rawPrompt: "Sebagai ahli pedagogi sains SMP, buatkan 3 skenario fenomena kehidupan sehari-hari untuk kelas 8 SMP terkait Sistem Peredaran Darah yang memicu rasa penasaran siswa mengapa jantung memompa dua kali (sirkulasi ganda). Format berupa narasi singkat 3 kalimat dan pertanyaan pemantik diskusi.",
      validationScore: 98,
      generatedResult: `1. Kasus Ban Sepeda Kempes & Tanjakan Ekstrem\nNarasi: Bayangkan kamu memompa ban sepeda yang bocor halus sambil terus mengayuh di tanjakan terjal. Tubuhmu membutuhkan aliran tenaga konstan tanpa henti setiap detiknya.\nPertanyaan Pemantik: Jika darah dari seluruh tubuh sudah kehabisan oksigen, mengapa darah tidak langsung dikirim kembali ke kaki agar tidak membuang waktu?\n\n2. Filter Akuarium Dua Pompa\nNarasi: Di sebuah akuarium besar dengan air kotor dan bersih, pemilik memasang dua pompa terpisah: satu untuk menyedot kotoran ke filter busa, satu lagi mengalirkan air jernih kembali ke ikan.\nPertanyaan Pemantik: Apa yang akan terjadi jika kedua selang itu dicampur menjadi satu di ruang yang sama?\n\n3. Nafas Terengah Sang Pelari Sprint\nNarasi: Setelah berlari 100 meter, dada Doni berdegup kencang dan ia menarik nafas dalam-dalam. Jantungnya berdetak dua kali lebih cepat dari biasanya.\nPertanyaan Pemantik: Bagian tubuh mana yang pertama kali 'meminta tolong' meminta pasokan oksigen ekstra: otot kakinya atau paru-parunya?`
    },
    {
      id: "ai-prompt-2",
      name: "Distraktor Kuis Bertingkat dengan Miskonsepsi Siswa",
      context: "Asesmen formatif digital IPA Kelas VIII pada platform MPI.",
      role: "Penulis Item Soal Asesmen Standar Nasional.",
      task: "Rancang 1 soal pilihan ganda C4 tentang Sirkulasi Pulmonal beserta 4 opsi jawaban di mana 3 pilihan salah (distraktor) sengaja dirancang berdasarkan miskonsepsi umum siswa, lengkap dengan teks feedback penjelas.",
      constraints: "Opsi harus homogen panjangnya, hindari kata 'semua benar/salah'.",
      outputFormat: "Soal, Opsi A-D, Kunci, dan Tabel Feedback Miskonsepsi per Opsi.",
      criteria: "Feedback harus mendidik dan memberikan petunjuk cara berpikir yang benar.",
      rawPrompt: "Sebagai pembuat soal asesmen, buat 1 soal kuis pilihan ganda C4 mengenai perbedaan Sirkulasi Darah Besar dan Kecil dengan 3 distraktor berdasarkan miskonsepsi umum siswa SMP beserta feedback penjelasan edukatif.",
      validationScore: 96,
      generatedResult: `Soal: Mengapa darah yang dipompa oleh Bilik Kanan jantung diarahkan ke paru-paru dan BUKAN langsung ke seluruh tubuh?\n\nA. Karena darah di bilik kanan miskin oksigen dan memerlukan pertukaran gas di alveolus (KUNCI BENAR)\nB. Karena bilik kanan terlalu lemah untuk memompa darah sampai ke ujung jari kaki (Distraktor Miskonsepsi Tekanan)\nC. Karena paru-paru membutuhkan nutrisi makanan yang dibawa oleh bilik kanan (Distraktor Miskonsepsi Fungsi Nutrisi)\nD. Karena darah di bilik kanan sudah bersih dan siap diedarkan ke otak (Distraktor Miskonsepsi Warna Darah)\n\nFeedback Edukatif:\n- Jika memilih B: Bilik kanan memang dindingnya lebih tipis, tetapi tujuannya bukan karena 'lemah', melainkan jarak ke paru-paru sangat dekat dan paru-paru tidak boleh menerima tekanan terlalu tinggi.\n- Jika memilih C: Nutrisi diserap di usus halus dan diedarkan melalui sirkulasi besar, bukan tugas utama sirkulasi kecil.\n- Jika memilih D: Darah di bilik kanan justru baru saja kembali dari tubuh sehingga kaya akan CO2 (miskin oksigen) dan belum bersih.`
    }
  ],

  visualScenes: [
    {
      id: 1,
      sceneName: "Scene 1: Gerbang Jantung",
      visualGoal: "Memperlihatkan letak jantung di rongga dada dan ukuran nyatanya sekepal tangan.",
      characterLocation: "Karakter Siswa (Rian & Maya) berdiri di lab sains dengan hologram organ 3D melayang.",
      cameraAction: "Kamera zoom-in perlahan dari tampak depan tubuh utuh menuju rongga dada tembus pandang.",
      voiceOverText: "Pernahkah kamu menyadari bahwa di dalam dadamu ada sebuah mesin ajaib sebesar kepalan tangan yang tidak pernah tidur sedetik pun?",
      durationSeconds: 15,
      imagePrompt: "3D medical illustration of a transparent human chest glowing blue and red, highlighting a detailed human heart pumping in the center, futuristic science laboratory background, cinematic lighting, 8k"
    },
    {
      id: 2,
      sceneName: "Scene 2: Pintu Masuk Katup Jantung",
      visualGoal: "Menjelaskan mekanisme buka-tutup katup satu arah (one-way valve).",
      characterLocation: "Molekul darah antropomorfik merah membawa ransel oksigen di depan pintu katup berkilau.",
      cameraAction: "Kamera close-up dinamis pada pergerakan daun katup saat bilik berkontraksi.",
      voiceOverText: "Katup jantung bekerja seperti pintu darurat satu arah. Darah hanya boleh maju ke depan, dan tidak boleh surut ke belakang!",
      durationSeconds: 20,
      imagePrompt: "High-resolution macro view of heart tricuspid valve opening and closing, glowing red blood cells flowing smoothly through the passage, educational science render"
    },
    {
      id: 3,
      sceneName: "Scene 3: Pertukaran di Alveolus",
      visualGoal: "Memvisualisasikan pelepasan CO2 dan pengikatan O2 di gelembung paru-paru.",
      characterLocation: "Jaringan kapiler melingkari gelembung alveolus seperti jaring laba-laba bercahaya.",
      cameraAction: "Kamera berputar 180 derajat mengelilingi alveolus memperlihatkan gradasi warna dari biru menjadi merah.",
      voiceOverText: "Di sinilah keajaiban terjadi. Di gelembung paru-paru, sel darah merah membuang asap karbon dioksida dan memeluk oksigen segar yang kita hirup.",
      durationSeconds: 25,
      imagePrompt: "Microscopic view of pulmonary alveoli wrapped in delicate capillaries, color shift transition from cyan blue to vivid crimson red, bioluminescent medical art"
    },
    {
      id: 4,
      sceneName: "Scene 4: Menjelajah Seluruh Tubuh",
      visualGoal: "Menunjukkan aorta mengalirkan darah berkecepatan tinggi ke organ tubuh.",
      characterLocation: "Arteri besar (Aorta) bercabang ke arah otak, lengan, perut, dan tungkai kaki.",
      cameraAction: "Kamera meluncur cepat (rollercoaster view) mengikuti aliran darah melintasi pembuluh utama.",
      voiceOverText: "Dengan satu hentakan kuat Bilik Kiri, darah kaya oksigen ini meluncur bagai kilat menyapa miliaran sel di seluruh tubuhmu!",
      durationSeconds: 20,
      imagePrompt: "Rollercoaster interior view inside the bright red human aorta artery, branching vessels illuminated by vibrant energy flow, dynamic motion blur"
    }
  ],

  assessments: [
    {
      id: "soal-1",
      question: "Darah yang kaya akan oksigen (O2) keluar dari jantung menuju ke seluruh tubuh melalui pembuluh darah...",
      type: "multiple_choice",
      options: ["Aorta", "Vena Cava Superior", "Arteri Pulmonalis", "Vena Cava Inferior"],
      correctAnswer: 0,
      rubric: "Kunci: A. Aorta adalah pembuluh nadi terbesar yang berpangkal pada bilik kiri jantung.",
      autoFeedback: "Tepat! Aorta menerima darah kaya oksigen dari bilik kiri dengan tekanan tinggi untuk didistribusikan ke seluruh tubuh.",
      learningGoalAlignment: "TP 1: Menguraikan mekanisme aliran darah sistemik."
    },
    {
      id: "soal-2",
      question: "Perhatikan kasus: Jika katup bikuspidalis (mitral) antara serambi kiri dan bilik kiri mengalami kebocoran, apa akibat langsung yang terjadi?",
      type: "case_study",
      options: [
        "Sebagian darah di bilik kiri akan kembali berbalik ke serambi kiri saat bilik berkontraksi, sehingga suplai oksigen ke tubuh berkurang",
        "Darah kotor akan langsung mengalir ke paru-paru tanpa melalui bilik kanan",
        "Denyut nadi di pergelangan tangan akan langsung berhenti total",
        "Warna darah akan langsung berubah menjadi hitam legam"
      ],
      correctAnswer: 0,
      rubric: "Kunci: Opsi 1. Katup mitral mencegah arus balik (regurgitasi) dari bilik kiri ke serambi kiri.",
      autoFeedback: "Analisis luar biasa! Kegagalan katup menyebabkan darah bocor mundur, menurunkan curah jantung (cardiac output) ke aorta, sehingga tubuh cepat lelah karena kekurangan oksigen.",
      learningGoalAlignment: "TP 2: Menganalisis dampak gangguan katup jantung terhadap distribusi oksigen."
    },
    {
      id: "soal-3",
      question: "Mengapa dinding otot bilik kiri jantung berukuran paling tebal dibandingkan ruang jantung lainnya?",
      type: "multiple_choice",
      options: [
        "Karena harus menghasilkan tekanan pompa yang cukup kuat untuk mendorong darah ke seluruh tubuh hingga ujung jari kaki",
        "Karena bilik kiri menampung volume darah lima kali lebih banyak dari bilik kanan",
        "Karena bilik kiri harus menahan asam lambung yang berdekatan dengan diafragma",
        "Karena bilik kiri adalah tempat pertukaran oksigen dengan karbon dioksida"
      ],
      correctAnswer: 0,
      rubric: "Kunci: Opsi 1. Ketebalan miokardium berbanding lurus dengan beban kerja mekanik tekanan hidrolik.",
      autoFeedback: "Tepat sekali! Bilik kanan hanya memompa ke paru-paru (jarak dekat), sedangkan bilik kiri melawan resistensi seluruh pembuluh darah sistemik.",
      learningGoalAlignment: "TP 1: Menghubungkan struktur anatomi jantung dengan fungsi fisiologisnya."
    }
  ],

  ws4Testing: {
    workingWell: "Navigasi 8 layar berjalan sangat mulus, animasi slider denyut jantung menarik perhatian dan langsung merespon interaksi siswa. Kuis memberikan umpan balik langsung yang sangat membantu.",
    confusingParts: "Pada layar 4, label ruang jantung awalnya terlalu kecil di layar smartphone sehingga beberapa rekan salah menekan antara serambi dan bilik.",
    contentFindings: "Perlu penegasan bahwa 'warna biru' pada diagram hanya kesepakatan konvensi ilmiah untuk membedakan darah miskin O2, bukan berarti darah manusia sungguhan berwarna biru seperti gurita.",
    pedagogicalFindings: "Siswa perlu diberi lembar panduan inkuiri cetak/singkat saat membuka MPI agar tidak hanya bermain-main dengan slider kecepatan tanpa mengamati perubahan katup.",
    technologyAccessFindings: "Aplikasi berjalan lancar di browser Chrome dan Edge. Waktu loading awal kurang dari 1 detik.",
    plannedImprovements: [
      "Memperbesar ukuran tombol navigasi dan teks label ruang jantung agar responsif di layar HP kecil.",
      "Menambahkan catatan penjelasan konvensi warna darah pada Layar 4.",
      "Menyediakan panduan 3 langkah observasi sebelum siswa menggeser slider simulasi."
    ]
  },

  peerFeedbacks: [
    {
      id: "fb-1",
      reviewerName: "Budi Santoso, M.Pd.",
      reviewerRole: "Guru IPA SMPN 3 Kota Cerdas",
      timestamp: "2026-10-06 14:30",
      interestingPoints: "Simulasi interaktif slider BPM detak jantung sangat brilian! Membuat konsep fisiologis yang biasanya kaku di buku paket menjadi hidup dan terasa nyata bagi siswa SMP.",
      improvementPoints: "Pertimbangkan menambahkan efek suara denyut ritmis (lub-dub) opsional agar siswa auditori juga terfasilitasi dengan baik.",
      usagePotential: "Sangat potensial digunakan dalam pembelajaran berdiferensiasi di seluruh MGMP IPA rayon kami.",
      selectedAsPriorityByAuthor: true
    },
    {
      id: "fb-2",
      reviewerName: "Dewi Lestari, S.Pd.",
      reviewerRole: "Guru Biologi SMAN 1 Harapan",
      timestamp: "2026-10-06 15:10",
      interestingPoints: "Struktur 8 layarnya sangat disiplin pedagogis, ada alur Before-During-After yang nyata, bukan sekadar memindahkan slide PowerPoint ke gawai.",
      improvementPoints: "Tambahkan satu studi kasus tentang penyakit hipertensi atau penyumbatan kolesterol di bagian pengayaan.",
      usagePotential: "Bisa langsung saya adopsi untuk materi pengantar sistem sirkulasi kelas XI awal semester depan.",
      selectedAsPriorityByAuthor: true
    }
  ],

  actionPlan: {
    paradigmShiftReflection: "Dulu saya mengira pembelajaran digital adalah tentang menyuruh siswa menonton video YouTube atau membagikan PDF soal di Google Classroom. Lewat pelatihan TPACK ini, saya sadar teknologi hanyalah pengungkit (leverage). Inti sejatinya adalah mendesain interaksi di mana siswa menjadi penemu konsep aktif (Guru Kreator, bukan sekadar kurir aplikasi).",
    targetClass: "Kelas VIII-B (32 Siswa)",
    firstTopic: "Sistem Sirkulasi Darah Manusia & Kesehatan Kardiovaskular",
    plan7Days: "Menerapkan MPI 'Jelajah Darah' ini pada pertemuan tatap muka pertama di Lab Komputer / Chromebook sekolah pada hari Rabu depan.",
    plan14Days: "Mengumpulkan data respon siswa melalui lembar refleksi digital, mencatat titik miskonsepsi yang tersisa, dan merevisi tingkat kesulitan kuis formatif.",
    plan30Days: "Mempresentasikan praktik baik implementasi modul TPACK ini dalam forum Musyawarah Guru Mata Pelajaran (MGMP) IPA tingkat Kabupaten serta berbagi template interaktif ke rekan sejawat.",
    successEvidence: "Minimal 85% siswa mencapai ketuntasan tujuan pembelajaran pada asesmen formatif, dan 90% siswa menyatakan lebih antusias belajar biologi.",
    reflectionSchedule: "Setiap hari Jumat sore pasca mengajar dengan jurnal reflektif mingguan."
  },

  rubricScores: {
    goalAlignmentScore: 4,
    pedagogyScore: 4,
    contentScore: 4,
    technologyTpackScore: 4,
    interactivityAssessmentScore: 4,
    assessorNotes: "Karya luar biasa! Integrasi TPACK sangat matang dan terwujud secara nyata dari Worksheet 1 hingga Media Pembelajaran Interaktif 8 Layar. Siap menjadi praktik baik nasional.",
    assessorName: "Dr. Hendra Gunawan, M.Ed. (Master Fasilitator TPACK)"
  }
};
