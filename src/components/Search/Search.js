import React, { useContext } from "react";
import "./Search.css";
import { BsSearch } from "react-icons/bs";
import TableContext from "../../utils/TableContext";

const Search = () => {
  const {handleInputChange} = useContext(TableContext);

  return (
    <form>
      <div className = "form-group">
        <span> <BsSearch/> </span>
        <input 
          onChange={e => handleInputChange(e)}
          name="search"
          type="search"
          placeholder="Search by Name"
          id="search"        
        />
      </div>

    </form>
  )
}

export default Search;