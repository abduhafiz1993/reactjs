import { useState } from "react";


function Buttonhandel(){

    const [name, setName] = useState<string>('Click Me')

  function handelClick():void{
    if(name == 'Click Me'){
    setName('Cliked');
    }
    else{
      setName('Click Me')
    }
  }

    return(
    <div>
      <h1>Button Click handler</h1>
      <button onClick={handelClick}>{name}</button>
    </div>
    )
}

export default Buttonhandel;