"use client";

import { useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";

//sample data
const components = [
  { name: "Button", category: "Forms", description: "Clickable UI element" },
  { name: "Card", category: "Layout", description: "Clickable UI element" },
  { name: "Alert", category: "Feedback", description: "Clickable UI element" },
  { name: "Input", category: "Forms", description: "Clickable UI element" },
];

//telling fuse where to fuzzy search with a score of 0.3 and lower.
const fuse = new Fuse(components, {
  keys: ["name", "category", "description"],
  threshold: 0.3,
});

function Searchbar() {
  //setup the initial state of our searchbar
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  //useEffect hook
  useEffect(() => {
    if (query.trim()) {
      const searchResults = fuse.search(query);
      setResults(searchResults.map(({ item }) => item));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  //close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative w-72" ref={searchRef}>
      <input
        type="text"
        className="input input-bordered w-full"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query && setIsOpen(true)}
      />
      {isOpen && results.length > 0 && (
        <div className="absolute w-full bg-base-100 shadow-lg mt-2 rounded-md z-50">
          {results.map((item) => (
            <div
              key={item.name}
              className="p-2 hover-bg-base-200 cursor-pointer"
              onClick={() => {
                setQuery(item.name);
                setIsOpen(false);
              }}
            >
              <strong>{item.name}</strong> <span>({item.category})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Searchbar;
