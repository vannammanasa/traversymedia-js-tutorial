const xhr = new XMLHttpRequest();


//Example for fetching movies data

/*xhr.open('GET','./movies.json'); //takes two parameters,1-type of request,2-file where we need to fetch the data

xhr.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){
    const data = JSON.parse(this.responseText); //we need to parse the data 

    console.log(data);

    data.forEach((movie)=>{
      const li = document.createElement('li');
      li.innerHTML = `<strong>${movie.title} - ${movie.year}</strong>`;

      document.querySelector('#results').appendChild(li);
    });
  }


}

xhr.send(); //sending request

*/


//Getting repos from my github repository

xhr.open('GET','https://api.github.com/users/vannammanasa/repos');

xhr.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){
    const data = JSON.parse(this.responseText);
    //const data = this.responseText;
    //console.log(data);
  

  data.forEach((repo)=>{
    const li = document.createElement('li');
    li.innerHTML=(`<strong>${repo.name}</strong> - ${repo.description}`);

    document.querySelector('#results').appendChild(li);
  })
}
};

xhr.send();
