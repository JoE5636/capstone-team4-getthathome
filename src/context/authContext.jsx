import { createContext, useContext, useEffect, useState } from "react";
import { getUser, createUser } from "../services/user/userService";
import * as session from "../services/session/sessionService";
import { tokenKey } from "../config";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  // const [products, setProducts] = useState({});
  // const [product, setProduct] = useState({});

  function login(credentials) {
    session
      .login(credentials)
      .then((user) => {
        setUser(user.user);
      })
      .catch(console.log);
  }

  function signup(userData) {
    createUser(userData)
      .then((user) => {
        setUser(user.user);
      })
      .catch(console.log);
  }

  function logout() {
    session.logout().then(() => {
      setUser(null);
      sessionStorage.removeItem(tokenKey);
    });
  }

  const value = {
    user,
    // products,
    // product,
    login,
    signup,
    logout,
  };

  useEffect(() => {
    getUser()
      .then((user) => {
        setUser(user);
      })
      .catch((error) => console.log(error));
    // getProducts()
    //   .then((products) => setProducts(products))
    //   .catch(console.log);
  }, []);

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
