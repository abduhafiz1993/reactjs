import { ChangeEvent, FormEvent, useState } from "react";


interface Task{
    name: string,
    done: boolean
  }
  

type Tasks = {
    todo: Array<Task>
}

function AddForm( props: Tasks){


    const [submitedValue, setSubmitedValue] = useState('');

    function HandelInput(event: ChangeEvent<HTMLInputElement>){
        setSubmitedValue(event.target.value)
    }

    function HandelSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        props.todo.push({name: submitedValue,
            done : false
        })
    }

    return (
        <div>
            <form onSubmit={HandelSubmit}>
                <input type="text" placeholder="Add Task" value={submitedValue} onChange={HandelInput}/>
                <input type="button" value="Add" />
            </form>
        </div>
    )

}


export default AddForm;