import "./Profile.css";
import { useAuthValue } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import loggedInImage from "../Header/loggedIn-image.jpg";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/fire";
import { query, collection, getDocs, where } from "firebase/firestore";

function Profile() {
  const { currentUser } = useAuthValue();
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <>
      <Header />
      <div className="center">
        <h1>Profile</h1>
        <div className="profile">
          <div className="Image-name-details">
            <img src={loggedInImage} alt="User Image" className="userImage" />
            <p>
              <p>{name}</p>
              <strong>Email: </strong>
              {currentUser?.email}
            </p>
            <p>address</p>
            <p>Program</p>
            <p>Joined Date</p>
            <p>2022/07/11</p>
          </div>

          <div className="profile-container">
            <div className="exams-result">
              <div className="exam-container">
                <i class="fa-solid fa-book-open-reader"></i>
                <p>Upcoming Exams</p>
              </div>
              <div className="result-container">
                <i class="fa-solid fa-square-poll-vertical"></i>
                <p>Results</p>
              </div>
            </div>
            <div className="schedule-others">
              <div className="schedule-container">
                <i class="fas fa-calendar-alt"></i>
                <p>Schedule</p>
              </div>
              <div className="news-elearning-report">
                <button
                  className="news-events"
                  onClick={(e) => {
                    navigate("/news");
                  }}
                >
                  News & Events
                </button>
                <button
                  className="e-learning"
                  onClick={(e) => {
                    navigate("/learning/");
                  }}
                >
                  E-Learning
                </button>
                <button className="report">Report</button>
              </div>
            </div>
          </div>
        </div>

        <div className="academic-progress">
          <h4>Academic Progress</h4>
          <p>This graph shows the students academic performance.</p>
          <div className="academic-progress-chart">
            <Line
              data={{
                // x-axis label values
                labels: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                datasets: [
                  {
                    label: "Academic Progress",
                    // y-axis data plotting values
                    data: [
                      140, 150, 200, 220, 200, 250, 290, 150, 170, 200, 190,
                      220,
                    ],
                    fill: false,
                    borderWidth: 4,
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor: "blue",
                    responsive: true,
                  },
                ],
              }}
            />
          </div>
        </div>

        <div className="individual-progress">
          <h4>Individual Progress</h4>
          <p>This graph shows students overall performance.</p>
          <div className="individual-progress-chart">
            <Line
              data={{
                // x-axis label values
                labels: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                datasets: [
                  {
                    label: "Individual Progress",
                    // y-axis data plotting values
                    data: [
                      140, 150, 165, 180, 210, 200, 220, 230, 250, 260, 250,
                      233,
                    ],
                    fill: false,
                    borderWidth: 4,
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor: "green",
                    responsive: true,
                  },
                ],
              }}
            />
          </div>
        </div>

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
      <Footer />
    </>
  );
}

export default Profile;
