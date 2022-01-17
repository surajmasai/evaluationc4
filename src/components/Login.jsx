import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { loginStatus } from "../store/auth/action"


export const Login = () => {

    const [form, setForm] = useState(null)

    const { status } = useSelector((state) => ({ status: state.auth.status }))



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
        fetch('http://localhost:3001/login').then(res => res.json()).then(d => {

            d.map((el) => {
                if (el.email == form.email && el.password == form.password) {
                    if (el.type == 'user') {
                        dispatch(loginStatus('user'))
                    }
                    else {
                        dispatch(loginStatus('admin'))
                    }
                }

            })
        })


    }


    return <div className="loginform">
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="enter your email" name="email" onChange={handleChange} />
            <br />
            <input type="text" placeholder="enter your password" name="password" onChange={handleChange} />
            <br />
            <input type="submit" value='Submit' />

        </form>
        {/* <h1>{status}</h1> */}
    </div>
}