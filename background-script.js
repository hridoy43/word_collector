
//connecting socket protocol
var socket = io.connect('http://localhost:3000');


browser.menus.removeAll(function () {
    browser.menus.create({
        id: "log-selection",
        title: "Submit '%s' for review",
        contexts: ["selection"]
    });
    // browser.menus.create({
    //     id: "get-dashboard",
    //     title: "Visit Dictionary Dashboard",
    //     contexts: ["all"]
    // });
})




async function contextAction(info, tab) {

    if (info.menuItemId == "log-selection") {
        let text = info.selectionText.trim();

        console.log(info.selectionText, "- is submitting for review..");
        //await browser.storage.local.set({ [text]: text });
        socket.emit("dicData", text);
    }


    //create new tab for local-dashboard
    // else if (info.menuItemId == "get-dashboard") {
    //     var creating = browser.tabs.create({
    //         // title: "Dashboard - for stored words",
    //         url: "panel/panel.html"
    //     });
    // }

}


function notify(message) {
    //console.log("background script received message: ", message);
    browser.menus.onClicked.addListener(contextAction);

}

/*
Assign `notify()` as a listener to messages from the content script.
*/
browser.runtime.onMessage.addListener(notify);


//browser.runtime.onMessage.addListener(createContext);

// browser.browserAction.onClicked.addListener((tab) => {
//     var creating = browser.tabs.create({
//         // title: "Dashboard - for stored words",
//         url: "panel/panel.html"
//     });
// });