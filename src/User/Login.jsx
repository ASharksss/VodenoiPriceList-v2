import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const Login = ({setIsAuth}) => {
  	const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [showError, setShowError] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
    const handleSubmit = () => {
		setError('')
		setShowError(false)
		const data = {
			username: username,
			password: password
		}
		axios.post('/auth/login', data)
			.then(res => {
				if (res.data.serverStatus == 1) {
					setIsAuth(true)
					localStorage.setItem('token', res.data.access_token)
					localStorage.setItem('refresh_token', res.data.refresh_token)
					localStorage.setItem('role', res.data.role)
					let currentTime = new Date()
					currentTime.setHours(currentTime.getHours() + 3)
					localStorage.setItem('token_life', currentTime)
					localStorage.setItem('isAuth', true)
					navigate('/')
				} else {
					setShowError(true)
					setError(res.data.message)
				}
			})
			.catch(err => {
				console.log(err)
			})
    }
	const handleShowPassword = () => {
		setShowPassword(prev => !prev)
	}
    return (
		<div className='auth'>
			<div className="container">
				<div className="auth_container">
					<h1>Авторизация</h1>
					<form className='auth_form' onSubmit={e => {
						e.preventDefault()
						handleSubmit()
					}}>
						<input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Логин' required/>
						<div style={{width: '103%', display: 'flex'}}>
							<input type={showPassword ? 'text' : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder='Пароль' required/>
							<button type='button' style={{width: '45px', marginLeft: '10px'}} onClick={() => handleShowPassword()}>
								{showPassword ? "😃" : "😄"}
							</button>
						</div>
						{showError ? <p>{error}</p> : ""}
						<button type='submit'>Войти</button>
					</form>
				</div>
			</div>

		</div>
	);
}