import { useState } from "react"
import { useDispatch } from 'react-redux'
import { regisError, regisLoading, regisSuccess } from "../store/auth/action"


export const Registration = () => {

    const [form, setForm] = useState(null)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form);
        dispatch(regisLoading())
        fetch("http://localhost:3001/login", {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(d => {
            dispatch(regisSuccess(d))
        }).catch(err => {
            dispatch(regisError(err))
        })

    }


    return <div className="registratinform">
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="enter your name" onChange={handleChange} name='name' />
            <br />
            <input type="text" placeholder="enter your email" name="email" onChange={handleChange} />
            <br />
            {/* <input type="text" placeholder="enter your mobile" name="mobile" onChange={handleChange} />
            <br /> */}
            <input type="password" laceholder="enter your password" name="password" onChange={handleChange} />
            <br />
            <select onChange={handleChange} name="type" id="">
                <option value="user">User</option>
                <option value="admin">admin</option>
            </select>
            <br />
            <input type="submit" value='Submit' />
        </form>
    </div>
}