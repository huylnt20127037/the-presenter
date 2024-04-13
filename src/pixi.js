import * as PIXI from 'pixi.js'
import SampleSprite from './assets/sample-sprite.png'
import { AppColor } from './theme';

const pixiApp = new PIXI.Application();
await pixiApp.init({ width: 540, height: 600, backgroundColor: new PIXI.Color(AppColor.secondary).toArray(), });

// load the PNG asynchronously
// await PIXI.Assets.load(SampleSprite);
// let sprite = PIXI.Sprite.from(SampleSprite);
// pixiApp.stage.addChild(sprite);

// Create a graphics object
const graphics = new PIXI.Graphics();

// Draw the boy's head (circle)
graphics.fill(0xffcc00); // Yellow color
graphics.circle(200, 200, 50); // Centered at (200, 200) with a radius of 50
graphics.fill();

// Draw the boy's facial features (eyes and mouth)
graphics.fill(0x000000); // Black color
graphics.circle(190, 190, 5); // Left eye
graphics.circle(210, 190, 5); // Right eye
graphics.moveTo(185, 210); // Start point for the mouth
graphics.lineTo(215, 210); // End point for the mouth

// Draw the boy's body (rectangle)
graphics.fill(0x0099ff); // Blue color
graphics.rect(175, 250, 50, 100); // Positioned at (175, 250) with width 50 and height 100
graphics.fill();

// Draw the boy's legs (lines)
graphics.setStrokeStyle(2, 0x000000); // Black color, line thickness 2
graphics.moveTo(175, 350); // Start point for the left leg
graphics.lineTo(150, 400); // End point for the left leg
graphics.moveTo(225, 350); // Start point for the right leg
graphics.lineTo(250, 400); // End point for the right leg

// Add the graphics to the stage
pixiApp.stage.addChild(graphics);

export default pixiApp