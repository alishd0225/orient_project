import React, { Component } from "react";
import Home from "./Component/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
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
import ProtectedRoute from "./Component/Route/ProtectedRoute";
import AcademicProgram from "./Component/AcademicProgram/AcademicProgram";
import PlusTwoap from "./Component/AcademicProgram/+2academicProgram/PlusTwoap";

export default function App() {
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
            <Route path="/academicProgram/" element={<AcademicProgram/>}/>
            <Route path="/academicProgram/+2program" element={<PlusTwoap/>}/>
           
          </Routes>
          <ProtectedRoute path="/signin" element={<SignIn />} />
          <ProtectedRoute path="/signup" element={<SignUp />} />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

