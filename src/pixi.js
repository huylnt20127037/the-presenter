import * as PIXI from 'pixi.js'

const pixiApp = new PIXI.Application();
await pixiApp.init({ width: 1080, height: 720 });

export default pixiApp