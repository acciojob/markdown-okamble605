import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./styles/App.css";

const App = () => {
  const [markdown, setMarkdown] = useState("# Hello, Markdown!");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <p className="loading">Loading...</p>
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

export default App;
