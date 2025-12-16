"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [guestbooks, setGuestbooks] = useState([]);
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");

  const API_BASE_URL = "http://localhost:8080";

  const fetchGuestbooks = async () => {
    const res = await fetch(`${API_BASE_URL}/api/guestbooks`);
    const data = await res.json();
    setGuestbooks(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${API_BASE_URL}/api/guestbooks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nickname, content }),
    });

    setNickname("");
    setContent("");
    fetchGuestbooks();
  };

  useEffect(() => {
    fetchGuestbooks();
  }, []);

  return (
    <div className="guestbook-container">
      <div className="guestbook-inner">
        <h1 className="guestbook-title">오늘의 다짐</h1>

        <form onSubmit={handleSubmit} className="guestbook-form">
          <div className="guestbook-form-group">
            <input
              placeholder="닉네임"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
              className="guestbook-input"
            />
          </div>
          <div className="guestbook-form-group">
            <textarea
              placeholder="다짐 내용"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows="4"
              className="guestbook-textarea"
            />
          </div>
          <button type="submit" className="guestbook-submit-button">
            등록
          </button>
        </form>

        <ul className="guestbook-list">
          {guestbooks.map((g) => (
            <li key={g.id} className="guestbook-item">
              <strong className="guestbook-nickname">{g.nickname}</strong>
              <span className="guestbook-content">: {g.content}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
