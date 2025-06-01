import Link from 'next/link'
import Image from 'next/image'

const artists = [
  {
    id: 1,
    name: 'Sarah Chen',
    style: 'Digital Portraits',
    price: '$50-100',
    image: '/artists/sarah.jpg',
    rating: 4.9,
    availability: 'Available',
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    style: 'Traditional Sketch',
    price: '$30-80',
    image: '/artists/marcus.jpg',
    rating: 4.8,
    availability: 'Available',
  },
  {
    id: 3,
    name: 'Emma Thompson',
    style: 'Watercolor',
    price: '$60-120',
    image: '/artists/emma.jpg',
    rating: 4.9,
    availability: 'Available',
  },
  {
    id: 4,
    name: 'James Wilson',
    style: 'Digital Art',
    price: '$40-90',
    image: '/artists/james.jpg',
    rating: 4.7,
    availability: 'Available',
  },
  {
    id: 5,
    name: 'Lisa Park',
    style: 'Manga/Anime',
    price: '$45-95',
    image: '/artists/lisa.jpg',
    rating: 4.8,
    availability: 'Available',
  },
  {
    id: 6,
    name: 'David Kim',
    style: 'Realistic Portraits',
    price: '$70-150',
    image: '/artists/david.jpg',
    rating: 4.9,
    availability: 'Available',
  },
]

export default function Artists() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Artists Marketplace</h1>
        <div className="flex gap-4">
          <select className="rounded-lg border-gray-300">
            <option>All Styles</option>
            <option>Digital Art</option>
            <option>Traditional</option>
            <option>Watercolor</option>
            <option>Manga/Anime</option>
          </select>
          <select className="rounded-lg border-gray-300">
            <option>Price Range</option>
            <option>$0-50</option>
            <option>$50-100</option>
            <option>$100+</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artists.map((artist) => (
          <div key={artist.id} className="card">
            <div className="relative h-64">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{artist.name}</h3>
                  <p className="text-gray-600">{artist.style}</p>
                </div>
                <span className="text-green-600 text-sm font-medium">
                  {artist.availability}
                </span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-accent font-medium">{artist.price}</span>
                <span className="text-yellow-400">★ {artist.rating}</span>
              </div>
              <Link
                href={`/artists/${artist.id}`}
                className="btn-primary w-full mt-4 text-center block"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 