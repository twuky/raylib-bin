import raylib from './index.js'
import { InitWindow } from './index.js'

let screenWidth = 800
let screenHeight = 450

for (let key in raylib) {
  let string = `export const ${key} = rl.${key}`
  console.log(string)
}

InitWindow(screenWidth, screenHeight, "raylib [core] example - basic window")

raylib.SetTargetFPS(60)

while(!raylib.WindowShouldClose()) {
  raylib.BeginDrawing()
    raylib.ClearBackground(raylib.RAYWHITE)
    raylib.DrawText("Congrats! You created your first window!", 190, 200, 20, raylib.LIGHTGRAY)
  raylib.EndDrawing()
}

raylib.CloseWindow()