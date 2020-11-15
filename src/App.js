import React, {useState} from 'react'
import Read from './components/Read'
import Navigation from './components/Navigation'
import UserForm from './components/UserForm'
import Create from './components/Create'
import Search from './components/Search'
import initialData from './initialData'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'

const App = () => {
  const [data, setData] = useState(initialData)
  const [filteredData, setFilteredData] = useState(initialData)
  const [show, setShow] = useState('read')
  const [userToEdit, setUserToEdit] = useState()

  const deleteItem = (obj) => {
    const new_data = data.filter(item => item.id !== obj.id)
    if (window.confirm(`Do you really want to delete user ${obj.name} ?`)){
      setData(new_data)
      setFilteredData(new_data)
    }
  }

  const visibility = (arg) => {
    if(arg == 'edit' || arg === 'create'){
      setShow(!show)
    }else{
      setShow(arg)
    }
  }

  const createUpdate = (user, action) => {
    if(action === 'create'){

      const newUser = {
        username: user.username,
        phone: user.phone,
        email: user.email,
        id: Math.floor(Math.random() * 2000)
      }  

      setData(data.concat(newUser))
      setFilteredData(data.concat(newUser))
  
    }else if(action === 'edit'){
    
      const updatedUser = {
        username: user.username,
        phone: user.phone,
        email: user.email,
        id: userToEdit.id
      }
      setData(data.map(user => user.id === userToEdit.id ? updatedUser : user))
      setFilteredData(data.map(user => user.id === userToEdit.id ? updatedUser : user))
    }

    setShow('read')
  }

  const editUser = (user) => {
    setUserToEdit(user)
    setShow('edit')
  }

  const search = (property, value) => {
    const filtered = data.filter(user => user[property].toLowerCase().includes(value.toLowerCase()))
    setFilteredData(filtered)
  }

  const clearAll = () => {
    setFilteredData(data)
  }

  return (
    <div>
      <Navigation />

      <Container fluid="md" style={{marginTop: '80px'}}>
        {        
          show === 'read'?
            <div>
              <Create visibility={visibility} />
              <Search search={search} clearAll={clearAll} />
              <Read data={filteredData} edit={editUser} deleteItem={deleteItem} /> 
            </div>
            : show === 'edit'?
              <UserForm visibility={visibility} createUpdate={createUpdate} type='edit' userToEdit={userToEdit} />
            : 
              <UserForm visibility={visibility} createUpdate={createUpdate} type='create' userToEdit={{}} />
        }
      </Container>
    </div>
  )
}

export default App
