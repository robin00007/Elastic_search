import { useState } from "react";
import "./App.css";
import useSuggest from "./hooks/useSuggest";

function App() {
  // Define state variables for tags, search input, and suggestions.
  const [tags] = useState([]);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Create a function to handle changes in the search input.
  const handleChange = (e) => {
    console.log("search", search);
    setSearch(e.target.value);
  };

  // Commit 3: Use custom hook for suggestions
  // Call the custom hook 'useSuggest' to fetch suggestions based on the search input.
  useSuggest(search, setSuggestions);

  // Render the UI elements including tags, search input, and suggestions.
  return (
    <div className="">
      <h1 className="">Elastic Search</h1>
      {/* Render tags */}
      {tags.map((tag, index) => {
        return (
          <ul key={index}>
            <li>{tag}</li>
          </ul>
        );
      })}
      {/* Render search input */}
      <input
        value={search}
        name={"search"}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      {/* Render suggestions */}
      <ul>
        {suggestions.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
