import { Divider } from "@mui/material";
import React, { useState } from "react";
import "./Searchbar.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import data from "../Assets/SearchData.json";
function SearchBar({ placeholder }) {
  // console.log(data);
  // var data;
  // var getSearchData = async () => {
  //   console.log("API CALL");
  //   await axios
  //   .get("https://demo-vercel-teal.vercel.app/view_search_questions")
  //   .then((response) => {
  //     console.log(response.data);
  //     data=response.data;
  //     return data;
  //   })
  //   .catch((error) => {
  //     console.log(error.data);
  //     return [];
  //   });
  // }

  // useEffect(() => {
  //   data=getSearchData();
  // }, []);
  //data=getSearchData();

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

  return (
    <div className="search">
      <div
        className="searchInputs"
        style={{
          marginTop: "10px",
          width: "350px",
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
            fontFamily: "Josefin Sans, sans-serif",
            fontSize: "20px",
            margin: "5px",
            color: "white",
            backgroundColor: "#3C3938",
          }}
        />
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
                    fontWeight: 5,
                    fontFamily: "Josefin Sans, sans-serif",
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
