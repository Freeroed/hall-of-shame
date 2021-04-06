import * as PIXI from 'pixi.js';
import { gameMap } from './game-map';
import { TILE } from './constants';
const app = new PIXI.Application({
    width: 1200,
    height: 700,
    backgroundColor: 0x1099bb,
    view: document.querySelector('#scene')
})

console.log(gameMap)

const recGraphics = new PIXI.Graphics();
recGraphics.beginFill(0)
gameMap.forEach(mapObject => {
    recGraphics.drawRect(mapObject.x, mapObject.y, TILE, TILE);
    console.log(mapObject.x)
})
app.stage.addChild(recGraphics)