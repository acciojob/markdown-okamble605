import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "./App.css";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Hello world");

  useEffect(() => {
    // Set marked.js options if needed
    marked.setOptions({
      breaks: true,
    });
  }, []);

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write Markdown here..."
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default MarkdownEditor;
