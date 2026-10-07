import { SessionData, TargetProduct } from '../types';

export const TRAINING_METADATA = {
  title: "MODUL PELATIHAN GURU",
  subtitle: "DIGITALISASI PEMBELAJARAN BERBASIS TPACK",
  model: "Model Pelatihan Berbasis Hands-On / Learning by Doing",
  tagline: "Jangan Hanya Menjadi Pengguna Teknologi. Jadilah Guru Kreator.",
  philosophy: {
    description: "Pelatihan dirancang mengikuti prinsip praktik-produksi. Paparan fasilitator dibuat singkat dan langsung diikuti praktik peserta. Peserta membawa satu materi nyata yang akan diajarkan, kemudian mengubahnya secara bertahap menjadi desain TPACK, RPP/Modul Ajar, storyboard, Media Pembelajaran Interaktif (MPI), asesmen digital, dan skenario implementasi.",
    timeDistribution: [
      { percentage: 70, label: "Hands-on & Produksi", desc: "Praktik langsung, produksi media, uji coba, dan revisi berkala", color: "from-blue-600 to-indigo-600" },
      { percentage: 20, label: "Diskusi & Coaching", desc: "Peer review kelompok, sesi bimbingan fasilitator, dan refleksi", color: "from-amber-500 to-orange-500" },
      { percentage: 10, label: "Konsep & Demo", desc: "Briefing ringkas fasilitator dan demonstrasi contoh konkret", color: "from-emerald-500 to-teal-500" }
    ],
    goldenRules: [
      "Setiap sesi harus menghasilkan artefak yang menjadi bahan sesi berikutnya.",
      "Peserta tidak memulai dari aplikasi; peserta memulai dari masalah dan tujuan pembelajaran.",
      "Gunakan pola konsisten: BRIEF → DEMO → DO → SHARE → REVISE."
    ]
  },
  sessionCycle: [
    { key: "BRIEF", time: "5–10 menit", desc: "Fasilitator menjelaskan tujuan dan tantangan praktik spesifik sesi ini." },
    { key: "DEMO", time: "maks. 10 menit", desc: "Fasilitator menunjukkan satu contoh konkret artefak yang diharapkan." },
    { key: "DO", time: "20–40 menit", desc: "Peserta mengerjakan produk masing-masing menggunakan materi nyata miliknya." },
    { key: "SHARE", time: "5–10 menit", desc: "Peserta bertukar hasil atau melakukan peer review berpasangan/kelompok." },
    { key: "REVISE", time: "5–10 menit", desc: "Peserta langsung memperbaiki produk berdasarkan feedback yang didapat." }
  ],
  facilitationPrinciples: [
    "Kurangi ceramah; maksimal 10–15 menit setiap paparan konsep.",
    "Setiap konsep harus langsung dipraktikkan.",
    "Gunakan satu materi nyata milik peserta dari awal sampai akhir.",
    "Jangan mengejar banyak aplikasi; pilih teknologi yang paling relevan.",
    "Fasilitator berperan sebagai coach, bukan operator yang mengerjakan produk peserta.",
    "Jika peserta mengalami masalah teknis, bantu menyelesaikan masalah yang menghambat tujuan pembelajaran, bukan sekadar mengajari fitur.",
    "Produk peserta harus diuji oleh peserta lain sebelum dinyatakan final."
  ]
};

export const INITIAL_TARGET_PRODUCTS: TargetProduct[] = [
  { id: 1, name: "Peta Masalah Pembelajaran", sessionNumber: "1", minCriteria: "1 masalah nyata + kebutuhan siswa teridentifikasi", completed: true },
  { id: 2, name: "Analisis TPACK", sessionNumber: "3", minCriteria: "CK, PK, TK dan integrasi TPACK terpadu", completed: true },
  { id: 3, name: "Learning Design Canvas", sessionNumber: "4", minCriteria: "Formula: Tujuan–pedagogi–aktivitas–teknologi–media–asesmen", completed: true },
  { id: 4, name: "RPP/Modul Ajar TPACK", sessionNumber: "5", minCriteria: "Rancangan pembelajaran lengkap berpusat pada siswa", completed: true },
  { id: 5, name: "Storyboard MPI", sessionNumber: "6", minCriteria: "Alur interaksi dan 8 layar terstruktur", completed: true },
  { id: 6, name: "MPI Versi 1", sessionNumber: "7", minCriteria: "Navigasi, materi interaktif, kuis, feedback berfungsi", completed: true },
  { id: 7, name: "Prompt & Bahan AI", sessionNumber: "8", minCriteria: "Prompt terstruktur (Konteks-Peran-Tugas-Batasan-Format-Kriteria)", completed: true },
  { id: 8, name: "Asesmen Digital", sessionNumber: "10", minCriteria: "Item soal + rubrik + feedback otomatis selaras TP", completed: true },
  { id: 9, name: "Skenario Implementasi", sessionNumber: "11", minCriteria: "Integrasi menyeluruh pola Before–During–After", completed: true },
  { id: 10, name: "MPI Final + RPP Final", sessionNumber: "12–13", minCriteria: "Produk hasil uji coba & revisi siap diimplementasikan", completed: true },
  { id: 11, name: "Feedback Peer Review", sessionNumber: "14", minCriteria: "Masukan terstruktur: Menarik, Perlu Perbaikan, Potensi", completed: true },
  { id: 12, name: "Action Plan 30 Hari", sessionNumber: "15", minCriteria: "Rencana implementasi konkret 7–14–30 hari", completed: true },
];

