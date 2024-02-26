 const OrizinalArray=[12,43,21,65,332];
//  const result=players.map(callback)
//  const result=players.forEach(return_Nothing_But_Map)
//  const result=players.filter(condition)
//  const result=players.find(specificCondition)
const sum=OrizinalArray.reduce((sum,number)=>sum+number,0);

console.log(sum);



//map in normal
function Mymap(callback)
{
    let emptyArray=[];
    for (const element of OrizinalArray) {
        const result=callback(element);
        emptyArray.push(result);
    }
    return emptyArray; //not empty on this stage
}
const callback=elem=>elem*3;
// console.log(map(elem=>elem*3)); //same
console.log(Mymap(callback)); //same

//map using array.map

const map= OrizinalArray.map(elem=>elem*3);
console.log(map); //same