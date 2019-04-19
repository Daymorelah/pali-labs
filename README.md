# pali-labs
A simpe node.js API end-point that accepts an array of menuIds and returns a menuId with the least amount of ingredients.

### TECHNOLOGIES
#### Backend:
The Backend was implemented using: 
 * [Node](https://nodejs.org/en/) Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
 * [Express](https://expressjs.com/) Express is a minimal and flexible Node.js web application framework
 * [Docker](https://www.docker.com/get-started) A tool that helps to securely build, share and run any application anywhere.
 
 ## INSTALLATION
 * Install doicker on your machine [Docker](https://store.docker.com/editions/community/docker-ce-desktop-mac)
 * Install [Node js](https://nodejs.org/en/)
 * Clone the repository `https://github.com/Daymorelah/pali-labs.git` 
 * Navigate to the project directory
 * Run `docker build -t pali-labs-image .` to build an image of the app using doicker
 * Run `docker run -it -p 3334:2323 -v $(pwd):/src  pali-labs-image` to start the app using docker.
 * The app runs on localhost using port 3334.
 
 ## Using the API endpoint
 1. The API endpoint can be access via this URL: `localhost:3334/menu/ids`
 2. Send a list of menuIds as an array to the endpoint via a `POST` request to the end point `/menu/ids`.
 3. A menuId with the least number of ingredients from the list menuIDs is returned 
 
 ### Author
* Ademola Hussain
 
