// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'bin/aries.ts'],
  format: ['esm', 'cjs'],
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.js' : `.${format}`,
    };
  },
  target: 'node12',
  bundle: true,
  splitting: false,
  sourcemap: false,
  dts: true,
  clean: false,
});
