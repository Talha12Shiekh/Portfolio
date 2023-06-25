//  <---------------------  code for the experience dialog --------------------->
let experience_dialog = document.getElementById("experience_dialog");

let emojis = document.querySelectorAll("#experience_dialog .actions_emoji_container img");
[...emojis].forEach(emoji => {
    emoji.addEventListener("click",(e) => {
        [...emojis].forEach(emoji => emoji.classList.remove("emoji_animate"))
        e.target.classList.add("emoji_animate");
        setTimeout(() => {
            experience_dialog.close()
        }, 1200);
    })
})
if(sessionStorage.getItem("hasseenModal") == "true"){

}else{
    setTimeout(() => {
        experience_dialog.showModal()
    }, 2000);
    sessionStorage.setItem("hasseenModal","true")
}

//  <---------------------  code for the experience dialog ended --------------------->