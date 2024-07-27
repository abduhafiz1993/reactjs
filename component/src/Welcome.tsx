
interface Gretting {
    name: string
}

function Welcome(props: Gretting) {
    return (<div>
        <h1>Hello {props.name}</h1>
           </div>
    )
}


export default Welcome;