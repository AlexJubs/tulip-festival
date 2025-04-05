import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-xl font-bold mb-8">Ottawa Tulip Festival: Stops</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7].map((stopNumber) => (
          <Link
            key={stopNumber}
            to={`/stop/${stopNumber}`}
            className="px-6 py-4 bg-black text-white rounded-lg hover:border-gray-400 transition-all duration-200 text-center shadow-md hover:shadow-lg text-lg font-medium"
          >
            Stop {stopNumber}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage; 