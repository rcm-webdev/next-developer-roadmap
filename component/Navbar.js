"use client";

import { useState, useEffect } from "react";
import Fuse from "fuse.js";
import Image from "next/image";
import Logo from "@/public/code-braces.svg";
import User from "@/public/user-smile.svg";
import Sticky from "@/public/sticky-note.svg";
import Link from "next/link";

const dataset = [
  {
    title: "JavaScript",
    number: 1,
    description: "Lorem Ipsum",
    link: "/api/auth",
  },
  { title: "React", number: 2, description: "Lorem Ipsum", link: "/" },
  { title: "Next.js", number: 3, description: "Lorem Ipsum", link: "/" },
  { title: "Node.js", number: 4, description: "Lorem Ipsum", link: "/" },
  // Add more items as needed
];

const fuse = new Fuse(dataset, {
  keys: ["title"],
  threshold: 0.3,
});

function SearchBar({ search, handleSearch, results }) {
  return (
    <div className="relative">
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          id="search"
          className="grow"
          placeholder="Search"
          autoComplete="off"
          value={search}
          onChange={handleSearch}
        />
      </label>
      {results.length > 0 ? (
        <ul className="absolute list left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            List of Resources
          </li>
          {results.map((result, index) => (
            <li key={index} className="list-row p-2">
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                {result.number}
              </div>
              <div className="list-col-grow">
                <div>{result.title}</div>
                <div className="text-xs opacity-60">{result.description}</div>
              </div>
              <button className="btn btn-square btn-ghost">
                <Link href={result.link}>
                  <Image src={Sticky} alt="Sticky Notes" />
                </Link>
              </button>
            </li>
          ))}
        </ul>
      ) : search ? (
        <ul className="absolute list left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <li className="p-4 text-xs opacity-60">No results found.</li>
        </ul>
      ) : null}
    </div>
  );
}

function Navbar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setResults(value ? fuse.search(value).map((result) => result.item) : []);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-extrabold text-neutral">
          <Image src={Logo} alt="Logo" className="h-10 w-10 text-base-200" />
          <span className="hidden md:block">Developers Roadmap</span>
        </a>
      </div>
      <div className="flex gap-2">
        {/* Search function */}
        <SearchBar
          search={search}
          handleSearch={handleSearch}
          results={results}
        />

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image alt="Tailwind CSS Navbar component" src={User} />
            </div>
          </div>
          <ul
            tabIndex={0}
            role="button"
            aria-haspopup="true"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
