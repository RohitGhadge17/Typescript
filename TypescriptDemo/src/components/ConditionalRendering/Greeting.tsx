import { User } from "../context/User"
import { Guest } from "./Guest"

type GreetingProps = {
    isLoggedIn: boolean
}

export const Greeting = (props:GreetingProps) => {
    // if(props.isLoggedIn) {
    //     return <User />
    // }
    // else {
    //     return <Guest />
    // }

    //2nd method
    return (
        <div>
            {props.isLoggedIn ? <User /> : <Guest />}
        </div>
    )
}