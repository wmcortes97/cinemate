import React from "react";

function Survey() {
  const handleSubmit = () => {
    console.log("this form has been submitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Survey;
