import { useState } from "react"
import User from "./user"

export default function GithubUser(){
    const [user, setUser] = useState("")
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    async function fetchUser() {
        try {
            setLoading(true)
            setError(false)
            const response = await fetch(`https://api.github.com/users/${user}`)
            if(response.ok) setUser("")
            if(response.status === 403) setError(true)
            const data = await response.json()
            setUserData(data)
        }
        catch{
            setError(true)
        }
        finally{
            setLoading(false)
        }
    }
    return <div>
        <input type="text" value={user} placeholder={"Enter Github User Name"} onChange={(event)=>setUser(event.target.value)}/>
        <button onClick={fetchUser}>Search User</button>
        {error? <div>some error occured</div>: loading?<h3>fetching user... please wait</h3>:<User user = {userData} />}
    </div>
}