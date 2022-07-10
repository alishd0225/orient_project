import { useNavigate } from "react-router-dom";
import React from "react";
import "./Profile.css";
import { useAuthValue } from "../../context/AuthContext";
import { auth } from "../../firebase/fire";
import { signOut } from "firebase/auth";

function Profile() {
  const { currentUser } = useAuthValue();
  const navigate = useNavigate();

  return (
    <div className="center">
      <div className="profile">
        <h1>Profile</h1>
        <p>
          <strong>Email: </strong>
          {currentUser?.email}
        </p>
        <button 
        className="signout-button"
          onClick={async (e) => {
            e.preventDefault();
            signOut(auth);
            navigate("/");
            console.log("Your are logged Out");
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Profile;
