# 📝 Full Sail University - Pixie Pong

### 🔗 https://pixie-pong-fso.netlify.app/

In this week's assignment, we will build upon our previous lesson on **PixiJS** by incorporating our newly acquired knowledge of asynchronous Promise handling.

### ⚙️ Overview

You are required to create four rectangles in your PixiJS application. Each rectangle (or line) will represent a border in your application. Each line will occupy one side of a box and will be positioned at the very edge of each side of the screen.

Initially, each border will be colored a different color than the blue background. After the circle bounces off one of these borders, the application should remember which borders the circle has collided with.

Now, here’s the challenge: the application should stop only after the circle has bounced off all four borders. You must use a Promise to achieve this. The Promise will be responsible for ending the game once it resolves, which should happen only after all four borders have been hit. Once the circle has bounced off all four borders, the Promise should resolve, and an alert should pop up to notify the user that the application has completed.

When fully implemented, your application should look like the example I’ve attached below.

# 💯🚀🎯 Extra Requirement

10% of your grade for this activity will be based on your effort to go the extra mile by adding one of the following features to your PixiJS application. Note that none of these features were shown in the previous demonstration, and for good reason. You only need to implement one of the following features to earn the extra 10%. If left incomplete, the maximum grade you can achieve is 90%. Please choose one of the following features to fully implement:

- Pixel-Perfect Hit Detection: In the previous demonstration, you may have noticed that the circle slightly exceeds the border by a few pixels when bouncing. This is because the circle’s X,Y coordinates are based on its center. You will need to perform some quick calculations based on the border's width and the size of the circle to determine the exact hit detection spot, ensuring the edge of the circle bounces off the border perfectly without passing through it.

- Border Color Change: Once the circle hits a specific border, the border should change color to indicate that it has already been hit. In the previous example, all four borders are red, but with this feature, when the circle bounces off the right-side border, for instance, it could change to a different color, such as white or yellow.

- Random Circle Movement: Currently, the circle starts in the middle of the screen, with its velocity set to a simple 1px change in direction on each tick. For this feature, you’ll need to randomize the circle’s velocity and direction at the start of the application.

## 📋 References

