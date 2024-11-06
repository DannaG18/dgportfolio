import { useState, useEffect } from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will set isClient to true after the component mounts
  }, []);

  if (!isClient) {
    return null; // Return nothing until the component is mounted on the client
  }

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
