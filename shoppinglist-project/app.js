
const itemForm = document.getElementById('form-items');
const inputItem = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

//Adding new items to the list

function addItem(e){
  e.preventDefault();
  const newItem = inputItem.value;

  //validating input
  if(newItem === ''){
    alert('Please add an item!');
    return;
  }
  //creating new list item

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button =createButton('remove-item btn-link text-red');

  li.appendChild(button);
  itemList.appendChild(li);
  inputItem.value = '';
  //console.log(li)
}

const createButton = (classes)=>{
  const button = document.createElement('button');
  button.className=classes;
  
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

const createIcon = (classes)=>{
  const icon = document.createElement('i');
  icon.className=classes;
  return icon;
}
itemForm.addEventListener('submit',addItem);