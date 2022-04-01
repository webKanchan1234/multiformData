import React from 'react'
import { Container, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const Email = ({formData, setForm, navigation}) => {
    const {email, password} = formData
  return (
    <Container maxWidth="xs">
        <h1>Email</h1>
        <TextField
            label="Email"
            name="email"
            value={email}
            onChange={setForm}
            margin="normal"
            autoComplete='off'
            variant='outlined'
            fullWidth
        /> 
        <TextField
            label="Password"
            name="password"
            value={password}
            onChange={setForm}
            margin="normal"
            autoComplete='off'
            variant='outlined'
            fullWidth
        /> 
        <Button variant="contained" fullWidth color="primary" style={{marginTop:"1rem"}}
         onClick={()=>navigation.next()}>Next</Button>
    </Container>
  )
}

export default Email