export const SESSIONS_DATA: SessionData[] = [
  {
    id: 1,
    title: "SESI 1 — MINDSET: MASALAH PEMBELAJARAN SEBAGAI TITIK AWAL",
    subtitle: "Mengubah paradigma dari 'belajar aplikasi' menjadi 'memecahkan masalah pembelajaran dengan teknologi'",
    goal: "Mengubah paradigma dari 'belajar aplikasi' menjadi 'memecahkan masalah pembelajaran dengan teknologi'.",
    keyConcepts: [
      "Digitalisasi pembelajaran bukan sekadar memakai banyak aplikasi.",
      "Teknologi sebagai penguat proses pembelajaran.",
      "Peran guru sebagai learning designer.",
      "Masalah pembelajaran sebagai titik awal desain."
    ],
    handsOnTasks: [
      "Peserta memilih satu materi yang benar-benar akan diajarkan di kelasnya.",
      "Peserta menulis 3 masalah yang sering muncul saat mengajarkan materi tersebut.",
      "Peserta memilih satu masalah prioritas utama.",
      "Peserta menuliskan kondisi siswa, penyebab mendalam, dan kebutuhan belajar riil.",
      "Peserta merumuskan problem statement: 'Siswa mengalami ... sehingga membutuhkan ...'"
    ],
    productName: "Problem Statement + Peta Masalah Pembelajaran",
    successIndicators: [
      "Masalah spesifik, bukan umum (misal: bukan 'siswa malas', tetapi 'siswa kesulitan membayangkan sirkulasi darah besar karena abstrak').",
      "Berhubungan langsung dengan proses dan hasil pembelajaran.",
      "Ada kebutuhan belajar siswa yang terdefinisi dengan jelas."
    ],
    facilitatorRole: [
      "Memberikan contoh singkat, bukan ceramah panjang.",
      "Melakukan coaching saat peserta mengalami kebuntuan.",
      "Memastikan peserta menyelesaikan artefak sebelum berpindah ke sesi berikutnya."
    ],
    promptingQuestions: [
      "Tujuan belajarnya apa yang belum tercapai?",
      "Apa yang sebenarnya dialami siswa saat gagal memahami?",
      "Mengapa masalah ini tidak selesai dengan ceramah konvensional?"
    ],
    estimatedMinutes: { brief: 8, demo: 10, do: 30, share: 7, revise: 5 },
    relatedWorksheet: 'ws1'
  },
  {
    id: 2,
    title: "SESI 2 — WHY DIGITAL LEARNING?",
    subtitle: "Menentukan kapan teknologi memang diperlukan dan kapan tidak",
    goal: "Menentukan secara kritis kapan teknologi memang diperlukan dan kapan lebih efektif non-digital.",
    keyConcepts: [
      "Fungsi teknologi: visualisasi, simulasi, eksplorasi, kolaborasi, asesmen, diferensiasi, feedback.",
      "Teknologi dipilih karena kebutuhan pedagogis, bukan sekadar mengikuti tren.",
      "Membedakan penggunaan teknologi yang bermakna (meaningful) dan yang sekadar dekoratif/gimmick."
    ],
    handsOnTasks: [
      "Peserta mengambil problem statement dari Sesi 1.",
      "Membuat tabel pemetaan: Masalah → Strategi Pedagogis → Kebutuhan Teknologi.",
      "Menentukan bagian pembelajaran yang sebaiknya digital dan yang tetap dipertahankan non-digital (hands-on fisik/diskusi lisan).",
      "Presentasi cepat (Elevator Pitch 60 detik) per peserta atau pasangan belajar."
    ],
    productName: "Peta Kebutuhan Digital",
    successIndicators: [
      "Terdapat alasan pedagogis yang logis dan kuat.",
      "Teknologi benar-benar membantu menyelesaikan akar masalah belajar.",
      "Tidak semua aktivitas dipaksakan menjadi digital (prinsip proporsionalitas)."
    ],
    facilitatorRole: [
      "Mengajukan pertanyaan kritis: 'Apakah siswa bisa paham tanpa HP/laptop ini?'",
      "Mencegah pemilihan aplikasi sebelum pedagoginya jelas.",
      "Memberikan feedback terarah per peserta."
    ],
    promptingQuestions: [
      "Bagian mana dari konsep ini yang paling mustahil dijelaskan hanya dengan kata-kata?",
      "Apa nilai tambah unik teknologi di bagian tersebut?"
    ],
    estimatedMinutes: { brief: 5, demo: 10, do: 25, share: 10, revise: 10 },
    relatedWorksheet: 'ws1'
  },
  {
    id: 3,
    title: "SESI 3 — TPACK: MEMETAKAN KONTEN, PEDAGOGI, DAN TEKNOLOGI",
    subtitle: "Peserta mampu menerapkan TPACK pada satu materi nyata",
    goal: "Peserta mampu memetakan dan mengintegrasikan domain CK, PK, TK menjadi harmoni TPACK pada materi ajar nyata.",
    keyConcepts: [
      "CK (Content Knowledge): Pengetahuan substansi materi ajar yang mendalam.",
      "PK (Pedagogical Knowledge): Strategi, metode, dan proses mengajar yang efektif.",
      "TK (Technological Knowledge): Pengetahuan tentang media dan tools digital.",
      "PCK, TCK, TPK, dan puncaknya TPACK: Integrasi holistik ketiganya."
    ],
    handsOnTasks: [
      "Isi CK: konsep inti apa yang wajib dikuasai siswa?",
      "Isi PK: bagaimana tahapan siswa belajar dan mengkonstruksi konsep tersebut?",
      "Isi TK: teknologi apa yang tersedia dan terjangkau?",
      "Gabungkan ke dalam irisan PCK, TCK, dan TPK.",
      "Tuliskan keputusan utuh TPACK dalam satu paragraf desain instruksional."
    ],
    productName: "Peta TPACK Terpadu",
    successIndicators: [
      "Semua komponen saling berhubungan secara koheren.",
      "Teknologi mendukung pedagogi secara fungsional.",
      "Pedagogi dan teknologi bersinergi mencapai konten/tujuan belajar."
    ],
    facilitatorRole: [
      "Menunjukkan diagram TPACK interaktif.",
      "Memeriksa apakah ada ketimpangan (misal TK terlalu mendominasi CK).",
      "Menguji validitas paragraf desain TPACK peserta."
    ],
    promptingQuestions: [
      "Apakah teknologi ini mengubah cara siswa memahami konten secara bermakna?",
      "Pedagogi apa yang diaktifkan oleh perangkat digital yang dipilih?"
    ],
    estimatedMinutes: { brief: 8, demo: 10, do: 30, share: 7, revise: 5 },
    relatedWorksheet: 'ws2'
  },
  {
    id: 4,
    title: "SESI 4 — DIGITAL LEARNING DESIGN",
    subtitle: "Mengubah tujuan pembelajaran menjadi pengalaman belajar digital yang bermakna",
    goal: "Mengubah rumusan tujuan pembelajaran menjadi alur pengalaman belajar digital melalui Learning Design Canvas.",
    keyConcepts: [
      "Formula Emas: TUJUAN → PEDAGOGI → AKTIVITAS → TEKNOLOGI → MEDIA → ASESMEN.",
      "Prinsip keselarasan (alignment) antara tujuan, aktivitas, media, dan asesmen.",
      "Aktivitas siswa aktif sebagai episentrum desain (student-centered design)."
    ],
    handsOnTasks: [
      "Peserta menuliskan 1–2 tujuan pembelajaran yang spesifik dan terukur.",
      "Tentukan bukti autentik bahwa tujuan tersebut telah tercapai oleh siswa.",
      "Rancang aktivitas siswa: Sebelum (Before), Saat (During), dan Setelah (After) menggunakan media.",
      "Pilih teknologi/media yang tepat guna untuk tiap fase aktivitas.",
      "Tentukan asesmen formatif yang membuktikan ketercapaian tujuan."
    ],
    productName: "Learning Design Canvas",
    successIndicators: [
      "Tujuan terukur dan jelas tingkat kognitifnya.",
      "Aktivitas membuat siswa 'melakukan sesuatu' (aktif eksplorasi), bukan sekadar pasif menonton.",
      "Media dan asesmen sepenuhnya selaras dengan tujuan."
    ],
    facilitatorRole: [
      "Memastikan aktivitas berpusat pada siswa, bukan sekadar guru menerangkan.",
      "Memeriksa sinkronisasi 6 elemen formula.",
      "Memberikan pertanyaan pemantik."
    ],
    promptingQuestions: [
      "Apa yang dilakukan siswa saat layar menyala?",
      "Bagaimana Anda tahu siswa benar-benar berpikir, bukan cuma scrolling?"
    ],
    estimatedMinutes: { brief: 7, demo: 10, do: 30, share: 8, revise: 5 },
    relatedWorksheet: 'ws3'
  },
  {
    id: 5,
    title: "SESI 5 — WORKSHOP RPP/MODUL AJAR BERBASIS TPACK",
    subtitle: "Menghasilkan draft RPP/Modul Ajar yang mengintegrasikan TPACK secara nyata",
    goal: "Menyusun draft modul ajar/RPP operasional yang mengintegrasikan TPACK ke dalam langkah-langkah pembelajaran nyata.",
    keyConcepts: [
      "Struktur Modul Ajar/RPP: Identitas, TP, materi, model, media, langkah, asesmen.",
      "Integrasi Media Pembelajaran Interaktif (MPI) di fase Pendahuluan, Inti, dan Penutup.",
      "Diferensiasi proses dan instrumen refleksi bermakna."
    ],
    handsOnTasks: [
      "Peserta mengisi template RPP berdasarkan Learning Design Canvas yang telah dibuat.",
      "Masukkan teknologi secara spesifik: KAPAN digunakan, OLEH SIAPA, dan UNTUK APA.",
      "Tuliskan kolom aktivitas guru dan aktivitas siswa secara tegas dan terpisah.",
      "Masukkan asesmen diagnostik, formatif, dan sumatif.",
      "Lakukan peer review berpasangan dengan checklist TPACK, lalu revisi draft."
    ],
    productName: "RPP/Modul Ajar TPACK Draft 1",
    successIndicators: [
      "Ada benang merah jelas antara TP – Aktivitas – Media – Asesmen.",
      "Integrasi teknologi tertulis rinci dan operasional.",
      "Aktivitas siswa mendominasi porsi waktu kelas."
    ],
    facilitatorRole: [
      "Membedah contoh RPP yang TPACK-ready.",
      "Mendampingi kelompok dan mengecek pemisahan aktivitas guru vs siswa.",
      "Memastikan aspek diferensiasi terakomodasi."
    ],
    promptingQuestions: [
      "Apakah peran guru berubah menjadi fasilitator ketika siswa menggunakan media?",
      "Bagaimana guru menangani siswa yang lebih cepat atau lebih lambat?"
    ],
    estimatedMinutes: { brief: 5, demo: 10, do: 35, share: 10, revise: 10 },
    relatedWorksheet: 'rpp'
  },
  {
    id: 6,
    title: "SESI 6 — DESAIN MPI: DARI RPP MENJADI STORYBOARD",
    subtitle: "Mengubah bagian pembelajaran yang membutuhkan media menjadi rancangan 8 layar interaktif",
    goal: "Mengubah segmen pembelajaran kritis pada RPP menjadi storyboard Media Pembelajaran Interaktif berstruktur 8 layar.",
    keyConcepts: [
      "Pengertian MPI: bukan sekadar salindia (slide) presentasi statis atau video satu arah.",
      "Pilar interaktivitas: navigasi mandiri, interaksi aktif, feedback seketika, simulasi, kuis, refleksi.",
      "Prinsip dasar UI/UX ramah siswa: konsistensi, kejelasan instruksi, tidak membebani kognitif."
    ],
    handsOnTasks: [
      "Peserta memilih 1 bagian RPP yang paling urgen membutuhkan media interaktif.",
      "Menentukan tujuan spesifik MPI.",
      "Mengisi alur 8 layar: Cover, Tujuan, Stimulus, Materi, Aktivitas Interaktif, Kuis, Feedback, Refleksi.",
      "Menentukan aksi siswa pada setiap layar (klik, geser, ketik, uji coba).",
      "Menentukan feedback adaptif yang diterima siswa atas setiap aksi."
    ],
    productName: "Storyboard MPI (8 Layar Interaktif)",
    successIndicators: [
      "Ada tujuan belajar yang eksplisit di awal.",
      "Ada aksi siswa di tiap tahapan materi.",
      "Ada feedback yang memberikan pemahaman, bukan sekadar benar/salah.",
      "Ada ruang asesmen dan refleksi di akhir media."
    ],
    facilitatorRole: [
      "Memberikan template storyboard 8 layar.",
      "Mencegah peserta membuat buku teks yang dipindahkan ke layar digital.",
      "Memastikan alur interaksi logis."
    ],
    promptingQuestions: [
      "Apa respon sistem jika siswa memberikan jawaban keliru?",
      "Apakah siswa merasa sedang bereksplorasi atau hanya membaca buku di layar?"
    ],
    estimatedMinutes: { brief: 8, demo: 10, do: 35, share: 7, revise: 5 },
    relatedWorksheet: 'storyboard'
  },
  {
    id: 7,
    title: "SESI 7 — WORKSHOP PRODUKSI MPI",
    subtitle: "Mewujudkan storyboard menjadi Media Pembelajaran Interaktif Versi 1",
    goal: "Membangun prototipe Media Pembelajaran Interaktif Versi 1 yang siap dioperasikan dan diuji.",
    keyConcepts: [
      "Struktur halaman dan navigasi yang mulus.",
      "Pembuatan materi visual dan komponen interaksi aktif.",
      "Mekanisme kuis, skor otomatis, dan feedback langsung.",
      "Pemanfaatan platform yang ramah guru (Studio AI, Web Canvas, Simulator Interaktif)."
    ],
    handsOnTasks: [
      "Peserta membangun artefak MPI di studio interaktif sesuai rancangan storyboard.",
      "Fasilitator melakukan coaching berkeliling per meja/kelompok.",
      "Peserta menguji setiap navigasi tombol, interaksi, dan alur kuis.",
      "Peserta meminta satu rekan mencoba MPI tanpa diberi instruksi awal (uji kemandirian navigasi).",
      "Mencatat bagian yang membingungkan rekan untuk perbaikan segera."
    ],
    productName: "MPI Versi 1 (Prototipe Berfungsi)",
    successIndicators: [
      "Dapat dibuka lancar di browser/perangkat.",
      "Semua navigasi bekerja sesuai alur.",
      "Memiliki minimal 1 interaksi aktif (misal slider/simulasi input).",
      "Memiliki kuis interaktif dengan feedback otomatis."
    ],
    facilitatorRole: [
      "Troubleshooting teknis secara tepat sasaran.",
      "Memastikan peserta fokus pada konten dan pedagogi daripada hiasan semata.",
      "Mendorong uji coba buta (blind testing) antar peserta."
    ],
    promptingQuestions: [
      "Apakah rekan Anda bisa menyelesaikan media ini tanpa Anda membimbing di sebelahnya?",
      "Di mana rekan Anda berhenti atau merasa bingung?"
    ],
    estimatedMinutes: { brief: 5, demo: 10, do: 40, share: 10, revise: 5 },
    relatedWorksheet: 'mpi'
  },
  {
    id: 8,
    title: "SESI 8 — AI SEBAGAI TEACHING ASSISTANT",
    subtitle: "Menggunakan AI untuk mempercepat kerja guru tanpa menyerahkan keputusan pedagogis",
    goal: "Menguasai seni prompt engineering terstruktur agar AI menjadi asisten guru yang patuh pada kendali pedagogis guru.",
    keyConcepts: [
      "AI untuk ide materi, pertanyaan pemantik, apersepsi, kuis bertingkat, dan diferensiasi.",
      "Formula Prompt 6 Elemen: Konteks + Peran + Tugas + Batasan + Format Output + Kriteria.",
      "Prinsip krusial: Guru adalah kapten pedagogis; verifikasi fakta dan validasi konten wajib dilakukan."
    ],
    handsOnTasks: [
      "Peserta membawa satu materi atau bagian RPP yang belum tuntas.",
      "Menulis prompt awal.",
      "Bandingkan hasil respons AI dengan kebutuhan nyata kelas.",
      "Perbaiki prompt menggunakan struktur Konteks–Tugas–Format–Kriteria yang ketat.",
      "Validasi fakta, kesesuaian kurikulum, dan nilai pedagogisnya.",
      "Simpan formula prompt terbaik sebagai template pribadi."
    ],
    productName: "Prompt Pembelajaran + Hasil AI Tervalidasi",
    successIndicators: [
      "Formula prompt dapat digunakan ulang (reusable).",
      "Output tepat untuk jenjang dan karakteristik siswa yang dituju.",
      "Ada catatan validasi dan koreksi langsung dari guru terhadap hasil AI."
    ],
    facilitatorRole: [
      "Menunjukkan contoh 'Prompt Buruk vs Prompt Juara TPACK'.",
      "Mengajarkan teknik batasan (constraints) agar AI tidak halusinasi.",
      "Memeriksa hasil validasi peserta."
    ],
    promptingQuestions: [
      "Bagian mana dari output AI yang perlu disesuaikan dengan budaya lokal siswa Anda?",
      "Apakah penjelasan AI terlalu sulit atau terlalu menyederhanakan fakta sains?"
    ],
    estimatedMinutes: { brief: 8, demo: 10, do: 30, share: 7, revise: 5 },
    relatedWorksheet: 'ai'
  },
  {
    id: 9,
    title: "SESI 9 — STORYBOARD / PROMPT VISUAL SEBAGAI PENGAYAAN",
    subtitle: "Membuat rancangan visual/video pengayaan yang memperkuat daya tangkap siswa",
    goal: "Merancang visual storytelling dan prompt visual untuk materi abstrak yang sulit divisualisasikan.",
    keyConcepts: [
      "Prinsip Storytelling Visual dalam edukasi: kejelasan konsep di atas estetika semata.",
      "Elemen Scene: Nomor adegan, karakter, lokasi, sudut kamera, aksi gerak, Voice Over (VO), dan durasi.",
      "Konsistensi karakter dan latar visual.",
      "Prinsip kognitif Mayer: hindari redundansi antara teks dan suara."
    ],
    handsOnTasks: [
      "Peserta memilih 1 konsep dalam materinya yang paling sulit divisualisasikan konvensional.",
      "Menyusun 4–6 scene visual singkat.",
      "Menulis prompt visual untuk setiap scene.",
      "Menentukan teks Voice Over (VO) dalam Bahasa Indonesia komunikatif dan durasi detiknya.",
      "Peer check: uji apakah rancangan visual benar-benar memudahkan pemahaman konsep."
    ],
    productName: "Storyboard + Prompt Visual/Video Pengayaan",
    successIndicators: [
      "Satu scene memiliki satu fokus tujuan visual yang jelas.",
      "Visual secara langsung mendukung pemahaman konsep (bukan sekadar hiasan).",
      "VO tidak mengulang persis kata per kata teks di layar (bebas redundansi)."
    ],
    facilitatorRole: [
      "Memberikan contoh visualisasi konsep sains/matematika/sosial yang efektif.",
      "Membimbing sinkronisasi antara aksi visual dan narasi VO.",
      "Mengecek durasi agar tidak membuat siswa jenuh."
    ],
    promptingQuestions: [
      "Jika suara dimatikan, apakah gambar ini tetap bermakna?",
      "Apakah karakter ini membantu fokus siswa atau justru mengalihkan perhatian?"
    ],
    estimatedMinutes: { brief: 7, demo: 10, do: 30, share: 8, revise: 5 },
    relatedWorksheet: 'visual'
  },
  {
    id: 10,
    title: "SESI 10 — ASESMEN DIGITAL",
    subtitle: "Membuat instrumen asesmen digital yang benar-benar mengukur tujuan pembelajaran",
    goal: "Mengembangkan asesmen digital formatif dan diagnostik yang dilengkapi feedback otomatis bermakna.",
    keyConcepts: [
      "Asesmen diagnostik (pemetaan awal), formatif (pemantauan berkala), dan sumatif (evaluasi capaian).",
      "Variasi tipe soal interaktif: studi kasus, matching, drag & drop, problem solving, dan refleksi diri.",
      "Pentingnya umpan balik otomatis yang menjelaskan *mengapa* suatu jawaban tepat atau keliru.",
      "Kesesuaian level kognitif soal (HOTS) dengan rumusan Tujuan Pembelajaran."
    ],
    handsOnTasks: [
      "Peserta mengambil tujuan pembelajaran dari RPP Sesi 5.",
      "Menyusun kisi-kisi singkat asesmen.",
      "Membuat 5–10 butir instrumen asesmen digital interaktif.",
      "Menambahkan kunci jawaban, rubrik penilaian, dan teks feedback penjelasan untuk tiap opsi.",
      "Mengintegrasikan asesmen ke dalam MPI atau modul digital.",
      "Uji coba mengerjakan bersama rekan sejawat."
    ],
    productName: "Paket Asesmen Digital Berbasis Feedback",
    successIndicators: [
      "Setiap butir soal berakar pada tujuan pembelajaran tertentu.",
      "Feedback otomatis informatif dan mendidik saat siswa salah menjawab.",
      "Tingkat kesulitan proporsional sesuai jenjang siswa."
    ],
    facilitatorRole: [
      "Membimbing pembuatan distraktor (pilihan salah) yang realistis berdasarkan miskonsepsi umum.",
      "Memastikan feedback tidak hanya 'Salah, coba lagi!' melainkan memberi petunjuk berpikir.",
      "Memvalidasi kunci rubrik."
    ],
    promptingQuestions: [
      "Jika siswa menjawab opsi B, miskonsepsi apa yang sebenarnya dia alami?",
      "Bagaimana feedback yang Anda tulis membimbing siswa menemukan jawaban benar?"
    ],
    estimatedMinutes: { brief: 8, demo: 10, do: 32, share: 7, revise: 5 },
    relatedWorksheet: 'assessment'
  },
  {
    id: 11,
    title: "SESI 11 — INTEGRASI MPI KE DALAM RPP",
    subtitle: "Memastikan media menjadi bagian integral pengalaman belajar, bukan sekadar tontonan",
    goal: "Mengintegrasikan media pembelajaran interaktif ke dalam skenario kelas utuh pola Before-During-After.",
    keyConcepts: [
      "Pola Pembelajaran 3 Fase: BEFORE (persiapan kognitif) → DURING (eksplorasi aktif) → AFTER (konsolidasi & refleksi).",
      "Menghindari jebakan 'kelas bioskop' di mana siswa pasif di depan gawai.",
      "Peran guru aktif membimbing, mengamati data, dan melakukan intervensi saat siswa mengeksplorasi MPI."
    ],
    handsOnTasks: [
      "Peserta membuka kembali draft RPP TPACK.",
      "Menentukan aktivitas siswa sebelum menyentuh media (pemantik masalah, hipotesis).",
      "Menentukan lembar panduan atau tugas nyata siswa saat mengoperasikan MPI.",
      "Menentukan tindak lanjut (diskusi kelas, penyimpulan, aplikasi masalah baru) setelah sesi MPI.",
      "Memastikan setiap detik penggunaan gawai memiliki akuntabilitas tindakan siswa."
    ],
    productName: "Skenario Implementasi MPI (Before-During-After)",
    successIndicators: [
      "Ada panduan aktivitas siswa yang jelas saat menggunakan media.",
      "Ada sesi tindak lanjut dan konfirmasi konsep pasca penggunaan media.",
      "MPI terhubung harmonis dengan tujuan belajar dan asesmen akhir."
    ],
    facilitatorRole: [
      "Menantang peserta dengan skenario nyata: 'Apa yang dilakukan jika internet mati atau gawai rusak?'",
      "Memeriksa kejelasan peran guru di tengah kelas berteknologi.",
      "Memastikan ada penutupan bermakna."
    ],
    promptingQuestions: [
      "Apa instruksi spesifik guru sebelum siswa menyalakan layarnya?",
      "Bagaimana guru memastikan siswa tidak membuka aplikasi lain?"
    ],
    estimatedMinutes: { brief: 6, demo: 10, do: 30, share: 8, revise: 6 },
    relatedWorksheet: 'implementation'
  },
  {
    id: 12,
    title: "SESI 12 — UJI COBA, VALIDASI, DAN REVISI",
    subtitle: "Menguji produk dari 4 dimensi: Konten, Pedagogi, Teknologi, dan User Experience",
    goal: "Melakukan validasi buta dan uji coba peer testing untuk menemukan bug, hambatan pedagogis, dan potensi revisi.",
    keyConcepts: [
      "Content Check: Akurasi fakta ilmiah, kejelasan definisi, kesesuaian jenjang.",
      "Pedagogical Check: Kelancaran alur pemahaman konsep, tidak ada lompatan kognitif.",
      "Technology & Accessibility Check: Responsivitas tampilan, tombol bekerja, kecepatan muat.",
      "Interaction & Assessment Check: Kuis memberikan feedback yang tepat, tidak ada jalan buntu navigasi."
    ],
    handsOnTasks: [
      "Peserta saling bertukar gawai atau tautan produk dengan rekan sejawat.",
      "Penguji mencoba produk dengan memerankan diri sebagai siswa yang belum pernah belajar materi ini.",
      "Penguji mengisi instrumen checklist validasi 4 dimensi.",
      "Penguji mencatat minimal 3 temuan nyata (titik kebingungan atau saran konstruktif).",
      "Pemilik produk mendengarkan tanpa defensif, lalu langsung merevisi produknya."
    ],
    productName: "Laporan Uji Coba + MPI Versi 2 (Revisi)",
    successIndicators: [
      "Terdokumentasi minimal 3 temuan perbaikan yang objektif.",
      "Terjadi revisi nyata pada media/RPP berdasarkan temuan rekan.",
      "Produk terbukti lebih mudah dipahami dan dioperasikan setelah direvisi."
    ],
    facilitatorRole: [
      "Menciptakan iklim psikologis aman di mana kritik teknis diterima sebagai sarana bertumbuh.",
      "Memoderasi sesi uji coba berpasangan.",
      "Memastikan waktu revisi benar-benar digunakan untuk memperbaiki produk."
    ],
    promptingQuestions: [
      "Di bagian mana rekan Anda terdiam lebih dari 15 detik karena bingung harus klik apa?",
      "Apakah ada istilah materi yang memicu multi-tafsir?"
    ],
    estimatedMinutes: { brief: 5, demo: 10, do: 35, share: 10, revise: 15 },
    relatedWorksheet: 'testing'
  },
  {
    id: 13,
    title: "SESI 13 — FINALISASI PORTOFOLIO TPACK",
    subtitle: "Mengintegrasikan seluruh artefak menjadi satu paket portofolio pembelajaran siap uji",
    goal: "Menyatukan semua produk dari Sesi 1 sampai Sesi 12 ke dalam satu portofolio pembelajaran digital yang kohesif.",
    keyConcepts: [
      "Keterkaitan holistik: RPP + MPI + Asesmen + Skenario + Storyboard dalam satu kesatuan utuh.",
      "Konsistensi istilah, kode kompetensi/tujuan, dan durasi waktu pembelajaran.",
      "Kesiapan implementasi di ruang kelas nyata besok pagi."
    ],
    handsOnTasks: [
      "Peserta menyatukan semua dokumen artefak ke dalam portofolio digital.",
      "Melakukan self-check mandiri menggunakan Rubrik Penilaian Akhir (Skala 1–4 per aspek).",
      "Memperbaiki bagian yang belum selaras.",
      "Menyiapkan rangkuman presentasi produk 3 menit untuk ajang pameran karya (Gallery Walk)."
    ],
    productName: "Portofolio Pembelajaran Digital Lengkap",
    successIndicators: [
      "Portofolio lengkap berisi 12 artefak yang saling berhubungan erat.",
      "Tidak ada kontradiksi antara langkah RPP dan alur di media interaktif.",
      "Produk siap diuji coba langsung di kelas nyata."
    ],
    facilitatorRole: [
      "Melakukan audit kelengkapan berkas portofolio.",
      "Memberikan afirmasi penguatan atas kemajuan peserta.",
      "Membantu peserta menyusun elevator pitch 3 menit."
    ],
    promptingQuestions: [
      "Apakah jika ada guru pengganti yang membaca portofolio ini, ia bisa langsung mengajar dengan baik?",
      "Bagian mana dari karya ini yang paling Anda banggakan sebagai Guru Kreator?"
    ],
    estimatedMinutes: { brief: 5, demo: 10, do: 35, share: 10, revise: 10 },
    relatedWorksheet: 'portfolio'
  },
  {
    id: 14,
    title: "SESI 14 — GALLERY WALK / SHOWCASE",
    subtitle: "Membangun budaya apresiasi, berbagi praktik baik, dan perbaikan berkelanjutan",
    goal: "Mempresentasikan hasil karya, menerima apresiasi dan peer feedback lintas mata pelajaran, serta memilih prioritas tindak lanjut.",
    keyConcepts: [
      "Prinsip apresiasi kolaboratif dalam komunitas praktisi guru.",
      "Prinsip umpan balik berkualitas: Spesifik, Konstruktif, dan Dapat Ditindaklanjuti (Actionable).",
      "Struktur kartu feedback: 1. Hal yang menarik, 2. Hal yang perlu diperbaiki, 3. Potensi implementasi."
    ],
    handsOnTasks: [
      "Peserta memajang karyanya di galeri pameran digital.",
      "Peserta berkeliling (Gallery Walk virtual/tatap muka) mencoba minimal 3 karya rekan guru lain.",
      "Mengisi kartu feedback untuk rekan: Menarik – Perlu Diperbaiki – Potensi Penggunaan.",
      "Setiap pemilik karya membaca masukan yang masuk dan memilih 2 masukan prioritas tertinggi."
    ],
    productName: "Kartu Feedback Peer Review & Rekomendasi Prioritas",
    successIndicators: [
      "Mendapatkan minimal 2–3 umpan balik spesifik dari rekan guru lain.",
      "Pemilik karya mampu merumuskan 2 poin revisi prioritas.",
      "Guru mampu mengartikulasikan alasan di balik keputusan desain pembelajarannya."
    ],
    facilitatorRole: [
      "Memandu jalannya pameran karya dengan atmosfer yang hangat dan saling menghargai.",
      "Memberikan bintang apresiasi untuk karya-karya dengan integrasi TPACK paling inspiratif.",
      "Mengarahkan diskusi reflektif bersama."
    ],
    promptingQuestions: [
      "Ide kreatif apa dari karya rekan Anda yang bisa Anda adaptasi ke mata pelajaran Anda sendiri?",
      "Bagaimana perasaan Anda melihat karya yang Anda bangun sendiri dari nol kini dinikmati rekan lain?"
    ],
    estimatedMinutes: { brief: 5, demo: 5, do: 40, share: 15, revise: 5 },
    relatedWorksheet: 'showcase'
  },
  {
    id: 15,
    title: "SESI 15 — REFLEKSI DAN ACTION PLAN 30 HARI",
    subtitle: "Memastikan transformasi dan produk benar-benar diimplementasikan nyata di sekolah",
    goal: "Menyusun peta jalan implementasi 30 hari pasca pelatihan agar inovasi tidak berhenti di ruang pelatihan.",
    keyConcepts: [
      "Refleksi transformasi paradigma: dari guru konsumen teknologi menjadi Guru Kreator pembelajaran.",
      "Siklus implementasi 7–14–30 hari: uji coba perdana, revisi berbasis data murid, deseminasi praktik baik.",
      "Dokumentasi portofolio praktik baik dan advokasi rekan sejawat."
    ],
    handsOnTasks: [
      "Peserta menuliskan refleksi personal: apa paradigma lama yang ditinggalkan dan apa yang berubah.",
      "Menetapkan kelas dan tanggal spesifik implementasi perdana produk ini.",
      "Target 7 Hari: menguji coba produk pada minimal satu rombel kelas nyata.",
      "Target 14 Hari: merevisi media dan RPP berdasarkan respon langsung para siswa.",
      "Target 30 Hari: membagikan praktik baik dan data hasil belajar ke MGMP / komunitas guru sekolah.",
      "Menentukan indikator bukti keberhasilan nyata."
    ],
    productName: "Action Plan 30 Hari & Komitmen Guru Kreator",
    successIndicators: [
      "Tercantum tanggal target dan rombel kelas implementasi yang konkret.",
      "Ada ukuran bukti keberhasilan yang terukur (misal: antusiasme murid, skor ketuntasan).",
      "Ada rencana refleksi dan deseminasi ke komunitas guru."
    ],
    facilitatorRole: [
      "Memimpin ikrar bersama Guru Kreator.",
      "Memverifikasi realitas target pada rencana aksi 30 hari masing-masing peserta.",
      "Menutup pelatihan dengan pengukuhan kelulusan dan penyerahan sertifikat."
    ],
    promptingQuestions: [
      "Apa janji Anda kepada siswa Anda ketika Anda kembali ke sekolah besok?",
      "Bagaimana Anda menjaga api kreasi ini agar terus menyala dalam rutinitas mengajar sehari-hari?"
    ],
    estimatedMinutes: { brief: 10, demo: 5, do: 30, share: 15, revise: 10 },
    relatedWorksheet: 'action_plan'
  }
];

