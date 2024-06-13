
const itemForm = document.getElementById('form-items');
const inputItem = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;



function displayItems(){
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item)=>onAddItemToDoM(item));

  checkUI();
}
//Adding new items to the list

function onAddItemSubmit(e) {
  e.preventDefault();
  const newItem = inputItem.value;

  //validating input
  if (newItem === '') {
    alert('Please add an item!');
    return;
  }
  //check for edit mode
  if(isEditMode){
    const itemToEdit = itemList.querySelector('.edit-mode');
      removeItemFromStorage(itemToEdit.textContent);
      itemToEdit.classList.remove('edit-mode');
      itemToEdit.remove();

      isEditMode = false;

  }

  else{
    if(checkIfItemExists(newItem)){
      alert('Item already exists!');
      return;

    }
  }
  onAddItemToDoM(newItem); //creating an item DOM element
  addItemToStorage(newItem);



  checkUI();


  inputItem.value = '';
  //console.log(li)

}

function onAddItemToDoM(item){
    //creating new list item

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');
  //button.innerHTML='<i class="fa-solid fa-pen-to-square"></i>';
  button.innerHTML = '<i class="fa-solid fa-trash"></i>';
  li.appendChild(button); 
  itemList.appendChild(li);  //appending li to the DOM

  checkUI();
} 

function addItemToStorage(item){
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.push(item);

  localStorage.setItem('items',JSON.stringify(itemsFromStorage));

}



const createButton = (classes) => {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

const createIcon = (classes) => {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}


function getItemsFromStorage(){
  let itemsFromStorage; //creating a variable

  if(localStorage.getItem('items') === null){
    itemsFromStorage=[]; //setting it to empty
  }
  else{
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }
  return itemsFromStorage;
  //itemsFromStorage.push(item); //Add items to array

  //Converting to JSON string and setting it to local storage
  //localStorage.setItem('items',JSON.stringify(itemsFromStorage));

}


//Removing Items from local storage:-
function onClickItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
      removeItem(e.target.parentElement.parentElement);

      //checkUI();
    }
    else{
      setItemToEdit(e.target);
    }
  }


  //preventing duplicate items & need to use this in the submit one
  function checkIfItemExists(item){
    const itemsFromStorage = getItemsFromStorage();
    return itemsFromStorage.includes(item);

  }


  function setItemToEdit(item){

    isEditMode = true;

    itemList.querySelectorAll('li').forEach((i)=>i.classList.remove('edit-mode'));

      //item.style.color = '#ccc'; //setting selected one to different color
    item.classList.add('edit-mode');
    formBtn.innerHTML='<i class="fa-solid fa-pen"></i> Update Item';
    formBtn.style.backgroundColor = '#228b22';
    inputItem.value=item.textContent;

  }

function removeItem(item){

  if(confirm('Are you sure?')){
    item.remove();

    removeItemFromStorage(item.textContent);

    checkUI();

  }
}
function removeItemFromStorage(item){
  let itemsFromStorage = getItemsFromStorage();

  //filtering out items to be removed
  itemsFromStorage = itemsFromStorage.filter((i)=>i!== item);

  //resetting to local storage

  localStorage.setItem('items',JSON.stringify(itemsFromStorage));


}


function clearItems() {
  //itemList.innerHTML='';
  while (itemList.firstChild) {
    //confirm('Removing an item!')
    itemList.removeChild(itemList.firstChild);
  }

  localStorage.removeItem('items');
  checkUI();

} //reversing the dom to get the particular list item







//Filtering Items:-
function filterItems(e){
  const items = itemList.querySelectorAll('li');
  const filterText = e.target.value.toLowerCase();//we need ti get the typed item text


  //Matching the typed one with the itemlist 
  items.forEach((item) =>{
    const itemName = item.firstChild.textContent.toLowerCase();
    

    if(itemName.includes(filterText)){
      item.style.display = 'flex';
    }
    else{
      item.style.display = 'none'; //displaying none if it does not match with the filtered item
    }
    console.log(itemName);

  })

}


//clearing the UI State:-

function checkUI() {

  inputItem.value =  '';
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  }
  else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }

  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i>Add Item';
  formBtn.style.backgroundColor = '#333';

  isEditMode = false;
}


function init(){
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', onClickItem);
  clearBtn.addEventListener('click', clearItems);
  itemFilter.addEventListener('input',filterItems);
  document.addEventListener('DOMContentLoaded',displayItems);

checkUI();

}

init();
