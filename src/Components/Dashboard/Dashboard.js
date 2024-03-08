import './Dashboard.css'

export const Dashboard = ({ scores }) => {

    const sortedScores = scores.sort((a, b) => b.score - a.score);

    return (
        <div className="container">
            <h1> Dashboard </h1>
            <hr></hr>
            <table className="score-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedScores.map((score, index) => (
                        <tr key={index}>
                            <td>{score.name}</td>
                            <td>{score.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard