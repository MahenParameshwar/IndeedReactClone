import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Quill({jobDescription,setJobDescription}) {
  

  return (
    <ReactQuill theme="snow" value={jobDescription} onChange={setJobDescription}>
         
        <div className="my-editing-area" style={{minHeight:'250px'}}/>
      
    </ReactQuill>
  );
}