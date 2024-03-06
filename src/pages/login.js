export default function Login() {
    return (
      <div>
        <div className="img-container">
          <img src="https://github.com/Philip-phino/MOJOMUSIC/blob/main/ar%20ps.jpg?raw=true" alt="Background" />
        </div>
        <div className="login-container">
          <h2>Login</h2>
          <form className="login-form" action="/validate" method="post">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-input" name="email" />
            <br /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-input" name="password" />
            <br /><br />
            <button type="submit" className="login-button" value="LOGIN">LOGIN</button>
          </form>
        </div>
      </div>
    );
  }
  