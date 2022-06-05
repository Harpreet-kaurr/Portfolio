import React from 'react'

const RangeSlider = () => {
  return (
    <div>
        <p>
          <input type="radio" id="test1" name="radio-group" checked />
          <label for="test1">Apple</label>
        </p>
        <p>
          <input type="radio" id="test2" name="radio-group" />
          <label for="test2">Peach</label>
        </p>
        <p>
          <input type="radio" id="test3" name="radio-group" />
          <label for="test3">Orange</label>
        </p>
    </div>
  );
}

export default RangeSlider