'use strict';

console.log("web-page.js run....");

function removeAdds() {
    $(".sidebar-ft").remove();
    $(".sidebar-content.widget-scroller").css('bottom', '0px');
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