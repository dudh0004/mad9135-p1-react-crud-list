import userData from '../../userData.json';
import { useState } from "react";
import './ListView.css';

export default function ListView(props) {
    let[users, setUsers] = useState(userData);
    let [data, setData] = useState(userData);
    let [id, setId] = useState(0);
    let editClicked = false;
        
    function editUser(e) {
        editClicked = true;    
        setId(e.target.id);
    }

    function deleteUserData(e) {
        const UserId = e.target.id;

        let list = users.filter(user => {
            return user.id != UserId;
        })

        setUsers(list);
    }    

    return (
        <div className = "main">
            <div>
                {
                    users.map((item) => (
                    <>
                    {(((id == 0) && (!editClicked)) || !(item.id == id)) ? 
                    (
                    <div className="data" id={item.id}>
                        <div className="paragraph">
                            <p className={item.id}>{item.name}</p>
                            <p>{item.Email}</p>
                            <p>{item.City}</p>
                        </div>
                        <div className="button">
                            <button className="editButton" id={item.id} onClick={editUser}>Edit</button>
                            <button className="deleteButton" id={item.id} onClick={deleteUserData}>Delete</button>
                        </div>
                    </div>
                        ) : ('')
                    }
                    </>
                ))
                }    
            </div>
        </div>
    )
}