![Screenshot 2024-12-14 073920](https://github.com/user-attachments/assets/b975b15a-4af5-4ac3-aa2c-5fb2a68c3c46)

![Screenshot 2024-12-14 092324](https://github.com/user-attachments/assets/0fd54ef8-4d7a-4be1-9e3e-815b23678e5a)
- [PixiJS Docs (Library for 2D Rendering)](https://pixijs.com/8.x/guides)

```js
/* REFS >>> Pixie Pong Development
    1) https://pixijs.com/8.x/examples/basic/container
    2) https://pixijs.com/8.x/playground
    3) https://pixijs.com/8.x/examples
    4) https://pixijs.download/v6.4.0/docs/PIXI.Application.html
    5) https://pixijs.com/8.x/examples/graphics/simple
    6) https://codewithstein.com/how-to-change-the-size-of-a-pixijs-application/
    7) https://stackoverflow.com/questions/15241915/how-to-change-css-property-using-javascript
    8) https://www.sohamkamani.com/javascript/enums/
    9) https://api.pixijs.io/@pixi/math/PIXI/Rectangle.html
    10) https://pixijs.download/v4.8.9/docs/PIXI.ticker.Ticker.html
    11) https://codewithstein.com/how-to-move-an-object-in-a-pixijs-application/
    12) https://stackoverflow.com/questions/56952119/pixijs-4-rotation-speed-and-determine-stopping-location-axis
    13) https://pixijs.com/8.x/examples/assets/promise / https://pixijs.com/8.x/examples/assets/async
    14) https://stackoverflow.com/questions/41455028/how-to-wrap-an-asynchronous-function-in-a-promise
    15) https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
    16) https://www.youtube.com/watch?v=DHLw0LDXdos
    17) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
    18) https://stackoverflow.com/questions/35711084/js-es6-promise-chaining
    19) https://www.w3schools.com/jsref/jsref_min.asp
    20) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
    21) https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
*/
```

# 👨🏻‍💻📜 Developer Notes
```js
/* DEVELOPER NOTES: Hunter Shaw >>> What I learned... 
  Honestly, I learned a lot of this lesson; however, I ran into several problems while developing this app. Here's the deets. 

      1st) PixiJS documentation is not all that great, plus reading over 8+ year old StackOverflow questions anit fun either.
        >>> Good documentation is EVERYTHING

      2nd) Chaining Promises are a lot harder than I thought, and by only... and only after, reading up more on the docs and uses the debugger tool did I realize what was running and doing what.

      3rd) I should of started and developed this app in TypeScript because I really wanted to use REAL Enums for hit detection, and as of right now, its pretty DRY. 

      4th) Having a structured and well planned-out layout/functions BEFORE coding is a big brain move.
        >>> I will pre-code empty functions and what I need in order to have a more structured layout. Like, The animateCirclePos() func that should be updated with promises per assignment instructions.

      5th) Developing and working with code you're not yet experienced with; it's a good idea to just make a bunch of tests to see how the code and data is ran and overall how things work. 
        >>> Don't start with trying to build the tiles of a roof when you don't even know how to make a roof yet.

      6th) Focus on getting a mockup before makin' it look like a million bunchs. 
        >>> Get a working version up and runnin.
        
    ...and finally... I learned that I am a really good fontend DEV. Love developing things that have a good UI/UX and than a great backend that ties it together. 
    You can build the best thing, but honestly, if the UI/UX anit good or even reasonable, then it's like driving a really beat up car with an engine of a Mercedes Benz AMG GT, and you wondering why people anit buying the car you selling...

    <<< Perspective value is a REAL thing >>> That's why y'all got every iPhone box y'all ever bought. 
*/
```

# 🔗 npm - Dependencies

- npm i sass --save-dev
- npm i sass-loader --save-dev
- npm i style-loader --save-dev
- npm i webpack --save-dev
- npm i webpack-cli --save-dev
- npm i webpack-dev-server --save-dev
- npm i @babel/preset-env
- npm i babel-loader
- npm i css-loader
- npm i html-webpack-plugin
- npm i pixi.js

## 🛠️ Setup 

### Create a _webpack.config.js_ file and add the following...
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // cleans the output directory before each build
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',  // injects styles into DOM
          'css-loader',    // turns CSS into CommonJS
          'sass-loader',   // compiles Sass to CSS
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,  // matches image files
        type: 'asset/inline',  // emits separate files and returns their URLs
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false,
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // serves static files from the 'dist' directory
    },
    compress: true,
    port: 9001,
    hot: false
  },
  mode: 'development',
};
```
### Now, add the _npm_ **(Node Packages)** to your codebase...
Here is the one line, **_easy install_**, for **all** the packages needed to start.
```bash
npm i sass sass-loader style-loader webpack webpack-cli webpack-dev-server @babel/preset-env babel-loader css-loader html-webpack-plugin --save-dev
```

# 📈🪶 Progress Screenshots/Code
### _This section will have all the screenshots & code for my updated progress while developing..._

## Got the canvas setup and PixiJS _more-or-less_ working.  

![Screenshot 2024-12-14 120621](https://github.com/user-attachments/assets/88f5bc99-2cd0-480a-a1a2-1917f5d54bbd)
```js
import './index.scss'; // imports >>>
// import 'pixi.js';
// const { Application, Graphics } = require('pixi.js'); // Old vanillia JS
import { Application, Graphics } from 'pixi.js'; // new ES6 imports
/* REFS >>> PixiJS
    1) https://pixijs.com/8.x/examples/basic/container
    2) https://pixijs.com/8.x/playground
    3) https://pixijs.com/8.x/examples
    4) https://pixijs.download/v6.4.0/docs/PIXI.Application.html
    5) https://pixijs.com/8.x/examples/graphics/simple
    6) https://codewithstein.com/how-to-change-the-size-of-a-pixijs-application/
    7) https://stackoverflow.com/questions/15241915/how-to-change-css-property-using-javascript
*/

console.log('JS (JavaScript) file connected.');

