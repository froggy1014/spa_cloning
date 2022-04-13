

document.querySelector(".chat_rtan").addEventListener("click", function(){
    document.getElementsByClassName("chat_rtan")[0].classList.add("hidden");
    document.getElementsByClassName("chat_rtan_widget")[0].classList.add("active");
    document.getElementsByClassName("chat_rtan_widget")[0].classList.add("widget_active");
    console.log("open");
});

document.querySelector(".widget_close").addEventListener("click",function(){
    document.getElementsByClassName("chat_rtan")[0].classList.add("active");
    document.getElementsByClassName("chat_rtan_widget")[0].classList.add("hidden");
    document.getElementsByClassName("chat_rtan_widget")[0].classList.remove("widget_active");
    console.log("close");
});

