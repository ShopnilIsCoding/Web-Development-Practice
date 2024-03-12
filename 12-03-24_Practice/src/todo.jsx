export default function Person({name='karim',device,price,isrich})
{


  const styles={
    border: '2px solid purple',
    borderRadius:'10px'
  }
  // const {name,device,price}=props;
  return <h3 className='person' style={styles}>I am {name}. i have {device} and its price is {price} also {isrich?"I am rich":"I am poor"}</h3>

}