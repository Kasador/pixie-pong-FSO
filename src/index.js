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