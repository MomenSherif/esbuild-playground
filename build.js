const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/app.jsx'],
    bundle: true,
    outfile: 'dist/index.js',
  })
  .catch(() => process.exit(1));
