/*global chrome*/
import "./App.css";

function App() {
    const handleScrapUrl = () => {
        // Send a message to the background script
        chrome.runtime.sendMessage({ action: "scrape_url" }, (response) => {
            if (response && response.list) {
                if (response.list.length > 1) {
                    navigator.clipboard.writeText(response.list[1]);
                } else {
                    navigator.clipboard.writeText(response.list[0]);
                }
            } else {
                console.log("Failed to scrape the URL.");
            }
        });
    };

    const handleCopyCommand = () => {
        chrome.runtime.sendMessage({ action: "scrape_url" }, (response) => {
            if (response && response.list) {
                let url = "";
                if (response.list.length > 1) {
                    url = `yt-dlp -f best "${response.list[1]}"`;
                    navigator.clipboard.writeText(url);
                } else {
                    url = `yt-dlp -f best "${response.list[0]}"`;
                    navigator.clipboard.writeText(url);
                }
            } else {
                console.log("Failed to scrape the URL.");
            }
        });
    };

    return (
        <div className="App">
            <button onClick={handleScrapUrl}>Copy Loom Embed URL</button>
            <button onClick={handleCopyCommand}>Copy YTDLP Command</button>
        </div>
    );
}

export default App;
