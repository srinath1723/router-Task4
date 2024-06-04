import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      
      <div className="collapse" id="navbarToggleExternalContent">
        <div>
          <button onClick={() => navigate("/")}>All</button>
          <button onClick={() => navigate("/fullstackdev")}>Full Stack Development</button>
          <button onClick={() => navigate("/datascience")}>Data Science</button>
          <button onClick={() => navigate("/cybersecurity")}>Cyber Security</button>
          <button onClick={() => navigate("/career")}>Career</button>
        </div>
      </div></nav>
      <hr />
    </div>
  );
};

export default Navbar;
