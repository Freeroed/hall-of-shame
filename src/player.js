import {WINDOW_WIDTH, WINDOW_HEIGHT, WINDOW_WIDTH_HALF, WINDOW_HEIGHT_HALF} from './constants';
import * as PIXI from 'pixi.js';


export default class Player {
    constructor(parent, listener) {
        this.x = WINDOW_WIDTH_HALF;
        this.y = WINDOW_HEIGHT_HALF;
        this._x = this.x;
        this._y = this.y;
        this.angle = 0;
        this.listener = listener
        this.circle = new PIXI.Graphics();
        this.circle.beginFill(255);
        this.circle.drawCircle(this.x, this.y, 20);
        parent.stage.addChild(this.circle)
        this.line = new PIXI.Graphics();
        this.line.moveTo(this.x, this.y);
        this.line.lineStyle(1, 0xffffff);
        this.line.lineTo(this.x + WINDOW_WIDTH * Math.cos(this.angle), this.y + WINDOW_WIDTH * Math.sin(this.angle));
        this.line.pivot.x = this.x;
        this.line.pivot.y = this.y;
        
        parent.stage.addChild(this.line)
        console.log(this.x, this.y, this.circle.x, this.circle.y, this.line.pivot.x, this.line.pivot.y)
    }

    movement() {
        const cos = Math.cos(this.angle);
        const sin = Math.sin(this.angle);
        if (this.listener.getPressed("W")) {
            this.x += 5*cos;
            this.y += 5*sin;
        }
        if (this.listener.getPressed("A")) {
            this.x += 5*sin;
            this.y += -5*cos;
        }
        if (this.listener.getPressed("S")) {
            this.x += -5*cos;
            this.y += -5*sin;
        }
        if (this.listener.getPressed("D")) {
            this.x += -5*sin;
            this.y += 5*cos;
        }
        if (this.listener.getPressed("LEFT")) {
            this.angle -= 0.02
        }
        if (this.listener.getPressed("RIGHT")) {
            this.angle += 0.02
        }
        this._updatePosition()
    }

    _updatePosition(){
        this.circle.x = this.line.x -= this._x - this.x;
        this.circle.y = this.line.y -= this._y - this.y;
        this._x = this.x;
        this._y = this.y;
        this.line.rotation = this.angle;    
        //this.line.pivot.x = this._x;
        //this.line.pivot.y = this._y;
       // this.line.moveTo(this._x,this._y)
        //this.line.lineTo(this.x + WINDOW_WIDTH * Math.cos(this.angle), this.y + WINDOW_WIDTH * Math.sin(this.angle));
    }
}