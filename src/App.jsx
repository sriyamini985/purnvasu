
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
          <p className='by'>by</p>
          <div/>
           <div className='logo'>
            

          </div>
          <p>PurnVasu Tech Solutions</p>
         
        </div>
        {/* Sushi & Phone Graphic Circle */}
        <div>
          {/* You can replace these with actual PNGs/icons or leave as placeholders */}
          <div className='icon-circle'>
            <img src="https://img.icons8.com/color/48/sushi.png" alt="Sushi" />
          </div>
         
        </div>
        <div className='footer-text text-white'>
          
          <p>Personalized Restaurant Control Unit</p>
        </div>
      </div>

      {/* Main Content */}
      <div className='main-content  h-screen bottom-0 right-0'>
         
        <h2 className='text-black'>
          <b>
          WELCOME<br/>XYZ Restaurant</b>
        </h2>
        {/* Login Form */}
        <div className='login-form shadow-lg rounded-lg'>
          <h3 className='text-black text-3xl'><b>Login</b></h3>
          <p>To your account to continue</p>
          <form>
            <input type="text" placeholder="User Id"  />
            <input  type="password" placeholder="Password" />
             <button className='button-container' type="submit">Submit</button>
          </form>
        </div> 
        <div className="curve absolute bottom-0 right-0">
              <img src={CurveImg} alt="Curve" /> 
              <div className='relative bottom-20 right-2 text-sm text-gray-200'>
              <div>Contact PurnVasu for queries:</div>
              <div>Email: OrderIn.vap@gmail.com</div>
        </div>            
        </div>
        
          </div>
      </div>
  );
};

export default App;