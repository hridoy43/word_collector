browser.browserAction.onClicked.addListener((tab) => {
    // disable the active tab
    browser.browserAction.disable(tab.id);
    // requires the "tabs" or "activeTab" permission
    console.log(tab.url);
});