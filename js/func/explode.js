

function explodeObjects() {

	var boundingCenter;
	var boundingbox = new THREE.Box3();


	for (var i = 0; i < scene.children.length; i++) {
		if (scene.children[i] instanceof THREE.Mesh) {
			boundingbox.expandByObject(scene.children[i]);
			boundingCenter = boundingbox.getCenter(new THREE.Vector3());
			console.log(boundingCenter)
			common(5, boundingCenter);

		}
	}
}

function implodeObjects() {

	var boundingCenter;
	var boundingbox = new THREE.Box3();


	for (var i = 0; i < scene.children.length; i++) {
		if (scene.children[i] instanceof THREE.Mesh) {
			boundingbox.expandByObject(scene.children[i]);
			boundingCenter = boundingbox.getCenter(new THREE.Vector3());
			common(-5, boundingCenter);
		}
	}

}

function common(distance, boundingCenter) {
	for (var i = 0; i < scene.children.length; i++) {
		if (scene.children[i] instanceof THREE.Mesh) {
			var mesh = scene.children[i];
			var position = scene.children[i].position;
			console.log(position)
			var direction = position.clone().sub(boundingCenter).normalize();
			console.log(direction)
			var pointNew = position.clone().addScaledVector(direction, distance);
			console.log(pointNew)
			stepByStep(mesh, pointNew);

		}
	}
}


function stepByStep(mesh, pointNew) {
	var tween = new TWEEN.Tween(mesh.position).to(pointNew, 2000).start();
	tween.easing(TWEEN.Easing.Linear.None);
}