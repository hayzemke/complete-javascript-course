// BMI = mass / (height*weight)

const markMass = 105;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;


const markBMI = markMass / (markHeight**2);
console.log(markBMI);

const johnBMI = johnMass / (johnHeight**2);
console.log(johnBMI);


if(markBMI >= johnBMI)
{
	console.log(`Mark's BMI, ${markBMI} is higher than John's BMI, ${johnBMI} `)
}
else
{
	console.log(`John's BMI, ${markBMI}  is higher than Mark's, ${johnBMI}.`)
}

