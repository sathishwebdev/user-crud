import React from 'react'
import { Link } from 'react-router-dom'
import { useData } from './App'
import UserList from './userList'

function Dashboard() {
    let {data} = useData()
    return (
        <div className="App">
            <h1>Dashboard</h1>
            
            <div className="profile" style={{minHeight:"100vh"}}>
                <div className="loader">
               
                </div> 
                <div className="loader"
                style={{
                    WebkitAnimation: "spin 1.2s linear infinite",
                    animation: "spin .2s linear infinite"                }}
                >
                </div>
                <div className="loader"
                style={{
                    WebkitAnimation: "spin 1.4s linear infinite",
                    animation: "spin .4s linear infinite"                }}
                >
                </div>
                <div className="loader"
                style={{
                    WebkitAnimation: "spin 1.6s linear infinite",
                    animation: "spin .6s linear infinite"                }}
                >
                </div>
                <div className="loader"
                style={{
                    WebkitAnimation: "spin 1.8s linear infinite",
                    animation: "spin .8s linear infinite"                }}
                >
                </div>
                <div className="loader"
                style={{
                    WebkitAnimation: "spin 2s linear infinite",
                    animation: "spin 2s linear infinite"                }}
                >
                </div>
                <div
                    style={{
                        position:"relative",
                        bottom:"50%"
                    }}
                >
                    <h1><Link to="/users" style={{textDecoration:"none"}} > Users </Link>- {data.length} </h1> 
                </div> 
                

            </div>
            <UserList/>  
        </div>
    )
}

export default Dashboard