// Main App >>> 
(async () => { // IIFE (Immediately Invoked Function Expression)
    const main = new Application(); // new Class for making a PixiJS app

    await main.init({ // init main
        background: '#0099B3',
        height:  500,
        width: 500
    })

    document.body.appendChild(main.canvas); // append the app to the body element, the application
    console.log(main.canvas); // see height and width of canvas

    // Style canvas and center it! I know, I know.. this is the only way I could find to do so... 
    // main.canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;";
    main.canvas.className = "canvasStyles"; // yeah... the new way much better hahaha

    let getWidth = main.canvas.getAttribute('width');
    let getHeight = main.canvas.getAttribute('height');
    console.log(getWidth, getHeight, "(canvas Width x Height)");

    const circle = new Graphics(); // new graphics to make the circle, the Class w/ objects
    circle.interactive = true;
    circle.on('pointermove', (event) => { // test
        console.log('Pointer moved over this graphic!');
    });
    
    // Variables >>>
    const canvasWeidth = getWidth - 15; // minus the canvas w/h by circle radius
    const canvasHeight = getHeight - 15;

    const circlePosX = canvasWeidth / 2; // dividing by 1 confirmed that circle radius won't pass the canvas
    const circlePosY = canvasHeight / 2;

    const options = { // circle options
        x: circlePosX,
        y: circlePosY,
        radius: 15,
        color: '0xE7492A'
    }
    
    circle.circle(options.x, options.y, options.radius); // make the object/graphics (x, y, radius)
    circle.fill({ // color the made circle >>> .fill(0xhexcode, 1) is deprecated
        color: options.color,
        alpha: 1
    });

    main.stage.addChild(circle);
})();
```

## Added rectangles and defined them for each border.

![Screenshot 2024-12-14 131830](https://github.com/user-attachments/assets/433a9bc1-3b97-427f-a9b4-405ae8071d50)
```js
const borderOptions = [ // border options
        {
            top: 
            {
                x: 0,
                y: 0,
                width: getWidth,
                height: 5
            },
            bottom: 
            {
                x: 0,
                y: getHeight - 5,
                width: getWidth,
                height: 5
            },
            left: 
            {
                x: 0,
                y: 5,
                width: 5,
                height: getHeight
            },
            right: 
            {
                x: getWidth - 5,
                y: 5,
                width: 5,
                height: getHeight
            }
        }
    ]
    // console.log(borderOptions)

    // The Borders >>> top, bottom, left, right
    // topBorder.rect(0, 0, getWidth, 5); // top
    topBorder.rect(borderOptions[0].top.x, borderOptions[0].top.y, borderOptions[0].top.width, borderOptions[0].top.height); // top
    topBorder.fill(0xE7492A);

    bottomBorder.rect(borderOptions[0].bottom.x, borderOptions[0].bottom.y, borderOptions[0].bottom.width, borderOptions[0].bottom.height); // bottom
    bottomBorder.fill(0xE7492A);

    leftBorder.rect(borderOptions[0].left.x, borderOptions[0].left.y, borderOptions[0].left.width, borderOptions[0].left.height); // left
    leftBorder.fill(0xE7492A);

    rightBorder.rect(borderOptions[0].right.x, borderOptions[0].right.y, borderOptions[0].right.width, borderOptions[0].right.height); // right
    rightBorder.fill(0xE7492A);

    // Append Graphics on Canvas >>>
    main.stage.addChild(circle);
    main.stage.addChild(topBorder);
    main.stage.addChild(bottomBorder);
    main.stage.addChild(leftBorder);
    main.stage.addChild(rightBorder);
```
### Animating the circle. _(in progress)_

![Screenshot 2024-12-14 140537](https://github.com/user-attachments/assets/07b10bdf-be15-47f5-807e-297f78c416cb)
```js
// Animation & Callback Events
    main.ticker.add((time) => { // animate the circle
        circle.x += 1 * time.deltaTime;

        setTimeout(() => {
            console.log(circle.x, "x-axis", circle.y, "y-axis")
        }, 1000);

        if (circle.x > canvasWidth / 2) {
            circle.x = canvasWidth / 2
            circle.y += 1 * time.deltaTime;

            if (circle.y > canvasHeight / 2) {
                circle.y = canvasWidth / 2
            }
        }
    })
