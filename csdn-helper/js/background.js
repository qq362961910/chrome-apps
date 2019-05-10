console.log("background.js run....");

chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'blog.csdn.net'},
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});