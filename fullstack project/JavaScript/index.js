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
  var className = data.name.replace(" ", "");
  return `
    <section class="${className}">
    <div class="listWrapper" id="${className}"  onclick="addDesc('${className}')">
    <div class="listinfo">
     <span>${data.name}</span>
     <span>${data.number}</span>
    </div>
     <div class="imgcont">
        <div class="cont" onclick='deleteContact("${className}")'><img src="../imges/trash.png" alt="trash"></div>
        <div class="cont"><img src="../imges/edit.png" alt="edit"></div>
    </div>
    </div>
    </section>
    `;

}

//get data from local storage to inject it into html
for (let i = 0; i < localStorage.length;i++){
  const saved = localStorage.getItem(localStorage.key(i));
  contactList.innerHTML += template(JSON.parse(saved));
}

function deletecontact(ke){
  document.getElementsByClassName(ke)[0].innerHTML = '';
  localStorage.removeItem(ke);
}




//event listener too the send button to get the data the user entered and put it in the localstorae
submit.addEventListener('click',addContact,false);

let contactArray = Array();


function addContact(e){
  if(keysInStorage(Name.value)) return;
    const data ={
        name : Name.value,
        number : Number.value,
        address : Address.value,
        email : Email.value,
        desc : Desc.value
    }
    contactArray.push(data);
    
    e.preventDefault();
    if(data.name == "" || data.number == "") return;
    
    //var htmlString = template(data);
    var keyName = data.name.replace(" ","");
    localStorage.setItem(keyName,JSON.stringify(data));
    contactList.innerHTML +=template(data);


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




//!!!!!!!!!!!!!!!!!       descreption section             !!!!!!!!!!!!!

const myModal2 = document.getElementById("myModal2");
const close2 = document.getElementById("close2");

if(document.querySelectorAll(".listWrapper")){
  console.log(document.querySelectorAll(".listWrapper"));
//document.querySelectorAll(".listWrapper")[0].style.display = "block";
}


close2.onclick = function(){
  myModal2.style.display = "none";
}


//const descContainer = document.getElementsByClassName("descContainer")[0];

function addDesc(name){

    // for(let i=0; i < listWrapper.length;i++){
    //   listWrapper[i].style.display = "block";
    //  }

  var details = localStorage.getItem(localStorage.key(name));
  details = JSON.parse(details);

  
  descContainer.innerHTML = desctamplate(details);
  console.log(descContainer);

}


function desctamplate(details){
  return `
    <section>
    <div class="listWrapper">
    <div class="listinfo">
     <span>${details.name}</span>
     <span>${details.number}</span>
    </div>
    </div>
    </section>
    `;
}





//!!!!!!!!!!!!!!!!!    Add contact modal overlay     !!!!!!!!!!!!!!!!!!

const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.querySelector(".item1");

// Get the <span> element that closes the modal
const close = document.querySelector(".close");


// When the user clicks on the button, open the modal
add.onclick = function() {
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}


btn.onclick = function() {
  modal.style.display = "none";
  //location.reload();
}