```
## Change color of border when hit detected on circle graphic.

![Screenshot 2024-12-14 143811](https://github.com/user-attachments/assets/0a2ec228-d8b9-4431-9446-969e9d2f3f3a)

## Figuring out hitting borders and pos of circle, changing border color on bounce off/hit.

![Screenshot 2024-12-15 110926](https://github.com/user-attachments/assets/41c3b98e-8d33-4ac7-8092-d2f7068f157f)
```js
// DEVELOPER NOTES: Def a better way of doing this...
    topBorder.rect(borderOptions[0].top.x, borderOptions[0].top.y, borderOptions[0].top.width, borderOptions[0].top.height); // top
    topBorder.fill(0x2f4f4f);
    // console.log(changeBorderColor('top'));

    bottomBorder.rect(borderOptions[0].bottom.x, borderOptions[0].bottom.y, borderOptions[0].bottom.width, borderOptions[0].bottom.height); // bottom
    bottomBorder.fill(0x2f4f4f);

    leftBorder.rect(borderOptions[0].left.x, borderOptions[0].left.y, borderOptions[0].left.width, borderOptions[0].left.height); // left
    leftBorder.fill(0x2f4f4f);

    rightBorder.rect(borderOptions[0].right.x, borderOptions[0].right.y, borderOptions[0].right.width, borderOptions[0].right.height); // right
    rightBorder.fill(0x2f4f4f);

    // Append Graphics on Canvas >>>
    main.stage.addChild(circle);
    main.stage.addChild(topBorder);
    main.stage.addChild(bottomBorder);
    main.stage.addChild(leftBorder);
    main.stage.addChild(rightBorder);

    // Animation of Circle >>>
    const animateCirclePos = (targetX, targetY, duration) => {
        return new Promise((resolve) => { // new promise to track the data within the animateCirclePos() func, using promises .then() to move on to the next border hit etc
            // variables to track Pos of circle and as well as the time
            const startTime = Date.now(); //record time using Date object
            const startX = circle.x;
            const startY = circle.y;

            const tickerCallbackFunc = () => { // the ticker callback function which is called to remove and start again, thru promsies, and recalling animateCirclePos() func
                const timePassed = Date.now() - startTime;
                const totalTime = Math.min(timePassed / duration, 1); // use the time from now - the time the animation starts
                console.log(totalTime);

                // variables for POS of circle & the time it took
                circle.x = startX + (targetX - startX) * totalTime;
                circle.y = startY + (targetY - startY) * totalTime;

                if (totalTime === 1) {
                    main.ticker.remove(tickerCallbackFunc); // stop the FPS tracker (the ticker)
                    resolve(); // only resolve, and move on to the next after total time is complete
                }
            };

            main.ticker.add(tickerCallbackFunc);
        });
    };

    // let circleSpeed = Math.floor(Math.random() * (3000 - 1000) + 1000);
    let circleSpeed = 1000;
    console.log(circleSpeed, "First Speed of Circle");

    // Call animateCirclePos() function >>> use promises to update and call again, after resolved using a time it took for travel of circle
    animateCirclePos(canvasWidth / 4, canvasHeight / 2, circleSpeed) // bottom border hit
        .then(() => { // first
            console.log("First Border Hit");
            // circleSpeed = Math.floor(Math.random() * (3000 - 1000) + 1000);
            console.log(circleSpeed, "Second Speed of Circle");
            
            bottomBorder.rect(borderOptions[0].bottom.x, borderOptions[0].bottom.y, borderOptions[0].bottom.width, borderOptions[0].bottom.height); // bottom
            bottomBorder.fill(0xFF0000);
            main.stage.addChild(bottomBorder);
            return animateCirclePos(canvasWidth / 1.7, - (canvasHeight / 240), circleSpeed); // call sec pos
        })
        .then(() => { // second
            console.log("Second Border Hit");
            // circleSpeed = Math.floor(Math.random() * (3000 - 1000) + 1000);
            console.log(circleSpeed, "Third Speed of Circle");

            return animateCirclePos(- canvasWidth / 2, canvasHeight / 2, circleSpeed); // third pos
        })
        .then(() => { // third
            console.log("Third Border Hit");
            // circleSpeed = Math.floor(Math.random() * (3000 - 1000) + 1000);
            console.log(circleSpeed, "Four Speed of Circle");

            return animateCirclePos(250, 240, circleSpeed); // last pos
        })
        .then(() => { // fourth & last
            console.log("Last Border Hit");
            alert("All Borders had been hit! Now restarting...", window.location.reload()); // end app
            // window.location.reload(); // restart app
        });
