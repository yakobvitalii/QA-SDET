## Table of contents
* [Preconditions](#preconditions)
* [Install dependencies](#install)
* [Run using ps](#ps)
* [Debug using VS Code](#ide)
 
## Preconditions
* The required version of the node JS is 18.X+.
* To check the nodeJS version use command `node -v` and `npm -v`.
 
* <a href="https://nodejs.org/uk/download/">Download Node.js</a>
 
<h3 id="install">Install dependencies</h3>
 
* Run `npm install -s`
 
<h3 id="ps">Run using ps</h3>
 
1. Run using local browser
* Checkout project from git
* Go to the checkout folder using cd ${PROJECT_DIR}
* Install npm dependencies using command npm install
* Start atest using command `npx playwright test`

In playwright.config.ts you can change a headless mode, also change how many retries need, and how many test run in paralell
Now I'm running tests just on Chromium, If you want to check in another browsers, just uncomment code in playwright.config.ts