 const players=[12,43,21,65,332];
//  const result=players.map(callback)
//  const result=players.forEach(return_Nothing_But_Map)
//  const result=players.filter(condition)
//  const result=players.find(specificCondition)
const sum=players.reduce((sum,number)=>sum+number,0);
console.log(sum);