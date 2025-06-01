import Link from 'next/link'
import Image from 'next/image'

const featuredArtists = [
  {
    id: 1,
    name: 'Sarah Chen',
    style: 'Digital Portraits',
    price: '$50-100',
    rating: 4.9,
    image: '/SARAH_CHEN.jpg',
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    style: 'Traditional Sketch',
    price: '$30-80',
    rating: 4.8,
    image: '/marcus_rodriguez.jpeg',
  },
  {
    id: 3,
    name: 'Emma Thompson',
    style: 'Watercolor',
    price: '$60-120',
    rating: 4.9,
    image: '/emma_thompson.jpeg',
  },
]

const stats = [
  { number: '500+', label: 'Active Artists' },
  { number: '10k+', label: 'Completed Projects' },
  { number: '4.9', label: 'Average Rating' },
  { number: '24/7', label: 'Support' },
]

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-6 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-purple-500/5 animate-gradient-x"></div>
        <h1 className="text-5xl font-bold text-gray-900 animate-fade-in">
          Connect with Talented Artists
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
          Book custom sketches from professional artists around the world. 
          Find your perfect match and bring your ideas to life.
        </p>
        <div className="animate-bounce-in">
          <Link 
            href="/artists" 
            className="btn-primary inline-block transform hover:scale-105 transition-transform duration-200"
          >
            Browse Artists
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
        {stats.map((stat, index) => (
          <div 
            key={stat.label}
            className="card p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtists.map((artist, index) => (
            <div 
              key={artist.id} 
              className="card transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  className="btn-primary w-full mt-4 text-center block transform hover:scale-105 transition-transform duration-200"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose InkTime?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-4 transform hover:scale-105 transition-transform duration-200">
              <div className="text-4xl mb-2 animate-bounce">🎨</div>
              <h3 className="font-semibold mb-2">Diverse Artists</h3>
              <p className="text-gray-600">Find artists specializing in various styles and techniques</p>
            </div>
            <div className="p-4 transform hover:scale-105 transition-transform duration-200">
              <div className="text-4xl mb-2 animate-bounce" style={{ animationDelay: '0.2s' }}>⭐</div>
              <h3 className="font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Every artist is vetted for quality and professionalism</p>
            </div>
            <div className="p-4 transform hover:scale-105 transition-transform duration-200">
              <div className="text-4xl mb-2 animate-bounce" style={{ animationDelay: '0.4s' }}>💫</div>
              <h3 className="font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Simple scheduling and secure payment system</p>
            </div>
          </div>
        </div>
      </section>

      <section className="animate-fade-in">
        <div className="card p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">Join our community of artists and art lovers today</p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/artists" 
              className="btn-primary transform hover:scale-105 transition-transform duration-200"
            >
              Find an Artist
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 border-2 border-accent text-accent rounded-lg hover:bg-accent/5 transition-all duration-200 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 