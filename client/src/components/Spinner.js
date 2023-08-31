import React from "react";

const Spinner = () => {
  return (
    <div className="justify-content-center text-gray-600">
      <div class="d-flex justify-content-center spinner">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <h2> Loading..</h2>
      </div>
    </div>
  );
};

export default Spinner;
