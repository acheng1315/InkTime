import Link from 'next/link'
import Image from 'next/image'

// This would typically come from a database
const artist = {
  id: 1,
  name: 'Sarah Chen',
  style: 'Digital Portraits',
  price: '$50-100',
  rating: 4.9,
  availability: 'Available',
  bio: 'Digital artist specializing in portraits and character design. With over 5 years of experience, I bring your ideas to life with attention to detail and a unique artistic style.',
  image: '/SARAH_CHEN.jpg',
  portfolio: [1, 2, 3], // Placeholder for portfolio items
  reviews: [
    {
      id: 1,
      name: 'John D.',
      rating: 5,
      comment: 'Sarah created an amazing portrait of my family. Her attention to detail is incredible!',
      date: '2024-02-15',
    },
    {
      id: 2,
      name: 'Maria S.',
      rating: 5,
      comment: 'Professional, talented, and great communication. Will definitely commission again!',
      date: '2024-02-10',
    },
  ],
}

export default function ArtistProfile({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/3 h-96 rounded-xl overflow-hidden">
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">{artist.name}</h1>
              <p className="text-gray-600">{artist.style}</p>
            </div>
            <span className="text-green-600 font-medium">
              {artist.availability}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">★ {artist.rating}</span>
            <span className="text-gray-600">({artist.reviews.length} reviews)</span>
          </div>
          <p className="text-gray-600">{artist.bio}</p>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-accent">{artist.price}</span>
            <Link 
              href={`/booking/${artist.id}`} 
              className="btn-primary transform hover:scale-105 transition-transform duration-200"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      <section className="animate-fade-in" style={{ animationDelay: '200ms' }}>
        <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {artist.portfolio.map((_, index) => (
            <div 
              key={index} 
              className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg animate-pulse"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Portfolio Image {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="animate-fade-in" style={{ animationDelay: '400ms' }}>
        <h2 className="text-2xl font-bold mb-6">Reviews</h2>
        <div className="space-y-6">
          {artist.reviews.map((review) => (
            <div 
              key={review.id} 
              className="card p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span>{review.rating}</span>
                  </div>
                </div>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              <p className="mt-4 text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 