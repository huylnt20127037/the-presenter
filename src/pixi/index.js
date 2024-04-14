import { Application, Color } from 'pixi.js';
import createCharacter from './character';
import { AppColor } from '../theme';

const pixiApp = new Application();
await pixiApp.init({ width: 540, height: 600, backgroundColor: new Color(AppColor.secondary).toArray(), });

pixiApp.stage.addChild(await createCharacter(pixiApp));

export default pixiApp