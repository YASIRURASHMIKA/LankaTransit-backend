import { useState } from "react";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Login user
    const handleLogin = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");
        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:3000/api/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);

                setUser(data.user);

                setMessage("Login successful!");
            } else {
                setError(
                    data.message || "Invalid email or password"
                );
            }

        } catch (error) {
            setError(
                "Unable to connect to the server."
            );

            console.error("Login error:", error);

        } finally {
            setLoading(false);
        }
    };


    // Get protected profile
    const getProfile = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("Please login first.");
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:3000/api/auth/profile",
                {
                    method: "GET",

                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const data = await response.json();

            if (response.ok) {
                setUser(data.user);
                setMessage("");
                setError("");
            } else {
                setError(data.message);
            }

        } catch (error) {
            setError(
                "Unable to connect to the server."
            );

            console.error(
                "Profile error:",
                error
            );
        }
    };


    // Logout
    const handleLogout = () => {
        localStorage.removeItem("token");

        setUser(null);
        setEmail("");
        setPassword("");

        setMessage("You have been logged out.");
        setError("");
    };


    return (
        <div className="login-page">

            <div className="login-card">

                {!user ? (

                    <>
                        {/* Logo */}

                        <div className="logo-container">

                            <div className="logo">
                                🚌
                            </div>

                        </div>


                        {/* Heading */}

                        <h1 className="login-title">
                            LankaTransit
                        </h1>

                        <p className="login-subtitle">
                            Smart public transport,
                            made simple.
                        </p>


                        {/* Login */}

                        <h2 className="login-title">
                            Welcome back
                        </h2>

                        <p className="login-subtitle">
                            Sign in to continue to your account
                        </p>


                        <form
                            className="login-form"
                            onSubmit={handleLogin}
                        >

                            {/* Email */}

                            <div className="input-group">

                                <label>
                                    Email address
                                </label>

                                <div className="input-wrapper">

                                    <span className="input-icon">
                                        ✉
                                    </span>

                                    <input
                                        className="login-input"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                </div>

                            </div>


                            {/* Password */}

                            <div className="input-group">

                                <label>
                                    Password
                                </label>

                                <div className="input-wrapper">

                                    <span className="input-icon">
                                        🔒
                                    </span>

                                    <input
                                        className="login-input"
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                </div>

                            </div>


                            {/* Login Button */}

                            <button
                                className="login-button"
                                type="submit"
                                disabled={loading}
                            >
                                {loading
                                    ? "Signing in..."
                                    : "Sign in"}
                            </button>

                        </form>


                        {/* Messages */}

                        {message && (
                            <div className="success-message">
                                {message}
                            </div>
                        )}

                        {error && (
                            <div className="error-message">
                                {error}
                            </div>
                        )}


                        <div className="login-footer">
                            LankaTransit • Smart transport
                            for Sri Lanka
                        </div>

                    </>

                ) : (

                    /* ==========================
                       Logged-in Profile
                    ========================== */

                    <div className="profile-section">

                        <div className="logo-container">

                            <div className="logo">
                                🚌
                            </div>

                        </div>

                        <h1 className="profile-title">
                            Welcome back!
                        </h1>


                        {/* Avatar */}

                        <div className="profile-avatar">

                            {user.name
                                ? user.name
                                    .charAt(0)
                                    .toUpperCase()
                                : "U"}

                        </div>


                        {/* Profile Information */}

                        <div className="profile-box">

                            <div className="profile-row">

                                <span className="profile-label">
                                    Name
                                </span>

                                <span className="profile-value">
                                    {user.name}
                                </span>

                            </div>


                            <div className="profile-row">

                                <span className="profile-label">
                                    Email
                                </span>

                                <span className="profile-value">
                                    {user.email}
                                </span>

                            </div>


                            <div className="profile-row">

                                <span className="profile-label">
                                    Role
                                </span>

                                <span className="profile-value">
                                    {user.role}
                                </span>

                            </div>

                        </div>


                        {message && (
                            <div className="success-message">
                                {message}
                            </div>
                        )}

                        {error && (
                            <div className="error-message">
                                {error}
                            </div>
                        )}


                        {/* Refresh Profile */}

                        <button
                            type="button"
                            className="profile-button"
                            onClick={getProfile}
                        >
                            ↻ Refresh Profile
                        </button>


                        {/* Logout */}

                        <button
                            type="button"
                            className="logout-button"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </div>
                )}

            </div>

        </div>
    );
}

export default Login;
