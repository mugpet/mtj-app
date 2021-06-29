// import logo from './cool.png';
import { useState } from 'react'


function App() {

  const [coolInput, setCoolInput] = useState()

  return (
    <div className="flex flex-col w-screen h-screen justify-center">

      <div className="self-center justify-center">
        <img src="./cool.png" className="w-80 text-center " alt="logo" />
      </div>

      <div className="text-center ">
        <p className="mb-4 text-gray-500">Skriv noget sejt</p>
        <input className="text-2xl border-b outline-none mb-4 " value={coolInput} onChange={(e) => setCoolInput(e.target.value)} />
      </div>


      <p>
        {coolInput && coolInput !== "" && <p className="text-5xl font-extrabold text-center">Det er for vildt.. <span className="text-yellow-600">{coolInput}!!!</span></p>}
      </p>

    </div>
  );
}

export default App;
