//travis-script.js
const travisScript = require("@isomerpages/isomerpages-travisci-scripts");

/*const travisBranch = process.env.TRAVIS_BRANCH;

if(travisBranch == "master") {
  travisScript.runAll();
}
else {
  travisScript.testsOnly();
}*/

/* 
 * To go into production mode, delete this comment and the following line of code,
 * then uncomment the entire chunk of code above. Remember to set the environmental
 * variables on TravisCI! Refer to the production guide for details.
 */
travisScript.testsOnly(false)
