(function ($) {
	$.fn.spacejs = function (e) {
		var _this = this,
			canvas = _this[0];
		console.log("_this: ", _this);
		console.log("e: ", e);

		// set init styles
		_this.css("width", "100%");
		_this.css("height", "100%");
		_this.css("background", "black");

		// // // //
		// GL

		// Initialize the GL context
		const gl = canvas.getContext("webgl");

		// Only continue if WebGL is available and working
		if (gl === null) {
			alert(
				"Unable to initialize WebGL. Your browser or machine may not support it."
			);
			return;
		}

		//
		//
		// SOURCE: https://www.tutorialspoint.com/webgl/webgl_modes_of_drawing.htm
		//
		//

		// // Set clear color to black, fully opaque
		// gl.clearColor(0.0, 0.0, 0.0, 1.0);
		// // Clear the color buffer with specified clear color
		// gl.clear(gl.COLOR_BUFFER_BIT);

		// //
		// Tutorials

		// ////
		/** Step 2: Define the geometry and store it in buffer objects
		 *
		 * We define the attributes of the geometry such as vertices, indices, color, etc.,
		 * and store them in the JavaScript arrays. Then, we create one or more buffer objects
		 * and pass the arrays containing the data to the respective buffer object. In the example,
		 * we store the vertices of the triangle in a JavaScript array and pass this array to
		 * a vertex buffer object. */

		//
		// Vertex buffer

		// Create vertices
		// var vertices = [-0.5, 0.5, -0.5, -0.5, 0.0, -0.5];
		var vertices = [
			-0.7, -0.1, 0, -0.3, 0.6, 0, -0.3, -0.3, 0, 0.2, 0.6, 0, 0.3, -0.3,
			0, 0.7, 0.6, 0,
		];
		// Create a new buffer object
		var vertex_buffer = gl.createBuffer();
		// Bind an empty array buffer to it --> binds the type of gl.ARRAY_BUFFER to the buffer we just created
		// 	void bindBuffer (enum target, Object buffer)
		gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
		// Pass the vertices data to the buffer
		// 	void bufferData (enum target, Object data, enum usage)
		//		target options:
		//			ARRAY_BUFFER - vertex data
		//			ELEMENT_ARRAY_BUFFER - index data
		//		usage options:
		//			STATIC_DRAW - data specified once and used many times
		//			STREAM_DRAW - data will be specified once and used a few times
		//			DYNAMIC_DRAW - data will be specified repeatedly and used many times
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array(vertices),
			gl.STATIC_DRAW
		);
		// Unbind the buffer
		gl.bindBuffer(gl.ARRAY_BUFFER, null);

		//
		// Index buffer
		var indices = [0, 1, 2];
		var index_buffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
		gl.bufferData(
			gl.ELEMENT_ARRAY_BUFFER,
			new Uint16Array(indices),
			gl.STATIC_DRAW
		);
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

		// ////
		/** Step 3: Create and compile Shader programs
		 *
		 * We write vertex shader and fragment shader programs, compile them, and create a
		 * combined program by linking these two programs.
		 */

		//
		// Vertex shader source code
		var vertCode =
			"attribute vec2 coordinates;" +
			"void main(void) {" +
			" gl_Position = vec4(coordinates,1.0);" +
			"}";
		//Create a vertex shader object
		//	Object createShader (enum type)
		//		VERTEX_SHADER - vertex shader
		//		FRAGMENT_SHADER - fragment shader
		var vertShader = gl.createShader(gl.VERTEX_SHADER);
		// Attach vertex shader source code
		//	void shaderSource(Object shader, string source)
		gl.shaderSource(vertShader, vertCode);
		// Compile the vertex shader
		gl.compileShader(vertShader);

		//
		// Fragment shader source code
		var fragCode =
			"void main(void) {" +
			"  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);" +
			"}";
		// Create fragment shader object
		var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
		// Attach fragment shader source code
		gl.shaderSource(fragShader, fragCode);
		// Compile the fragment shader
		gl.compileShader(fragShader);

		//
		// Create a shader program object to store combined shader program
		var shaderProgram = gl.createProgram();
		// Attach a vertex shader
		gl.attachShader(shaderProgram, vertShader);
		// Attach a fragment shader
		gl.attachShader(shaderProgram, fragShader);
		// Link both programs
		gl.linkProgram(shaderProgram);
		// Use the combined shader program object
		gl.useProgram(shaderProgram);

		// ////
		/** Step 4: Associate the shader programs to buffer objects
		 *
		 * We associate the buffer objects and the combined shader program.
		 */

		// Bind vertex buffer object
		gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

		// Get the attribute location
		//	ulong getAttribLocation(Object program, string name)
		var coord = gl.getAttribLocation(shaderProgram, "coordinates");
		// point an attribute to the currently bound VBO
		//	void vertexAttribPointer(location, int size, enum type, bool normalized, long stride, long offset)
		gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
		// Enable the attribute
		gl.enableVertexAttribArray(coord);

		// ////
		/** Step 5: Drawing the required object (triangle)
		 *
		 * This step includes operations such as clearing the color, clearing the buffer bit,
		 * enabling the depth test, setting the view port, etc. Finally, you need to draw
		 * the required primitives using one of the methods − drawArrays() or drawElements().
		 */

		// Clear the canvas
		gl.clearColor(0.5, 0.5, 0.5, 0.9);
		// Enable the depth test
		gl.enable(gl.DEPTH_TEST);
		// Clear the color buffer bit
		gl.clear(gl.COLOR_BUFFER_BIT);
		// Set the view port
		gl.viewport(0, 0, canvas.width, canvas.height);

		// Draw the triangle
		//	void drawArrays(enum mode, int first, long count)
		//		mode - POINTS, LINE_STRIP, LINE_LOOP, LINES, TRIANGLE_STRIP, TRIANGLE_FAN, TRIANGLES
		gl.drawArrays(gl.LINES, 0, 3);

		// end of plugin
		return _this;
	};
})(jQuery);
