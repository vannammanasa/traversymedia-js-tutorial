Challenge-1:-

Take the `people` array and create an array called `youngPeople` that stores objects with ONLY `name` and `email` properties of all the people that are 25 and under. The `name` property should have their first and last name.


Sol:- 
  S-I:-    const people = [   

        {
          firstName:"Manasa",
          lastName:"Vannam",
          email:"vannammanasa@gmail.com",
          mobile:"9599595559",
          age:25

        },
        {
          firstName:"Manasa",
          lastName:"Vannam",
          email:"vannammanasa@gmail.com",
          mobile:"9599595559",
          age:25

        },{
          firstName:"Geethika",
          lastName:"Vannam",
          email:"geethavannam@gmail.com",
          mobile:"9599595559",
          age:28

        },{
          firstName:"Sushmitha",
          lastName:"Vannam",
          email:"sushmitharoyal@gmail.com",
          mobile:"9599595559",
          age:24

        },{
          firstName:"Sai",
          lastName:"Vannam",
          email:"saivannam@gmail.com",
          mobile:"9599595559",
          age:19

        }
      ]  //array creation

    S-II:-
     const youngPeople =people.filter((person) =>
      person.age <=25) 
      .map((person) =>({
        name:person.firstName + ' ' + person.lastName,
        email:person.email

    }))
     

     console.log(youngPeople);


Challenge-2:-

Add all of the positive numbers in the array.

const numbers = [2, -30, 50, 20, -12, -9, 7];

console.log(numbers.filter((num)=>num>0)); //[2,50,20,7]


Challenge-3:-

Create a new array called `capitalizedWords` with the words from the `words` array with the first letter of each word capitalized.

Sol:-
 const words = ['coder', 'programmer', 'developer'];

  const capitalizeWords = words.map((word)=>word[0].toUpperCase()+word.slice(1,word.length));

  console.log(capitalizeWords); //['Coder','Programmer','Developer']
