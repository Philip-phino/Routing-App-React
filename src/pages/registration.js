export default function Registration() {
    return (
      <div>
        <div className="img-container">
          <img src="https://github.com/Philip-phino/MOJOMUSIC/blob/main/spb-ps.jpg?raw=true" alt="background" />
        </div>
        <form action="/register" method="POST">
          <h2>MUSIC MOJO Registration</h2>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
  
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
  
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            style={{ backgroundColor: "#464646", color: "white", border: "1px solid white", padding: "5px" }}
            name="gender"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <br /><br />
  
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            style={{ backgroundColor: "#464646", color: "white", border: "1px solid white", padding: "5px" }}
            name="role"
            required
          >
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
          <br /><br />
  
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
  