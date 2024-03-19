import React, { useState, useEffect } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import FormUser from './components/FormUser';
import UserCard from './components/UserCard';
import Swal from 'sweetalert2';


function App() {
    const [userEdit, setUserEdit] = useState();
    const [formIsClose, setFormIsClose] = useState(true);
    //Messages
    // const [createMessage, setCreateMessage] = useState('');
    // const [deleteMessage, setDeleteMessage] = useState('');
    // const [updateMessage, setUpdateMessage] = useState('');

    const BASEURL = 'https://users-crud.academlo.tech';
    const [users, getUsers, createUsers, deleteUser, updateUser ] = useCrud(BASEURL);
  
    useEffect(() => {
        getUsers('/users/');
    }, []);

  console.log(users);
  console.log(users?.id);

    const handleOpenForm = () => {
        setFormIsClose(false);
    }

    return (
        <div className='app'>
            <header className='app__header'>
                <h1 className='app__title'>Users</h1>
                <button onClick={handleOpenForm} className='form__btn'>✚ Create new user</button>
            </header>
            {/* <div className='container__message'>
            {createMessage && <p className='app__message'>{createMessage}</p>}
            {deleteMessage && <p className='app__message'>{deleteMessage}</p>}
            {updateMessage && <p className='app__message'>{updateMessage}</p>}
            </div> */}
            <FormUser
                createUsers={(path, data) => {
                    createUsers(path, data);
                    // setCreateMessage('');
                    Swal.fire({
                        title: "Good job!",
                        text: "✅User created successfully.",
                        icon: "success"
                      });
                }}
                userEdit={userEdit}
                updateUser={(path, id, data) => {
                    updateUser(path, id, data);
                    // setUpdateMessage('')
                    Swal.fire({
                        title: "Good job!",
                        text: "📄User edited successfully",
                        icon: "success"
                      });
                    // setTimeout(() => {
                    //   setUpdateMessage('');
                    // }, 3000);
                }}
                setUserEdit={setUserEdit}
                formIsClose={formIsClose}
                setFormIsClose={setFormIsClose}
            />
            <div className='user--container'>
                {
                    users?.map(user => (
                        <UserCard
                          key={user.id}
                          user={user}
                          deleteUser={deleteUser}
                          setUserEdit={setUserEdit}
                          handleOpenForm={handleOpenForm}
                        />        
                    ))
                }
            </div>
        </div>
    );
}

export default App;