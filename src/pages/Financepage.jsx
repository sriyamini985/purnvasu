
import './App.css';
import './index.css';
import CurveImg from './assets/Vector.png';

const App = () => {
  return (
    <div className="app-container flex  w-screen">
      
      {/* Left Sidebar */}
      <div className="sidebar">
        <div>
          <h1>OrderIn</h1>
          <div classname="logoname">
          <p className='by'>by</p>
          <div/>
           <div className='logo  '>
            

          </div>
          <p>PurnVasu Tech Solutions</p>
         </div>
        </div>
       
        <div>
          {/* You can replace these with actual PNGs/icons or leave as placeholders */}
          <div className='icon-circle'>
            <img src="c:\Users\Syam\Downloads\food.png" alt="Food" />
          </div>
         
        </div>
        <div className='footer'>
          
          <p>Personalized Restaurant Control Unit</p>
        </div>
      </div>

      {/* Main Content */}
      <div className='main-content h-screen  '>

        <h2 className='text'>
          <b>
        <br/>XYZ Restaurant</b>
        </h2>
        <h3>Finance account</h3>
        {/* Login Form */}
        <div className='login-form shadow-lg rounded-lg '>
          <h3 className='text-black text-3xl '><b>Login</b></h3>
          <p>To your finance account to continue</p>
          <form>
            <input type="text" placeholder="User Id"  />
            <input  type="password" placeholder="Password" />
             <button className='button-container' type="submit">Submit</button>
          </form>
        </div> 
        <div className="curve fixed bottom-0 right-0">
              <img src={CurveImg} alt="Curve" /> 
              <div className='fixed bottom-5 right-5 text-sm text-gray-200'>
              <div>Contact PurnVasu for queries:</div>
              <div>Email: OrderIn.vap@gmail.com</div>
        </div>            
        </div>
        
          </div>
      </div>
  );
};

export default App;