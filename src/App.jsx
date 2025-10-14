
import './App.css';
import './index.css';
const App = () => {
  return (
    <div>
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
        <div className='footer-text'>
          <span  />
          <span>Personalized Restaurant Control Unit</span>
        </div>
      </div>

      {/* Main Content */}
      <div className='main-content'>
         
        <h2>
          <b>
          WELCOME<br/>XYZ Restaurant</b>
        </h2>
        {/* Login Form */}
        <div className='login-form'>
          <h3><b>Login</b></h3>
          <p>To your account to continue</p>
          <form>
            <input type="text" placeholder="User Id"  />
            <input  type="password" placeholder="Password" />
             <button className='button-container' type="submit">Password</button>
          </form>
        </div>
            <div className="curve">

</div>
        {/* Footer */}
        <div className='footer'>
          <div>Contact PurnVasu for queries:</div>
          <div>Email: OrderIn.vap@gmail.com</div>
        </div>
       
        </div>
      </div>
  );
};

export default App;