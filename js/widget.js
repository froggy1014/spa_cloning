

document.querySelector("#chat_rtan").addEventListener("click", function(){
    document.getElementsByClassName("chat_rtan")[0].classList.remove("chat_rtan_active");
    document.getElementsByClassName("chat_rtan")[0].classList.add("chat_rtan_hide");
    document.getElementsByClassName("widget_window")[0].classList.add("widget_active");
    console.log("open");
});

document.querySelector(".widget_close").addEventListener("click",function(){
    document.getElementsByClassName("chat_rtan")[0].classList.remove("chat_rtan_hide");
    document.getElementsByClassName("chat_rtan")[0].classList.add("chat_rtan_active");
    document.getElementsByClassName("widget_window")[0].classList.remove("widget_active");
    console.log("close");
});

