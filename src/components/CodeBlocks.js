import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

const CodeBlock = ({ language, value }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [value, language]);

  return (
    <pre>
      <code ref={codeRef} className={`language-javascript`}>
        {value}
      </code>
    </pre>
  );
};

export { CodeBlock };
