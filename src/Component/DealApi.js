import React from 'react'
import { userapi } from '../Action/Action'
import { useSelector, useDispatch } from 'react-redux'
const DealApi = () => {
    const users = useSelector((state) => state.async.users)
    const dispatch = useDispatch();
    console.log(users)
    return (
        <div>
            <button onClick={() => dispatch(userapi())}>API call</button>
            <table border ="1">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((user, index)=>(
                            <tr key = {index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DealApi