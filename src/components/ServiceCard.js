export default function ServiceCard({ title, details }) {
    return (
      <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{details}</p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
          View Details
        </button>
      </div>
    );
  }
  