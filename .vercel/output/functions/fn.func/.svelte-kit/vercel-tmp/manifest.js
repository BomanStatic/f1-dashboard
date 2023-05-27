export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/Albon.webp","img/Alonso.webp","img/Bottas.webp","img/Circuit/Monte-Carlo.webp","img/Circuit/Montmeló.webp","img/de Vries.webp","img/Gasly.webp","img/Hamilton.webp","img/Hülkenberg.webp","img/Leclerc.webp","img/Magnussen.webp","img/Norris.webp","img/Ocon.webp","img/Piastri.webp","img/Pérez.webp","img/Russell.webp","img/Sainz.webp","img/Sargeant.webp","img/Stroll.webp","img/Tsunoda.webp","img/Verstappen.webp","img/Zhou.webp"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.907ad32a.js","app":"_app/immutable/entry/app.ecdf9308.js","imports":["_app/immutable/entry/start.907ad32a.js","_app/immutable/chunks/index.82199ac0.js","_app/immutable/chunks/singletons.f3d25955.js","_app/immutable/entry/app.ecdf9308.js","_app/immutable/chunks/index.82199ac0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[driverId]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"driverId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
