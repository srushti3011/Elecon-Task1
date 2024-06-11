import './App.css'
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import EditProfile from './Components/EditProfile';
import Profile from './Components/Profile';
import CreateUser from './Components/CreateUser';
import DeleteUser from './Components/DeleteUser';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Header from './Components/UserList/Header'
// import StatusBadge from './Components/UserList/StatusBadge'
// import UserItem from './Components/UserList/UserItem'
import UserList from './Components/UserList/UserList'


function UserListPage() {
  const users = [
    { name: 'Vanshika Modi', email: 'vmodi6900@gmail.com', phone: '500-268-4826', company: 'Tech Elecon', role: 'Sales Representative', status: 'Banned' },
    { name: 'Srushti Eng.', email: 'srushtie123@gmail.com', phone: '408-439-8033', company: 'Tech Elecon', role: 'Customer Service Associate', status: 'Pending' },
    { name: 'Dhruven Gohil', email: 'goheldhruven998@gmail.com', phone: '531-492-6028', company: 'Tech Elecon', role: 'Content Strategist', status: 'Banned' },
    { name: 'Janki Patel', email: 'pateljanki030@gmail.com', phone: '201-465-1954', company: 'Tech Elecon', role: 'Software Developer', status: 'Active' },
    { name: 'Maitry Panchal', email: 'maitrypanchal2@gmail.com', phone: '285-840-9338', company: 'Tech Elecon', role: 'Creative Director', status: 'Banned' },
    { name: 'Vidhi Pankhaniya', email: 'vidhipankhaniya45@gmail.com', phone: '285-840-9338', company: 'Tech Elecon', role: 'Creative Director', status: 'Banned' }
  ];
  return (
    <>
      <Header />
      <UserList users={users} />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/editprofile' element={<EditProfile />}></Route>
        <Route path='/userprofile' element={<Profile />}></Route>
        <Route path='/createuser' element={<CreateUser />}></Route>
        <Route path='/deleteuser' element={<DeleteUser />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/userlist' element={<UserListPage/>}></Route>
      </Routes>
    </>
  );
}


export default App;
