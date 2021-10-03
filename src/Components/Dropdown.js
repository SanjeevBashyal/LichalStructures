import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css'


const SearchDropdown = (props) => {
  const {placeHolder, opts , id, onSelected } = props;
  const [options, setOptions] = useState(opts);
  const ulRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    setOptions(opts);
    ulRef.current.style.display = 'none';
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      ulRef.current.style.display = 'flex';
      onInputChange(event);
    });
    
    document.addEventListener('click', (event) => {
      if(ulRef.current){
        ulRef.current.style.display = 'none';
      }
    });
    
  }, [opts]);

  const onInputChange = (event) => {
    let os=opts.filter((option) => option.includes(event.target.value))
    setOptions(
      os
    );
    if(os.length===0){
      inputRef.current.value="";
    }
  };

  return (
    <div className="search-bar-dropdown">
      <input
        id={id}
        type="text"
        className="form-control"
        placeholder={placeHolder}
        ref={inputRef}
        onChange={onInputChange}
      />
      <div className="list-container">
        <ul id="results" className="list-group" ref={ulRef}>
          {options.map((option, index) => {
            return (
              <button
                type="button"
                key={index}
                onClick={(e) => {
                  inputRef.current.value = option;
                  onSelected();
                }}
                className="list-group-item list-group-item-action"
              >
                {option}
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchDropdown;