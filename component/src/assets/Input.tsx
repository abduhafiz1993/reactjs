interface NameinputProps {
    value: string;
    onChange: (newValue: string) => void;
}

function Input(props: NameinputProps){
    return (
        <input 
        type="text"
        value={props.value}
        onChange={(e)=> props.onChange(e.target.value)}
        placeholder="Enter yourname"
        />
    );
}


export default Input;