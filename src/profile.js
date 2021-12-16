import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useData } from './App'
import * as Icons from '@mui/icons-material'
import * as mui from '@mui/material'
import { stringAvatar } from './userList'

function Profile() {
    const {userId} = useParams()
    let {data, setData} = useData()
    let user = data.filter(user=> user.id === userId)
    console.log(user);
    let {sx, children} = stringAvatar(user[0].name)
    let navigate = useNavigate()
    const Delete = id => {
        setData(data.filter(user=> user.id !== id ))
        navigate('/')
     }
    
    return (
        <div className="profile">
            {user.length === 0 ? 
            <h4>No Profile Found</h4> 
            : 
            <div>
                <div
                className="profile-card"
                >
                    <mui.Avatar   alt="profile" title={user.name} children={children} sx={{ ...sx, width: 200, height: 200, fontSize: 100 }} />
                    <h1>{user[0].name}</h1>
                    <p>
                        <mui.Button
                        variant="outlined"
                        color="inherit"
                        // sx={{color:"black"}}
                        >
                          <Icons.Edit/>  Edit
                        </mui.Button> 

                        <mui.Button
                        variant="contained"
                        color="error"
                        sx={{margin: 1}}
                        onClick={() => {
                            Delete(userId);
                        }}
                        >
                          <Icons.Delete/> {' '} Delete
                        </mui.Button> 

                    </p>
                </div> 

                <div className="profile-details">
                    <p>{user[0].username}</p>
                    <p>{user[0].email}</p>
                    <p>{user[0].description}</p>
                </div>
                
            </div> }
        </div>
    )
}

export default Profile
