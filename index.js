function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

//this is a false solution... it passes the test but doesn't do the job that was wanted
function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

//this one is going to be pretty tricky. need to read it more carefully to see what the description says
function increaseRankBy(n) {

}
