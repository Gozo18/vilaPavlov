import { useState } from "react";
import ProgressBar from "../components/progress-bar";

function Game() {
  const [users, setUsers] = useState({
    Pavel: 0,
    Marek: 0,
    Ema: 0,
    Filip: 0,
    Tereza: 0,
    Ondra: 0,
    Žaneta: 0,
    Adam: 0,
    Laura: 0,
    Dan: 0,
    Tom: 0,
    Natálka: 0,
    Pepa: 0,
    Sofie: 0,
    Vasil: 0,
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
          value={users.Tereza}
          onClick={onClick}
          id='Tereza'
        >
          Tereza
        </div>
        <input
          type='number'
          value={users.Tereza}
          onClick={onClick}
          id='Tereza'
          className='userInput'
        />
        <ProgressBar bgcolor='#6a1b9a' completed={users.Tereza} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Ondra}
          onClick={onClick}
          id='Ondra'
        >
          Ondra
        </div>
        <input
          type='number'
          value={users.Ondra}
          onClick={onClick}
          id='Ondra'
          className='userInput'
        />
        <ProgressBar bgcolor='#c2b501' completed={users.Ondra} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Žaneta}
          onClick={onClick}
          id='Žaneta'
        >
          Žaneta
        </div>
        <input
          type='number'
          value={users.Žaneta}
          onClick={onClick}
          id='Žaneta'
          className='userInput'
        />
        <ProgressBar bgcolor='#ff9a01' completed={users.Žaneta} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Adam}
          onClick={onClick}
          id='Adam'
        >
          Adam
        </div>
        <input
          type='number'
          value={users.Adam}
          onClick={onClick}
          id='Adam'
          className='userInput'
        />
        <ProgressBar bgcolor='#003d03' completed={users.Adam} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Laura}
          onClick={onClick}
          id='Laura'
        >
          Laura
        </div>
        <input
          type='number'
          value={users.Laura}
          onClick={onClick}
          id='Laura'
          className='userInput'
        />
        <ProgressBar bgcolor='#fa497e' completed={users.Laura} />
      </div>
      <hr />
      <div className='userBox'>
        <div className='userName' value={users.Dan} onClick={onClick} id='Dan'>
          Dan
        </div>
        <input
          type='number'
          value={users.Dan}
          onClick={onClick}
          id='Dan'
          className='userInput'
        />
        <ProgressBar bgcolor='#495bfa' completed={users.Dan} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Dan}
          onClick={onClick}
          id='Sofie'
        >
          Sofie
        </div>
        <input
          type='number'
          value={users.Sofie}
          onClick={onClick}
          id='Sofie'
          className='userInput'
        />
        <ProgressBar bgcolor='#49f4fa' completed={users.Sofie} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Vasil}
          onClick={onClick}
          id='Vasil'
        >
          Vasil
        </div>
        <input
          type='number'
          value={users.Vasil}
          onClick={onClick}
          id='Vasil'
          className='userInput'
        />
        <ProgressBar bgcolor='#38fc41' completed={users.Vasil} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Pepa}
          onClick={onClick}
          id='Pepa'
        >
          Pepa
        </div>
        <input
          type='number'
          value={users.Pepa}
          onClick={onClick}
          id='Pepa'
          className='userInput'
        />
        <ProgressBar bgcolor='#464646' completed={users.Pepa} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Natálka}
          onClick={onClick}
          id='Natálka'
        >
          Natálka
        </div>
        <input
          type='number'
          value={users.Natálka}
          onClick={onClick}
          id='Natálka'
          className='userInput'
        />
        <ProgressBar bgcolor='#ff0101' completed={users.Natálka} />
      </div>
      <hr />
      <div className='userBox'>
        <div className='userName' value={users.Tom} onClick={onClick} id='Tom'>
          Tom
        </div>
        <input
          type='number'
          value={users.Tom}
          onClick={onClick}
          id='Tom'
          className='userInput'
        />
        <ProgressBar bgcolor='#00b84c' completed={users.Tom} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Pavel}
          onClick={onClick}
          id='Pavel'
        >
          Pavel
        </div>
        <input
          type='number'
          value={users.Pavel}
          onClick={onClick}
          id='Pavel'
          className='userInput'
        />
        <ProgressBar bgcolor='#0212e9' completed={users.Pavel} />
      </div>
      <hr />
      <div className='userBox'>
        <div className='userName' value={users.Ema} onClick={onClick} id='Ema'>
          Ema
        </div>
        <input
          type='number'
          value={users.Ema}
          onClick={onClick}
          id='Ema'
          className='userInput'
        />
        <ProgressBar bgcolor='#ff009d' completed={users.Ema} />
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
        <ProgressBar bgcolor='#5b00d3' completed={users.Filip} />
      </div>
      <hr />
      <div className='userBox'>
        <div
          className='userName'
          value={users.Marek}
          onClick={onClick}
          id='Marek'
        >
          Marek
        </div>
        <input
          type='number'
          value={users.Marek}
          onClick={onClick}
          id='Marek'
          className='userInput'
        />
        <ProgressBar bgcolor='#570f0f' completed={users.Marek} />
      </div>
      <hr />
    </div>
  );
}

export default Game;
