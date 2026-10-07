import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Initialize Google Gen AI
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// AI Endpoint for Teaching Assistant
app.post('/api/ai/generate', async (req, res) => {
  try {
    const { prompt, systemInstruction } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    if (!ai) {
      // Intelligent pedagogical fallback when API key is not configured
      return res.json({
        content: `[Mode Simulasi AI TPACK - Kunci API belum disetel di environment]\n\nBerikut saran terstruktur berdasarkan prinsip TPACK:\n\n1. Analisis Konten (CK):\nKonsep ini memerlukan visualisasi bertahap untuk mencegah miskonsepsi.\n\n2. Strategi Pedagogis (PK):\nGunakan strategi guided-inquiry dengan siklus Before-During-After.\n\n3. Rekomendasi Teknologi (TK):\nImplementasikan simulasi interaktif mikro dengan umpan balik formatif langsung.\n\nContoh Prompt Lanjutan yang Direkomendasikan:\n"Sebagai guru ahli kurikulum, buatkan 3 skenario masalah dunia nyata terkait materi ini untuk siswa SMP/SMA kelas 8/11 dengan tingkat kognitif C4 (Menganalisis)."`
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction || 'Anda adalah Konsultan Ahli Pedagogi TPACK (Technological Pedagogical Content Knowledge) dan Pengembang Media Pembelajaran Interaktif (MPI) untuk Pelatihan Guru Kreator.',
        temperature: 0.7,
      }
    });

    const text = response.text || '';
    res.json({ content: text });
  } catch (error: any) {
    console.error('AI Generation error:', error);
    res.status(500).json({ 
      error: 'Gagal memproses permintaan AI', 
      details: error.message || 'Unknown error' 
    });
  }
});

// Setup Vite in development or static serve in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();
