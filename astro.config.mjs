// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGiscus from 'starlight-giscus';


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
    			starlightGiscus({
      				repo: 'lenivecmister-arch/AnotherWorld',
      				repoId: 'R_kgDORB5HKg',
      				category: 'Announcements',
      				categoryId: 'DIC_kwDORB5HKs4C8vZw',
    			}),
  			],
			title: 'Another World',
			sidebar: [
				{
					label: 'Новые главы',
					items: [{ autogenerate: { directory: 'Новые главы' } }],
				},
			],
		}),
	],
});
