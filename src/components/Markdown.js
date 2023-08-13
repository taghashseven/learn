import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from "./CodeBlocks";
import { useLocation } from "react-router-dom";
import './Markdown.css';
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'



const Markdown = (props) => {
  const [markdownText, setMarkdownText] = useState('');

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
    <div className={" w-full p-2 list-disc" +  " "+props.className}>
      <ReactMarkdown children={markdownText} 
        remarkPlugins={[remarkGfm]}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={vscDarkPlus}
                language={match[1]}
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          }
        }}
        />
    </div>
  );
}

export default Markdown;