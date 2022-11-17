// ==UserScript==
// @name         Parse_market_helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://zelenka.guru/market/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zelenka.guru
// @grant        none

// @updateURL    https://raw.githubusercontent.com/emilyrudd122/test/main/helper.js
// @downloadURL  https://raw.githubusercontent.com/emilyrudd122/test/main/helper.js
// ==/UserScript==

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

console.log("qweqwe")


waitForElm('.marketIndexItem').then((elm) => {

    var market_items = document.getElementsByClassName("marketIndexItem")

    if (market_items == null) return

    Array.from(market_items).forEach((el) => {
        // Do stuff here
        //console.log(el)

        if (el.classList.contains("bumped")) {el.remove(); console.log('Поднятые акки удалены');}
        if (document.URL.includes("https://zelenka.guru/market/steam/?mm_ban=nomatter&order_by=pdate_to_down")){
            if (!el.textContent.includes("CS:GO Prime")) {el.remove(); console.log("Акки без кс удалены")}
        }

    });


//    console.log(elm.textContent);
});






