// imports >>>
import './index.scss';
import { Application, Graphics } from 'pixi.js'; // new ES6 imports

/* REFS >>> PixiJS
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
})();