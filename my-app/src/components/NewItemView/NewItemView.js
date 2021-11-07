import { useState} from 'react';
import { v4 as uuid } from "uuid";
import userData from '../../userData.json';
import { NavLink } from 'react-router-dom';
import './NewItemView.css';

export default function NewItemView (){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('dudh0004')));
    const [addUser, setAddUser] = useState({ name: "", Email: "", City: "" });

    const addChange = (e) => {
        e.preventDefault();

        const addName = e.target.getAttribute("name");
        const addValue = e.target.value;

        const newAddedData = {...addUser};
        newAddedData[addName] = addValue;

        setAddUser(newAddedData);
    }

        const onSubmit = (e) => {
        const newUser = {
            id: uuid(),
            name: addUser.name,
            Email: addUser.Email,
            City: addUser.City,
        };

        const newUsers = [...user, newUser];

        userData.push(newUser);

        setUser(newUsers);
        console.log(newUsers);
        localStorage.setItem('dudh0004', JSON.stringify(newUsers))
    }
    
        return (
            <form className="newUserForm">
                <legend>Add New User</legend>
                <div className="mainSection">
                    <div className="inputSection"> 
                    <div className="newUserName">
                        <label>Name:</label>
                        <input type="text" name="name" onChange={addChange} placeholder="Enter Name" required />
                    </div>
                    <div className="newUserEmail">
                        <label>Email:</label>
                        <input type="text" name="Email" onChange={addChange} placeholder="Enter Email" required/>
                    </div>
                    <div className="newUserCity">
                        <label>City:</label>
                        <input type="text" name="City" onChange={addChange} placeholder="Enter City" required/>
                    </div>
                </div>
                <div className="buttonSection">
                    <NavLink to="/">
                        <button onClick={onSubmit} className="saveButton">Save</button>
                    </NavLink>
                    <NavLink to="/">
                        <button className="cancelButton">Cancel</button>
                    </NavLink>
                </div>
                </div>
                </form>
        )
    }



