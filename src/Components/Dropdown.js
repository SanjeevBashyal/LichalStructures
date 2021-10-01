import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css'


const SearchDropdown = (props) => {
  const {placeHolder, opts } = props;
  const [options, setOptions] = useState(opts);
  const ulRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    ulRef.current.style.display = 'none';
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      ulRef.current.style.display = 'flex';
      onInputChange(event);
    });
    
    document.addEventListener('click', (event) => {
      ulRef.current.style.display = 'none';
    });
    
  }, []);

  const onInputChange = (event) => {
    setOptions(
      opts.filter((option) => option.includes(event.target.value))
    );
  };

  return (
    <div className="search-bar-dropdown">
      <input
        id="search-bar"
        type="text"
        className="form-control"
        placeholder={placeHolder}
        ref={inputRef}
        onChange={onInputChange}
      />
      <ul id="results" className="list-group" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={(e) => {
                inputRef.current.value = option;
              }}
              className="list-group-item list-group-item-action"
            >
              {option}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchDropdown;