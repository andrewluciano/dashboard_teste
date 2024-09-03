import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react'


import type { Plugin } from 'vite';

interface SourcemapExclude {
  excludeNodeModules?: boolean;
}
export function sourcemapExclude(opts?: SourcemapExclude): Plugin {
  return {
    name: 'sourcemap-exclude',
    transform(code: string, id: string) {
      if (opts?.excludeNodeModules && id.includes('node_modules')) {
        return {
          code,
          map: { mappings: '' },
        };
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths(),],
  
})
