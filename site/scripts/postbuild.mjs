// GitHub Pages serves 404.html for unknown paths; copying the app shell there lets
// deep links like /articles/<slug> load the single-page app.
import { copyFileSync } from 'node:fs';
copyFileSync('dist/index.html', 'dist/404.html');
console.log('postbuild: wrote dist/404.html');
