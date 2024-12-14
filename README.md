# 📝 Full Sail University - Pixie Pong

### 🔗 https://card-match-game-fso.netlify.app/

In this week's assignment, we will build upon our previous lesson on PixiJS by incorporating our newly acquired knowledge of asynchronous Promise handling.

### ⚙️ Overview

You are required to create four rectangles in your PixiJS application. Each rectangle (or line) will represent a border in your application. Each line will occupy one side of a box and will be positioned at the very edge of each side of the screen.

Initially, each border will be colored a different color than the blue background. After the circle bounces off one of these borders, the application should remember which borders the circle has collided with.

Now, here’s the challenge: the application should stop only after the circle has bounced off all four borders. You must use a Promise to achieve this. The Promise will be responsible for ending the game once it resolves, which should happen only after all four borders have been hit. Once the circle has bounced off all four borders, the Promise should resolve, and an alert should pop up to notify the user that the application has completed.

When fully implemented, your application should look like the example I’ve attached below.

# 🎨 Extra Requirement

10% of your grade for this activity will be based on your effort to go the extra mile by adding one of the following features to your PixiJS application. Note that none of these features were shown in the previous demonstration, and for good reason. You only need to implement one of the following features to earn the extra 10%. If left incomplete, the maximum grade you can achieve is 90%. Please choose one of the following features to fully implement:

- Pixel-Perfect Hit Detection: In the previous demonstration, you may have noticed that the circle slightly exceeds the border by a few pixels when bouncing. This is because the circle’s X,Y coordinates are based on its center. You will need to perform some quick calculations based on the border's width and the size of the circle to determine the exact hit detection spot, ensuring the edge of the circle bounces off the border perfectly without passing through it.

- Border Color Change: Once the circle hits a specific border, the border should change color to indicate that it has already been hit. In the previous example, all four borders are red, but with this feature, when the circle bounces off the right-side border, for instance, it could change to a different color, such as white or yellow.

- Random Circle Movement: Currently, the circle starts in the middle of the screen, with its velocity set to a simple 1px change in direction on each tick. For this feature, you’ll need to randomize the circle’s velocity and direction at the start of the application.

## 📋 References

![Screenshot 2024-12-14 073920](https://github.com/user-attachments/assets/b975b15a-4af5-4ac3-aa2c-5fb2a68c3c46)

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

# 📈🪶 Progress Screenshots/Code
### _This section will have all the screenshots & code for my updated progress while developing..._

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