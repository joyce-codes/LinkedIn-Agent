import '../styles/globals.css';
import Sidebar from '../components/Sidebar';

export default function App({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
