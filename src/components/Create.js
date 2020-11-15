import React from 'react'
import {Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

const Create = ({
    visibility
}) => {
    return <div><Button variant="info" size="md" block onClick={() => visibility('update')}>create new user</Button></div>
}

Create.protoTypes = {
    visibility: PropTypes.func.isRequired, 
}

export default Create