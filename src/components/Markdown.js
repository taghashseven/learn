import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from "./CodeBlocks";
import { useLocation } from "react-router-dom";
import './Markdown.css';

const Markdown = (props) => {
  const [markdownText, setMarkdownText] = useState('');

  //  
  let location = useLocation().pathname

  

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        let pattern = /.+\/.+/
        if(location.match(pattern)){
          const response = await fetch(`/Notes/`+location+`.md`);
          const text = await response.text();
          setMarkdownText(text);
        }

        
      } catch (error) {
        console.error('Error fetching the markdown file:', error);
      }
    };

    fetchMarkdown();
  }, [location]);

  return (
    <div className={" w-full p-2" + " "+props.className}>
      <ReactMarkdown  renderers={{ code: CodeBlock }}  >{markdownText}</ReactMarkdown>
    </div>
  );
}

export default Markdown;