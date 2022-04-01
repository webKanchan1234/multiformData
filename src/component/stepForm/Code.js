import React from 'react'
import { Container, TextField, Select, MenuItem, Checkbox } from '@material-ui/core'
import Button from '@material-ui/core/Button'


const Code = ({formData, setForm, navigation}) => {
    const {countryCode, mobile} = formData
  return (
    <Container maxWidth="xs">
        <h1>Details</h1>
        <Select
            labelId="id"
            label="id"
            name="countryCode"
            id="demo-simple-select"
            value={countryCode}
            onChange={setForm}
        >
            <MenuItem value={+91}>+91</MenuItem>
            <MenuItem value={+92}>+92</MenuItem>
            <MenuItem value={+93}>+93</MenuItem>
        </Select>
        <TextField
            label="Mobile"
            name="mobile"
            value={mobile}
            onChange={setForm}
            margin="normal"
            autoComplete='off'
            variant='outlined'
            fullWidth
        /> 
        <Checkbox  defaultChecked />
        <div style={{marginRight:"1rem"}}>
            <Button variant="contained" fullWidth color="secondary" style={{marginTop:"1rem"}}
            onClick={()=>navigation.previous()}>Back</Button>
            <Button variant="contained" fullWidth color="primary" style={{marginTop:"1rem"}}
         onClick={()=>navigation.next()}>Next</Button>
        </div>
    </Container>
  )
}

export default Code