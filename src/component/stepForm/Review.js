import React from 'react'
import Container from '@material-ui/core/Container'
import { Accordion } from '@material-ui/core'
import { AccordionDetails } from '@material-ui/core'
import { AccordionSummary } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import { ExpandMore } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import axios from "axios"

export const Review = ({formData, navigation}) => {
    const {go} = navigation

    
    const {
        email,
        password,
        firstName,
        lastName,
        address,
        countryCode,
        mobile
    } = formData

    const submitHandle = async() =>{
        try {
            await axios.post(
                "https://codebuddy.review/submit",{
                    email:email,
                    password:password,
                    firstName:firstName,
                    lastName:lastName,
                    address:address,
                    countryCode:countryCode,
                    mobile:mobile
                  })
                  .then((response) => {
                    console.log(response);
                  });
        } catch (error) {
            console.log(error)
        }
        
        go('posts')
    }

  return (
    <Container maxWidth="sm">
        <h2>Review</h2>
        <RenderAccordion summary="Email" go={go} details={[
            {"email":email},
            {"password":password}
        ]}/>
        <RenderAccordion summary="Name" go={go} details={[
            {"First Name":firstName},
            {"Last Name":lastName},
            {"Address":address}
        ]}/>
        <RenderAccordion summary="CountryCode" go={go} details={[
            {"countryCode":countryCode},
            {"Mobile":mobile}
        ]}/>
        <Button 
            color="primary"
            variant='contained'
            style={{marginTop:"1.5rem"}}
            onClick={submitHandle}
        >Submit</Button>
    </Container>
  )
}

export const RenderAccordion = ({summary, details, go}) =>(
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMore/>}>{summary}</AccordionSummary>
        <AccordionDetails>
            <div>
                {
                    details.map((data,index)=>{
                        const objKey = Object.keys(data)[0]
                        const objValue = data[Object.keys(data)[0]]
                        return <ListItemText>{`${objKey}: ${objValue}`}</ListItemText>
                    })
                }
                <IconButton
                    color="primary"
                    component="span"
                    onClick={()=> go(`${summary.toLowerCase()}`)}
                ><Edit/> </IconButton>
            </div>
        </AccordionDetails>
    </Accordion>
)
