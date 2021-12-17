import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useData } from './App'
import * as Icons from '@mui/icons-material'
import * as mui from '@mui/material'
import { Img, stringAvatar } from './userList'

function Profile() {
    const {userId} = useParams()
    let {data, setData} = useData()
    let [user] = data.filter(user=> user.id === userId)
    let {sx, children} = stringAvatar(user.name)
    let navigate = useNavigate()
    const Delete = id => {
        setData(data.filter(user=> user.id !== id ))
        navigate('/')
     }
    
    return (
        <div className="profile">
            <mui.Button
                variant='contained'
                color='inherit'
                onClick={()=>{
                    navigate('/')
                }}
                sx={{margin:"3%"}}
            >
                Back to Home
            </mui.Button>
            {user.length === 0 ? 
            <h4>No Profile Found</h4> 
            : 
            <div>
                <div
                className="profile-card"
                >
                     
                        <div>
                            <div 
                                style={{
                                    width: "fit-content",
                                    height: "200px",
                                    overflow: 'hidden',
                                    position:"relative",
                                    borderRadius: "50%"
                                }}>
                                 { !user.profile? 
                                    <mui.Avatar
                                        alt="profile" 
                                        title={user.name} 
                                        children={children} 
                                        sx={{ ...sx, width: 200, height: 200, fontSize: 100 }} 
                                    /> 
                                    : 
                                    <Img
                                        name={user.name}
                                        id={user.profile}
                                        gender={user.gender}
                                        sx={{
                                            borderRadius: "50%",
                                            border:"3px groove black",
                                            width:'200px', 
                                            height:"200px"
                                        }}
                                    /> 
                                    }
                                <div
                                    style={{
                                        position:"absolute",
                                        backgroundColor:"rgba(0,0,0, 0.5)",
                                        height:"30px",
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        width:"100%",
                                        bottom:0,
                                        color:"white"
                                    }}
                                >
                                <mui.IconButton
                                    color="inherit"
                                    size="small"
                                    onClick={()=>{navigate(`/edit-profile/${user.id}`)}}
                                >
                                    <Icons.Edit /> Edit
                                </mui.IconButton>
                            </div>
                            </div>
                            
                        </div>
                    
                    
                    <h1>{user.name}</h1>
                    <p>
                        <mui.Button
                            variant="outlined"
                            color="inherit"
                            onClick={()=>{navigate(`/edit-user/${user.id}`)}}
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
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>{user.description}</p>
                </div>
                
            </div> }
        </div>
    )
}

export default Profile
