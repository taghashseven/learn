import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from "./CodeBlocks";
import './Markdown.css';

const Markdown = (props) => {
  const [markdownText, setMarkdownText] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/Notes/pwa/introduction.md`);
        const text = await response.text();
        setMarkdownText(text);
      } catch (error) {
        console.error('Error fetching the markdown file:', error);
      }
    };

    fetchMarkdown();
  }, []);

  return (
    <div className={" w-full p-2" + " "+props.className}>
      <ReactMarkdown  renderers={{ code: CodeBlock }}  >{markdownText}</ReactMarkdown>
    </div>
  );
}

export default Markdown;