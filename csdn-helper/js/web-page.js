'use strict';

console.log("web-page.js run....");

function removeAdds() {
    $("#csdn-toolbar").remove();
    $(".tool-box").remove();
    $("aside").remove();
    $(".recommend-right").remove();
    $(".indexSuperise").remove();
    $(".pulllog-box").remove();
    $(".meau-gotop-box").remove();
    $(".recommend-box").remove();
    $("div.article_content").removeAttr("style");
    $("#btn-readmore").parent().remove();
    $("div[id^='dmp_ad_']").remove();
    $("main").css("width", "100%");
}

chrome.runtime.onMessage.addListener(msg => {
    handleMessage(msg);
    return true;
});


function handleMessage(msg) {
    if(msg && msg.func) {
        let funcStr = msg.func;
        console.info("收到 func: " + funcStr);
        try {
            let func = eval(funcStr);
            if (typeof func === 'function') {
                func();
            }
            else {
                console.warn("消息处理方法未找到");
            }
        } catch (e) {
            console.error("处理消息失败: " + JSON.stringify(msg));
        }
    } else {
        console.warn("异常消息: " + JSON.stringify(msg));
    }
}