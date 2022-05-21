import { useEffect, useState } from 'react';
const useToken = user => {
    const [token , setToken] = useState('')
    useEffect(()=>{
        const email = user?.email 
        const currentUser = {email : email}
        console.log(user);
        if(email){
            fetch(`http://localhost:5000/api/user/${email}` , {
                method : "PUT",
                headers : {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json()) 
            .then(data => {
                console.log(data);
            })
        }
    },[user])
    return [token]
}

export default useToken