import { ChangeEvent, useState } from "react";
import { FormEvent } from "react";

function Formhandel(){
    const [values, setValue] = useState<string>('');

    function HandelSubimt(event: FormEvent<HTMLFormElement>): void{
        event.preventDefault();
        alert(`Submited Value: ${values}` )

    }

    function Handelchange(event: ChangeEvent<HTMLInputElement>):void {
        setValue(event.target.value)
    }

    return(
        <div>
            <form onSubmit={HandelSubimt}>
                <input type="text" value={values} onChange={Handelchange} />
                <input type="button" value="submit" />
            </form>
        </div>
    )

}

export default Formhandel;