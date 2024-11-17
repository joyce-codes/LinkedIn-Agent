// pages/settings.js
export default function Settings() {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        <form className="bg-white shadow-md p-6 rounded-md space-y-4">
          <div>
            <label className="block font-bold mb-2">Daily Scraping Limit</label>
            <input
              type="number"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter limit..."
            />
          </div>
          <div>
            <label className="block font-bold mb-2">Retry Limit</label>
            <input
              type="number"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter retry limit..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Save Settings
          </button>
        </form>
      </div>
    );
  }
  