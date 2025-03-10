import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import './App.css'
import Root from './components/Root';
import Users from './components/Users';
import UsersShow from './components/UsersShow';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Root/> }>
        <Route index element={ <Users/> } />
        <Route path='/users' element={ <UsersShow/> } loader= {()=> fetch('http://localhost:5000/users')} />
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
