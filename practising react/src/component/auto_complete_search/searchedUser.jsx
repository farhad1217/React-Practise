export default function SearchedUser({user, typedText}){
    const lowerCaseText = typedText.toLowerCase()
    let foundUser = user.filter(item=>item.toLowerCase().includes(lowerCaseText))
    if(foundUser.length === 0) foundUser = ["No User Found"]
    return <>
        <ul>
            {foundUser.map(((item, index)=>
                <li key={index}>{item}</li>
            ))}
        </ul>
    </>
}