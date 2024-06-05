

// function searchEmoji(e){
//     let display = e.target.value;
//   //   console.log(display);
//   displayEmoji(display);
//   }

function displayEmoji(){
    //  let filteredResult = emojiList.filter(e=>{
    //     if(e.description.indexOf(searchQuery)!=-1){
    //         return true;
    //     }
    //     if(e.aliases.some(elm=>elm.startsWith(searchQuery))){
    //         return true;
    //     }
    //     if(e.tags.some(elm=>elm.startsWith(searchQuery))){
    //         return true;
    //     }
    //  });
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
let search=document.getElementById("searchField");
// search.addEventListener("keydown",searchEmoji);
window.addEventListener("load",displayEmoji);
