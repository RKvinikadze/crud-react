import React, {useState} from 'react'
import {DropdownButton, Dropdown, FormControl, InputGroup, Button, Form} from 'react-bootstrap'
import PropTypes from 'prop-types'

const Search = ({
    search
}) => {
    const [value, setValue] = useState('username')
    const [text, setText] = useState('')
    
    const placeholder = () => `search user by ${value}`

    const searchUser = e => {
        e.preventDefault()
        search(value, text)
    }

    return (
        <Form onSubmit={searchUser}>
                <InputGroup className="mb-3" style={{marginTop: '20px'}}>
                <DropdownButton variant="outline-primary" title={value} >
                    <Dropdown.Item onClick={() => setValue('username')}> username </Dropdown.Item>
                    <Dropdown.Item onClick={() => setValue('phone')}> phone </Dropdown.Item>
                    <Dropdown.Item onClick={() => setValue('email')}> email </Dropdown.Item>
                </DropdownButton>

                <Form.Control type="text" placeholder={placeholder()} onChange={({target})=>{setText(target.value)}} value={text} />
                    
                <Button variant="outline-success" type="submit" >Search</Button>
            </InputGroup>
        </Form>
    )
}

export default Search