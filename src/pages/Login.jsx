import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleLogin}>
        <h1>SayaDash</h1>
        <p className="login-subtitle">Sign in to your analytics dashboard</p>

        <label className="login-label">
          Email
          <input type="email" required placeholder="you@example.com" />
        </label>

        <label className="login-label">
          Password
          <input type="password" required placeholder="••••••••" />
        </label>

        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>
    </div>
  );
}
