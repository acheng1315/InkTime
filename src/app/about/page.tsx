import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">About Inktime</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Inktime is a revolutionary platform that bridges the gap between talented artists and art enthusiasts. 
          We believe that everyone deserves access to unique, personalized artwork that captures their vision 
          and brings their ideas to life.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our marketplace connects you with a diverse community of skilled artists, each bringing their own 
          unique style and perspective. Whether you're looking for a quick sketch, a detailed portrait, or 
          a custom illustration, Inktime makes it easy to find the perfect artist for your needs.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We're on a mission to democratize art creation and appreciation. By providing a platform where 
          artists can showcase their work and connect with clients directly, we're helping to build a more 
          accessible and sustainable art community.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Meet the Founder</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <Image
              src="/founder.jpg"
              alt="Andrew Cheng"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Andrew Cheng</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              As the founder of Inktime, I've always been passionate about connecting people through art. 
              With a background in technology and a deep appreciation for creative expression, I created 
              Inktime to make it easier for artists to share their talent and for art lovers to discover 
              unique pieces that speak to them.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My vision for Inktime is to create a vibrant community where artists can thrive and where 
              everyone can experience the joy of commissioning custom artwork. I believe that art should 
              be accessible to all, and Inktime is my way of making that vision a reality.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 