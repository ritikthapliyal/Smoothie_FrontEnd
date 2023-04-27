import './App.css';
import {useState} from 'react'
import smoothie from  './smoothie.png'

function App() {

  const [loginClicked,setLoginClicked] = useState(false)
  const [signUpClicked,setSignUpClicked] = useState(false)
  const [formData,setFormData] = useState({email: '',password:'',role:''})

  const sendData = async (e) => {
    
    e.preventDefault()
  
    if(signUpClicked){
      
    }

  }

  return (
    <div className="App">
      
      <div className='header'>
        <div className='left'>
          <h2>Smoothies</h2>
        </div>
        <div className='right'>
          <button onClick={()=>{setLoginClicked(true);setSignUpClicked(false)}}>Login</button>
          <button onClick={()=>{setSignUpClicked(true);setLoginClicked(false)}}>Signup</button>
        </div>
      </div>

      {

        loginClicked || signUpClicked ? <form onMouseLeave={()=>{setSignUpClicked(false);setLoginClicked(false)}}>
            <input onChange={(e)=>setFormData({...formData,email:e.target.value})} placeholder='Enter Email'></input>
            <input onChange={(e)=>setFormData({...formData,password:e.target.value})} placeholder='Enter Password'></input>
            {
              signUpClicked && <input onChange={(e)=>setFormData({...formData,role:e.target.value})} placeholder='Role'></input>
            }

            <button onClick={sendData}>Submit</button>
          </form>:<></>
      }


      <div className='middle'>
        <img src={smoothie} width='350' height='350'></img>
        <div>
          <h1>Smoothie Recipes</h1>
          <h3>By Ritik Thapliyal</h3>
          <button>View Recipes</button>
        </div>
      </div>
    
      <div className='footer'>
          <span>All Rights reserved </span>
      </div>
    
    </div>
  );
}

export default App;
