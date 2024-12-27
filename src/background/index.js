// If your extension doesn't need a background script, just leave this file empty
/*global chrome*/

console.log("Background script running....");

// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "scrape_url") {
        // Send message to the content script
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTabId = tabs[0]?.id;
            if (activeTabId) {
                chrome.tabs.sendMessage(activeTabId, message, sendResponse);
            }
        });

        // Indicate that the response will be sent asynchronously
        return true;
    }
});
