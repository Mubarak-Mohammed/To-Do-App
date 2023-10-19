let addButton= document.getElementById("add_button");
let lisContainer = document.getElementById("lisContainer");

addButton.addEventListener("click",add_item);

function add_item (){

   //get input value
   let inputValue = document.getElementById("inputText").value;

   if( inputValue == ""){
      alert("No task to add")
   }else{
     // cerate li element

     let li = document.createElement("li");

     // append li in ul and inputvalue in li

     li.appendChild(document.createTextNode(inputValue));
     lisContainer.appendChild(li);

     let span = document.createElement("span");
     span.innerHTML = "\u00d7";
     li.appendChild(span)
     storeData();
     
         document.getElementById("inputText").value = "";
   }
    
}

lisContainer.addEventListener("click",(e)=>{
   if (e.target.tagName ==="LI") {
      e.target.classList.toggle("cheked");
      storeData();
   }else if (e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      storeData();
   };
})


function storeData(){
   localStorage.setItem("data",lisContainer.innerHTML);
}

function showtasks(){
   lisContainer.innerHTML = localStorage.getItem("data");
}

showtasks();