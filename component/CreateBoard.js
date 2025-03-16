function CreateBoard() {
  return (
    <div className="bg-base-100 p-8 rounded-3xl space-y-8">
      {/* Title */}
      <p className="font-bold text-lg">Create a new board</p>
      {/* Form */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-lg">Board Name</legend>
        <input type="text" className="input w-full" placeholder="Type here" />
      </fieldset>
      {/* Button */}
      <button className="btn btn-primary btn-block">Create a new board</button>
    </div>
  );
}

export default CreateBoard;
