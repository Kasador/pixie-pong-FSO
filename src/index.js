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
*/

console.log('JS (JavaScript) file connected.');
const main = document.getElementById('main');

// Main App >>> 
(async () => { // IIFE (Immediately Invoked Function Expression)
    const main = new Application(); // new Class for making a PixiJS app

    await main.init({ // init main
        background: '#0099B3',
        resizeTo: main
    })

    document.body.appendChild(main.canvas); // append the app to the body element, the application
    console.log(main.canvas); // see height and width of canvas

    let getWidth = main.canvas.getAttribute('width');
    let getHeight = main.canvas.getAttribute('height');
    console.log(getWidth, getHeight, "(canvas Width x Height)");

    const circle = new Graphics(); // new graphics to make the circle, the Class w/ objects
    circle.interactive = true;
    circle.on('pointermove', (event) => {
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