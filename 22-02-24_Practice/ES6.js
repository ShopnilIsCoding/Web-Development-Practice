// Practice-1

const mul=(a,b,c)=>a*b*c;
console.log(mul(10,20,30));


const string=`I am a web developer.
I love to code.
I love to eat briyani.`
console.log(string);


const add=(a,b=50)=>a+b;
console.log(add(50));


//Practice-2what will be the output?

function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]));
const array=(array)=>{
    let a=[];
    for (const iterator of array) {
        
        if(iterator.length%2===0)
        {
            a.push(iterator);
        }
    }
    return a;
    
}

const arr=(arr)=>arr.filter(element=>element.length%2===0);//same but in one-line using filter()


console.log(array(['rahim','karim','bulu','kulu','tulu']));

console.log(arr(['rahi','kari','bulus','kulus','tulus']));


//Practice-3

const avg=(avg_array)=>{
    let sum=0;
    for (let i of avg_array) {
        i*=i;
        sum+=i;
    }
    return sum/avg_array.length;
}


const avg2 = (avg_array2) => avg_array2.reduce((sum, num) => sum + num * num, 0) / avg_array2.length;
//same but in one-line using reduce()

console.log(avg2([2, 6, 4, 10]));

console.log(avg([2,6,4,10]));


//Practice-4

const merge=(array1,array2)=>{
    const newarray=[...array1,...array2];
    return Math.max(...newarray);
}
// const merge = (array1, array2) => Math.max(...array1, ...array2); //same in one-line

console.log(merge([1,2,3,4,32,23,54],[32,54,21,76,21,43,5]));

const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];

friends.find(friend => friend.length ==5);