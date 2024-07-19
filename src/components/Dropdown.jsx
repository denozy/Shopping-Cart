import React, { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log(`Selected option: ${option}`);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        Sort By: {selectedOption || "Select"}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <div onClick={() => handleOptionClick("Release Date")}>
            Release Date
          </div>
          <div onClick={() => handleOptionClick("Popularity")}>Popularity</div>
          <div onClick={() => handleOptionClick("Alphabetically")}>
            Alphabetically
          </div>
          <div onClick={() => handleOptionClick("Price")}>Price</div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
