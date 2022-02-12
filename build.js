const esbuild = require('esbuild');

// esbuild
//   .build({
//     entryPoints: ['src/app.jsx'],
//     bundle: true,
//     sourcemap: true,
//     minify: true,
//     // Bundling for node
//     // platform: 'node', // will mark all built in node modules as externals to not be included in the bundle
//     // target: ['node10.4'],
//     target: ['chrome58', 'firefox57', 'safari11', 'edge16', 'ie11'],
//     // You can exclude all of your dependencies from the bundle by marking them as external (Good for libraries as dependencies will be downloaded when installing the package)
//     // external: ['./node_modules/*'],
//     // outfile: 'dist/index.js',
//     // drop: ['console', 'debugger'], // Remove debugger and logs from output bundle
//     outdir: 'dist',
//   })
//   .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints: ['src/A.js'],
    bundle: true,
    define: {
      __DEV__: false,
      'process.env.NODE_ENV': '"production"',
    },
    outdir: 'dist',
  })
  .catch(() => process.exit(1));
