import React, { useRef } from "react";
import "../styles/QuestionPage.css";

export default function QuestionPage() {
  const textareaRef = useRef(null);

  return (
    <>
      {/* Header */}
      <header>
        <div className="container">
          <div className="header-container">
            <div className="logo">StackIt</div>
            <div className="header-right">
              {/* Home icon linked to index.html (home) */}
              <a href="index.html" className="home-icon">
                <i className="fas fa-home"></i>
              </a>
              <div className="avatar">
                <i className="fas fa-user"></i>
              </div>
              <div className="user-tag user-tag-1">Atharv Mirgal</div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-list">
            <div className="breadcrumb-item">
              <a href="#">Question</a>
            </div>
            <div className="breadcrumb-item">How to join 2...</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container">
        {/* Question Section */}
        <section className="question-section">
          <div className="question-header">
            <h1 className="question-title">
              How to join 2 columns in a data set to make a separate column in SQL
            </h1>
            <div className="question-meta">
              <div className="question-author">
                <img
                  src="https://i.pravatar.cc/150?img=1"
                  alt="User"
                  className="author-avatar"
                />
                <span className="author-name user-tag-2">Adorable Marten</span>
              </div>
              <span className="timestamp">Asked 2 days ago</span>
            </div>
          </div>
          <div className="question-content">
            <p>
              I have a dataset with two columns: first_name and last_name. I need to
              create a new column called full_name that combines these two columns
              with a space in between.
            </p>
            <p>
              I've tried using the + operator but it's not working as expected.
              Here's what I've tried so far:
            </p>
            <pre>
              <code>
                SELECT first_name + ' ' + last_name AS full_name FROM users;
              </code>
            </pre>
            <p>
              This works in SQL Server but I'm using MySQL and getting an error.
              What's the correct way to do this in MySQL?
            </p>
          </div>
          <div className="question-tags">
            <span className="tag">sql</span>
            <span className="tag">mysql</span>
            <span className="tag">database</span>
            <span className="tag">join</span>
            <span className="tag">concatenation</span>
          </div>
        </section>

        {/* Answers Section */}
        <section className="answers-section">
          <div className="answers-header">
            <h2 className="answers-count">3 Answers</h2>
            <div className="sort-dropdown">
              <button className="sort-button">
                <i className="fas fa-sort"></i>Sort by: Votes
              </button>
            </div>
          </div>
          {/* Answer 1 */}
          <div className="answer-card">
            <div className="vote-controls">
              <button className="vote-button">
                <i className="fas fa-chevron-up"></i>
              </button>
              <span className="vote-count">15</span>
              <button className="vote-button">
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <div className="answer-content">
              <div className="answer-text">
                <p>
                  In MySQL, you should use the CONCAT function instead of the + operator for string concatenation:
                </p>
                <pre>
                  <code>
                    SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;
                  </code>
                </pre>
                <p>
                  This will combine the first_name and last_name columns with a space in between, creating the full_name column you want.
                </p>
                <p>
                  If you're dealing with potential NULL values, you might want to use CONCAT_WS (Concatenate With Separator) which handles NULLs better:
                </p>
                <pre>
                  <code>
                    SELECT CONCAT_WS(' ', first_name, last_name) AS full_name FROM users;
                  </code>
                </pre>
              </div>
              <div className="answer-meta">
                <div className="answer-author">
                  <i className="fas fa-check-circle accepted-answer"></i>
                  <img
                    src="https://i.pravatar.cc/150?img=3"
                    alt="User"
                    className="author-avatar"
                  />
                  <span className="author-name user-tag-3">
                    Vigilant Alligator
                  </span>
                  <span className="timestamp">Answered 2 days ago</span>
                </div>
                <button className="details-button">
                  Details <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>
          </div>
          {/* Answer 2 */}
          <div className="answer-card">
            <div className="vote-controls">
              <button className="vote-button">
                <i className="fas fa-chevron-up"></i>
              </button>
              <span className="vote-count">8</span>
              <button className="vote-button">
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <div className="answer-content">
              <div className="answer-text">
                <p>
                  To add to the previous answer, if you want to make this a permanent column in your table rather than just in a SELECT query, you can use an ALTER TABLE statement:
                </p>
                <pre>
                  <code>
                    ALTER TABLE users ADD COLUMN full_name VARCHAR(255);
UPDATE users SET full_name = CONCAT(first_name, ' ', last_name);
                  </code>
                </pre>
                <p>
                  This will create a new column and populate it with the concatenated values. Remember to adjust the VARCHAR length based on your data needs.
                </p>
              </div>
              <div className="answer-meta">
                <div className="answer-author">
                  <img
                    src="https://i.pravatar.cc/150?img=4"
                    alt="User"
                    className="author-avatar"
                  />
                  <span className="author-name user-tag-4">
                    Adventurous Hawk
                  </span>
                  <span className="timestamp">Answered 1 day ago</span>
                </div>
                <button className="details-button">
                  Details <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>
          </div>
          {/* Answer 3 */}
          <div className="answer-card">
            <div className="vote-controls">
              <button className="vote-button">
                <i className="fas fa-chevron-up"></i>
              </button>
              <span className="vote-count">3</span>
              <button className="vote-button">
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            <div className="answer-content">
              <div className="answer-text">
                <p>
                  Another approach is to use a computed column if you're using MySQL 5.7+ or MariaDB 5.2+:
                </p>
                <pre>
                  <code>
                    ALTER TABLE users ADD COLUMN full_name VARCHAR(255) 
GENERATED ALWAYS AS (CONCAT(first_name, ' ', last_name)) STORED;
                  </code>
                </pre>
                <p>
                  This creates a column that's automatically kept in sync with the source columns. If first_name or last_name changes, full_name will update automatically.
                </p>
              </div>
              <div className="answer-meta">
                <div className="answer-author">
                  <img
                    src="https://i.pravatar.cc/150?img=5"
                    alt="User"
                    className="author-avatar"
                  />
                  <span className="author-name user-tag-5">
                    Trustworthy Magpie
                  </span>
                  <span className="timestamp">Answered 12 hours ago</span>
                </div>
                <button className="details-button">
                  Details <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Submit Your Answer Section */}
        <section className="answer-form-section">
          <div
            className="answer-form-header"
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#1e293b",
              marginBottom: 16,
            }}
          >
            <i className="fas fa-pen"></i> Submit Your Answer
          </div>
          <textarea
            ref={textareaRef}
            rows={7}
            placeholder="Write your answer here..."
            style={{
              width: "100%",
              padding: 12,
              fontSize: 15,
              borderRadius: 6,
              border: "1px solid #e2e8f0",
              resize: "vertical",
              marginBottom: 12,
              fontFamily: "inherit",
            }}
          ></textarea>
          <button className="submit-button">Submit</button>
        </section>
      </main>
    </>
  );
}