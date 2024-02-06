import { useState } from "react";
import "./App.css";
import useSuggest from "./hooks/useSuggest";
import data from "./data/data.json";

function App() {
  // Define state variables for tags, search input, and suggestions.
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Create a function to handle changes in the search input.
  const handleChange = (e) => {
    console.log("search", search);
    setSearch(e.target.value);
  };

  // Commit 3: Use custom hook for suggestions
  // Call the custom hook 'useSuggest' to fetch suggestions based on the search input.
  useSuggest(search, setSuggestions, data, 10);

  // Render the UI elements including tags, search input, and suggestions.
  return (
    <div className="App">
      {/* Render tags */}

      {/* Render search input */}
      <div className="search-bar">
        <h1 className="header">Elastic Search</h1>
        <input
          value={search}
          className="search-input"
          name={"search"}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        {/* Render suggestions */}
        {suggestions.length > 0 && (
          <div className="search-suggestion">
            {suggestions.map((item, key) => {
              return <p key={key}>{item}</p>;
            })}
          </div>
        )}
      </div>
      <p className="description">
        This project implements ElasticSearch features using the Trie data
        structure, providing efficient and fast searching capabilities on large
        datasets. The Trie data structure is leveraged for optimal search
        performance, and the project is built with React.js.
      </p>
      <div className="footer">
        <a href="https://github.com/robin00007/Elastic_search">NPM</a>
        <a href="https://github.com/robin00007/Elastic_search">Github Repo</a>
        <a href="https://github.com/robin00007">Profile</a>
        <a href="https://robinchoudhary.me">Portfolio</a>
      </div>
    </div>
  );
}

export default App;
