import { TILE } from './constants';
const map = [
    "WWWWWWWWWWWW",
    "W..........W",
    "W..........W",
    "W..........W",
    "W..........W",
    "W..........W",
    "WWWWWWWWWWWW"
]

export const gameMap = new Set()
map.forEach((row, y) => {
    row.split('').forEach((char, x) => {
        if (char === "W") {
            gameMap.add({x: x * TILE, y: y * TILE})
        }
    })
})