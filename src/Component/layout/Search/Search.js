import React from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = ({searchQuery,setSearchQuery}) => {


  const navigate=useNavigate();
  const onSubmit=e=>{
    navigate(`?s=${searchQuery}`)
    e.preventDefault();
  }

  return (
    <div >
      <form className="search-field" action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
        <input
        value={searchQuery}
        onInput={e=>setSearchQuery(e.target.value)}
          type="text"
          className="search-bar"
          placeholder="Search"
          name="s"
        />
        <i class="fa fa-search" aria-hidden="true"></i>
      </form>
    </div>
  );
};

export default Search;
