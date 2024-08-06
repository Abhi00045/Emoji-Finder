
// import emojiList from "./emoji.js";

function displayEmoji(){

    emojiList.forEach((e)=>{
        let parent = document.getElementById("tableBody");

        let new_row=document.createElement("tr");
        let new_emoji=document.createElement("td");
        //let new_description=document.createElement("td");

        new_emoji.innerText=e.emoji;
        // new_description.innerText=e.description;

        new_row.appendChild(new_emoji);
        // new_row.appendChild(new_description);

        parent.appendChild(new_row);
        new_row.style.display="flex"
        new_row.style.flexDirection="row"
        parent.style.display="flex";
        parent.style.flexDirection="row";
        parent.style.flexWrap="wrap";
        new_row.style.gap="20px";
        new_emoji.style.fontSize="30px"

    });
};

let searchField = document.getElementById("searchField");

function searchEmoji(){

    let search = document.getElementById("searchField").value;
    if(search==""){
        displayEmoji();
        alert("Please Enter Something");
    }
}

search.addEventListener("keydown",searchEmoji);
window.addEventListener("load",displayEmoji);
