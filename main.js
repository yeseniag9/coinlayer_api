/**
 * @param rate_info
 */

async function clickedEvent(rate_info) {
    let rate = document.getElementsByTagName('figure')[rate_info].attributes[0].value;
    console.log(rate);

    const request = await fetch(`http://api.coinlayer.com/live?access_key=f6690e79ed5d13f0a5ccc89dca412f5a&symbols=AIR,DRZ,INK,OK,YEE`);

    let response = await request.json();

    // console.log(response)

    for (i in response["rates"]) {
        if (i == rate) {
            console.log(response["rates"][i]);
            break;
        }
    }
} 

/**
 * @param id
 * @param event
 */

function getRate(id, event) {
    switch(id) {
        case 'fig1': { 
            clickedEvent(0,0)
            break;
        }
        case 'fig2': { 
            clickedEvent(1,0)
            break;
        }
        case 'fig3': { 
            clickedEvent(2,0)
            break;
        }
        case 'fig4': { 
            clickedEvent(3,0)
            break;
        }
        case 'fig5': { 
            clickedEvent(4,0)
            break;
        }
    }
}