'use strict';

console.log("popup.js run....");
function removeAdds() {
    console.log("send func message: " + Func.removeAdds);
    let filter = {active: true, currentWindow: true};
    chrome.tabs.query(filter, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {func: Func.removeAdds}, function(response){
            console.log(Func.removeAdds + " response: " + response);
        });
    });
}
function init() {
    $("#remove-adds").click(removeAdds);
}
$(init);