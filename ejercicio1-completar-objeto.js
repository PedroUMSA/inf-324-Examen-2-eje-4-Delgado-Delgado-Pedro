
// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth ;
	var canvasHeight = window.innerHeight ;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(-2,1,10);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = false;
	renderer.gammaOutput = false;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT
	
	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );

	//

	//

	

	var ro=0.80;
	ramas(0+0.3+0.3+0.3+0.3+0.3+0.3,3);
	ramas(0+0.3+0.3+0.3+0.3+0.3,2);
	ramas(0+0.3+0.3+0.3+0.3,0.5);
	ramas(0+0.3+0.3+0.3,7);
	ramas(0+0.3+0.3,10);
	ramas(0+0.3,11);
	ramas(0,9);

	tronco(0+0.3+0.3+0.3+0.3);
	tronco(0+0.3+0.3+0.3);
	tronco(0+0.3+0.3);
	tronco(0+0.3);
	tronco(0+0.3);
	tronco(0);
	tronco(0-0.3);
	tronco(0-0.3-0.3);
	tronco(0-0.3-0.3-0.3);
	tronco(0-0.3-0.3-0.3-0.3);
	tronco(0-0.3-0.3-0.3-0.3-0.3);
	tronco(0-0.3-0.3-0.3-0.3-0.3);

	estrella();
	
	
	


}

function Esfera(x,y,z,ro,col) {
	var radius = 0.15,
	segments = 10,
	rings = 10;
geometry = new THREE.SphereGeometry(radius, segments, rings);
var material = new THREE.MeshBasicMaterial( { color: col } ); 

mesh = new THREE.Mesh(geometry, material);
mesh.rotateY(ro);
mesh.translateX(x);
mesh.translateY(y);
mesh.translateZ(z);



scene.add(mesh);
}

