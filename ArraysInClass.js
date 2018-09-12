//arrays
const movies = ["Lilo and Stich", "Hawaii 5-0", "Jurassic Park"];

//store different types of elements
const elements = ["Hello", 7, {message: "Hi mom"}, true];

console.log(movies.length);
console.log(movies[i]);

//iteratign over an array
for ( var i=0; i< movies.length; i++){
    console.log (movies[i]);}
    
//using the for-of method
let ofMovie;
for (ofMovie of movies){
    console.log(ofMovie);
}

//for each
movies.forEach(myElement =>{
console.log(`for Loop ${myElement}`)
});

//adding to an array
movies.push("Magnum PI");
console.log(movies[movies.length -1]);

//add to beginning of an array use unshift
movies.unshift("50 First Dates");
console.log(movies[0]);
console.log(movies);

//remove the last elememnt from an array
movies.pop();

//put it into a new variable
let theEndElement = movies.pop();

//splice(index to start, number of elements to remove)
movies.splice(1,2);

const musketeers = ["Athos", "Porthos", "Aramis"];

for (i=0; i< musketeers.length; i++){
    console.log(musketeers[i]);}

musketeers.push("D Artagnan")
console.log (musketeers[musketeers.length -1]);

musketeers.forEach(myElement => {
    console.log(`For Loop ${myElement} ` )});

musketeers.splice(2,1);
//console.log (musketeers);

let ofMusketeers;
for(ofMusketeers of musketeers);{
    console.log(ofMusketeers);
}




