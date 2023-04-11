async function getTabUrl() {
    const [tab] = await chrome.tabs.query(
        { active: true, lastFocusedWindow: true });
    return tab;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request === "get_url") {
        getTabUrl().then(tab => {
            // Pass data to storage for use in Service Worker script.
            if (tab) {
                sendResponse({ "tab": tab });
            }
        });
    }
    return true;
});