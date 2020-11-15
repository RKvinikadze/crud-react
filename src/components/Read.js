import React from 'react'
import {Button, Table} from 'react-bootstrap'
import PropTypes from 'prop-types'


const Read = ({data, deleteItem, edit}) => {
    return (
        <div>  
            <Table striped bordered hover responsive style={{marginTop: '20px'}}>
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td><Button size="sm" onClick={() => edit(item)}>Edit</Button></td>
                        <td><Button size="sm" variant="danger" onClick={()=>deleteItem(item)}>Delete</Button></td>
                    </tr>)
                }
                </tbody>
            </Table>
        </div> 
    )
}

Read.protoTypes = {
    data: PropTypes.array.isRequired, 
    deleteItem: PropTypes.func.isRequired, 
    edit: PropTypes.func.isRequired
}

export default Read