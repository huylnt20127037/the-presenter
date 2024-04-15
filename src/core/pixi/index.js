import { Application, Color } from 'pixi.js';
import { AppColor } from '../../theme';

const pixiApp = new Application();
await pixiApp.init({ width: 540, height: 600, backgroundColor: new Color(AppColor.secondary).toArray(), });

export default pixiApp