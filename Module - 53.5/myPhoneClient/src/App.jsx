import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Root from './Root'
import Phones from './Phones'
import Phone from './Phone'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Root/> } >
        <Route path='/phones' element={ <Phones/> } loader={()=> fetch('http://localhost:5000/phones')} />
        <Route path='/phone/:id' element={ <Phone/> } loader= {({params})=> fetch(`http://localhost:5000/phones/${params.id}`)} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
