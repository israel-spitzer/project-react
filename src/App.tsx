import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Trips from './components/Trips'
import Home from './components/Home'
import NoMatch from './components/NoMatch';
import TripDetail from './components/TripDetail';
import NewTrip from './components/NewTrip';
import UpdateTrip from './components/UpdateTrip';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import DeleteTrip from './components/DeleteTrip';
import DeletedSucces from './components/DeletedSucces';
import ErrorDelete from './components/ErrorDelete';
import ErrorUpdate from './components/ErrorUpdate';
import UpdateSucces from './components/UpdateSucces';
import NewTripSucces from './components/NewTripSucces';
import ErrorNewTrip from './components/ErrorNewTrip';
function App() {

  return (
    <>
    <Router >
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Trips' element={<Trips/>} />
      <Route  path="/TripDetail/:id" element={<TripDetail/>}/>
      <Route path='/NewTrip' element={<NewTrip/>} />
      <Route path='/NewTripSucces' element={<NewTripSucces/>}/>
      <Route path='/ErrorNewTrip' element={<ErrorNewTrip/>}/>
      <Route path='/UpdateTrip/:id' element={<UpdateTrip/>}/>
      <Route path='/UpdateSucces' element={<UpdateSucces/>}/>
      <Route path='/ErrorUpdate' element={<ErrorUpdate/>}/>
      <Route path='/DeleteTrip/:id/:name' element={<DeleteTrip/>}/>
      <Route path='/DeletedSucces' element={<DeletedSucces/>}/>
      <Route path='/ErrorDelete' element={<ErrorDelete/>}/>
      <Route path='/UserRegistration' element={<UserRegistration/>}/>
      <Route path='/UserLogin' element={<UserLogin/>}/>
      <Route path='*' element={<NoMatch/>} />
     </Routes>
     </Router>
    </>
  )
}

export default App
