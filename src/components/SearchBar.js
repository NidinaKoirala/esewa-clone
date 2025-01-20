export default function SearchBar() {
    return (
      <div className="py-4 px-8 bg-white shadow-md rounded-md flex items-center gap-4">
        <input
          type="text"
          placeholder="Search services, merchants, or tags..."
          className="flex-grow p-2 border border-gray-300 rounded-md"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          Search
        </button>
      </div>
    );
  }
  