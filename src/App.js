import React, { createContext, useContext, useState } from 'react'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import { CreateUser } from './CreateUser'
import UserList from './userList'
import userData from './user.json'
import Profile from './profile'
export let context = createContext(null)




function App() {
    const [value, setValue] = useState(userData)
    
    let values = {data: value, setData: setValue}
    let {Provider} = context
    return <Provider value={values}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<UserList />} />
                    <Route exact path="/users" element={<UserList />} />
                    <Route exact path="/create-user" element={<CreateUser />} />
                    <Route exact path="/profile/:userId" element={<Profile />} />
                </Routes>
            </Router>
        </Provider>
}

export const useData = () => useContext(context)

export default App
