//Since we're using the new import syntax, we need to use babel-node here to test the 
//server, but we only installed babel-node locally, not globally.
//To import a non-default export, we need the destructure syntax, nodeEnv.
import config, { nodeEnv, logStars } from './config';

console.log(config, nodeEnv);
//When we import the function, we also need to destructure this, because it's not a 
//default export. We can simply invoke the logStar variable, because it holds a function
//reference.
logStars('Function');
//Now, our import from line places the default export into the config variable so we can
//read the port property from the server.js file
//On bash, babel-node server.js , will print {port:8080}