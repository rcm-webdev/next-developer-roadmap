"use client";

import { useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";

// Sample data
const components = [
  { name: "Button", category: "Forms", description: "Clickable UI element" },
  { name: "Card", category: "Layout", description: "Clickable UI element" },
  { name: "Alert", category: "Feedback", description: "Clickable UI element" },
  { name: "Input", category: "Forms", description: "Clickable UI element" },
];

// Telling fuse where to fuzzy search with a score of 0.3 and lower.
const fuse = new Fuse(components, {
  keys: ["name", "category", "description"],
  threshold: 0.3,
});

function Searchbar() {
  // Setup the initial state of our searchbar
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchRef = useRef(null);

  // useEffect hook
  useEffect(() => {
    try {
      if (query.trim()) {
        const searchResults = fuse.search(query).map(({ item }) => item);
        if (searchResults.length === 0) {
          setError("No results found");
        } else {
          setError(null);
        }
        setResults(searchResults);
        setIsOpen(true);
      } else {
        setResults([]);
        setIsOpen(false);
        setError(null);
      }
    } catch (err) {
      setError("Something went wrong. Please try again");
    }
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (!isOpen) return;
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      setQuery(results[activeIndex].name);
      setIsOpen(false);
      setActiveIndex(-1);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-72" ref={searchRef}>
      <input
        type="text"
        className="input input-bordered w-full"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query && setIsOpen(true)}
        onKeyDown={handleKeyDown}
      />
      {isOpen && (
        <div className="absolute w-full bg-base-100 shadow-lg mt-2 rounded-md z-50">
          {error ? (
            <div className="p-2 text-base-200">{error}</div>
          ) : results.length > 0 ? (
            results.map((item, index) => (
              <div
                key={item.name}
                className={`p-2 cursor-pointer rounded ${
                  activeIndex === index ? "bg-base-300" : "hover:bg-base-200"
                }`}
                onClick={() => {
                  setQuery(item.name);
                  setIsOpen(false);
                  setActiveIndex(-1);
                }}
              >
                <strong>{item.name}</strong> <span>({item.category})</span>
              </div>
            ))
          ) : (
            <div className="p-2 text-base-content ">No matching Results</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Searchbar;
