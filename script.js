// Write a JavaScript function that checks if a string is a palindrome (reads the same backward as forward).
 function checkPlaindrome(string){

   let str =  string.replaceAll(" ",'');
   str = str.toLowerCase();
    let reverse = str.split('').reverse().join('');

    if (str == reverse) {
        return "plaindrome"
    }
    return " not a plaindrome"
    
 }

 console.log(checkPlaindrome("ama ama ama"));
 


// Write a JavaScript function that removes duplicates from an array.
// input  ⁠= [1,  2,  'hello',  'world',  { name: 'Alice', age: 30 },  { name: 'Alice', age: 30 },   [1, 2, 3],  [1, 2, 3],  'hello',  3,  [4, 5, { nested: 'object' }],  [4, 5, { nested: 'object' }],  { nested: [1, 2, 3] },  { nested: [1, 2, 3] }]
let rawArray =  [1,  2,  'hello',  'world',  { name: 'Alice', age: 30 },  { name: 'Alice', age: 30 },   [1, 2, 3],  [1, 2, 3],  'hello',  3,  [4, 5, { nested: 'object' }],  [4, 5, { nested: 'object' }],  { nested: [1, 2, 3] },  { nested: [1, 2, 3] }]

function   removeDuplicates(array){

let setting = array.map(element => {
    let eachelem = JSON.stringify(element)
   return eachelem 
});
let filterArray2 =[...new Set(setting)]

 let result =  filterArray2.map(elem=>{
    let eachelem = JSON.parse(elem)
    return eachelem
})


return result
}
console.log(removeDuplicates(rawArray));


// Write a JavaScript class Animal with a method speak(). Then, create a subclass Dog that overrides the speak() method.
class Animal{
  species = 'animal'
name = ''
    speak(animal, sound){
        this.name = animal;
        return `${animal} is ${this.species} says ${sound}`
    }
}

class Dog extends Animal{

   name = "Dog";
   sound = 'bhow bhow'
    
    speak(animal , sound){
         animal = this.name;
         sound = this.sound;
       return `${animal} says ${sound}`
    }
   
}
let animal = new Animal();
let dog = new Dog();

console.log(dog.speak());
console.log(animal.speak('cat', 'meow'));


// ⁠Write JavaScript code to create a new HTML element, add it to the DOM, and attach an event listener to it.
let newElement= document.createElement('button');
newElement.innerHTML = "button Added by Dom";
newElement.style.width = '100px'
newElement.style.height = '100px'
document.body.append(newElement);

newElement.addEventListener('click',()=>{
    alert("dom element i.e. button is clicked ")
    console.log("dom element i.e. button is clicked ")
})

// Create a React component using Context API to share state across multiple nested components without passing props manually.
// Map integration. Add custom marker,
// make a circle or rectangle with custom layer (1 2 3.. circle / rectangles) input by user.
// Center point is drag and drop able. and other markers should move also (Optional but Plus point if you do this)
