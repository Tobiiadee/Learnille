/** @format */

import "./Semi-Circle_Progress.css";

const SemiCircle_Progress = () => {
  const value = 50;
  return (
    <>
      <div
        role='progressBar'
        aria-valuenow={value}
        aria-valuemin='0'
        aria-valuemax='100'
        style={{"--value": `${value}`}}></div>
    </>
  );
};

export default SemiCircle_Progress;
