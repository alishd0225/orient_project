import React, {useState} from "react";
import "./SignUp.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "@chakra-ui/react";
import useMounted from "../Hooks/useMounted";

const SignUp = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mounted = useMounted();

  const { register } = useAuth();
  return (
    <div>
      <Header />
      <div className="signup-formContainer">
        <form
          className="signup-form"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!username || !email || !password) {
              toast({
                description: "Credentials Not Valid",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            }
            if (password === confirmPassword) {
              setIsSubmitting(true);
              register(email, password)
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
            } else {
              console.log("Password do not match");
            }
          }}
        >
          <h5 className="signup-text">SIGN UP</h5>
          <div className="signup-input-field">
            <label htmlFor="userName">Username</label>
            <input
              value={username}
              type="text"
              id="userName"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signup-input-field">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signup-input-field">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signup-input-field">
            <label htmlFor="password">Confirm Password</label>
            <input
              value={confirmPassword}
              type="password"
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="signup-input-field">
            <button className="signup-btn">Sign Up</button>
          </div>
          <div className="signup-navigate-textbtn">
            {" "}
            <p>
              Already have an account?{" "}
              <span onClick={() => navigate("/signin/")}>Sign in</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
