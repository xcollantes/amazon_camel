
async function getTabUrl() {
    const [tab] = await chrome.tabs.query(
        { active: true, lastFocusedWindow: true });
    return tab;
}

getTabUrl().then(tab => {
    console.log(tab);
    document.getElementById("extName").innerHTML = tab.url;
});



