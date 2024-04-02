'use client'

import { IUser } from "@/redux/features/users/user.model"
import { fetchAllUsers } from "@/redux/features/users/user.service"
import { getAllUsers } from "@/redux/features/users/users.slice"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"



const Userpage: NextPage =  () => {
    const dispatch = useDispatch()
    const [users, setUsers] = useState([])
    const allUsers: [] = useSelector(getAllUsers)
    if(allUsers !== undefined){
        console.log('allUsers is not undefined')
        
        console.log('length is '+ allUsers.length)
        for(let i=0; i< allUsers.length; i++){
            console.log(JSON.stringify(allUsers[i]))
        }
    }else{
        console.log('allUsers is undefined')
    }

useEffect(()=>{
    dispatch(fetchAllUsers(1))
},[])
return(<>
<h2>유저 목록</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                    <th>addressID</th>
                    <th>job</th>
                    <th>height</th>
                    <th>weight</th>
                </tr>
            </thead>
            <tbody>
                {users.map((props: IUser) => (
                    <tr key={props.id}>
                        <td>{props.username}</td>
                        <td>{props.password}</td>
                        <td>{props.name}</td>
                        <td>{props.job}</td>
                        <td>{props.height}</td>
                        <td>{props.weight}</td>
                    </tr>
                ))}

            </tbody>
        </table>
</>)
}
export default Userpage;

