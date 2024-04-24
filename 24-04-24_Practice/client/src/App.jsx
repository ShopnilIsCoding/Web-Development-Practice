import './App.css'

function App() {
  const handleAddUser=e=>
  {
    e.preventDefault();
    const form =e.target;
    const name=form.name.value;
    const email=form.email.value;
    const user={name,email}
    console.log(user);

    fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
})
.then(res => res.json())
.then(data => console.log(data))
  }

  return (
    <>
      
      <h1>Client site</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      
    </>
  )
}

export default App
