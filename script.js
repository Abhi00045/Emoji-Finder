
// import emojiList from "./emoji.js";
let parent = document.getElementById("tableBody");

function displayEmoji(searchedValue=""){
    
    let filteredList = emojiList.filter(
        function(e){
            if(e.category.indexOf(searchedValue)!=-1){
               return true;
            }
            if(e.description.indexOf(searchedValue)!=-1){
                return true;
            }
        }
    );

    console.log(filteredList);

    filteredList.forEach((e)=>{

        let new_row=document.createElement("tr");
        let new_emoji=document.createElement("td");
        let new_description=document.createElement("td");

        new_emoji.innerText=e.emoji;
        new_description.innerText=e.description;

        new_row.appendChild(new_emoji);
        new_row.appendChild(new_description);

        parent.appendChild(new_row);
        // new_row.style.display="flex"
        // new_row.style.flexDirection="row"
        // parent.style.display="flex";
        // parent.style.flexDirection="row";
        // parent.style.flexWrap="wrap";
        // new_row.style.gap="200px";
        // new_emoji.style.fontSize="30px"

    });
};
window.addEventListener("load",displayEmoji(""));
document.getElementById("searchField").addEventListener("keyup",(event)=>{

    let searchedValue = document.getElementById("searchField").value;
    // console.log(searchField);
    displayEmoji(searchedValue);
})

