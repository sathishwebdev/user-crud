import React from 'react';
import './App.css';
import * as Icons from '@mui/icons-material'
import * as mui from '@mui/material'
import { useData } from './App';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './CreateUser';

function UserList() {
  
  const getData = useData()

  let navigate = useNavigate()
 
  const {data, setData} = !getData? {data: null} : getData
 
  const Delete = id => {
    setData(data.filter(user=> user.id !== id ))
 }

  return (
    <div className="App">
      {!data ? <h1>Loading...</h1> :<div>
        <h1>Users
          <Button
          sx={{margin:"2%"}}
          variant="contained"
          onClick={()=>{navigate("/create-user")}}
          >
           <Icons.PersonAdd/> Create User
          </Button>
          </h1>
        <div className="App-header" >
          
       { data.length === 0 ? <h2>No user Found</h2>  :  <table>
              <thead>
                <tr  style={{textAlign:"center"}}>
                  <th style={{width: "fit-content", backgroundColor:"#ffeecc"}}>SI.No.</th>
                  <th colSpan="2">User name</th>
                </tr>
              </thead>
           <tbody> 
             { data.map((user, id)=>(
                <tr key={id} >
                    <td  style={{ backgroundColor:"#ffeecc", borderRight:"2px black solid"}}>{id+1}</td>
                    <td className="user-cell" >
                      <Link to={`/profile/${user.id}`} style={{
                        display:"flex",
                        alignItems:"center",
                        width: "100%",
                        padding:"2px",
                        textDecoration:"none"
                        }} >
                        <mui.Avatar alt="profile" title={user.name} {...stringAvatar(user.name)} /> 
                        <p> {user.name}</p>
                        </Link>
                    </td>
                    <td
                      className="edit-btns"
                    > 
                      <mui.IconButton>
                        <Icons.Edit color="primary" />
                      </mui.IconButton>
                      <mui.IconButton
                        onClick={()=> Delete(user.id)}>
                        <Icons.Delete color="error" />
                      </mui.IconButton>
                    </td>
                     
                </tr>
              ))}
              </tbody>
          </table>}
        </div>
      </div>}
    </div>
  );
}

export default UserList;

// default profile picture

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 7)) & 0xff;
    color += `${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
}



export function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      marginRight:"2%",
      // border:"2px solid black"
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}