import React, { useState} from "react";
import './connexion.css'
import logo from '../assets/icons/logo2.png'
import { Link } from "react-router-dom";
import Axios from "axios";



const Login = () => {

  const [dataUser, setDataUser] = useState({
    user_email: "",
    user_password: ""
  });
  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/api/users/login", dataUser)
      .catch((err) => console.error(err))
  };




  return (
    <div className="login_page">
      <img className="logo" src={logo} alt="logo" />
      <div className="login_forms">
        <form className="forms">
          <label>
            <input
              className="connexion_input"
              type="email"
              placeholder=" Adresse mail"
              autoFocus
              value={dataUser.user_email}
              onChange={(e) =>
                setDataUser({ ...dataUser, user_email: e.target.value })
              }
            />
          </label>
        </form>
        <form className="forms">
          <label>
            <input
              className="connexion_input"
              type="password"
              placeholder=" Mot de passe"
              value={dataUser.user_password}
              onChange={(e) =>
                setDataUser({ ...dataUser, user_password: e.target.value })
              }
            />
          </label>
        </form>
      </div>
      <button id="loginBtn"  onClick={(e) => login(e)}>
        Se connecter
      </button>
      <div>
      <p>Don't have an account ?
        <Link to='/register' style={{ textDecoration: "none" }}>
          <a href='/register' style={{ textDecoration: "none" }} id='signUp' > Sign up </a>
        </Link>
      </p>
      </div>
    </div>
  );
};
export default Login;
