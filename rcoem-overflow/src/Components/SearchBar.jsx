import { Divider } from "@mui/material";
import React, { useState } from "react";
import "./Searchbar.css";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.question.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  // const clearInput = () => {
  //   setFilteredData([]);
  //   setWordEntered("");
  // };

  return (
    <div className="search">
      <div
        className="searchInputs"
        style={{
          marginTop: "10px",
          width: "400px",
          borderRadius: "5px",
          backgroundColor: "#3C3938",
        }}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          style={{
            fontFamily: "roboto",
            fontSize: "20px",
            margin: "5px",
            color: "white",
            backgroundColor: "#3C3938",
          }}
        />
        {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div> */}
      </div>
      {filteredData.length !== 0 && (
        <div
          style={{
            width: "400px",
            backgroundColor: "#3C3938",
            color: "white",
            padding: "10px",
          }}
          className="dataResult"
        >
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                style={{
                  margin: "10px",
                }}
                className="dataItem"
                href={value.link}
              >
                <OpenInNewIcon
                  sx={{
                    fontSize: "small",
                    color: "white",
                  }}
                />
                <p
                  style={{
                    color: "white",
                    fontFamily: "monospace",
                    fontWeight: 10,
                  }}
                >
                  {value.question}
                  <Divider
                    sx={{
                      width: "300px",
                    }}
                  />
                </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
