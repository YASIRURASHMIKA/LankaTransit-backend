import "./Home.css";

function Home() {
    const buses = [
        {
            number: "138",
            route: "Colombo → Maharagama",
            status: "On Route",
            eta: "8 min"
        },
        {
            number: "100",
            route: "Panadura → Colombo",
            status: "On Route",
            eta: "12 min"
        },
        {
            number: "177",
            route: "Kaduwela → Colombo",
            status: "Delayed",
            eta: "18 min"
        }
    ];

    const features = [
        {
            icon: "🚌",
            title: "Bus Tracking",
            description:
                "Track buses and check their current journey status."
        },
        {
            icon: "📍",
            title: "Routes & Stops",
            description:
                "Find available routes and important bus stops easily."
        },
        {
            icon: "⏱️",
            title: "Estimated Arrival",
            description:
                "Get estimated arrival times for buses on your route."
        },
        {
            icon: "🔔",
            title: "Service Alerts",
            description:
                "Stay informed about delays and important service updates."
        }
    ];

    return (
        <div className="home-page">

            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-logo">
                    🚌 <span>LankaTransit</span>
                </div>

                <div className="navbar-links">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#buses">Live Buses</a>
                    <a href="/login">Login</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section" id="home">
                <div className="hero-content">

                    <div className="hero-badge">
                        🇱🇰 Smart Public Transport
                    </div>

                    <h1>
                        Travel smarter with{" "}
                        <span>LankaTransit</span>
                    </h1>

                    <p>
                        A smarter way to find routes, track buses,
                        and plan your journey across Sri Lanka.
                    </p>

                    <div className="hero-buttons">
                        <button
                            className="primary-button"
                            onClick={() =>
                                document
                                    .getElementById("buses")
                                    ?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                            }
                        >
                            Track a Bus
                        </button>

                        <button
                            className="secondary-button"
                            onClick={() =>
                                document
                                    .getElementById("features")
                                    ?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                            }
                        >
                            Explore Features
                        </button>
                    </div>

                </div>

                <div className="hero-visual">
                    <div className="bus-card">
                        <div className="bus-icon">
                            🚌
                        </div>

                        <div>
                            <strong>Bus 138</strong>
                            <p>Colombo → Maharagama</p>
                        </div>

                        <div className="bus-status">
                            <span></span>
                            Live
                        </div>
                    </div>

                    <div className="route-line">
                        <div className="route-point"></div>
                        <div className="route-track"></div>
                        <div className="route-point"></div>
                    </div>

                    <div className="route-labels">
                        <span>Colombo</span>
                        <span>Maharagama</span>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="features-section" id="features">

                <div className="section-heading">
                    <span>FEATURES</span>
                    <h2>Everything you need for a better journey</h2>
                    <p>
                        LankaTransit brings essential public transport
                        information together in one place.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            className="feature-card"
                            key={index}
                        >
                            <div className="feature-icon">
                                {feature.icon}
                            </div>

                            <h3>{feature.title}</h3>

                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>

            </section>

            {/* Bus Status */}
            <section className="buses-section" id="buses">

                <div className="section-heading">
                    <span>LIVE STATUS</span>
                    <h2>Active buses</h2>
                    <p>
                        Example live transport information
                        from the LankaTransit system.
                    </p>
                </div>

                <div className="bus-list">

                    {buses.map((bus, index) => (
                        <div
                            className="bus-status-card"
                            key={index}
                        >
                            <div className="bus-number">
                                {bus.number}
                            </div>

                            <div className="bus-details">
                                <h3>{bus.route}</h3>
                                <span
                                    className={
                                        bus.status === "Delayed"
                                            ? "status delayed"
                                            : "status"
                                    }
                                >
                                    ● {bus.status}
                                </span>
                            </div>

                            <div className="bus-eta">
                                <small>ETA</small>
                                <strong>{bus.eta}</strong>
                            </div>
                        </div>
                    ))}

                </div>

            </section>

            {/* How It Works */}
            <section className="how-section">

                <div className="section-heading">
                    <span>HOW IT WORKS</span>
                    <h2>Plan your journey in three steps</h2>
                </div>

                <div className="steps">

                    <div className="step">
                        <div>1</div>
                        <h3>Find your route</h3>
                        <p>
                            Search for the route and stops
                            you need.
                        </p>
                    </div>

                    <div className="step">
                        <div>2</div>
                        <h3>Find your bus</h3>
                        <p>
                            Check available buses and their
                            current status.
                        </p>
                    </div>

                    <div className="step">
                        <div>3</div>
                        <h3>Start your journey</h3>
                        <p>
                            Use the information to plan
                            your trip efficiently.
                        </p>
                    </div>

                </div>

            </section>

            {/* Footer */}
            <footer className="footer">
                <div>
                    <strong>🚌 LankaTransit</strong>
                    <p>
                        Smart public transport for Sri Lanka.
                    </p>
                </div>

                <div className="footer-right">
                    <p>DevOps Project • 2026</p>
                </div>
            </footer>

        </div>
    );
}

export default Home;

