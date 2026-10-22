import React, { useEffect, useState } from 'react'
import './User.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { API_URL } from '../config'
import toast from 'react-hot-toast';

const User = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(`${API_URL}/users`);
                setUsers(response.data)
            } catch (error) {
                console.log("Error while fetching data", error)
            }
        };
        fetchData()
    },[]);
const deleteUser = async (userId) => {
    await axios.delete(`${API_URL}/delete/user/${userId}`)
    .then((response) => {
        setUsers((prevUser)=>prevUser.filter((user)=>user._id !==userId))
        toast.success(response.data.message,{position:"top-right"})
    })
    .catch((error) => {
        console.log(error);
    });
};

  return (
    <div className="userTable">
        <Link to="/add" type="button" class="btn-solid theme-primary">
            User Add <i class="fa-solid fa-user-plus"></i>
        </Link>
        {users.length === 0?(
            <div className="noData">
                <h3>No Data to display.</h3>
                <p>Please add New User</p>
            </div>
        ):(
            <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) =>{
                    return (
                       <tr>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td className='actionButtons'>
                                <Link to={`/update/`+user._id} type="button" class="btn-solid theme-info">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </Link>
                                <button onClick={()=>deleteUser(user._id)} type="button" class="btn-solid theme-danger">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr> 
                    );
                })}
            </tbody>
        </table>
        )}
        
    </div>
  )
}

export default User;