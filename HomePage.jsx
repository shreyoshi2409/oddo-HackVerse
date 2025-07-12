import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

const QUESTIONS = [
  {
    id: 1,
    title: "How to implement authentication in a React application?",
    tags: [
      { name: "react", color: "blue" },
      { name: "authentication", color: "green" },
      { name: "javascript", color: "purple" },
    ],
    description:
      "I'm building a React application and need to implement user authentication. I've looked into JWT but I'm not sure about the best practices for storing tokens and handling...",
    user: { name: "Sarah Johnson", avatar: "user-sarah", time: "2 hours ago" },
    answers: 5,
  },
  {
    id: 2,
    title: "Best practices for responsive design in 2023",
    tags: [
      { name: "css", color: "yellow" },
      { name: "responsive", color: "pink" },
      { name: "design", color: "blue" },
    ],
    description:
      "With the increasing variety of device sizes, what are the current best practices for responsive web design? Should we still be using media queries or are there better approaches...",
    user: { name: "Michael Chen", avatar: "user-michael", time: "1 day ago" },
    answers: 8,
  },
  {
    id: 3,
    title: "How to optimize database queries in PostgreSQL?",
    tags: [
      { name: "postgresql", color: "blue" },
      { name: "database", color: "green" },
      { name: "performance", color: "teal" },
    ],
    description:
      "I have a large PostgreSQL database with millions of records, and some of my queries are taking too long to execute. What are some strategies to optimize these queries?",
    user: { name: "Alex Rodriguez", avatar: "user-alex", time: "3 days ago" },
    answers: 3,
  },
  {
    id: 4,
    title: "Understanding async/await in JavaScript",
    tags: [
      { name: "javascript", color: "yellow" },
      { name: "async", color: "purple" },
    ],
    description:
      "I'm trying to understand the async/await pattern in JavaScript. How does it differ from using Promises directly? Are there any performance implications I should be aware of?",
    user: { name: "Emily Wilson", avatar: "user-emily", time: "5 days ago" },
    answers: 12,
  },
  {
    id: 5,
    title: "Getting started with Docker for web development",
    tags: [
      { name: "docker", color: "blue" },
      { name: "devops", color: "green" },
      { name: "web-dev", color: "pink" },
    ],
    description:
      "I'm new to Docker and want to use it for my web development projects. What's the best way to set up a development environment with Docker? Are there any good starter...",
    user: { name: "David Kim", avatar: "user-david", time: "1 week ago" },
    answers: 7,
  },
];

const TOTAL_PAGES = 5;

function Tag({ name, color }) {
  return <span className={`tag ${color}`}>{name}</span>;
}

function QuestionCard({ question }) {
  return (
    <div className="question-card">
      <div className="q-content">
        <div className="q-title">{question.title}</div>
        <div className="q-tags">
          {question.tags.map((tag, idx) => (
            <Tag key={idx} {...tag} />
          ))}
        </div>
        <div className="q-desc">{question.description}</div>
        <div className="q-user">
          <span className={`user-avatar ${question.user.avatar}`}></span>
          {question.user.name} &nbsp;•&nbsp; {question.user.time}
        </div>
      </div>
      <div className="q-answers">{question.answers} ans</div>
    </div>
  );
}

export default function HomePage() {
  const [activePage, setActivePage] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Header */}
      <header className="main-header">
        <div className="header-left">
          <span className="logo">StackIt</span>
        </div>
        <div className="header-right">
          <button className="ask-btn" onClick={() => navigate("/ask")}>
            Ask New Question
          </button>
          <button className="filter active">Newest</button>
          <button className="filter">Unanswered</button>
          <div className="dropdown">
            <button className="filter">
              More <span className="arrow">&#9660;</span>
            </button>
          </div>
          <div className="searchbar">
            <input type="text" placeholder="Search questions..." />
            <button className="search-icon">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="8" cy="8" r="7" />
                <line x1="13" y1="13" x2="17" y2="17" />
              </svg>
            </button>
          </div>
          <div className="header-icons">
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
          </div>
          <button className="login-btn">Login</button>
        </div>
      </header>

      {/* Questions */}
      <main>
        <div className="questions-list">
          {QUESTIONS.map((q) => (
            <QuestionCard key={q.id} question={q} />
          ))}
        </div>
        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() => setActivePage((p) => Math.max(1, p - 1))}
            disabled={activePage === 1}
          >
            &lt;
          </button>
          {[...Array(TOTAL_PAGES)].map((_, idx) => (
            <button
              key={idx + 1}
              className={activePage === idx + 1 ? "active" : ""}
              onClick={() => setActivePage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
          <button
            onClick={() => setActivePage((p) => Math.min(TOTAL_PAGES, p + 1))}
            disabled={activePage === TOTAL_PAGES}
          >
            &gt;
          </button>
        </div>
      </main>
    </div>
  );
}