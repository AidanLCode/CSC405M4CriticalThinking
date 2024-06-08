let angle = 0; //Global variable used to control the rotation of the cube.

function setup() {
    createCanvas(600, 600, WEBGL); //Set the canvas size to 600 by 600 pixels and set rendering mode to WEBGL to enable 3D rendering.
    noStroke();
}

function draw() { //Continuously executes lines of code within the block until program is stopped.
    background(200); //Sets background color to a shade of gray.

    // Set up lighting
    directionalLight(255, 255, 255, 1, 1, -1); //Sets up lighting
    ambientLight(300); //Sets up ambient lighting with medium intercity

    // Apply rotation. These apply rotation transformations continuously because of the draw function giving the illusion of movement.
    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 0.2);

    // Draw the cube
    beginShape();

    // Front face
    fill(255, 0, 0); // Red
    vertex(-100, -100, 100);
    vertex(100, -100, 100);
    vertex(100, 100, 100);
    vertex(-100, 100, 100);

    endShape(CLOSE);
    beginShape();

    // Back face
    fill(0, 255, 0); // Green
    vertex(-100, -100, -100);
    vertex(100, -100, -100);
    vertex(100, 100, -100);
    vertex(-100, 100, -100);

    endShape(CLOSE);
    beginShape();

    // Right face
    fill(0, 0, 255); // Blue
    vertex(100, -100, 100);
    vertex(100, -100, -100);
    vertex(100, 100, -100);
    vertex(100, 100, 100);

    endShape(CLOSE);
    beginShape();

    // Left face
    fill(255, 255, 0); // Yellow
    vertex(-100, -100, 100);
    vertex(-100, -100, -100);
    vertex(-100, 100, -100);
    vertex(-100, 100, 100);

    endShape(CLOSE);
    beginShape();

    // Top face
    fill(0, 255, 255); // Cyan
    vertex(-100, -100, 100);
    vertex(100, -100, 100);
    vertex(100, -100, -100);
    vertex(-100, -100, -100);

    endShape(CLOSE);
    beginShape();

    // Bottom face
    fill(255, 0, 255); // Magenta
    vertex(-100, 100, 100);
    vertex(100, 100, 100);
    vertex(100, 100, -100);
    vertex(-100, 100, -100);

    endShape(CLOSE);

    angle += 0.01;
}