```

## Finally completed app: Pixel-Perfect Hit Detection added, Border Color Change added, lastly will be working on Random Circle Movement // code a little DRY.

![Screenshot 2024-12-15 120749](https://github.com/user-attachments/assets/020e4ab1-013f-4aad-8e67-53391c94f2af)
### Current Codebase: All Done Minus Randomizing Starting Position
```js
/* DEVELOPER NOTES: Hunter Shaw >>> What I learned... 
  Honestly, I learned a lot of this lesson; however, I ran into several problems while developing this app. Here's the deets. 

      1st) PixiJS documentation is not all that great, plus reading over 8+ year old StackOverflow questions anit fun either.
        >>> Good documentation is EVERYTHING

      2nd) Chaining Promises are a lot harder than I thought, and by only... and only after, reading up more on the docs and uses the debugger tool did I realize what was running and doing what.

      3rd) I should of started and developed this app in TypeScript because I really wanted to use REAL Enums for hit detection, and as of right now, its pretty DRY. 

      4th) Having a structured and well planned-out layout/functions BEFORE coding is a big brain move.
        >>> I will pre-code empty functions and what I need in order to have a more structured layout. Like, The animateCirclePos() func that should be updated with promises per assignment instructions.

      5th) Developing and working with code you're not yet experienced with; it's a good idea to just make a bunch of tests to see how the code and data is ran and overall how things work. 
        >>> Don't start with trying to build the tiles of a roof when you don't even know how to make a roof yet.

      6th) Focus on getting a mockup before makin' it look like a million bunchs. 
        >>> Get a working version up and runnin.
        
    ...and finally... I learned that I am a really good fontend DEV. Love developing things that have a good UI/UX and than a great backend that ties it together. 
    You can build the best thing, but honestly, if the UI/UX anit good or even reasonable, then it's like driving a really beat up car with an engine of a Mercedes Benz AMG GT, and you wondering why people anit buying the car you selling...

    <<< Perspective value is a REAL thing >>> That's why y'all got every iPhone box y'all ever bought. 
*/

// imports >>>
import './index.scss';
import { Application, Graphics } from 'pixi.js'; // new ES6 imports

/* REFS >>> Pixie Pong Development
    1) https://pixijs.com/8.x/examples/basic/container
    2) https://pixijs.com/8.x/playground
    3) https://pixijs.com/8.x/examples
    4) https://pixijs.download/v6.4.0/docs/PIXI.Application.html
    5) https://pixijs.com/8.x/examples/graphics/simple
    6) https://codewithstein.com/how-to-change-the-size-of-a-pixijs-application/
    7) https://stackoverflow.com/questions/15241915/how-to-change-css-property-using-javascript
    8) https://www.sohamkamani.com/javascript/enums/
    9) https://api.pixijs.io/@pixi/math/PIXI/Rectangle.html
    10) https://pixijs.download/v4.8.9/docs/PIXI.ticker.Ticker.html
    11) https://codewithstein.com/how-to-move-an-object-in-a-pixijs-application/
    12) https://stackoverflow.com/questions/56952119/pixijs-4-rotation-speed-and-determine-stopping-location-axis
    13) https://pixijs.com/8.x/examples/assets/promise / https://pixijs.com/8.x/examples/assets/async
    14) https://stackoverflow.com/questions/41455028/how-to-wrap-an-asynchronous-function-in-a-promise
    15) https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
    16) https://www.youtube.com/watch?v=DHLw0LDXdos
    17) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
    18) https://stackoverflow.com/questions/35711084/js-es6-promise-chaining
    19) https://www.w3schools.com/jsref/jsref_min.asp
    20) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
    21) https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
*/

console.log('JS (JavaScript) file connected.');

