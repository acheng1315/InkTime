import { format } from 'date-fns'

// This would typically come from a database
const artist = {
  id: 1,
  name: 'Sarah Chen',
  style: 'Digital Portraits',
  price: '$50-100',
  availability: [
    '2024-03-01T10:00:00',
    '2024-03-01T14:00:00',
    '2024-03-02T11:00:00',
    '2024-03-02T15:00:00',
    '2024-03-03T10:00:00',
    '2024-03-03T14:00:00',
  ],
}

export default function Booking({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Book a Session with {artist.name}</h1>
        <p className="text-gray-600 mt-2">
          Select your preferred time slot for your {artist.style} session
        </p>
      </div>

      <div className="card p-6 transform hover:shadow-lg transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4">Available Time Slots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {artist.availability.map((slot, index) => (
            <button
              key={slot}
              className="p-4 border border-gray-200 rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-200 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {format(new Date(slot), 'MMM d, yyyy h:mm a')}
            </button>
          ))}
        </div>
      </div>

      <div className="card p-6 transform hover:shadow-lg transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Description
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
              rows={4}
              placeholder="Describe what you'd like the artist to create..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reference Images (optional)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-accent transition-colors duration-200">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-accent hover:text-accent/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-accent"
                  >
                    <span>Upload files</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple accept="image/*" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Special Requests
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
              rows={2}
              placeholder="Any specific requirements or preferences..."
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full transform hover:scale-105 transition-transform duration-200"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  )
} 