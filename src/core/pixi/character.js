import * as PIXI from 'pixi.js'
import Hair3 from '../../assets/character/PNG/Hair/Blonde/blondeMan3.png';
import Hair1 from '../../assets/character/PNG/Hair/Blonde/blondeMan1.png';
import Hair2 from '../../assets/character/PNG/Hair/Blonde/blondeMan2.png';
import Hair5 from '../../assets/character/PNG/Hair/Blonde/blondeMan5.png';
import Hair6 from '../../assets/character/PNG/Hair/Blonde/blondeMan6.png';

import Eye from '../../assets/character/PNG/Face/Eyes/eyeBrown_large.png';
import Head from '../../assets/character/PNG/Skin/Tint 1/tint1_head.png';
import Nose from '../../assets/character/PNG/Face/Nose/Tint 2/tint2Nose2.png';
import Mouth from '../../assets/character/PNG/Face/Mouth/mouth_glad.png';
import MouthHappy from '../../assets/character/PNG/Face/Mouth/mouth_happy.png';
import MouthWow from '../../assets/character/PNG/Face/Mouth/mouth_oh.png';
import MouthOpen from '../../assets/character/PNG/Face/Mouth/mouth_teethUpper.png';
import EyeBrowNeutral from '../../assets/character/PNG/Face/Eyebrows/blondeBrow2.png';
import EyeBrowExcited from '../../assets/character/PNG/Face/Eyebrows/blondeBrow3.png';
import NumberExtension from '../extensions/number';
import { FacialExpression } from '../../feature/studio/data/facial-expression';

let headTexture = await PIXI.Assets.load(Head);
let hair3Texture = await PIXI.Assets.load(Hair3);
let hair1Texture = await PIXI.Assets.load(Hair1);
let hair2Texture = await PIXI.Assets.load(Hair2);
let hair5Texture = await PIXI.Assets.load(Hair5);
let hair6Texture = await PIXI.Assets.load(Hair6);
let eyeTexture = await PIXI.Assets.load(Eye);
let noseTexture = await PIXI.Assets.load(Nose);
let mouthTexture = await PIXI.Assets.load(Mouth);
let mouthHappyTexture = await PIXI.Assets.load(MouthHappy);
let mouthOpenTexture = await PIXI.Assets.load(MouthOpen);
let mouthWowTexture = await PIXI.Assets.load(MouthWow);
let eyebrowNeutralTexture = await PIXI.Assets.load(EyeBrowNeutral);
let eyebrowExcitedTexture = await PIXI.Assets.load(EyeBrowExcited);

class Character {
     humanTextures = {
          head: {
               imagePath: Head,
               image: headTexture,
               dx: 0,
               dy: 0,
               sprite: new PIXI.Sprite(headTexture)
          },
          hair: {
               imagePath: Hair3,
               image: hair3Texture,
               dx: 0,
               dy: -50,
               sprite: new PIXI.Sprite(hair3Texture)
          },
          leftEyebrow: {
               image: eyebrowNeutralTexture,
               dx: -25,
               dy: -40,
               sprite: new PIXI.Sprite(eyebrowNeutralTexture)
          },
          rightEyebrow: {
               image: eyebrowNeutralTexture,
               dx: 25,
               dy: -40,
               sprite: new PIXI.Sprite(eyebrowNeutralTexture)
          },
          leftEye: {
               image: eyeTexture,
               dx: -25,
               dy: -15,
               sprite: new PIXI.Sprite(eyeTexture)
          },
          rightEye: {
               image: eyeTexture,
               dx: 25,
               dy: -15,
               sprite: new PIXI.Sprite(eyeTexture)
          },
          nose: {
               imagePath: Nose,
               image: noseTexture,
               dx: 0,
               dy: 10,
               sprite: new PIXI.Sprite(noseTexture)
          },
          mouth: {
               image: mouthTexture,
               dx: 0,
               dy: 40,
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
               if (bodyPart === 'rightEyebrow') {
                    this.humanTextures[bodyPart].sprite.scale.x = -1
               }
               characterContainer.addChild(this.humanTextures[bodyPart].sprite);
               this.humanTextures[bodyPart].sprite.anchor.set(0.5, 0.5);
               this.humanTextures[bodyPart].sprite.position.set(this.humanTextures[bodyPart].dx, this.humanTextures[bodyPart].dy,);
          }

          this.container = characterContainer
     }

     openMouth() {
          const sprite = this.humanTextures.mouth.sprite
          sprite.texture = mouthOpenTexture
     }

     closeMouth() {
          const sprite = this.humanTextures.mouth.sprite
          sprite.texture = mouthTexture
     }

     showHappyMouth() {
          const sprite = this.humanTextures.mouth.sprite
          sprite.texture = mouthHappyTexture
     }

     showWowMouth() {
          const sprite = this.humanTextures.mouth.sprite
          sprite.texture = mouthWowTexture
     }

     showStraightMouth() {
          const sprite = this.humanTextures.mouth.sprite
          sprite.texture = mouthTexture
     }

     showNormalEyebrow() {
          const left = this.humanTextures.leftEyebrow.sprite
          left.texture = eyebrowNeutralTexture
          const right = this.humanTextures.rightEyebrow.sprite
          right.texture = eyebrowNeutralTexture
          right.scale.x = -1
     }

     showHappyEyebrow() {
          const left = this.humanTextures.leftEyebrow.sprite
          left.texture = eyebrowExcitedTexture
          const right = this.humanTextures.rightEyebrow.sprite
          right.texture = eyebrowExcitedTexture
          right.scale.x = -1
     }

     interval

     talking() {
          this.interval = setInterval(() => {
               this.openMouth()
               setTimeout(() => this.closeMouth(), NumberExtension.getRandomInt(150, 750),)
          }, NumberExtension.getRandomInt(250, 1000))
     }

     showEmotionWhenTalking(p) {
          this.interval = setInterval(() => {
               switch (p) {
                    case FacialExpression.happy:
                         this.showHappyMouth()
                         this.showHappyEyebrow()
                         break
                    case FacialExpression.neutral:
                         this.showStraightMouth()
                         this.showNormalEyebrow()
                         break
                    case FacialExpression.suprised:
                         this.showWowMouth()
                         this.showHappyEyebrow()
                         break
               }
               setTimeout(() => this.closeMouth(), NumberExtension.getRandomInt(150, 750),)
          }, NumberExtension.getRandomInt(250, 1000))
     }

     idling() {
          clearInterval(this.interval)
          this.interval = undefined
          this.showNormalEyebrow()
          this.showStraightMouth()
     }

     updateHair(value) {
          switch (value) {
               case Hair1:
                    this.humanTextures.hair.imagePath = value
                    this.humanTextures.hair.image = hair1Texture
                    this.humanTextures.hair.sprite.texture = hair1Texture
                    break
               case Hair2:
                    this.humanTextures.hair.imagePath = value
                    this.humanTextures.hair.image = hair2Texture
                    this.humanTextures.hair.sprite.texture = hair2Texture
                    break
               case Hair3:
                    this.humanTextures.hair.imagePath = value
                    this.humanTextures.hair.image = hair3Texture
                    this.humanTextures.hair.sprite.texture = hair3Texture
                    break
               case Hair5:
                    this.humanTextures.hair.imagePath = value
                    this.humanTextures.hair.image = hair5Texture
                    this.humanTextures.hair.sprite.texture = hair5Texture
                    break
               case Hair6:
                    this.humanTextures.hair.imagePath = value
                    this.humanTextures.hair.image = hair6Texture
                    this.humanTextures.hair.sprite.texture = hair6Texture
                    break
          }
     }
}

export default Character