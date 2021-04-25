import * as PIXI from 'pixi.js';
import { gameMap } from './game-map';
import { TILE, WINDOW_WIDTH, WINDOW_HEIGHT } from './constants';
import KeyListener from './common/utils/key-listener';
import Player from './player';

const app = new PIXI.Application({
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    backgroundColor: 0x1099bb,
    view: document.querySelector('#scene')
});
const listener = new KeyListener();
const player = new Player(app, listener);

let reuqestId;

const recGraphics = new PIXI.Graphics();
recGraphics.beginFill(0)



gameMap.forEach(mapObject => {
    recGraphics.drawRect(mapObject.x, mapObject.y, TILE, TILE);
})
app.stage.addChild(recGraphics);
app.ticker.add(() => {player.movement()});
gameLoop();
app.ticker.start();

function gameLoop() {
    reuqestId = requestAnimationFrame(gameLoop).toFixed(1);
    app.render();
}