'use strict'



//getting the input boxs
const Name = document.getElementById("name");
const Number = document.getElementById("number");
const Address = document.getElementById("address");
const Email = document.getElementById("email");
const Desc = document.getElementById("desc");
const submit = document.querySelector('.item1');
const contactList = document.querySelector('.items_list');





function template(data){
    contactList.insertAdjacentHTML("afterbegin",`
    <div class="listWrapper" id="${data.name.value}" onClick="charlie(this.id)">
    <div class="listinfo">
     <span>${data.name.value}</span>
     <span>${data.number.value}</span>
    </div>
     <div class="imgcont">
        <div class="cont"><img src="../imges/trash.png" alt="trash"></div>
        <div class="cont"><img src="../imges/edit.png" alt="edit"></div>
    </div>
    </div>
    `)
}

//event listener too the send button to get the data the user entered and put it in the localstorae
submit.addEventListener('click',addContact,false);


function addContact(e){
  if(keysInStorage(Name.value))
    return;
    const data ={
        name : Name,
        number : Number,
        address : Address,
        email : Email,
        desc : Desc
    }
    
    e.preventDefault();
    if(data.name.value == "" || data.number.value == "") return;
    
    template(data);
    
    localStorage.setItem(Name.value ,contactList.innerHTML);
    Name.value = "";
    Number.value = "";
    Address.value = "";
    Email.value = "";
    Desc.value = "";
    
  }    
  
  //delte all ocntact function
  function delAllContact(e){
    contactList.remove();
    e.stopImmediatePropagation();
    savebtn.addEventListener('click',saveChanges);
  }    
  
  //delte all contacts from phone book
  const delAll = document.getElementById("delAll");
  delAll.addEventListener('click',delAllContact,false);
  

  //delte all datta from localstorage
function saveChanges(){
    localStorage.clear();
    location.reload();
}


function keysInStorage(value){
  for (var key in localStorage){
    if(key == value)
    return true;
  }
  return false;
}






const DescContainer = document.querySelector(".descContainer");

// function addDesc(e){
//     const data ={
//         name : Name,
//         number : Number,
//         address : Address,
//         email : Email,
//         desc : Desc
//     }    
//     console.log(data);
  
//     e.preventDefault();
    
//     tampletDesc(data);

// }    





// if(document.querySelector(".descContainer")){
// btn2.addEventListener('click',addDesc);  
// }






//get data from local storage to inject it into html
for (var key in localStorage){
  const saved = localStorage.getItem(localStorage.key(key));
      contactList.innerHTML = saved;
}










//search localstorage function
const srcbtn = document.querySelector('.srcimg');
srcbtn.addEventListener('click',search);

function search(e){
  e.preventDefault();
  const value = document.querySelector('.srcbar').value;
  var search = localStorage.getItem('contactListing');
  console.log(search);

}





















//modal buttons selectors




const modal = document.getElementById("myModal");
const myModal2 = document.getElementById("myModal2");


// Get the button that opens the modal
const btn = document.querySelector(".item1");




// Get the <span> element that closes the modal
const span = document.querySelector("span");
const span2 = document.getElementById("close2");
const listWrapper = document.querySelectorAll(".listWrapper");




// When the user clicks on the button, open the modal
add.onclick = function() {
  modal.style.display = "block";
}


if(document.querySelector(".listWrapper")){
  for(let i=0; i < listWrapper.length;i++){
    listWrapper[i].onclick = function(){
    myModal2.style.display = "block";
   }
 }
}

//     function charlie(id){
//       for(let i=0; i < listWrapper.length;i++){
//         listWrapper[i] =  myModal2.style.display = "block";
//    }
//  }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function(){
  myModal2.style.display = "none";
}

btn.onclick = function() {
  modal.style.display = "none";
  location.reload();
}



