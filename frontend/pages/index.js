// pages/index.js
export default function Dashboard() {
  const stats = [
    { label: 'Profiles Processed', value: 150 },
    { label: 'Captchas Handled', value: 10 },
    { label: 'Errors Encountered', value: 5 },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{stat.label}</h3>
            <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="bg-blue-600 text-white py-2 px-4 rounded shadow-md hover:bg-blue-700">
          Start Scraping
        </button>
      </div>
    </div>
  );
}
