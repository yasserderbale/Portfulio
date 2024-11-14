import React from "react";
import CV from "../public/assets/CVPrpfessioneel.pdf";
export const Cv = () => {
  return (
    <div>
      <iframe
        src={CV} 
        title="CV"
        width="100%"
        height="800px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};
