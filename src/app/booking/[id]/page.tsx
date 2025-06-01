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
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Book a Session with {artist.name}</h1>
        <p className="text-gray-600 mt-2">
          Select your preferred time slot for your {artist.style} session
        </p>
      </div>

      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">Available Time Slots</h2>
        <div className="grid grid-cols-2 gap-4">
          {artist.availability.map((slot) => (
            <button
              key={slot}
              className="p-4 border border-gray-200 rounded-lg hover:border-accent hover:bg-accent/5 transition-colors"
            >
              {format(new Date(slot), 'MMM d, yyyy h:mm a')}
            </button>
          ))}
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Description
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              rows={4}
              placeholder="Describe what you'd like the artist to create..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reference Images (optional)
            </label>
            <input
              type="file"
              multiple
              className="w-full p-2 border border-gray-300 rounded-lg"
              accept="image/*"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Special Requests
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              rows={2}
              placeholder="Any specific requirements or preferences..."
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  )
} 