import * as PIXI from 'pixi.js'
import Hair from '../../assets/character/PNG/Hair/Blonde/blondeMan3.png';
import Eye from '../../assets/character/PNG/Face/Eyes/eyeBrown_large.png';
import Head from '../../assets/character/PNG/Skin/Tint 1/tint1_head.png';
import Nose from '../../assets/character/PNG/Face/Nose/Tint 2/tint2Nose2.png';
import Mouth from '../../assets/character/PNG/Face/Mouth/mouth_glad.png';
import MouthOpen from '../../assets/character/PNG/Face/Mouth/mouth_teethUpper.png';

let headTexture = await PIXI.Assets.load(Head);
let hairTexture = await PIXI.Assets.load(Hair);
let eyeTexture = await PIXI.Assets.load(Eye);
let noseTexture = await PIXI.Assets.load(Nose);
let mouthTexture = await PIXI.Assets.load(Mouth);
let mouthOpenTexture = await PIXI.Assets.load(MouthOpen);

class Character {
     humanTextures = {
          head: {
               image: headTexture,
               dx: 0,
               dy: 0,
               sprite: new PIXI.Sprite(headTexture)
          },
          hair: {
               image: hairTexture,
               dx: 0,
               dy: -50,
               sprite: new PIXI.Sprite(hairTexture)
          },
          leftEye: {
               image: eyeTexture,
               dx: -25,
               dy: -25,
               sprite: new PIXI.Sprite(eyeTexture)
          },
          rightEye: {
               image: eyeTexture,
               dx: 25,
               dy: -25,
               sprite: new PIXI.Sprite(eyeTexture)
          },
          nose: {
               image: noseTexture,
               dx: 0,
               dy: 0,
               sprite: new PIXI.Sprite(noseTexture)
          },
          mouth: {
               image: mouthTexture,
               dx: 0,
               dy: 30,
               sprite: new PIXI.Sprite(mouthTexture)
          },
     }

     constructor(pixiAppRenderer) {
          const characterContainer = new PIXI.Container()
          const centerX = pixiAppRenderer.width / 2;
          const centerY = pixiAppRenderer.height / 2;

          characterContainer.position.set(centerX, centerY)

          let bodyParts = Object.keys(this.humanTextures); // Get body part names

          for (const bodyPart of bodyParts) {
               characterContainer.addChild(this.humanTextures[bodyPart].sprite);
               this.humanTextures[bodyPart].sprite.anchor.set(0.5, 0.5);
               this.humanTextures[bodyPart].sprite.position.set(this.humanTextures[bodyPart].dx, this.humanTextures[bodyPart].dy,);
          }

          this.container = characterContainer
     }

     smile() {
          const sprite = this.humanTextures.mouth.sprite
          sprite.texture = mouthOpenTexture
     }
}

export default Character