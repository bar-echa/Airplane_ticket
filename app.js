import { app, PORT } from './src/server.js';

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});