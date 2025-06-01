import Image from 'next/image'
import Link from 'next/link'

// This would typically come from a database
const artist = {
  id: 1,
  name: 'Sarah Chen',
  style: 'Digital Portraits',
  price: '$50-100',
  image: '/artists/sarah.jpg',
  rating: 4.9,
  availability: 'Available',
  bio: 'Digital artist specializing in portraits and character design. With over 5 years of experience, I bring your ideas to life with attention to detail and a unique artistic style.',
  portfolio: [
    '/portfolio/sarah1.jpg',
    '/portfolio/sarah2.jpg',
    '/portfolio/sarah3.jpg',
  ],
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
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/3 h-96">
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            className="object-cover rounded-xl"
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
            <Link href={`/booking/${artist.id}`} className="btn-primary">
              Book Now
            </Link>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {artist.portfolio.map((image, index) => (
            <div key={index} className="relative h-64">
              <Image
                src={image}
                alt={`${artist.name}'s work ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Reviews</h2>
        <div className="space-y-6">
          {artist.reviews.map((review) => (
            <div key={review.id} className="card p-6">
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