export const FINAL_RUBRIC_CONFIG = [
  {
    id: "goalAlignment",
    aspect: "Kesesuaian Tujuan",
    weight: 20,
    indicator: "Produk mendukung tujuan pembelajaran secara langsung dan terukur",
    criteria: [
      { level: 1, label: "Kurang (1)", desc: "Media atau aktivitas terlepas dari tujuan pembelajaran yang dirumuskan." },
      { level: 2, label: "Cukup (2)", desc: "Ada kaitan dengan tujuan namun beberapa bagian masih menyimpang atau ambigu." },
      { level: 3, label: "Baik (3)", desc: "Produk selaras dengan tujuan pembelajaran dan indikator terdefinisi jelas." },
      { level: 4, label: "Sangat Baik (4)", desc: "Sangat koheren; setiap layar dan aktivitas secara presisi mengukur & mencapai tujuan." }
    ]
  },
  {
    id: "pedagogy",
    aspect: "Pedagogi",
    weight: 20,
    indicator: "Aktivitas siswa bermakna, aktif, dan terarah (student-centered)",
    criteria: [
      { level: 1, label: "Kurang (1)", desc: "Siswa pasif; teknologi hanya menggantikan buku atau papan tulis (hanya membaca teks panjang)." },
      { level: 2, label: "Cukup (2)", desc: "Ada sedikit interaksi namun masih dominan guru atau satu arah." },
      { level: 3, label: "Baik (3)", desc: "Aktivitas siswa bermakna, ada alur Before-During-After yang terpandu." },
      { level: 4, label: "Sangat Baik (4)", desc: "Eksplorasi inkuiri yang kaya; siswa mengkonstruksi pengetahuan secara mandiri dan aktif." }
    ]
  },
  {
    id: "content",
    aspect: "Konten",
    weight: 20,
    indicator: "Materi akurat, jelas, bebas miskonsepsi, dan sesuai jenjang siswa",
    criteria: [
      { level: 1, label: "Kurang (1)", desc: "Terdapat kesalahan konsep/fakta atau bahasa tidak sesuai jenjang kognitif siswa." },
      { level: 2, label: "Cukup (2)", desc: "Konsep benar namun penyajian terlalu padat atau berbelit-belit." },
      { level: 3, label: "Baik (3)", desc: "Materi akurat, bahasa komunikatif, dan runtut sesuai tingkatan kelas." },
      { level: 4, label: "Sangat Baik (4)", desc: "Sangat akurat, penyajian konsep bertingkat dari konkret ke abstrak, bebas miskonsepsi." }
    ]
  },
  {
    id: "technologyTpack",
    aspect: "Teknologi / TPACK",
    weight: 20,
    indicator: "Teknologi tepat guna, fungsional, dan terintegrasi harmonis dengan materi & pedagogi",
    criteria: [
      { level: 1, label: "Kurang (1)", desc: "Teknologi sekadar kosmetik/dekoratif tanpa fungsi pedagogis jelas." },
      { level: 2, label: "Cukup (2)", desc: "Teknologi berfungsi namun integrasi dengan materi masih terasa dipaksakan." },
      { level: 3, label: "Baik (3)", desc: "Teknologi tepat guna, mudah dioperasikan, dan memperkuat pedagogi guru." },
      { level: 4, label: "Sangat Baik (4)", desc: "Harmoni TPACK tercapai sempurna; teknologi membuka kemungkinan belajar yang mustahil tanpa perangkat digital." }
    ]
  },
  {
    id: "interactivityAssessment",
    aspect: "Interaktivitas & Asesmen",
    weight: 20,
    indicator: "Ada interaksi bermakna, feedback otomatis langsung, dan asesmen yang selaras",
    criteria: [
      { level: 1, label: "Kurang (1)", desc: "Tidak ada interaksi aktif atau asesmen tanpa kunci dan umpan balik." },
      { level: 2, label: "Cukup (2)", desc: "Ada kuis namun umpan balik sebatas 'Benar/Salah' tanpa penjelasan mendidik." },
      { level: 3, label: "Baik (3)", desc: "Ada tombol interaksi responsif, kuis dengan skor, dan feedback penjelasan jelas." },
      { level: 4, label: "Sangat Baik (4)", desc: "Interaktivitas adaptif; feedback memberikan scaffolding berpikir konstruktif bagi siswa." }
    ]
  }
];
