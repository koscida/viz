// const viz = new Spacekit.Simulation(document.getElementById("main-container"), {
// 	basePath: "../../src",
// 	unitsPerAu: 10.0,
// 	jd: 2443568.0,
// 	jdPerSecond: 1.0,
// 	camera: {
// 		enableDrift: false,
// 	},
// });

// // Create a background using Yale Bright Star Catalog data.
// viz.createStars();

// // Create our first object - the sun - using a preset space object.
// viz.createObject("sun", Spacekit.SpaceObjectPresets.SUN);

// // Then add some planets
// viz.createObject("mercury", Spacekit.SpaceObjectPresets.MERCURY);
// viz.createObject("venus", Spacekit.SpaceObjectPresets.VENUS);
// // viz.createObject("earth", Spacekit.SpaceObjectPresets.EARTH);
// viz.createObject("mars", Spacekit.SpaceObjectPresets.MARS);
// viz.createObject("jupiter", Spacekit.SpaceObjectPresets.JUPITER);
// viz.createObject("saturn", Spacekit.SpaceObjectPresets.SATURN);
// viz.createObject("uranus", Spacekit.SpaceObjectPresets.URANUS);
// viz.createObject("neptune", Spacekit.SpaceObjectPresets.NEPTUNE);

// const ephem = new Spacekit.Ephem(
// 	{
// 		epoch: 2458600.5,
// 		a: 1.12311722831,
// 		e: 0.214009725406,
// 		i: 26.0598473365,
// 		om: 161.236182852,
// 		w: 102.175880686,
// 		ma: 122.22725789,
// 	},
// 	"deg"
// );

// const orb = new Spacekit.Orbit(ephem);

// const obj = viz.createShape("myobj", {
// 	ephem,
// 	ecliptic: {
// 		displayLines: true,
// 		lineColor: 0xff0000,
// 	},
// 	shape: {
// 		shapeUrl:
// 			"https://raw.githubusercontent.com/typpo/spacekit/master/examples/asteroid_shape_from_earth/A1046.M1863.obj",
// 	},
// 	rotation: {
// 		lambdaDeg: 251,
// 		betaDeg: -63,
// 		period: 3.755067,
// 		yorp: 1.9e-8,
// 		phi0: 0,
// 		jd0: 2443568.0,
// 	},
// 	debug: {
// 		// showAxes: true,
// 	},
// });

// obj.initRotation();
// obj.startRotation();

// // Add some light.
// viz.createLight([0, 0, 0]);
// viz.createAmbientLight();

// // viz.getViewer().followObject(obj, [-0.01, -0.01, 0.01]);
