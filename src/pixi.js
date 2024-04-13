import * as PIXI from 'pixi.js'
import SampleSprite from './assets/sample-sprite.png'

const pixiApp = new PIXI.Application();
await pixiApp.init({ width: 1080, height: 720 });

// load the PNG asynchronously
await PIXI.Assets.load(SampleSprite);
let sprite = PIXI.Sprite.from(SampleSprite);
pixiApp.stage.addChild(sprite);

export default pixiApp