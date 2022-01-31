## raylib-bin

Prebuilt nodejs bindings of https://github.com/twuky/raylib-4.0.

### Usage
#### Import Module:
```javascript
import * as raylib from 'raylib-bin'
import raylib from 'raylib-bin'
```
#### Import CommonJS:
```javascript
const raylib = require('raylib-bin')
```
### Your First Window
```javascript
let screenWidth = 800
let screenHeight = 450 

raylib.InitWindow(screenWidth, screenHeight, "raylib [core] example - basic window")

raylib.SetTargetFPS(60)

while(!raylib.WindowShouldClose()) {
  raylib.BeginDrawing()
    raylib.ClearBackground(raylib.RAYWHITE)
    raylib.DrawText("Congrats! You created your first window!", 190, 200, 20, raylib.LIGHTGRAY)
  raylib.EndDrawing()
}

raylib.CloseWindow()
```
### Installing

While in development this package is not available on NPM You can currently install the library through github:

npm i https://github.com/twuky/raylib-bin
