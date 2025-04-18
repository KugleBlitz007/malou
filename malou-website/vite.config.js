///////////////// Production version ///////////////////////

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss()
  ],
  assetsInclude: ['**/*.png', '**/*.PNG', '**/*.heic', '**/*.HEIC'],
  /*
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
  */
})

////////////////// Developement version ///////////////////////

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   base: '/malou/',
//   plugins: [
//     react(),
//     tailwindcss()
//   ],
//   assetsInclude: ['**/*.png', '**/*.PNG', '**/*.heic', '**/*.HEIC'],
//   /*
//   build: {
//     outDir: 'dist',
//     assetsDir: 'assets',
//     rollupOptions: {
//       output: {
//         assetFileNames: 'assets/[name].[hash][extname]',
//         chunkFileNames: 'assets/[name].[hash].js',
//         entryFileNames: 'assets/[name].[hash].js',
//       },
//     },
//   },
//   */
// })