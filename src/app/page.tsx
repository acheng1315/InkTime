import Link from 'next/link'
import Image from 'next/image'

const featuredArtists = [
  {
    id: 1,
    name: 'Sarah Chen',
    style: 'Digital Portraits',
    price: '$50-100',
    image: '/artists/sarah.jpg',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    style: 'Traditional Sketch',
    price: '$30-80',
    image: '/artists/marcus.jpg',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Emma Thompson',
    style: 'Watercolor',
    price: '$60-120',
    image: '/artists/emma.jpg',
    rating: 4.9,
  },
]

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Connect with Talented Artists
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Book custom sketches from professional artists around the world. 
          Find your perfect match and bring your ideas to life.
        </p>
        <Link href="/artists" className="btn-primary inline-block">
          Browse Artists
        </Link>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtists.map((artist) => (
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
                <h3 className="text-xl font-semibold">{artist.name}</h3>
                <p className="text-gray-600">{artist.style}</p>
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
      </section>
    </div>
  )
} 