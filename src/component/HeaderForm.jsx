import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const HeaderForm = () =>{
    const [category, setCategory] = useState('people')
    const [id, setId] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefaunodelt();
        navigate(`/${category}/${id}`)

    }

    return(
        <div>
        <form onSubmit={handleSubmit}>

            <select name="category" value={category} onChange={e =>setCategory(e.target.value)}>
                <option value="people">People</option>
                <option value="planet">Planet</option>
            </select>
            <label style={{marginLeft:"10px"}}>ID: </label>
            <input type="number" name="id" value={id} onChange={e=>setId(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>

        </div>
        
    )
}

export default HeaderForm