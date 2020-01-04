//----NAV MENU----

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); //allows delay in some scripts
  }

function findClosest (element, fn) { //checks if mouse is near nav menu
    if (!element) return undefined;
    return fn(element) ? element : findClosest(element.parentElement, fn);
}
document.addEventListener("click", function(event) {
    var target = findClosest(event.target, function(el) {
        return el.id == 'navdrawer';
    });
    if (!target) { //if mouse isn't in nav menu
        if(drawerState == 1){toggleDrawer(0)} //then it closes the drawer, but only if it was already open
    }
}, false);

var drawerState = 0

var drawers = document.getElementsByClassName("nav-drawer");

async function toggleDrawer(val) {

    console.log(val)

    if(val == 1){
        for (var i = 0; i < drawers.length; i++) {
            drawers[i].style.marginLeft = '0%';
        }
        await sleep(500)
         drawerState = 1;
    } else {
        for (var i = 0; i < drawers.length; i++) {
            drawers[i].style.marginLeft = '-100%';
        }
        await sleep(500)
        drawerState = 0;
    }
}