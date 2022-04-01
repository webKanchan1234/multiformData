import React from 'react'
import { Container, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const Name = ({formData, setForm, navigation}) => {
    const {firstName, lastName, address} = formData
  return (
    <Container maxWidth="xs">
        <h1>Details</h1>
        <TextField
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={setForm}
            margin="normal"
            autoComplete='off'
            variant='outlined'
            fullWidth
        /> 
        <TextField
            label="LastName"
            name="lastName"
            value={lastName}
            onChange={setForm}
            margin="normal"
            autoComplete='off'
            variant='outlined'
            fullWidth
        /> 
        <TextField
            label="Address"
            name="address"
            value={address}
            onChange={setForm}
            margin="normal"
            autoComplete='off'
            variant='outlined'
            fullWidth
        /> 
        <div style={{marginRight:"1rem"}}>
            <Button variant="contained" fullWidth color="secondary" style={{marginTop:"1rem"}}
            onClick={()=>navigation.previous()}>Back</Button>
            <Button variant="contained" fullWidth color="primary" style={{marginTop:"1rem"}}
         onClick={()=>navigation.next()}>Next</Button>
        </div>
    </Container>
  )
}

export default Name