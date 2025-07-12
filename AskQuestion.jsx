// Your provided AskQuestion.jsx code, import correct css
import React, { useState } from "react";
import "../styles/ask-question.css";

const initialTags = [{ name: "javascript", color: "blue" }];

export default function AskQuestion() {
  const [tags, setTags] = useState(initialTags);
  const [tagInput, setTagInput] = useState("");

  function removeTag(idx) {
    setTags(tags.filter((_, i) => i !== idx));
  }

  function onTagInputKeyDown(e) {
    if (["Enter", ","].includes(e.key) && tagInput.trim() && tags.length < 5) {
      e.preventDefault();
      setTags([...tags, { name: tagInput.trim(), color: "blue" }]);
      setTagInput("");
    }
    if (e.key === "Backspace" && !tagInput && tags.length) {
      setTags(tags.slice(0, -1));
    }
  }

  return (
    <>
      <header className="main-header">
        <span className="logo">StackIt</span>
        <div className="header-actions">
          <span className="notification">
            <svg width="21" height="21" fill="none" stroke="#2476f7" strokeWidth="2" style={{ verticalAlign: "middle" }}>
              <path d="M10.5 3a5 5 0 0 0-5 5v3c0 .41-.167.82-.46 1.11l-.54.53a1 1 0 0 0-.29.7V15h16v-1.66c0-.26-.104-.52-.29-.7l-.54-.53A1.58 1.58 0 0 1 15.5 11V8a5 5 0 0 0-5-5z"/>
              <circle cx="17" cy="5" r="3" fill="#f95c5c" stroke="none"/>
            </svg>
            <span className="notif-count">3</span>
          </span>
          <span className="profile">
            <svg width="23" height="23" fill="none" stroke="#2476f7" strokeWidth="2" style={{ verticalAlign: "middle" }}>
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 19c0-2.67 5.33-4 8-4s8 1.33 8 4"/>
            </svg>
          </span>
          <button className="login-btn">Login</button>
        </div>
      </header>
      <div className="aq-container">
        <div className="aq-main">
          <h2>Ask a Question</h2>
          <form>
            <label>
              Title
              <input className="aq-title" type="text" placeholder="Be specific and imagine you’re asking a question to another person"/>
            </label>
            <label>
              Description
              <div className="aq-desc-toolbar">
                <button type="button"><b>B</b></button>
                <button type="button"><i>I</i></button>
                <button type="button"><u>U</u></button>
                <button type="button"><s>S</s></button>
                <button type="button">&#8220;</button>
                <button type="button">&#60;/&#62;</button>
                <button type="button"><b>H<sub>1</sub></b></button>
                <button type="button"><b>H<sub>2</sub></b></button>
                <button type="button">&#8226;</button>
                <button type="button">&#35;</button>
                <button type="button">x<sub>2</sub></button>
                <button type="button">x<sup>2</sup></button>
                <button type="button">&#128279;</button>
                <button type="button">&#128247;</button>
                <button type="button"><span style={{ fontStyle: "italic" }}>T</span><sub>𝑥</sub></button>
              </div>
              <textarea className="aq-desc" placeholder="Include all the information someone would need to answer your question..."></textarea>
            </label>
            <label>
              Tags
              <div className="aq-tags-input">
                {tags.map((tag, idx) => (
                  <span className={`aq-tag ${tag.color}`} key={tag.name}>
                    {tag.name}
                    <span className="close" onClick={() => removeTag(idx)}>&times;</span>
                  </span>
                ))}
                <input
                  type="text"
                  placeholder="Add up to 5 tags..."
                  value={tagInput}
                  onChange={e => setTagInput(e.target.value)}
                  onKeyDown={onTagInputKeyDown}
                  disabled={tags.length >= 5}
                />
              </div>
              <div className="aq-tags-help">Add up to 5 tags to describe what your question is about</div>
            </label>
            <button className="aq-post-btn" type="submit">Post Your Question</button>
          </form>
        </div>
        <aside className="aq-guide">
          <div className="aq-guide-box">
            <div className="aq-guide-title">How to Ask a Good Question</div>
            <ul>
              <li><span className="guide-dot"></span> Summarize your problem in a one-line title</li>
              <li><span className="guide-dot"></span> Describe what you’ve tried and what you expected to happen</li>
              <li><span className="guide-dot"></span> Add “tags” which help surface your question to members of the community</li>
              <li><span className="guide-dot"></span> Proofread for spelling and grammar errors</li>
              <li><span className="guide-dot"></span> Review your question and provide clarifications if needed</li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}