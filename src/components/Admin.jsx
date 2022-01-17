import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from "react-router-dom"
import { regisError, regisLoading, regisSuccess } from "../store/auth/action"


export const Admin = () => {

    const { status } = useSelector((state) => ({ status: state.auth.status }))



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
        fetch("http://localhost:3001/jobs", {
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

    if (status == 'admin')
        return <Navigate to='/' />

    return <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="enter company name" onChange={handleChange} name='cname' />
            <input type="text" placeholder="enter job title" name="title" onChange={handleChange} />
            <input type="text" placeholder="enter salary" name="salary" onChange={handleChange} />
            <input type="text" placeholder="enter job description" name="dis" onChange={handleChange} />
            <input type="text" placeholder="enter job location" name="location" onChange={handleChange} />
            <select onChange={handleChange} name="jtype" id="">
                <option value="remote">Remote</option>
                <option value="office">Office</option>
            </select>
            <input type="submit" value='Submit' />
        </form>
    </div>
}