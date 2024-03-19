import React from "react";
import './styles/UserCard.css'
import Swal from "sweetalert2";


const UserCard = ({ user, deleteUser, setUserEdit, handleOpenForm }) => {

 const handleDelete = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      deleteUser('/users/', user.id )
      Swal.fire({
        title: "Deleted!",
        text: "🗑️Your file has been deleted.",
        icon: "success"
      });
    }
  });
 }

 const  handleEdit = () => {
    setUserEdit(user)
    handleOpenForm() 
 }
    
  return (
    <article className="container__card">
      <h1 className="container__name">
        {user.first_name} {user.last_name}
      </h1>
      <ul>
        <li className="container__li">
          <span className="container__label">Correo</span>
          <span className="container__span">{user.email}</span>
        </li>
        <li className="container__li">
          <span className="container__label">Cumpleaños</span>
          <span className="container__span">🎁{user.birthday}</span>
        </li>
      </ul>
      <br />
      <div className="container__btn">
        <button className="form__btn-card btn-delete" onClick={handleDelete}>🗑️Delete</button>
        <button  className="form__btn-card btn-edit" onClick={handleEdit}>📄Edit</button>
      </div>
    </article>
  );
};

export default UserCard;
