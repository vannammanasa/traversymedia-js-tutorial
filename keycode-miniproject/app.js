//Method-1:-
/*const insert = document.getElementById('insert');



window.addEventListener('keydown', (e) => {
  //window.addEventListener('keypress', (e) => {
   // window.addEventListener('keyup', (e) => {

//exception for space case
  insert.innerHTML = `
    <div class="key">
    
      ${e.key === ' ' ? 'Space': e.key} 
      <small>e.Key</small>
    </div>

  <div class="key">${e.keyCode}
    <small>e.KeyCode</small>  
  </div>

    <div class="key">${e.code}
<small>e.code</small>    
</div>
`;
});

*/

//Method-2:-

const showKeyCodes =(e)=>{
  const insert = document.getElementById('insert');
  insert.innerHTML = '';

  const keyCodes ={
    'e.key':e.key === ' '? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code':e.code

  }
  //console.log(keyCodes);

  for(let key in keyCodes){
    const div = document.createElement('div');
    div.className = 'key';

    const small = document.createElement('small');
    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);


    console.log(small.children)
  }
  }




window.addEventListener('keydown',showKeyCodes);