async function getTabUrl(): Promise<chrome.tabs.Tab> {
  const [tab]: chrome.tabs.Tab[] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  return tab;
}

chrome.runtime.onMessage.addListener(
  (
    request: string,
    sender: chrome.runtime.MessageSender,
    sendResponse: any
  ): boolean => {
    if (request === "get_url") {
      getTabUrl().then((tab: chrome.tabs.Tab) => {
        // Pass data to storage for use in Service Worker script.
        if (tab) {
          sendResponse({ tab: tab });
        }
      });
    }
    return true;
  }
);
