import React from "react";


function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href="https://github.com">{github}</a>
      <a href="https://www.linkedin.com">{linkedin}</a>
    </div>
  );
}

export default Links;
