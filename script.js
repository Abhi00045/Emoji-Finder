import { emojiList } from "./emoji.js";

let body = document.querySelector("body");
let parent = document.getElementById("tableBody");

// Function to render emojis
function render(data) {
    // Clear existing content
    parent.innerHTML = '';
    let items = data ? data : emojiList;
    items.forEach((e) => {
        let new_row = document.createElement("tr");
        let new_emoji = document.createElement("td");
        // let new_description = document.createElement("td");
        
        new_emoji.innerText = e.emoji;
        // new_description.innerText = e.description;
        
        new_row.appendChild(new_emoji);
        parent.style.display="flex";
        parent.style.flexDirection="row";
       parent.style.flexWrap="wrap";
        // new_row.appendChild(new_description);
        
        parent.appendChild(new_row);

        new_emoji.style.fontSize = "30px";
        new_emoji.style.cursor = "pointer";
        
        new_emoji.addEventListener("click", function() {
            navigator.clipboard.writeText(e.emoji);
            alert(`Copied ${e.emoji} to clipboard`);
        });
    });
}

// Initial render
render(emojiList);

// Filter function
const filterOut = (value) => {
    const filterItem = emojiList.filter(item => {
        if(item.description.indexOf(value)!== -1){
            return true;
        }
    });
    render(filterItem);
};

// Event listener for search input
document.getElementById("searchField").addEventListener("keyup", (e) => filterOut(e.target.value));
