import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AskQuestionForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const res = await fetch("http://localhost:5000/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        setStatus("Question posted!");
        setTitle("");
        setDescription("");
      } else {
        const err = await res.json();
        setStatus(err.msg || "Failed to post question.");
      }
    } catch (err) {
      setStatus("Server error: " + err.message);
    }
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ header: [1, 2, false] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header", "bold", "italic", "underline", "strike",
    "list", "bullet", "link", "image"
  ];

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 700, margin: "0 auto" }}>
      <h2>Ask a Question</h2>
      <div>
        <label>Title</label>
        <input
          style={{ width: "100%", marginBottom: 12 }}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Be specific and imagine you’re asking a question to another person"
          required
        />
      </div>
      <div>
        <label>Description</label>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          modules={modules}
          formats={formats}
          placeholder="Include all the information someone would need to answer your question..."
        />
      </div>
      <button type="submit" style={{ fontWeight: "bold", padding: "8px 20px", marginTop: 20 }}>
        Submit
      </button>
      <div style={{ marginTop: 8, color: "green" }}>{status}</div>
    </form>
  );
};

export default AskQuestionForm;