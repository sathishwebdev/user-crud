import React from 'react';
import * as mui from '@mui/material';
import { Formik } from 'formik';
import { useData } from './App';




export const Button = mui.styled(mui.Button)(({ theme }) => ({
  color: theme.palette.getContrastText(mui.colors.purple[500]),
  backgroundColor: "#000000",
  margin: "3%",

  '&:hover': {
    backgroundColor: "#a5a5a5",
    color: "black",
    boxShadow: "0px 0px 15px 1px"
  },
}));
export const TextField = mui.styled(mui.TextField)({
  '& label.Mui-focused': {
    color: "black"
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
});






export const CreateUser = () => {

  
  const getData = useData()
console.log(getData)
  const {data, setData} = getData? {data: null, setData: ()=> null} : getData

 

  return <div id="create-user">
    { !data? <h2>Loading...</h2> : <div>
      <h1>Create User</h1>
      <Formik
        initialValues={{
          id: `010${data.length}`,
          username: "",
          name: "",
          email: "",
          description: ""
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setData([...data, values]);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, handleBlur, handleChange, handleSubmit }) => (
          <div className="App-header"
            style={{
              minHeight: "50vh",
              margin: "1%"
            }}>
            <TextField
              label="Name"
              placeholder='Enter Full Name'
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              margin='normal'
              required />
            <TextField
              label="username"
              placeholder='Username'
              name="username"
              id="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              margin='normal'
              required />
            <TextField
              type="email"
              label="email"
              placeholder=' enter Your email'
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              margin='normal'
              required />
            <TextField
              type="text"
              label="description"
              placeholder='Bio '
              name="description"
              id="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              InputProps={{ maxLength: 100 }}
              margin='normal' />
            <Button
              type="submit"
              onClick={handleSubmit}
            >
              Create
            </Button>
          </div>)}
      </Formik>
    </div>}
  </div>;
};

