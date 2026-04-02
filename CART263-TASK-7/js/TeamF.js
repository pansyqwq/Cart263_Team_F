import * as THREE from 'three';

// Planet class for Team F
export class PlanetF {
    constructor(scene, orbitRadius, orbitSpeed) {
        this.scene = scene;
        this.orbitRadius = orbitRadius;
        this.orbitSpeed = orbitSpeed;
        this.angle = Math.random() * Math.PI * 2;

        //Create planet group
        this.group = new THREE.Group()

        // Create planet
        //STEP 1:
        //TODO: Create a planet using THREE.SphereGeometry (Radius must be between 1.5 and 2).
        //TODO: Give it a custom material using THREE.MeshStandardMaterial.
        //TODO: Use castShadow and receiveShadow on the mesh and all future ones so they can cast and receive shadows.
        //TODO: Add the planet mesh to the planet group.



        const geometry = new THREE.SphereGeometry(2, 10, 10)//3d dimension of the sphere
        const material = new THREE.MeshStandardMaterial({ color: 0x95d4ee })
        const mesh = new THREE.Mesh(geometry, material)
        this.group.castShadow = true;
        this.group.receiveShadow = true;
        this.group.add(mesh)
       


        //STEP 2: 
        //TODO: Add from 1 to 3 orbiting moons to the planet group. 
        //TODO: The moons should rotate around the planet just like the planet group rotates around the Sun.
        const geometry2 = new THREE.SphereGeometry(1, 7, 7)//3d dimension of the sphere
        const material2 = new THREE.MeshStandardMaterial({ color: 0xce3072 })
        const mesh_2 = new THREE.Mesh(geometry2, material2)
        mesh_2.position.x = 3;
        this.group.add(mesh_2)


        const geometry3 = new THREE.SphereGeometry(1, 2, 2)//3d dimension of the sphere
        const material3 = new THREE.MeshStandardMaterial({ color: 0xa6f1ac })
        const mesh_3 = new THREE.Mesh(geometry3, material3)
        mesh_3.position.x = 5;
        mesh_3.position.y = 5;
        this.group.add(mesh_3)



        const geometry4 = new THREE.SphereGeometry(1, 10, 10)//3d dimension of the sphere
        const material4 = new THREE.MeshStandardMaterial({ color: 0xbaa44a })
        const mesh_4 = new THREE.Mesh(geometry4, material4)
        mesh_4.position.x = 7;
        mesh_4.position.y = -2;
        this.group.add(mesh_4)
      
     
        //Ziyan Pan and Xueyi Xia did step 1 and 2

        //STEP 3:
        //TODO: Load Blender models to populate the planet with multiple props and critters by adding them to the planet group.
        //TODO: Make sure to rotate the models so they are oriented correctly relative to the surface of the planet.

        //STEP 4:
        //TODO: Use raycasting in the click() method below to detect clicks on the models, and make an animation happen when a model is clicked.
        //TODO: Use your imagination and creativity!

        this.scene.add(this.group);
    }

    update(delta) {
        // Orbit around sun
        this.angle += this.orbitSpeed * delta * 30;
        this.group.position.x = Math.cos(this.angle) * this.orbitRadius;
        this.group.position.z = Math.sin(this.angle) * this.orbitRadius;

        // Rotate planet
        this.group.rotation.y += delta * 5;

        //TODO: Do the moon orbits and the model animations here.
    }

    click(mouse, scene, camera) {
        //TODO: Do the raycasting here.
    }
}

