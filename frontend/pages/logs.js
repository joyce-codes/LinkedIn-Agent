// pages/logs.js
const logs = [
    { profile: 'John Doe', status: 'Success', details: 'All data retrieved.' },
    { profile: 'Jane Smith', status: 'Error', details: 'Captcha required.' },
  ];
  
  export default function Logs() {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Execution Logs</h2>
        <table className="min-w-full bg-white shadow-md rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-4 font-bold">Profile</th>
              <th className="text-left p-4 font-bold">Status</th>
              <th className="text-left p-4 font-bold">Details</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{log.profile}</td>
                <td className="p-4">{log.status}</td>
                <td className="p-4">{log.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
