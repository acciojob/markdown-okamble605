import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Welcome to Markdown Editor\n\nStart typing markdown on the left!");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="container">
          <textarea
            className="textarea"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
          <div className="preview">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarkdownEditor;
