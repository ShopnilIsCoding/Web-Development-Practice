export default function Person({person})
{
    const span={
        color:'yellow'
    }
    return (
        <>
        <p>name : {person.name}</p>
        <p>phone : <span style={span}>{person.phone}</span></p>
        </>
        )
}