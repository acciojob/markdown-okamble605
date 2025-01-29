import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "./App.css";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Welcome to Markdown!");

  useEffect(() => {
    marked.setOptions({ breaks: true });
  }, []);

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write your markdown here..."
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default MarkdownEditor;
