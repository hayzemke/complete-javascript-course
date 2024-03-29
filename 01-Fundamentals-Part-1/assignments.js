const country = 'United States';
const continent = 'North America';
let population = 3;
const isIsland = false;
const language = 'English';

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// basic operators
population++;
console.log(population);
console.log(population/2);
console.log(population > 6);
console.log(population < 33);


let description1 = country + ' is in ' + continent +', and its ' + population + ' million people speak ' + language;
console.log(description1);


description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description1);

if(population > 33){
	console.log(`${country}'s population is above average`);
}
else
{
	console.log(`${country}'s population is ${33 - population} below average`);
}
