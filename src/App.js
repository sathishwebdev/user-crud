import React, { createContext, useContext, useState } from 'react'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import { CreateUser } from './CreateUser'
import UserList from './userList'
import userData from './user.json'
import Profile from './profile'
import EditUser from './editUser'
import EditProfile from './editProfile'
import Dashboard from './dashboard'

export let context = createContext(null)

function App() {
    const [value, setValue] = useState(userData)
    
    let values = {data: value, setData: setValue}
    let {Provider} = context
    return <Provider value={values}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route exact path="/users" element={<UserList />} />
                    <Route exact path="/create-user" element={<CreateUser />} />
                    <Route exact path="/profile/:userId" element={<Profile />} />
                    <Route exact path="/edit-user/:editId" element={<EditUser />} />
                    <Route exact path="/edit-profile/:profileId" element={<EditProfile />} />
                </Routes>
            </Router>
        </Provider>
}

export const useData = () => useContext(context)

export default App
