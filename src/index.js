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


    circle.interactive = true;
    circle.on('pointermove', (event) => { // test
        console.log('Pointer moved over this graphic!');
    });
    
    // Variables >>>
    const canvasWidth = getWidth - 20; // minus the canvas w/h by circle radius
    const canvasHeight = getHeight - 20; // added +5 for the border width (+15 circle / +5 borders = 20)

    const circlePosX = canvasWidth / 2; // dividing by 1 confirmed that circle radius won't pass the canvas
    const circlePosY = canvasHeight / 2;

    let circleOptions = { // circle options
        x: circlePosX,
        y: circlePosY,
        radius: 15,
        color: '0xE7492A'
    }

    // The Circle >>>
    circle.circle(circleOptions.x, circleOptions.y, circleOptions.radius); // make the object/graphics (x, y, radius)
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
    // console.log(borderOptions)

    // The Borders >>> top, bottom, left, right
    // topBorder.rect(0, 0, getWidth, 5); // top
    topBorder.rect(borderOptions[0].top.x, borderOptions[0].top.y, borderOptions[0].top.width, borderOptions[0].top.height); // top
    topBorder.fill(0xff5555);

    bottomBorder.rect(borderOptions[0].bottom.x, borderOptions[0].bottom.y, borderOptions[0].bottom.width, borderOptions[0].bottom.height); // bottom
    bottomBorder.fill(0xff5555);

    leftBorder.rect(borderOptions[0].left.x, borderOptions[0].left.y, borderOptions[0].left.width, borderOptions[0].left.height); // left
    leftBorder.fill(0xff5555);

    rightBorder.rect(borderOptions[0].right.x, borderOptions[0].right.y, borderOptions[0].right.width, borderOptions[0].right.height); // right
    rightBorder.fill(0xff5555);

    // Append Graphics on Canvas >>>
    main.stage.addChild(circle);
    main.stage.addChild(topBorder);
    main.stage.addChild(bottomBorder);
    main.stage.addChild(leftBorder);
    main.stage.addChild(rightBorder);

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
})();