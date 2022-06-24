import React, { Component, useState } from "react";
import "./SignIn.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import  {useToast}  from "@chakra-ui/react";
import useMounted from "../Hooks/useMounted";

const SignIn = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();
  const mounted=useMounted

  return (
    <div>
      <Header />
      <div className="signin-formContainer">
        <form
          className="signin-form"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!email || !password) {
              toast({
                description: "Credentials Not Valid",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            }
            setIsSubmitting(true);
            login(email, password)
              .then((response) => {
                console.log(response);
                navigate("/");
              })
              .catch((error) => {
                console.log(error.message);

                toast({
                  description: error.message,
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              })
              .finally(() =>mounted.current && setIsSubmitting(false));
          }}
        >
          <h5 className="signin-text">LOGIN</h5>
          <div className="signin-input-field">
            <label htmlFor="email">Username/Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signin-input-field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signin-input-field">
            <button className="signin-btn">Login</button>
          </div>
          <div className="signin-navigate-textbtn">
            {" "}
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => {
                  navigate("/signup/");
                }}
              >
                Sign up
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
