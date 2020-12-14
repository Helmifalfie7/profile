import Profilecomponent from './profile/Profilecomponent'

import './App.css';


function App() {
  const handleAlert = (fullName) => alert(`Hi I am ${fullName}`);
  return (
    <div className="App">

    <Profilecomponent 
    
    fullName='Luca Changretta'
    bio ='The Most dangerous man on earth'
    profession='American-Italian Mob Boss'

    handleAlert={handleAlert}
    >
      {/* Passing image as a children props */}
    <img src='/image/luca1.jpg' alt='luca1'/>

  </Profilecomponent>
    </div>
  );
}
export default App;
