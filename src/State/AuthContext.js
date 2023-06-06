import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setAuth] = useState(
    localStorage.getItem("token") ? true : false
  );

  useEffect(() => {
    localStorage.getItem("token") ? setAuth(true) : setAuth(false);
  }, [isAuth]);
  console.log(isAuth);
  //set Credentials and return token
  const setCredentials = async (e) => {
    e.preventDefault();

    let validateData = {
      email: "",
      password: "",
    };

    if (e.target.value === "Test User") {
      validateData = {
        ...validateData,
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      };
      setMail("");
      setPassword("");
    }

    if (e.target.value === "login") {
      validateData = {
        ...validateData,
        email: email,
        password: password,
      };
      setMail("");
      setPassword("");
    }

    try {
      const res = await axios.post(
        "/api/auth/login",
        JSON.stringify(validateData)
      );
      localStorage.setItem("token", await res.data.encodedToken);
      setAuth(localStorage.getItem("token") ? true : false);
      toast.success("You are logged in successfully!");
    } catch (err) {
      const errorType = "Auth";
      console.error(errorType, err);
      toast.error("Invalid Credentials");
    }
  };
  const registerUser = async (e) => {
    try {
      e.preventDefault();
      await axios.post("/api/auth/signup", JSON.stringify({ email, password }));
      toast.success("Sign in successful!");
      setPassword("");
      setMail("");
    } catch (err) {
      const errorType = "signUp";
      console.error(errorType, err);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        registerUser,
        setCredentials,
        email,
        password,
        setMail,
        setPassword,
        isAuth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
