import React, { Component } from "react";
import Home from "./Component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apply from "./Component/Apply/Apply";
import Applied from "./Component/Apply/Applied";
import Gallery from "./Component/Gallery/Gallery";
import NewsEvent from "./Component/News&Events/NewsEvent";
import Learning from "./Component/Learning Platform/Learning";
import Library from "./Component/Learning Platform/LibraryPage/Library";
import PastPaper from "./Component/Learning Platform/PastPaperPage/PastPaper";
import Result from "./Component/Result/Result";
import PlusTwoReslt from "./Component/Result/+2Result/PlusTwoReslt";
import { AlevelResult } from "./Component/Result/ALevelResult/AlevelResult";
import SignIn from "./Component/layout/User/SignIn";
import SignUp from "./Component/layout/User/SignUp";
import AuthContextProvider from "./Component/context/AuthContext";

function App() { 
    return (
      <div className="App">
        <AuthContextProvider>
        <BrowserRouter>
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/apply/" element={<Apply />} />
            <Route path="/apply/applied/" element={<Applied />} />
            <Route path="/gallery/" element={<Gallery />} />
            <Route path="/news/" element={<NewsEvent />} />
            <Route path="/learning/" element={<Learning />} />
            <Route path="/learning/library/" element={<Library />} />
            <Route path="/learning/pastpaper/" element={<PastPaper />} />
            <Route path="/result/" element={<Result />} />
            <Route path="/result/+2result/" element={<PlusTwoReslt />} />
            <Route path="/result/Alevelresult/" element={<AlevelResult />} />
            <Route path="/signin/" element={<SignIn />} />
            <Route path="/signup/" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
        </AuthContextProvider>
      </div>
    );
  }

export default App;
