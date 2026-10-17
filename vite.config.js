import { defineConfig } from 'vite';
import { copyFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const copyStatic = () => ({
  name: 'copy-static',
  closeBundle() {
    const root = process.cwd();
    const dist = join(root, 'dist');
    const files = ['rss.xml', 'CNAME'];
    files.forEach((f) => {
      const src = join(root, f);
      if (existsSync(src)) copyFileSync(src, join(dist, f));
    });
    const linkDir = join(root, 'link');
    if (existsSync(linkDir)) {
      const distLink = join(dist, 'link');
      mkdirSync(distLink, { recursive: true });
      readdirSync(linkDir).forEach((f) => {
        copyFileSync(join(linkDir, f), join(distLink, f));
      });
    }
  },
});

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
  },
  plugins: [copyStatic()],
});
