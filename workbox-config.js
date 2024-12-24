module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,svg,js,png,xml,ico,webmanifest,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	runtimeCaching: [
		{
			urlPattern: new RegExp('timings.js'),
			handler: 'NetworkFirst',
		}
	],
	runtimeCaching: [
		{
			urlPattern: new RegExp('index.js'),
			handler: 'NetworkFirst',
		}
	],
	runtimeCaching: [
		{
			urlPattern: new RegExp('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap'),
			handler: 'NetworkFirst',
		}
	],
	runtimeCaching: [
		{
			urlPattern: new RegExp('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'),
			handler: 'NetworkFirst',
		}
	],
	runtimeCaching: [
		{
			urlPattern: new RegExp('../index.html'),
			handler: 'CacheFirst'
		}
	],
	clientsClaim: true,
	skipWaiting: true
};