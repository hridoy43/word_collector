
function notify() {
    //console.log("Window loading message sending to bg");
    browser.runtime.sendMessage('notify');
}

/*
Add notify() as a listener to click events.
*/
window.addEventListener("contextmenu", notify);