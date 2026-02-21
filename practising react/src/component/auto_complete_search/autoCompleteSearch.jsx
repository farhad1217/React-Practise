import { useEffect, useState } from "react"
import SearchedUser from "./searchedUser"

export default function AutoCompleteSearch(){
    const [user, setUser] = useState([])
    const [error, setError] = useState(false)
    const [text, setText] = useState("")
    useEffect(()=>{
        async function fetchUser(){
            try{
                const response = await fetch("https://dummyjson.com/users?limit=50")
                const data = await response.json()
                const colectedUser =  data.users.map((dataItem)=>dataItem.firstName)
                setUser(colectedUser)
                setError(false)
            }
            catch{
                setError(true)
            }
        }
        fetchUser()
    }, [])
    
    return <div>
        {
            error? "Error Occured"
            :<>
                <input type="text" placeholder="Search by User" value={text} onChange={(event)=>setText(event.target.value)}/>
                {
                    text === ""? <h3>Please give input in input Field</h3>
                    :<SearchedUser user = {user} typedText = {text}/>
                }
            </>
        }
    </div>
}