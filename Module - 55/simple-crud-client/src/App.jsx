import './App.css'

function App() {


  const handleSubmit = e => {
    
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user);




  }



  return (
    <>
      <h2>Simple Crud Client</h2>
      <form onSubmit={handleSubmit}>
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
