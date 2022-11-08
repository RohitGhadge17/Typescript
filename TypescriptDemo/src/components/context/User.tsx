
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
    const userContext = useContext(UserContext);
    const handleLogin = () => {
            userContext.setUser({
                name: 'Dummy',
                email:'dummy@test.com'
            })
    }
    const handleLogout = () => {
            userContext.setUser({
                name: '',
                email: ''
            })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.name} </div>
            <div>User email is {userContext.user?.email} </div>
        </div>
    )
}