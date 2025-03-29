import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-600">Page Not Found</p>
      <Link to="/" className="mt-4 bg-blue-500 text-white p-2 rounded-lg">
        Go to Dashboard
      </Link>
    </div>
  );
}
