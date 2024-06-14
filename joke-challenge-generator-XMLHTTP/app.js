const jokeBtn = document.getElementById('joke-btn');
const jokeEl = document.getElementById('joke');



const onClickJokeGenerate=()=>{
  

  const xhr = new XMLHttpRequest(); 

  xhr.open('GET','https://api.chucknorris.io/jokes/random');

 // xhr.open('GET','https://v2.jokeapi.dev/joke/Any');

    xhr.onreadystatechange = function(){

      if(this.readyState === 4){

        if (this.status === 200){
        jokeEl.innerHTML = JSON.parse(this.responseText).value; //getting value 

        //console.log(data);


        }else{
          jokeEl.innerHTML = 'Oops..!!! Something went wrong! Not funny';

        
       
      }

}
}
    

    xhr.send();

};





jokeBtn.addEventListener('click',onClickJokeGenerate);

document.addEventListener('DOMContentLoaded',onClickJokeGenerate);