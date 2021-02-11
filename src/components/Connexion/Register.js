import React, { useState} from "react";
import './connexion.css'
import logo from '../assets/icons/logo2.png'
import { Link } from "react-router-dom";
import Axios from "axios";

const Register = () => {
  // Check if subscribe successfull or not
  const [success, setSuccess] = useState(null);
  //post new user
  const [dataUser, setDataUser] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    bio : '',
    age : '', 
    pseudo: '',
  });

  const subscribe = (e) => {
    e.preventDefault();
    Axios
    .post("http://localhost:4000/mypal/my-pal/users/register", dataUser)
    .catch((err) => console.error(err))
    .finally(setSuccess(true));
  };

  return (
    <>
    <div className="register_page">
      <img className="logo" src={logo} alt="my pal logo books" />

      {success === true ? (
        <div class="alert alert-success" role="alert">
          <h3>You've create your account, go login you ! </h3>
        </div>
      ) : success === false ? (
        <div class="alert alert-danger" role="alert">
          <h3>Error, there is a problem ! Try again</h3>
        </div>
      ) : (
        ""
      )}

      <div className="register_forms">
        <form className="forms">
          <label>
            <input
              required
              className="connexion_input"
              type="text"
              placeholder=" Nom"
              autoFocus
              value={dataUser.lastname}
              onChange={(e) =>
                setDataUser({ ...dataUser, lastname: e.target.value })
              }
            />
          </label>
        </form>
        <form className="forms">
          <label>
            <input
              required
              className="connexion_input"
              type="text"
              placeholder=" Prénom"
              value={dataUser.firstname}
              onChange={(e) =>
                setDataUser({ ...dataUser, firstname: e.target.value })
              }
            />
          </label>
        </form>
        <form className="forms">
          <label>
            <input
              required
              className="connexion_input"
              type="text"
              placeholder="Pseudo"
              value={dataUser.pseudo}
              onChange={(e) =>
                setDataUser({ ...dataUser, pseudo: e.target.value })
              }
            />
          </label>
        </form>
        <form className="forms">
          <label>
            <input
              required
              className="connexion_input"
              type="text"
              placeholder="Age"
              value={dataUser.age}
              onChange={(e) =>
                setDataUser({ ...dataUser, age: e.target.value })
              }
            />
          </label>
        </form>
        <form className="forms">
          <label>
            <textarea
              className="connexion_input"
              type="text"
              placeholder="Bio"
              value={dataUser.bio}
              onChange={(e) =>
                setDataUser({ ...dataUser, bio: e.target.value })
              }
            />
          </label>
        </form>
        <form className="forms">
          <label>
            <input
              className="connexion_input"
              type="email"
              placeholder=" Adresse mail"
              required
              value={dataUser.email}
              onChange={(e) =>
                setDataUser({ ...dataUser, email: e.target.value })
              }
            />
          </label>
        </form>
        <form className="forms">
          <label className="register_mdp">
            <input
              className="connexion_input"
              type="password"
              placeholder=" Mot de passe"
              required
              value={dataUser.password}
              onChange={(e) =>
                setDataUser({ ...dataUser, password: e.target.value })
              }
            />
          </label>
        </form>
      </div>

      {dataUser.lastname &&
      dataUser.firstname &&
      dataUser.pseudo &&
      dataUser.age &&
      dataUser.password &&
      dataUser.email !== "" ?(
        <button
          type="submit"
          id="loginBtn"
          disabled="false"
          onClick={(e) => subscribe(e)}
        >
          Create my count
        </button>
      ) : (
        <button
          type="submit"
          id="loginBtn"
          onClick={(e) => subscribe(e)}
        >
          Create my count
        </button>
      )}

      <div className='register_bottom'>
        <p>You already have an account ?
        <Link to="/login" style={{ textDecoration: "none" }}>
            <a href='/login' style={{ textDecoration: "none" }} id='signUp' > Sign in </a>
        </Link>
        </p>
      </div>
    </div>
    </>
  );
};
export default Register;
