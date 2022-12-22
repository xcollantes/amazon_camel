const graphId = "price-tracker";
let insertPoint = document.querySelector("#ppd");

if (insertPoint) {
    insertGraph(insertPoint);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request === "show_graph") {
        const graphElement = document.getElementById(graphId)
        if (graphElement) {
            document.getElementById(graphId).scrollIntoView({ behavior: "smooth" });
            flashBorder(graphId);
        } else {
            sendResponse("no_graph_found");
        }
        return true;
    }
});

/** Flash a boarder around the graph for visibility. */
function flashBorder(graphId) {
    const color = "#2e7d32";
    let step = 5;

    let max = 80;
    let min = 0;
    let exposure = min + step;

    const flashingLights = setInterval(function () {
        if (exposure >= max || exposure <= min) {
            step *= -1;
        }
        exposure += step;
        document.getElementById(graphId).style.boxShadow = `0 0 ${exposure}px ${color}`;
    }, 50);

    document.addEventListener("click", () => {
        clearInterval(flashingLights);
        document.getElementById(graphId).style.boxShadow = "0 0 0";
    });
}

function insertGraph(insertPoint) {
    chrome.runtime.sendMessage("get_url", response => {
        const asin = getAsinFromUrl(response.tab.url);

        const graphLink = `https://charts.camelcamelcamel.com/us/${asin}/amazon-new-used.png?legend=1&w=855&h=513&ilt=1&tp=all&fo=0&lang=en`;
        const camelLink = `https://camelcamelcamel.com/product/${asin}`;
        const altText = `Price graph found at ${camelLink}`;

        const html = `<a href='${graphLink}'><img src='${graphLink}' id='${graphId}' alt='${altText}' maxWidth="80%" /></a>`;

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