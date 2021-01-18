// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt MIT-License
var $buoop = {
    required:{
        e:0,f:0,o:0,s:0,c:0
    },
    insecure:true,
    reminder: 24,
    reminderClosed: 10,
    unsupported:true,
    style:"bottom",
    api:2021.01
};

function $buo_f() {
 var e = document.createElement("script");
 e.src = "https://browser-update.org/update.min.js";
 document.body.appendChild(e);
};

try {
    document.addEventListener("DOMContentLoaded", $buo_f,false)
} catch(e){
    window.attachEvent("onload", $buo_f)
}
//@license-end
