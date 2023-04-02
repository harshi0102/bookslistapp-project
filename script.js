//Variables
const titleInput=document.querySelector("#title");
const authorInput=document.querySelector("#author");
const isbnInput=document.querySelector("#isbn");
const button=document.querySelector(".btn")
const bookList=document.querySelector("#book-list");

button.addEventListener("click",function(){
    if(titleInput.value=="" && authorInput.value=="" && isbnInput.value=="")
{
    alert("Enter any input");
}
else{
    const bookListRow=document.createElement("tr")
    const newTitle=document.createElement("th");
    newTitle.innerHTML=titleInput.value;
    bookListRow.appendChild(newTitle);

    const newAuthor=document.createElement("th");
    bookList.innerHTML=authorInput.value;
    bookListRow.appendChild(newAuthor);

    const newIsbn=document.createElement("th");
    newIsbn.innerHTML=isbnInput.value;
    bookListRow.appendChild(newIsbn);


    bookList.appendChild(bookListRow);

}
});