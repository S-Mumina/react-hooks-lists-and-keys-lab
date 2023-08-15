import React from "react";

function NavBar() {
  const links = ["Home", "About", "Projects"];

  return <nav>
     {links.map((link, index) => (
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
  </nav>;
}

export default NavBar;
