import React, {useState} from 'react';
import Test from './components/Test';


const App = () => {

    const [counter, setCounter] = useState(0);
     
   const handlebuttonclick = () => {
    setCounter(counter + 1);
   }


    return (
        <div>
            <h1>The current counter is {counter}</h1>
            <Test numberTest={counter} />
            <button onClick={handlebuttonclick} >Click me to Increment!</button>
        </div>
        
    );
};

export default App;