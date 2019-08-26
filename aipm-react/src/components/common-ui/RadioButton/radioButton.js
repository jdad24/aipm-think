import React from 'react';

  const radioButton = (props) => (
      <input type="radio" name="line" value={props.line} onChange={props.chooseLineHandler}/>
  );

  export default radioButton;