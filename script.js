let tableBody = document.getElementById("tableBody");

window.addEventListener("load",function(){
    displayEmoji(emojiList);
});
function displayEmoji(emoji){
   emoji.forEach(function(emoji){
    let  new_row = document.createElement("tr");
    let new_colum = document.createElement("td");
     
    new_colum.innerText=emoji.emoji;
    
    
    new_row.appendChild("new_colum");
    tableBody.appendChild("new_row");
   });
}
