import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-600 text-white flex flex-col space-y-6 p-4">
      <h1 className="text-2xl font-bold">Profile Scraper</h1>
      <nav className="flex flex-col space-y-2">
        <Link href="/" className="py-2 px-4 rounded hover:bg-blue-700">
          Dashboard
        </Link>
        <Link href="/configuration" className="py-2 px-4 rounded hover:bg-blue-700">
          Configuration
        </Link>
        <Link href="/logs" className="py-2 px-4 rounded hover:bg-blue-700">
          Execution Logs
        </Link>
        <Link href="/settings" className="py-2 px-4 rounded hover:bg-blue-700">
          Settings
        </Link>
      </nav>
    </div>
  );
}
