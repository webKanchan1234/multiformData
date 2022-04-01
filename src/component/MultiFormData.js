import React from 'react'
import {useForm, useStep} from "react-hooks-helper"
import Email from './stepForm/Email'
import Code from './stepForm/Code'
import Submit from './stepForm/Submit'
import Name from './stepForm/Name'
import {Review} from './stepForm/Review'
import GetAllPosts from './stepForm/GetAllPosts'

const defaultData={
    email:'',
    password:'',
    firstName:'',
    lastName:'',
    address:'',
    countryCode:'',
    mobile:''
}

const steps=[
    {id:"email"},
    {id:"name"},
    {id:"code"},
    {id:"review"},
    {id:"submit"},
    {id:"posts"}
]



const MultiFormData = () => {
    const[formData,setForm] = useForm(defaultData)
    const {step, navigation} = useStep({
        steps,
        initialStep:0
    })

    const props = {formData, setForm, navigation}

    switch(step.id){
        case "email":
            return <Email {...props}/>
        case "name":
            return <Name {...props}/>
        case "code":
            return <Code {...props}/>
        case "review":
            return <Review {...props}/>
        case "submit":
            return <Submit {...props}/>
        case "submit":
            return <GetAllPosts/>
    }
  return (
    <div>
        <h1>multiform</h1>
    </div>
  )
}

export default MultiFormData