function tronco(h) {
	var migeometria = new THREE.Geometry();
	migeometria.vertices.push( new THREE.Vector3( 0.0-0.15, 0.0+h,  0.0+0.15 ) );//0
	migeometria.vertices.push( new THREE.Vector3( 0.3-0.15, 0.0+h,  0.0+0.15 ) );//1
	migeometria.vertices.push( new THREE.Vector3( 0.3-0.15, 0.3+h,  0.0+0.15 ) );//2
	migeometria.vertices.push( new THREE.Vector3( 0.0-0.15, 0.0+h, -0.3+0.15 ) );//3
	migeometria.vertices.push( new THREE.Vector3( 0.0-0.15, 0.3+h, -0.3+0.15 ) );//4
	migeometria.vertices.push( new THREE.Vector3( 0.0-0.15, 0.3+h,  0.0+0.15 ) );//5
	migeometria.vertices.push( new THREE.Vector3( 0.3-0.15, 0.0+h, -0.3+0.15 ) );//6
	migeometria.vertices.push( new THREE.Vector3( 0.3-0.15, 0.3+h, -0.3+0.15 ) );//7

	//frente
	migeometria.faces.push( new THREE.Face3( 0, 1,  2) );
	migeometria.faces.push( new THREE.Face3( 2, 5,  0) );
	//atras
	migeometria.faces.push( new THREE.Face3( 4, 6,  3) );
	migeometria.faces.push( new THREE.Face3( 4, 7,  6) );
	//derecha
	migeometria.faces.push( new THREE.Face3( 1, 6,  7) );
	migeometria.faces.push( new THREE.Face3( 7, 2,  1) );
	//izquierda
	migeometria.faces.push( new THREE.Face3( 0, 4,  3) );
	migeometria.faces.push( new THREE.Face3( 0, 5,  4) );
	//abajo
	migeometria.faces.push( new THREE.Face3( 3, 6,  1) );
	migeometria.faces.push( new THREE.Face3( 3, 1,  0) );
	//arriba
	migeometria.faces.push( new THREE.Face3( 2, 7,  4) );
	migeometria.faces.push( new THREE.Face3( 2, 4,  5) );
    
    var material = new THREE.MeshBasicMaterial( { color: 0x964209 } ); // Material de color rojo
	var miobjeto = new THREE.Mesh (migeometria, material); // Crea el objeto
	
	scene.add( miobjeto );
	//return miobjeto;
  }

  function estrella() {
	var migeometria = new THREE.Geometry();
	migeometria.vertices.push( new THREE.Vector3(0,-0.05,0) );		//0
	migeometria.vertices.push( new THREE.Vector3(-0.65,0.16,0));	//1
	migeometria.vertices.push( new THREE.Vector3(-0.15,0.16,0));	//2
	migeometria.vertices.push( new THREE.Vector3(0,0.63,0));		//3
	migeometria.vertices.push( new THREE.Vector3(0.15,0.16,0));		//4
	migeometria.vertices.push( new THREE.Vector3(0.65,0.16,0));		//5
	migeometria.vertices.push( new THREE.Vector3(0.25,-0.13,0));	//6
	migeometria.vertices.push( new THREE.Vector3(0.4,-0.6,0));		//7
	migeometria.vertices.push( new THREE.Vector3(0,-0.31,0));		//8
	migeometria.vertices.push( new THREE.Vector3(-0.4,-0.6,0));		//9
	migeometria.vertices.push( new THREE.Vector3(-0.25,-0.13,0));	//10

	
	migeometria.faces.push( new THREE.Face3(0,1,2));
	migeometria.faces.push( new THREE.Face3(0,2,3));
	migeometria.faces.push( new THREE.Face3(0,3,4));
	migeometria.faces.push( new THREE.Face3(0,4,5));
	migeometria.faces.push( new THREE.Face3(0,5,6));
	migeometria.faces.push( new THREE.Face3(0,6,7));
	migeometria.faces.push( new THREE.Face3(0,7,8));
	migeometria.faces.push( new THREE.Face3(0,8,9));
	migeometria.faces.push( new THREE.Face3(0,9,10));
	migeometria.faces.push( new THREE.Face3(0,10,1));

	migeometria.faces.push( new THREE.Face3(0,2,1));
	migeometria.faces.push( new THREE.Face3(0,3,2));
	migeometria.faces.push( new THREE.Face3(0,4,3));
	migeometria.faces.push( new THREE.Face3(0,5,4));
	migeometria.faces.push( new THREE.Face3(0,6,5));
	migeometria.faces.push( new THREE.Face3(0,7,6));
	migeometria.faces.push( new THREE.Face3(0,8,7));
	migeometria.faces.push( new THREE.Face3(0,9,8));
	migeometria.faces.push( new THREE.Face3(0,10,9));
	migeometria.faces.push( new THREE.Face3(0,1,10));

    
    var material = new THREE.MeshBasicMaterial( { color: 0xffd700 } ); // Material de color rojo
	var miobjeto = new THREE.Mesh (migeometria, material); // Crea el objeto
	miobjeto.translateY(2.2);
	
	scene.add( miobjeto );
	//return miobjeto;
  }



  function ramas(h,ro) {
	var migeometria = new THREE.Geometry();

	migeometria.vertices.push( new THREE.Vector3( -1.85-0.15, -0.9+h,  -0.15+0.15 ));		//0
	migeometria.vertices.push( new THREE.Vector3( -0.45-0.15, -0.5+h,  -0.75+0.15 ));	//1
	migeometria.vertices.push( new THREE.Vector3( 0.15-0.15, 0.0+h,  -0.15+0.15 ));		//2
	migeometria.vertices.push( new THREE.Vector3( 0.15-0.15, -0.9+h,  -2.15+0.15 ));		//3
	migeometria.vertices.push( new THREE.Vector3( 0.75-0.15, -0.5+h, -0.75+0.15));//4
	migeometria.vertices.push( new THREE.Vector3( 2.15-0.15, -0.9+h, -0.15+0.15));//5
	migeometria.vertices.push( new THREE.Vector3( 0.75-0.15, -0.5+h, 0.45+0.15));//6
	migeometria.vertices.push( new THREE.Vector3( 0.15-0.15, -0.9+h, 1.85+0.15));//7
	migeometria.vertices.push( new THREE.Vector3( -0.45-0.15, -0.5+h, 0.45+0.15));//8

	
	migeometria.faces.push( new THREE.Face3( 0, 2,  1) );
	migeometria.faces.push( new THREE.Face3( 3, 1,  2) );
	migeometria.faces.push( new THREE.Face3(2,4,3) );
	migeometria.faces.push( new THREE.Face3(5,4,2) );
	migeometria.faces.push( new THREE.Face3(5,2,6) );
	migeometria.faces.push( new THREE.Face3(7,6,2) );
	migeometria.faces.push( new THREE.Face3(2,8,7) );
	migeometria.faces.push( new THREE.Face3(2,0,8) );

	migeometria.faces.push( new THREE.Face3( 0, 1,  2) );
	migeometria.faces.push( new THREE.Face3( 2, 1,  3) );
	migeometria.faces.push( new THREE.Face3(2,3,4) );
	migeometria.faces.push( new THREE.Face3(5,2,4) );
	migeometria.faces.push( new THREE.Face3(5,6,2) );
	migeometria.faces.push( new THREE.Face3(7,2,6) );
	migeometria.faces.push( new THREE.Face3(2,7,8) );
	migeometria.faces.push( new THREE.Face3(2,8,0) );
	
	var col=0x087214;
    var material = new THREE.MeshBasicMaterial( { color: col } ); // Material de color rojo
	var miobjeto = new THREE.Mesh (migeometria, material); // Crea el objeto
	miobjeto.rotateY(ro);
	
	//esfereras en la puntas
	Esfera(-1.85-0.15, -1.04+h,  -0.15+0.15,ro,0xf60b0b);
	Esfera( 0.15-0.15, -1.04+h,  -2.15+0.15,ro,0x360bf6);
	Esfera(2.15-0.15, -1.04+h, -0.15+0.15,ro,0xf6ed0d);
	Esfera(0.15-0.15, -1.04+h, 1.85+0.15,ro,0xae0df6);
	//esferas en intermedios
	Esfera(-0.45-0.15, -0.64+h,  -0.75+0.15,ro,0xf60b0b);
	Esfera( 0.75-0.15, -0.64+h, -0.75+0.15,ro,0x360bf6);
	Esfera(0.75-0.15, -0.64+h, 0.45+0.15,ro,0xf6ed0d);
	Esfera(-0.45-0.15, -0.64+h, 0.45+0.15,ro,0xae0df6);
	
	scene.add( miobjeto );
	
	//return miobjeto;
  }

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
