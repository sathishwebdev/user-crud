import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useData } from './App'
import * as mui from '@mui/material'
import * as Icons from '@mui/icons-material'
import { Img } from './userList'

function EditProfile() {
    let {profileId} = useParams()
    let navigate = useNavigate()
    let {data, setData} = useData()
    let [selectId, setSelectId] = useState(null)
    let [avatar, setAvatar] = useState([
        {
            isSelected: false
        },
        {
            isSelected: false
        },
        {
            isSelected: false
        },
        {
            isSelected: false
        },
        {
            isSelected: false
        }
    ])
    
    let avatarTemp= [
        {
            isSelected: false
        },
        {
            isSelected: false
        },
        {
            isSelected: false
        },
        {
            isSelected: false
        },
        {
            isSelected: false
        }
    ]
    let [user] = data.filter(user=> user.id === profileId)
    
    const select = id =>{
        avatarTemp[id].isSelected = avatar[id].isSelected? false: true
        setAvatar([...avatarTemp])  
        setSelectId(id+1)
    }

    

    const submitPic = (id) =>{
        let finalData ={...user, profile : id}
        data = data.filter(user=> user.id !== profileId)
        setData([...data, finalData])
        navigate(`/profile/${profileId}`)
    }

    return (
        <div className="App-header"
            style={{
                justifyContent:"center",
                alignItems:"center",
            }}
        >
            <h1>{user.name}</h1>
            <b>Select Your Profile Picture</b>

            <div className="profile-collection-container" >
                
                {avatar.map(({isSelected}, id)=>(
                    <mui.Badge
                        badgeContent={isSelected? <Icons.CheckCircle color="primary" /> : 0}
                        overlap="circular"
                        sx={{
                            margin:"2%"
                        }}
                        onClick={()=>{
                            select(id)
                        }}
                    >
                        <Img
                            id={id+1}
                            gender={user.gender}
                            sx={{
                                width:"200px",
                                height:"200px"
                                }}
                            className={isSelected? "selected":"avatar"}
                        />
                    </mui.Badge>
                ))}
            </div>

            <mui.Button
                variant="contained"
                onClick={()=>{
                    !selectId? alert('select something') : submitPic(selectId)
                }}
            >
                Select
            </mui.Button>
            
        </div>
    )
}

export default EditProfile
