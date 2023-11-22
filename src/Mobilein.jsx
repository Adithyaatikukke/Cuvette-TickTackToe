import React, {useState} from 'react';
import './Mobile.css';
import O from './assets/yellow.svg';
import X from './assets/Monkey.svg';
import Mobileout from './Mobileout';
import Toast from './Toast';

function Mobilein() {
  const [NewGame, setNewGame] = useState(false);
  const [Choice, setUserChoice] = useState(null);
  const [ShowToast, setShowToast] = useState(false);

  const handleInvite = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };


  const handleNewGame = () => {
    setNewGame(true);
    localStorage.setItem("UserScore", JSON.stringify(0));
    localStorage.setItem("CompScore", JSON.stringify(0));
    localStorage.setItem("TieScore", JSON.stringify(0));
  };

  const handleUserSelection = (e, selection) => {
    setUserChoice(selection);
    e.target.style.backgroundColor = '#D9D9D9';
  };
  return (
    <>
       {NewGame ? (
          <Mobileout Choice={Choice} />
        ) : (
          <div className="PlayArea">
          <div className="icons">
            <img src={X} />
            <img src={O} />
          </div>
          <div className="pickPlayer">
            PICK PLAYER
            <div className="options">
              <div className="xBtn btn" onClick={(e) => handleUserSelection(e, 'X')}>
               
              </div>
              <div className="oBtn btn" onClick={(e) => handleUserSelection(e, 'O')}>
              </div>
            </div>
          </div>
  
          <button name="New" className="yellowb txt" onClick={handleNewGame}>
            NEW GAME ( VS CPU )
          </button>
          <button className="noUse txt">NEW GAME ( VS HUMAN ) Coming soon</button>
          <button className="yellowb txt" onClick={handleInvite}>
            Invite your friend
          </button>
      </div>
        )}

        {ShowToast && <Toast />} 
    </>
  );
}

export default Mobilein;