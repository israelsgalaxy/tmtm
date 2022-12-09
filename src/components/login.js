import { useState } from "react"
import "../styles/login.css"

export default function Login() {
  let [user, setUser] = useState({})
  let [loginFormFields, setLoginFormFields] = useState({})

  async function loginRequest(e) {
    e.preventDefault()

    let response = await fetch("http://localhost:5000/login", { method: "post", body: loginFormFields, mode: "cors" })
    let data = await response.json()

    setUser(data)
  }

  return (
    <div>
      <form onSubmit={loginRequest}>
        <div>
          <label>Email: </label>
          <input type={"text"} value={loginFormFields.email} onChange={(e) => {setLoginFormFields({...loginFormFields, email: e.target.value})}} />
        </div>
        <div>
          <label>Password: </label>
          <input type={"password"} value={loginFormFields.password} onChange={(e) => {setLoginFormFields({...loginFormFields, password: e.target.value})}}/>
        </div>
        <div>
          <input type={"submit"}/>
        </div>
      </form>
    </div>
  )
}