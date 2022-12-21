let insertPoint = document.querySelector("#ppd");

if (insertPoint) {
    run(insertPoint)
}

function run(insertPoint) {
    chrome.runtime.sendMessage("get_url", response => {
        const asin = getAsinFromUrl(response.tab.url);

        const graphLink = `https://charts.camelcamelcamel.com/us/${asin}/amazon-new-used.png?legend=1&w=855&h=513&ilt=1&tp=all&fo=0&lang=en`;
        const camelLink = `https://camelcamelcamel.com/product/${asin}`;
        const altText = `Price graph found at ${camelLink}`;

        const html = `<a href='${graphLink}'><img src='${graphLink}' alt='${altText}' maxWidth="80%" /></a>`;

        // TODO: See if using setAttribute is beneficial.  
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
    return url.match(/\/dp\/([\d\w]+)[\?\&\/]?/)[1];
}