import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";


export const ApplyModal = ({open,handleClose,jobId,handleApply}) => {
  
  return (
    <div
      style={{
       
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position:"relative"
      }}
    >
      
      <Modal
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        
        <div style={{ width: "300PX", height: "300px", backgroundColor: "white" }}>
          <div>{jobId}</div>
          <button onClick={handleApply}>Apply</button>
          <button onClick={handleClose}>cancle</button>
        </div>


      </Modal>
    </div>
  );
};
