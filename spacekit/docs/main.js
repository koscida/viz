const viz = new Spacekit.Simulation(document.getElementById("main-container"), {
	// Required
	assetPath: "https://typpo.github.io/spacekit/src",
});

viz.createStars();

// Add some light.
viz.createLight([0, 0, 0]);
viz.createAmbientLight();

// Create a skybox using NASA TYCHO artwork.
// const skybox = viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

// // Create our first object - the sun - using a preset space object.
// const sun = viz.createObject("sun", Spacekit.SpaceObjectPresets.SUN);

// // Then add some planets
// viz.createObject("mercury", Spacekit.SpaceObjectPresets.MERCURY);
// viz.createObject("venus", Spacekit.SpaceObjectPresets.VENUS);
// viz.createObject("earth", Spacekit.SpaceObjectPresets.EARTH);
// viz.createObject("mars", Spacekit.SpaceObjectPresets.MARS);
// viz.createObject("jupiter", Spacekit.SpaceObjectPresets.JUPITER);
// viz.createObject("saturn", Spacekit.SpaceObjectPresets.SATURN);
// viz.createObject("uranus", Spacekit.SpaceObjectPresets.URANUS);
// viz.createObject("neptune", Spacekit.SpaceObjectPresets.NEPTUNE);
