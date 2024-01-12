import React, { useState, useEffect } from 'react';
import {marked} from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faExpand } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import './App.css';
import editorIcon from 'C:/Users/suhaib/Downloads/aflogo-transformed.png';
import bacground from "C:/Users/suhaib/Downloads/pexels-lumn-399161.jpg";

const AppContainer = styled.div`transformed.png
opacity:0.6;
margin-top:0;
padding:20px;
overflow-y:auto;
background:url(${bacground}) center/cover no-repeat fixed ;
width: 100%;
height: 100vh;
background-position:content;

  display: flex;
  justify-content: center;
  align-items: start;
  height: 900px;
  perspective: 72px;
`;

const AppWrapper = styled.div`
padding-bottom:0;
margin-top:0;

  position: relative;
  width: 80%;
 min-height:200px;
  max-width: 800px;
  margin: 0 auto;
  
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  transition: transform 0.3s ease;
  &.fullscreen {
   
  }
  &.hidden {
    display: none;
  }
`;

const Editor = styled.textarea`
opacity:0.6;
padding:10px;
background-color:yellow;
width: 100%;
  height: 150px;
  border: 1px solid #ccc;
  box-sizing: border-box;

  font-size: 16px;
  margin-top:0;

  transform: rotateX(0deg);
  transition: transform 0.3s ease;
  &.fullscreen {
    height:90vh
  }
  &.hidden {
    display: none;
  }
    resize: vertical;
`;

const EditorHeader = styled.div`

margin-top:0px;
margin-bottom:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  &.hidden {
    display: none;
  }
`;

const EditorHeaderText = styled.h2`
  color: white;
  margin: 0;
`;
const Preview = styled.div`
opacity:0.6;
background-color:white;
  width: 100%;
  min-height:200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-bottom:40px;
  padding: 10px;
  font-size: 16px;
  transform: rotateX(0deg);
  transition: transform 0.3s ease;
  &.fullscreen {
    height:100vh
   }
  &.hidden {
    display: none;
  }
`;

const FullscreenButton = styled.button`
  position: relative;
  font-size: 20px;
  cursor: pointer;
margin:0;
  &.hidden {
    display: none;
  }
  padding:4px;
`;


function App() {
  const [markdown, setMarkdown] = useState('');
  const [isEditorFullscreen, setIsEditorFullscreen] = useState(false);
  const [isPreviewFullscreen, setIsPreviewFullscreen] = useState(false);

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(markdown);
  }, [markdown]);

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  const toggleFullscreen =(type)  => {
    if (type === 'editor') {
      setIsEditorFullscreen(!isEditorFullscreen);
      setIsPreviewFullscreen(false);
    } else if (type === 'preview') {
      setIsPreviewFullscreen(!isPreviewFullscreen);
      setIsEditorFullscreen(false);
    }
  };

  return (
   
    <AppContainer>
    <AppWrapper className={isEditorFullscreen || isPreviewFullscreen ? 'fullscreen' : ''}>
    <AppWrapper className={`${isPreviewFullscreen ? 'hidden' : ''} ${isEditorFullscreen ? 'fullscreen' : ''}`}><EditorHeader className={`${isPreviewFullscreen ? 'hidden' : ''} ${isEditorFullscreen ? 'fullscreen' : ''}`}>
          <EditorHeaderText>Eng. Suhaib</EditorHeaderText>
          <img src={editorIcon} alt="Icon" width="41px" style={{margin:0}} />
          <FullscreenButton className={isPreviewFullscreen ? 'hidden' : ''} onClick={() => toggleFullscreen('editor')}>
          <FontAwesomeIcon className='h1' icon={isEditorFullscreen ? faCompress : faExpand} />
        </FullscreenButton>
        </EditorHeader>
        <Editor
        className={`${isPreviewFullscreen ? 'hidden' : ''} ${isEditorFullscreen ? 'fullscreen' : ''}`}
          id="editor"
          value={markdown}
          onChange={handleInputChange}
          placeholder="Type your Markdown here..."
        />
        </AppWrapper>
         <AppWrapper  className={`${isEditorFullscreen ? 'hidden' : ''} ${isPreviewFullscreen ? 'fullscreen' : ''}`}>
         <EditorHeader className={`${isEditorFullscreen ? 'hidden' : ''} ${isPreviewFullscreen ? 'fullscreen' : ''}`}>
           <EditorHeaderText>Eng. Suhaib</EditorHeaderText>
          {/* Add your icon or any other content here */}
          <img src={editorIcon} alt="Icon" width="41px" />
          <FullscreenButton className={isEditorFullscreen ? 'hidden' : ''} onClick={() => toggleFullscreen('preview')} right="10px">
          <FontAwesomeIcon className='h1' icon={isPreviewFullscreen ? faCompress : faExpand} />
        </FullscreenButton>
        </EditorHeader>
          <Preview id="preview" className={`${isEditorFullscreen ? 'hidden' : ''} ${isPreviewFullscreen ? 'fullscreen' : ''}`} />
        </AppWrapper>
      
      
      </AppWrapper>
    </AppContainer>
  
  );
}

export default App;
