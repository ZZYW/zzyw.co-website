var v1, v2, v3, v4, v5, v6, v7, v8, v9;
var jitter;
var w = 250;
var h = 250;

function setup() {
	var myCanvas = createCanvas(w, h);
	myCanvas.parent('logo-canvas');
	jitter = 0.4;
	v1 = createVector(map(30.14, 0, 200, 0, w), map(60.12, 0, 200, 0, h));
	v2 = createVector(map(61.45, 0, 200, 0, w), map(31.22, 0, 200, 0, h));
	v3 = createVector(map(71.08, 0, 200, 0, w), map(47.34, 0, 200, 0, h));
	v4 = createVector(map(114.8, 0, 200, 0, w), map(41.97, 0, 200, 0, h));
	v5 = createVector(map(108.68, 0, 200, 0, w), map(86.79, 0, 200, 0, h));
	v6 = createVector(map(119.61, 0, 200, 0, w), map(97.17, 0, 200, 0, h));
	v7 = createVector(map(96.09, 0, 200, 0, w), map(125.14, 0, 200, 0, h));
	v8 = createVector(map(37.74, 0, 200, 0, w), map(115.14, 0, 200, 0, h));
	v9 = createVector(map(53.67, 0, 200, 0, w), map(99.02, 0, 200, 0, h));
}

function draw() {
	if (mouseX > 0 && mouseX < w && mouseY > 0 && mouseY < h) {
		jitter = 2.5;
	} else {
		jitter = 0.6;
	}



	scale(1 + w / 1000, 1 + h / 1000);
	strokeCap(SQUARE);
	strokeJoin(ROUND);
	strokeWeight(3);

	stroke(0);
//	stroke(0, 47, 167);
	//	background(0, 47, 167);
	background(255);
	beginShape(TRIANGLES);

	vertex(v2.x, v2.y);
	vertex(v3.x, v3.y);
	vertex(v1.x, v1.y);


	vertex(v2.x, v2.y);
	vertex(v3.x, v3.y);
	vertex(v4.x, v4.y);

	vertex(v2.x, v2.y);
	vertex(v3.x, v3.y);
	vertex(v4.x, v4.y);


	vertex(v3.x, v3.y);
	vertex(v4.x, v4.y);
	vertex(v5.x, v5.y);



	vertex(v4.x, v4.y);
	vertex(v5.x, v5.y);
	vertex(v6.x, v6.y);

	vertex(v4.x, v4.y);
	vertex(v5.x, v5.y);
	vertex(v6.x, v6.y);

	vertex(v5.x, v5.y);
	vertex(v6.x, v6.y);
	vertex(v7.x, v7.y);

	vertex(v7.x, v7.y);
	vertex(v5.x, v5.y);
	vertex(v9.x, v9.y);


	vertex(v7.x, v7.y);
	vertex(v9.x, v9.y);
	vertex(v8.x, v8.y);


	vertex(v7.x, v7.y);
	vertex(v9.x, v9.y);
	vertex(v8.x, v8.y);


	vertex(v9.x, v9.y);
	vertex(v8.x, v8.y);
	vertex(v1.x, v1.y);

	vertex(v1.x, v1.y);
	vertex(v9.x, v9.y);
	vertex(v3.x, v3.y);

	vertex(v5.x, v5.y);
	vertex(v9.x, v9.y);
	vertex(v3.x, v3.y);

	endShape();

	v1.add(random(-jitter, jitter), random(-jitter, jitter), 0);
	v2.add(random(-jitter, jitter), random(-jitter, jitter), 0);
	v3.add(random(-jitter, jitter), random(-jitter, jitter), 0);
	v4.add(random(-jitter, jitter), random(-jitter, jitter), 0);
	v5.add(random(-jitter, jitter), random(-jitter, jitter), 0);
	v6.add(random(-jitter, jitter), random(-jitter, jitter), 0);
	v7.add(random(-jitter, jitter), random(-jitter, jitter), 0);
	v8.add(random(-jitter, jitter), random(-jitter, jitter), 0);
	v9.add(random(-jitter, jitter), random(-jitter, jitter), 0);

}