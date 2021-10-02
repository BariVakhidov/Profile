import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import space from 'assets/images/space.png';
import moon from 'assets/images/moon.jpg';
import normal from 'assets/images/normal.jpg';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')!,
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);



const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight)

const controls = new OrbitControls(camera, renderer.domElement);

export const addStar = () => {
  const geometry = new THREE.SphereGeometry(0.2, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 'white' });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill(1).map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}


Array(200).fill(1).forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load(space);
scene.background = spaceTexture;

const moonTexture = new THREE.TextureLoader().load(moon);
const normalTexture = new THREE.TextureLoader().load(normal);

const moonObj = new THREE.Mesh(new THREE.SphereGeometry(4, 32, 32), new THREE.MeshStandardMaterial({
  map: moonTexture,
  normalMap: normalTexture,
}))

scene.add(moonObj);

moonObj.position.z = 0;
moonObj.position.setX(-10);


export const moveCamera = () => {
  const t = document.body.getBoundingClientRect().top + 80;
  moonObj.rotation.x += 0.03;
  moonObj.rotation.y += 0.075;
  moonObj.rotation.z += 0.03;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

export const animate = () => {
  requestAnimationFrame(animate);
  moonObj.rotation.x += 0.01;
  moonObj.rotation.y += 0.005;
  moonObj.rotation.z += 0.01;

  controls.update();
  renderer.render(scene, camera);
}
