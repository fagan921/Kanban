import { useState } from "react";
import { login } from "../api/authAPI";
import AuthService from "../utils/auth";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const data = await login(formData);
      AuthService.login(data.token); // ✅ Calls AuthService to store token & redirect
    } catch (err) {
      setError("Invalid username or password.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;