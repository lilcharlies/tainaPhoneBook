'use strict'


//getting the input boxs
const Name = document.getElementById("name");
const Number = document.getElementById("number");
const Address = document.getElementById("address");
const Email = document.getElementById("email");
const Desc = document.getElementById("desc");
const submit = document.querySelector('.item1');
const contactList = document.querySelector('.items_list');
const search = document.getElementById("search");


function template(data){
  var className = data.name.replace(" ", "");
  return `
    <section class="${className}">
    <div class="listWrapper" id="${className}">
    <div class="listinfo">
     <span>${data.name}</span>
     <span>${data.number}</span>
    </div>
     <div class="imgcont">
        <div class="deleteCont"><img src="../imges/trash.png" alt="trash"></div>
        <div class="editCont"><img src="../imges/edit.png" alt="edit"></div>
    </div>
    </div>
    </section>
    `;

  }

  
  
  function localstoraeKeys(){
    let arr = new Array();
    for(var key in localStorage){
      arr.push(key);
    }
    return arr;
  }
  
  //get data from local storage to inject it into html
  for (let i = 0; i < localStorage.length;i++){
    const saved = localStorage.getItem(localStorage.key(i));
    contactList.innerHTML += template(JSON.parse(saved));
    }

  search.addEventListener('keyup', function (e) {
    let searchValue = e.target.value.toLowerCase();
    searchValue.replace(" ","");
    const span = document.querySelectorAll('.listWrapper');
    
    for (let i = 0; i < span.length; i++) {
      if (!span[i].innerHTML.toLowerCase().includes(searchValue)) {
        span[i].style.display = 'none';
      }
    }
  });




//event listener too the send button to get the data the user entered and put it in the localstorae
submit.addEventListener('click',addContact,false);


function addContact(e){
  if(keysInStorage(Name.value)) return;
    const data ={
        name : Name.value,
        number : Number.value,
        address : Address.value,
        email : Email.value,
        desc : Desc.value
    }

    
    e.preventDefault();
    if(data.name == "" || data.number == "") return;
    

    var keyName = data.name.replace(" ","");
    localStorage.setItem(keyName,JSON.stringify(data));
    contactList.innerHTML +=template(data);


    Name.value = "";
    Number.value = "";
    Address.value = "";
    Email.value = "";
    Desc.value = "";
  }

  //delte all contact function
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

const descBtn = document.querySelectorAll(".listWrapper");

close2.onclick = function(){
  myModal2.style.display = "none";
}


const descContainer = document.getElementsByClassName("descContainer")[0];





if(descBtn != null){
  for(let i=0; i < descBtn.length;i++)
  descBtn[i].addEventListener('click',addDesc);
}
function addDesc(e){
  for (var key in localStorage){
    if(key == e.path[3].className){
      console.log(1);
      myModal2.style.display = "block";
      var details = localStorage.getItem(e.path[3].className);
      details = JSON.parse(details);
      descContainer.innerHTML = desctamplate(details);
    }
  }
}

// function addDesc(name){

//   myModal2.style.display = "block";
//   var details = localStorage.getItem(name);
//   details = JSON.parse(details);
//   descContainer.innerHTML = desctamplate(details);

// }

function desctamplate(details){
  return `
  <h1>${details.name}</h1>
  <div class="detailCont">
  <p>tel:</p>
  <p>${details.number}</p>
  <p>address:</p>
  <p>${details.address}</p>
  <p>email:</p>
  <p>${details.email}</p>
  <p>description:</p>
  <p>${details.desc}</p>
  </div>
    `;
}





//!!!!!!!!!!!!!!!!!!!!       Edit section       !!!!!!!!!!!!!!!!!
const Name2 = document.getElementById("name2");
const Number2 = document.getElementById("number2");
const Address2 = document.getElementById("address2");
const Email2 = document.getElementById("email2");
const Desc2 = document.getElementById("desc2");
const close3 = document.getElementById("close3");
const update = document.getElementById("update");
const editbtn = document.querySelectorAll(".editCont");



if(editbtn != null){
  for(let i=0; i < editbtn.length;i++)
editbtn[i].addEventListener('click',editContact);
}
function editContact(e){
  for (var key in localStorage){
    if(key == e.path[3].id){
      const editModal = document.getElementById("editModal");
  close3.onclick = function() {
    editModal.style.display = "none";
  }
  
  var details = localStorage.getItem(e.path[3].id);
  details = JSON.parse(details);
  Name2.value = details.name;
  Number2.value = details.number;
  Address2.value = details.address;
  Email2.value = details.email;
  Desc2.value = details.desc;
  editModal.style.display = "block";
  update.onclick = function(){
    const data ={
      name : Name2.value,
      number : Number2.value,
      address : Address2.value,
      email : Email2.value,
      desc : Desc2.value
  }
  for (var key in localStorage){
    if(key == e.path[3].id)
    localStorage.removeItem(e.path[3].id);
    var keyName = data.name.replace(" ","");
    localStorage.setItem(keyName,JSON.stringify(data));
  }
  }


    }
  }
}





// function editContact(name){
//   // const editModal = document.getElementById("editModal");
//   // close3.onclick = function() {
//   //   editModal.style.display = "none";
//   // }
  
//   // var details = localStorage.getItem(name);
//   // details = JSON.parse(details);
//   // Name2.value = details.name;
//   // Number2.value = details.number;
//   // Address2.value = details.address;
//   // Email2.value = details.email;
//   // Desc2.value = details.desc;
//   // editModal.style.display = "block";
//   // update.onclick = function(){
//   //   const data ={
//   //     name : Name2.value,
//   //     number : Number2.value,
//   //     address : Address2.value,
//   //     email : Email2.value,
//   //     desc : Desc2.value
//   // }
//   // for (var key in localStorage){
//   //   if(key == name)
//   //   localStorage.removeItem(name);
//   //   var keyName = data.name.replace(" ","");
//   //   localStorage.setItem(keyName,JSON.stringify(data));
//   // }
//   // }


// }


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
}

const delbtn = document.querySelectorAll(".deleteCont");
if(delbtn != null){
  for(let i=0; i < delbtn.length;i++)
delbtn[i].addEventListener('click',delCotact);
}
function delCotact(e){
  for (var key in localStorage){
    if(key == e.path[3].id){
    localStorage.removeItem(key);
    e.path[3].remove();
    }
  }
}

