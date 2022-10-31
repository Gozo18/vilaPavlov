import { useState } from "react";
import ProgressBar from "../components/progress-bar";

function Game() {
  const [users, setUsers] = useState({
    Maty: 0,
    Filip: 0,
    KájaZ: 0,
    OndraS: 0,
    Maruška: 0,
    Michal: 0,
    Kryštof: 0,
    Linda: 0,
    Vašík: 0,
    Anička: 0,
    Adam: 0,
    Barča: 0,
    OndraG: 0,
    Elenka: 0,
    Šimon: 0,
    KájaS: 0,
    Švrček: 0,
    Škrobák: 0,
    Kuba: 0,
  });

  const onClick = (e) => {
    setUsers((prevState) => ({
      ...prevState,
      [e.target.id]: Number(e.target.value) + 10,
    }));
  };

  return (
    <div className='gameContainer'>
      <br />
      <br />
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Maty}
          onClick={onClick}
          id='Maty'
        >
          Maty
        </div>
        <input
          type='number'
          value={users.Maty}
          onClick={onClick}
          id='Maty'
          className='userInput'
        />
        <ProgressBar bgcolor='#38fc41' completed={users.Maty} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Filip}
          onClick={onClick}
          id='Filip'
        >
          Filip
        </div>
        <input
          type='number'
          value={users.Filip}
          onClick={onClick}
          id='Filip'
          className='userInput'
        />
        <ProgressBar bgcolor='#c2b501' completed={users.Filip} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.KájaZ}
          onClick={onClick}
          id='KájaZ'
        >
          KájaZ
        </div>
        <input
          type='number'
          value={users.KájaZ}
          onClick={onClick}
          id='KájaZ'
          className='userInput'
        />
        <ProgressBar bgcolor='#ff9a01' completed={users.KájaZ} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.OndraS}
          onClick={onClick}
          id='OndraS'
        >
          OndraS
        </div>
        <input
          type='number'
          value={users.OndraS}
          onClick={onClick}
          id='OndraS'
          className='userInput'
        />
        <ProgressBar bgcolor='#003d03' completed={users.OndraS} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Maruška}
          onClick={onClick}
          id='Maruška'
        >
          Maruška
        </div>
        <input
          type='number'
          value={users.Maruška}
          onClick={onClick}
          id='Maruška'
          className='userInput'
        />
        <ProgressBar bgcolor='#fa497e' completed={users.Maruška} />
      </div>
      <hr />
      <div className='userBox'>
        <div className='userName' value={users.Michal} onClick={onClick} id='Michal'>
        Michal
        </div>
        <input
          type='number'
          value={users.Michal}
          onClick={onClick}
          id='Michal'
          className='userInput'
        />
        <ProgressBar bgcolor='#495bfa' completed={users.Michal} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Kryštof}
          onClick={onClick}
          id='Kryštof'
        >
          Kryštof
        </div>
        <input
          type='number'
          value={users.Kryštof}
          onClick={onClick}
          id='Kryštof'
          className='userInput'
        />
        <ProgressBar bgcolor='#49f4fa' completed={users.Kryštof} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Linda}
          onClick={onClick}
          id='Linda'
        >
          Linda
        </div>
        <input
          type='number'
          value={users.Linda}
          onClick={onClick}
          id='Linda'
          className='userInput'
        />
        <ProgressBar bgcolor='#6a1b9a' completed={users.Linda} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Vašík}
          onClick={onClick}
          id='Vašík'
        >
          Vašík
        </div>
        <input
          type='number'
          value={users.Vašík}
          onClick={onClick}
          id='Vašík'
          className='userInput'
        />
        <ProgressBar bgcolor='#464646' completed={users.Vašík} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Anička}
          onClick={onClick}
          id='Anička'
        >
          Anička
        </div>
        <input
          type='number'
          value={users.Anička}
          onClick={onClick}
          id='Anička'
          className='userInput'
        />
        <ProgressBar bgcolor='#ff0101' completed={users.Anička} />
      </div>
      <hr />
      <div className='userBox'>
        <div className='userName' value={users.Adam} onClick={onClick} id='Adam'>
        Adam
        </div>
        <input
          type='number'
          value={users.Adam}
          onClick={onClick}
          id='Adam'
          className='userInput'
        />
        <ProgressBar bgcolor='#00b84c' completed={users.Adam} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Barča}
          onClick={onClick}
          id='Barča'
        >
          Barča
        </div>
        <input
          type='number'
          value={users.Barča}
          onClick={onClick}
          id='Barča'
          className='userInput'
        />
        <ProgressBar bgcolor='#0212e9' completed={users.Barča} />
      </div>
      <hr />
      <div className='userBox'>
        <div className='userName' value={users.OndraG} onClick={onClick} id='OndraG'>
        OndraG
        </div>
        <input
          type='number'
          value={users.OndraG}
          onClick={onClick}
          id='OndraG'
          className='userInput'
        />
        <ProgressBar bgcolor='#c15b5b' completed={users.OndraG} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Elenka}
          onClick={onClick}
          id='Elenka'
        >
          Elenka
        </div>
        <input
          type='number'
          value={users.Elenka}
          onClick={onClick}
          id='Elenka'
          className='userInput'
        />
        <ProgressBar bgcolor='#5b00d3' completed={users.Elenka} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Šimon}
          onClick={onClick}
          id='Šimon'
        >
          Šimon
        </div>
        <input
          type='number'
          value={users.Šimon}
          onClick={onClick}
          id='Šimon'
          className='userInput'
        />
        <ProgressBar bgcolor='#570f0f' completed={users.Šimon} />
      </div>
      <hr />

      <div className='userBox'>
        <div
          className='userName'
          value={users.KájaS}
          onClick={onClick}
          id='KájaS'
        >
          KájaS
        </div>
        <input
          type='number'
          value={users.KájaS}
          onClick={onClick}
          id='KájaS'
          className='userInput'
        />
        <ProgressBar bgcolor='#ff0eaa' completed={users.KájaS} />
      </div>
      <hr />

      <div className='userBox'>
        <div
          className='userName'
          value={users.Švrček}
          onClick={onClick}
          id='Švrček'
        >
          Švrček
        </div>
        <input
          type='number'
          value={users.Švrček}
          onClick={onClick}
          id='Švrček'
          className='userInput'
        />
        <ProgressBar bgcolor='#2cdd00' completed={users.Švrček} />
      </div>
      <hr />

      <div className='userBox'>
        <div
          className='userName'
          value={users.Škrobák}
          onClick={onClick}
          id='Škrobák'
        >
          Škrobák
        </div>
        <input
          type='number'
          value={users.Škrobák}
          onClick={onClick}
          id='Škrobák'
          className='userInput'
        />
        <ProgressBar bgcolor='#ffca0c' completed={users.Škrobák} />
      </div>
      <hr />

      <div className='userBox'>
        <div
          className='userName'
          value={users.Kuba}
          onClick={onClick}
          id='Kuba'
        >
          Kuba
        </div>
        <input
          type='number'
          value={users.Kuba}
          onClick={onClick}
          id='Kuba'
          className='userInput'
        />
        <ProgressBar bgcolor='#2933a5' completed={users.Kuba} />
      </div>
      <hr />
    </div>
  );
}

export default Game;