// Main App >>> 
(async () => { // IIFE (Immediately Invoked Function Expression)
    const main = new Application(); // new Class for making a PixiJS app

    await main.init({ // init main
        background: '#0099B3',
        height:  500,
        width: 500
    })

    document.body.appendChild(main.canvas); // append the app to the body element, the application
    console.log(main.canvas); // see height and width of canvas

    main.canvas.className = "canvasStyles"; // styles from the stylesheet, on load

    let getWidth = main.canvas.getAttribute('width');
    let getHeight = main.canvas.getAttribute('height');
    console.log(getWidth, getHeight, "(canvas Width x Height)");

    // Graphics >>>
    const circle = new Graphics(); // new graphics to make the circle, the Class w/ objects
    const topBorder = new Graphics(); // top
    const bottomBorder = new Graphics(); // bottom
    const leftBorder = new Graphics(); // top
    const rightBorder = new Graphics(); // bottom


    // circle.interactive = true;
    // circle.on('pointermove', (event) => { // test
    //     console.log('Pointer moved over this graphic!');
    // });
    
    // Variables >>>
    const canvasWidth = getWidth - 20; // minus the canvas w/h by circle radius
    const canvasHeight = getHeight - 20; // added +5 for the border width (+15 circle / +5 borders = 20)

    let circleOptions = { // circle options
        posX: 240,
        PosY: 240,
        radius: 15,
        color: '0xE7492A'
    }

    // The Circle >>>
    circle.circle(canvasWidth / 2, canvasHeight / 2, circleOptions.radius); // make the object/graphics (x, y, radius)
    circle.fill({ // color the made circle >>> .fill(0xhexcode, 1) is deprecated
        color: circleOptions.color,
        alpha: 1
    });

    const borderOptions = [ // border options
        {
            top: 
            {
                x: 0,
                y: 0,
                width: getWidth,
                height: 5
            },
            bottom: 
            {
                x: 0,
                y: getHeight - 5,
                width: getWidth,
                height: 5
            },
            left: 
            {
                x: 0,
                y: 5,
                width: 5,
                height: getHeight
            },
            right: 
            {
                x: getWidth - 5,
                y: 5,
                width: 5,
                height: getHeight
            }
        }
    ]

    // let bordersHitCircle = { // used if running random POS of circle... More or less how enums work
    //     top: false,
    //     bottom: false,
    //     left: false,
    //     right: false,
    // }
    
    // console.log(borderOptions)
    // const changeBorderColor = ((border) => {
    //     let color = `${`${border}Border.fill(0x2f4f4f);`}`;
    //     let specificBorder = `${`${border}Border.rect(borderOptions[0].${border}.x, borderOptions[0].${border}.y, borderOptions[0].${border}.width, borderOptions[0].${border}.height);`}`;
    //     return specificBorder + " " + color;
    // });

    // DEVELOPER NOTES: Def a better way of doing this...
    topBorder.rect(borderOptions[0].top.x, borderOptions[0].top.y, borderOptions[0].top.width, borderOptions[0].top.height); // top
    topBorder.fill(0x2f4f4f);
    // console.log(changeBorderColor('top'));

    bottomBorder.rect(borderOptions[0].bottom.x, borderOptions[0].bottom.y, borderOptions[0].bottom.width, borderOptions[0].bottom.height); // bottom
    bottomBorder.fill(0x2f4f4f);

    leftBorder.rect(borderOptions[0].left.x, borderOptions[0].left.y, borderOptions[0].left.width, borderOptions[0].left.height); // left
    leftBorder.fill(0x2f4f4f);

    rightBorder.rect(borderOptions[0].right.x, borderOptions[0].right.y, borderOptions[0].right.width, borderOptions[0].right.height); // right
    rightBorder.fill(0x2f4f4f);

    // Append Graphics on Canvas >>>
    main.stage.addChild(circle);
    main.stage.addChild(topBorder);
    main.stage.addChild(bottomBorder);
    main.stage.addChild(leftBorder);
    main.stage.addChild(rightBorder);

    // Animation of Circle >>>
    const animateCirclePos = (targetX, targetY, duration) => {
        return new Promise((resolve) => { // new promise to track the data within the animateCirclePos() func, using promises .then() to move on to the next border hit etc
            // variables to track Pos of circle and as well as the time
            const startTime = Date.now(); //record time using Date object
            const startX = circle.x;
            const startY = circle.y;

            const tickerCallbackFunc = () => { // the ticker callback function which is called to remove and start again, thru promsies, and recalling animateCirclePos() func
                const timePassed = Date.now() - startTime;
                const totalTime = Math.min(timePassed / duration, 1); // use the time from now - the time the animation starts
                console.log(totalTime);

                // variables for POS of circle & the time it took
                circle.x = startX + (targetX - startX) * totalTime;
                circle.y = startY + (targetY - startY) * totalTime;

                if (totalTime === 1) {
                    main.ticker.remove(tickerCallbackFunc); // stop the FPS tracker (the ticker)
                    resolve(); // only resolve, and move on to the next after total time is complete
                }
            };

            main.ticker.add(tickerCallbackFunc);
        });
    };

    let circleSpeed = Math.floor(Math.random() * (2000 - 800) + 1000);
    console.log(circleSpeed, "First Speed of Circle");

    // let isLast = false;
    // Call animateCirclePos() function >>> use promises to update and call again, after resolved using a time it took for travel of circle
    animateCirclePos(canvasWidth / 4, canvasHeight / 2, circleSpeed) // bottom border hit
        .then(() => { // first
            console.log("First Border Hit");
            // circleSpeed = Math.floor(Math.random() * (3000 - 1000) + 1000);
            console.log(circleSpeed, "Second Speed of Circle");
            circleSpeed = 1000;
            
            bottomBorder.rect(borderOptions[0].bottom.x, borderOptions[0].bottom.y, borderOptions[0].bottom.width, borderOptions[0].bottom.height); // bottom hit
            bottomBorder.fill(0xFF0000);
            main.stage.addChild(bottomBorder);

            console.log(circle.position); // using circle.positon to see how to calculate hard-coded hits on borders :sad-face:
            return animateCirclePos(canvasWidth - 240, - (canvasHeight - 380), circleSpeed); // call sec pos
        })
        .then(() => { // second
            console.log("Second Border Hit");
            circleSpeed = 1000;
            // circleSpeed = Math.floor(Math.random() * (3000 - 1000) + 1000);
            console.log(circleSpeed, "Third Speed of Circle");

            rightBorder.rect(borderOptions[0].right.x, borderOptions[0].right.y, borderOptions[0].right.width, borderOptions[0].right.height); // right hit 
            rightBorder.fill(0xFF0000);
            main.stage.addChild(rightBorder);

            console.log(circle.position);
            return animateCirclePos(-20, -220, circleSpeed); // third pos
        })
        .then(() => { // third
            console.log("Third Border Hit");
            circleSpeed = 1000;
            // circleSpeed = Math.floor(Math.random() * (3000 - 1000) + 1000);
            console.log(circleSpeed, "Four Speed of Circle");

            topBorder.rect(borderOptions[0].top.x, borderOptions[0].top.y, borderOptions[0].top.width, borderOptions[0].top.height); // top hit 
            topBorder.fill(0xFF0000);
            main.stage.addChild(topBorder);

            console.log(circle.position);
            return animateCirclePos((-(canvasWidth / 2)) + 20, 0, circleSpeed); // last pos
        })
        .then(() => { // fourth & last
            console.log("Last Border Hit");
            circleSpeed = 100; // needed and remain in same last pos, but 100ms is need for the border color to change before alert goes off and ends app

            leftBorder.rect(borderOptions[0].left.x, borderOptions[0].left.y, borderOptions[0].left.width, borderOptions[0].left.height); // left hit 
            leftBorder.fill(0xFF0000);
            main.stage.addChild(leftBorder);
            // isLast = true;
            
            console.log(circle.position);
            return animateCirclePos((-(canvasWidth / 2)) + 20, 0, circleSpeed); // end app
            // if (isLast ) {
            //     alert("All Borders had been hit! Now restarting...", window.location.reload()); // end app
            // }
            // window.location.reload(); // restart app
        })
        .then(() => { // end app and restart
            alert("All Borders had been hit! Now restarting...", window.location.reload()); // end app
        });
})();
```