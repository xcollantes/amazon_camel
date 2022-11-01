// Output found in web pages's console. 
console.log("STARTING CONTENT.JS");

const insertPoint = document.querySelector("#GridgetContainer > div");

if (insertPoint) {
    chrome.runtime.sendMessage("get_url", response => {
        const asin = getAsinFromUrl(response.tab.url);

        const graphLink = `https://charts.camelcamelcamel.com/us/${asin}/amazon-new-used.png?legend=1&w=855&h=513&ilt=1&tp=all&fo=0&lang=en`;
        const camelLink = `https://camelcamelcamel.com/product/${asin}`;
        const altText = `Price graph found at ${camelLink}`;

        const html = `<a href='${graphLink}'><img src='${graphLink}' alt='${altText}' /></a>`;

        // const graph = document.createElement("img");
        // graph.setAttribute("src", g)
        // graph.setAttribute("alt", g)
        // graph.setAttribute("width", "50%")
        // insertPoint.insertAdjacentElement("afterend", graph);
        insertPoint.insertAdjacentHTML("afterend", html);
    });
}

/**
 * Extract the ASIN code from the Amazon.com link. 
 */
function getAsinFromUrl(url) {
    return url.match(/\/dp\/([\d\w]+)\?/)[1];
}