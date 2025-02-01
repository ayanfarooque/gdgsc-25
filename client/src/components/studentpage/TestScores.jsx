function TestScores() {
    const scores = [
      {
        date: "22/01/2025",
        code: "SSTUT01",
        subject: "Social Science",
        teacher: "Vikul J Pawar",
        score: "12/15",
      },
      {
        date: "23/01/2025",
        code: "SCIUT01",
        subject: "Science",
        teacher: "S C Sharma",
        score: "15/15",
      },
      {
        date: "24/01/2025",
        code: "HINUT01",
        subject: "Hindi",
        teacher: "V C Pandey",
        score: "14/15",
      },
    ]
  
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Test Scores</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Date</th>
                <th className="text-left p-2">Code</th>
                <th className="text-left p-2">Subject</th>
                <th className="text-left p-2">Teacher</th>
                <th className="text-left p-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score) => (
                <tr key={score.code} className="border-b">
                  <td className="p-2">{score.date}</td>
                  <td className="p-2">{score.code}</td>
                  <td className="p-2">{score.subject}</td>
                  <td className="p-2">{score.teacher}</td>
                  <td className="p-2">{score.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 border rounded-md hover:bg-gray-50">View All</button>
        </div>
      </div>
    )
  }
  
  export default TestScores
  
  