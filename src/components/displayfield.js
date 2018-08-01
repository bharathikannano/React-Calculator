import React from 'react';


export default function DisplayWindow(props) {
  return (
    <div>
    <input type='text' value={props.expression} disabled={true}/>
    </div>
  );

}
