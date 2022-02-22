
import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import axios from "axios";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { convertFromRaw } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux'
import{connect} from 'react-redux'
export default class Answers extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  constructor(props){
    super(props);
    this.state={
      todoData:'',
    };
  }
 handelChange=(e)=>{
   this.setState({todoData:e.target.value});
 } 
saveTodo=()=>{
  this.setState({todoData:''});
}

  render() {
 
    const { editorState } = this.state;
  // const dispatch=useDispatch()
    const handleSave=()=>{
      const data=(editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent())))
      console.log(data)
      
    }
  
  
    return (
      <>
      <div>
       
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
      
          value={this.state.todoData}
        />
        <Button onClick={()=>this.saveTodo()}>Post</Button>
      </div>
  
      </>
    );
  }
}