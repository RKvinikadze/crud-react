import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import PropTypes from 'prop-types'
import Validations from '../validation'

const UserForm = ({
    visibility,
    type,
    createUpdate,
    userToEdit
}) => {
    
    const [username, setUsername] = useState(userToEdit.username || '')
    const [phone, setPhone] = useState(userToEdit.phone || '')
    const [email, setEmail] = useState(userToEdit.email || '')
    const [usernameError, setUsernameError] = useState('valid')
    const [phoneError, setPhoneError] = useState('valid')
    const [emailError, setEmailError] = useState('valid')

    const validate = e => {
        e.preventDefault()
        
        if(
            Validations.usernameValidation(username) === 'valid' && 
            Validations.phoneValidation(phone) === 'valid' &&
            Validations.mailValidation(email) === 'valid'
        ){
            createUpdate({"username":username, "phone": phone, "email": email}, type)
        }else{
            setUsernameError(Validations.usernameValidation(username))
            setPhoneError(Validations.phoneValidation(phone))
            setEmailError(Validations.mailValidation(email))
        }
    }

    return (
        <div>
            <Form onSubmit={validate}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={({target})=>{setUsername(target.value)}} value={username} style={usernameError !== 'valid' ?{borderColor: 'red'}:{}} />
                    {usernameError === 'valid'?'':<Form.Label style={{color: 'red', fontSize: '14px'}}>{usernameError}</Form.Label>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={({target})=>{setPhone(target.value)}} value={phone} style={phoneError !== 'valid' ?{borderColor: 'red'}:{}} />
                    {phoneError === 'valid'?'':<Form.Label style={{color: 'red', fontSize: '14px'}}>{phoneError}</Form.Label>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" onChange={({target})=>{setEmail(target.value)}} value={email} style={emailError !== 'valid' ?{borderColor: 'red'}:{}}/>
                    {emailError === 'valid'?'':<Form.Label style={{color: 'red', fontSize: '14px'}}>{emailError}</Form.Label>}
                </Form.Group>
                
                <Button variant="success" size="md" block type="submit" style={{marginTop: '20px'}}>{type==='edit'?<span>update</span>:<span>create</span>}</Button>
            </Form>
            <Button variant="secondary" size="md" block style={{marginTop: '20px'}} onClick={() => visibility('read')} >cancel</Button>
        </div>
    )
}

UserForm.propTypes = {
    visibility: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    userToEdit: PropTypes.object.isRequired,
    createUpdate: PropTypes.func.isRequired
}

export default UserForm