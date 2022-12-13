import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { defineConfig, UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { type RemoteData } from './remotes';

export const customDefineConfig = ({ name }: RemoteData) =>
	defineConfig(() => {
		return {
			server: { host: true, cors: true, fs: { allow: ['../../node_modules', '.'] } },
			ssr: { target: 'webworker' },
			plugins: [qwikCity({ basePathname: `/${name}/` }), qwikVite(), tsconfigPaths()],
		};
	});
