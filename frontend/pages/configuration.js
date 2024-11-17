// pages/configuration.js
export default function Configuration() {
    const options = ['Formal', 'Friendly', 'Neutral'];
  
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Scraping Configuration</h2>
        <form className="bg-white shadow-md p-6 rounded-md space-y-4">
          <div>
            <label className="block font-bold mb-2">Profile URLs (CSV or comma-separated)</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded"
              rows="4"
              placeholder="Enter profile URLs..."
            ></textarea>
          </div>
          <div>
            <label className="block font-bold mb-2">Message Tone</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              {options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Save Configuration
          </button>
        </form>
      </div>
    );
  }
  