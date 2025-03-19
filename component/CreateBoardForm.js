"use client";

import axios from "axios";
import { useState } from "react";

function CreateBoard() {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    try {
      const data = await axios.post("api/board", { name });
      console.log(data);
      setName("");
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-base-100 p-8 rounded-3xl space-y-6"
    >
      {/* Title */}
      <p className="font-bold text-lg">Create a new board</p>
      {/* Form */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-lg">Board Name</legend>
        <input
          required
          type="text"
          className="input w-full"
          placeholder="Future Unicorn Inc 🦄"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </fieldset>
      {/* Button */}
      <button type="submit" className="btn btn-primary btn-block">
        {isLoading && (
          <span className="loading loading-spinner loading-md"></span>
        )}
        Create a new board
      </button>
    </form>
  );
}

export default CreateBoard;
