import React, { useState, useEffect } from 'react';
import Quiz from './Components/Quiz/Quiz';
import Dashboard from './Components/Dashboard/Dashboard';
import { USER_SCORE_QUERY, graphcms } from './Graphql/Queries';

function App() {
  const [scores, setScores] = useState([]);
  const [showDashboard, setShowDashboard] = useState(false);


  const fetchScores = async () => {
    const { userScores } = await graphcms.request(USER_SCORE_QUERY);
    setScores(userScores);
  };

  useEffect(() => {
    fetchScores();
  }, []);

  return (
    <div className="App">
      <Quiz onScoreSave={fetchScores} onQuizEnd={setShowDashboard} />
      {showDashboard && <Dashboard scores={scores} />}
    </div>
  );
}

export default App;