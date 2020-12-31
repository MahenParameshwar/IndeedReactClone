import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Quill(props) {
  const [value, setValue] = useState('');

  return (
    <ReactQuill theme="snow" value={value} onChange={setValue}>
         
        <div className="my-editing-area" style={{minHeight:'250px'}}/>
      
    </ReactQuill>
  );
}