

var camera;
var controls;
var scene;
var box1, box2, box3, box4, box, from, tween;
var light;
var renderer;

var w = window.innerWidth;
var h = window.innerHeight;

init();
animate();

function init() {

	//container
	container = document.getElementById('canvas');
	document.body.appendChild(container);

	//renderer
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);
	//camera
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xe5e5e5);

	//camera
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.set(0, 0, 15);
	camera.lookAt(scene.position)
	scene.add(camera);

	light = new THREE.AmbientLight();
	scene.add(light);

	box1 = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), //red
		new THREE.MeshLambertMaterial({
			color: 0xFF0000
		}));
	box1.position.set(-1, 0.5, 1);
	box1.animate = "box1";
	/* -1, 0.5, 1 
	-5, 5, -5
	*/
	scene.add(box1);

	box2 = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), //green
		new THREE.MeshLambertMaterial({
			color: 0x00FF00
		}));
	box2.position.set(0, 0.5, 1);
	box2.animate = "box2";
	/* 0, 0.5, 1 
	5, 5, -5
	*/
	scene.add(box2);

	box3 = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), //brown
		new THREE.MeshLambertMaterial({
			color: 0xA52A2A
		}));
	box3.position.set(0, -0.5, 1);
	box3.animate = "box3";
	/* 0, -0.5, 1
	5, -5, -5
	*/
	scene.add(box3);

	box4 = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), //blue
		new THREE.MeshLambertMaterial({
			color: 0x0000FF
		}));
	box4.position.set(-1, -0.5, 1);
	box4.animate = "box4";
	/* -1, -0.5, 1
        -5, -5, -5
        */
	scene.add(box4);

	//controls
	controls = new THREE.TrackballControls(camera, renderer.domElement);

	window.addEventListener('resize', onWindowResize, false);

} // init end


function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);

}


function animate() {

	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	controls.update();
	TWEEN.update();
}