// konomi-cube-v2-api · Express HTTP wrapper around konomi-cube-v2-sdk · MIT · AI-Native Solutions
import express from 'express';

const app = express();
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, tool: 'konomi-cube-v2', version: '1.0.0' }));

app.post('/theta', async (req, res) => {
  try {
    const { theta } = await import('@ai-native-solutions/konomi-cube-v2-sdk');
    const out = typeof theta === 'function' ? await theta(req.body) : { error: 'theta not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/apply', async (req, res) => {
  try {
    const { apply } = await import('@ai-native-solutions/konomi-cube-v2-sdk');
    const out = typeof apply === 'function' ? await apply(req.body) : { error: 'apply not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/phiCoherence', async (req, res) => {
  try {
    const { phiCoherence } = await import('@ai-native-solutions/konomi-cube-v2-sdk');
    const out = typeof phiCoherence === 'function' ? await phiCoherence(req.body) : { error: 'phiCoherence not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/kappa', async (req, res) => {
  try {
    const { kappa } = await import('@ai-native-solutions/konomi-cube-v2-sdk');
    const out = typeof kappa === 'function' ? await kappa(req.body) : { error: 'kappa not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/audioModulatedAngle', async (req, res) => {
  try {
    const { audioModulatedAngle } = await import('@ai-native-solutions/konomi-cube-v2-sdk');
    const out = typeof audioModulatedAngle === 'function' ? await audioModulatedAngle(req.body) : { error: 'audioModulatedAngle not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/makePlaneGeometry', async (req, res) => {
  try {
    const { makePlaneGeometry } = await import('@ai-native-solutions/konomi-cube-v2-sdk');
    const out = typeof makePlaneGeometry === 'function' ? await makePlaneGeometry(req.body) : { error: 'makePlaneGeometry not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('konomi-cube-v2-api listening on :' + PORT));
