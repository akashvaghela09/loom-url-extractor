// If your extension doesn't need a content script, just leave this file empty
// This is an example of a script that will run on every page. This can alter pages
/*global chrome*/

console.log("Content script running....");

const findLoomUrls = () => {
    const targetPattern = /https:\/\/www\.loom\.com\/embed\/[a-zA-Z0-9]+/g; // Adjust this regex as needed
    const urls = new Set();

    // Find iframe elements and check their 'src' attributes
    document.querySelectorAll("iframe").forEach((iframe) => {
        const src = iframe.getAttribute("src");
        if (src && targetPattern.test(src)) {
            urls.add(src);
        }
    });

    // Search all text content of the page for matching URLs
    const pageText = document.body.innerHTML;
    const matches = pageText.match(targetPattern);
    if (matches) {
        matches.forEach((url) => urls.add(url));
    }

    return Array.from(urls);
};

// content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "scrape_url") {
        const loomUrls = findLoomUrls();
        sendResponse({ list: loomUrls });
    }
});
