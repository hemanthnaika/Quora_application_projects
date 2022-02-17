// import "./styles.css";
import { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import React from 'react';
import { Clear } from "@material-ui/icons";
export default function Question() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false // all options from https://xdsoft.net/jodit/doc/
    
  };
  const [open, setOpen] = React.useState(false);
  const handleSave = () => {
    setOpen(true);
    console.log({content})
    Clear({content})
  };

  const handleClose = () => {
    setOpen(false);
  };
 


  return (
    <>
    <JoditEditor
       open={open}
      ref={editor}
      
      value={content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => setContent(newContent)}  // preferred to use only this option to update the content for performance reasons
    
      onChange={(newContent) => {}}
      
    />
     <DialogActions>
 
   <Button onClick={handleClose} color="primary"
            >
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" >
             Save 
          </Button >
          </DialogActions>
  </>
  );

}

