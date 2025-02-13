import React, { useState } from 'react';
import './styles.css';

function App() {
  const [food, setFood] = useState('');
  const [score, setScore] = useState('');
  const [nation, setNation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { food, score, nation });
    // 这里可以添加将数据发送到后端的逻辑
  };

  return (
    <div className="app">
      <h1>Simple Score System</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Food:</label>
          <input
            type="text"
            value={food}
            onChange={(e) => setFood(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Score:</label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Nation:</label>
          <input
            type="text"
            value={nation}
            onChange={(e) => setNation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
