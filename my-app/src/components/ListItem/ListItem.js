import './ListItem.css';

export default function ListItem ({item, save, change, noChange}) {
    return (
    <form className="editUserForm">
        <div className="inputData">
            <p>
                <label>Name:</label>
                <input className="editUserName" name="name" id="name" onChange={change} defaultValue = {item.name}></input>
            </p>
            <p>
                <label>Email:</label>
                <input className="editUserEmail" name="Email" id="Email" onChange={change} defaultValue = {item.Email}></input>
            </p>
            <p>
                <label>City:</label>
                <input className="editUserCity" name="City" id="City" onChange={change} defaultValue = {item.City}></input>
            </p>
        </div>
        <div className="formButton">
            <button className="saveButton" onClick={save}>Save</button>
            <button className="cancelButton" onClick={noChange}>Cancel</button>
        </div>
    </form>
    )
}