type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const {messageCount = 0} = props
    return (
        <div>
            {
                props.isLoggedIn ? ` {props.name}! You have {messageCount} unread messages.` : `Welcome Guest`
            }
            {/* // <h2></h2> */}
        </div>
    )
}