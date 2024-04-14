import * as PIXI from 'pixi.js'
import Hair from '../assets/character/PNG/Hair/Blonde/blondeMan3.png';
import Eye from '../assets/character/PNG/Face/Eyes/eyeBrown_large.png';
import Head from '../assets/character/PNG/Skin/Tint 1/tint1_head.png';
import Nose from '../assets/character/PNG/Face/Nose/Tint 2/tint2Nose2.png';
import Mouth from '../assets/character/PNG/Face/Mouth/mouth_glad.png';

let headTexture = await PIXI.Assets.load(Head);
let hairTexture = await PIXI.Assets.load(Hair);
let eyeTexture = await PIXI.Assets.load(Eye);
let noseTexture = await PIXI.Assets.load(Nose);
let mouthTexture = await PIXI.Assets.load(Mouth);

let humanTextures = {
     head: {
          image: headTexture,
          dx: 0,
          dy: 0,
     },
     hair: {
          image: hairTexture,
          dx: 0,
          dy: -50,
     },
     leftEye: {
          image: eyeTexture,
          dx: -25,
          dy: -25,
     },
     rightEye: {
          image: eyeTexture,
          dx: 25,
          dy: -25,
     },
     nose: {
          image: noseTexture,
          dx: 0,
          dy: 0,
     },
     mouth: {
          image: mouthTexture,
          dx: 0,
          dy: 30,
     },
}

const createCharacter = async (pixiApp) => {

     const characterContainer = new PIXI.Container()
     const centerX = pixiApp.renderer.width / 2;
     const centerY = pixiApp.renderer.height / 2;

     characterContainer.position.set(centerX, centerY)

     let bodyParts = Object.keys(humanTextures); // Get body part names

     for (const bodyPart of bodyParts) {
          const sprite = new PIXI.Sprite(humanTextures[bodyPart].image)
          characterContainer.addChild(sprite);

          sprite.anchor.set(0.5, 0.5);
          sprite.position.set(humanTextures[bodyPart].dx, humanTextures[bodyPart].dy,);
     }

     return characterContainer
}

export default createCharacter