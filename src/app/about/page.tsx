import Image from 'next/image'

const milestones = [
  { year: '2024', title: 'Platform Launch', description: 'InkTime officially launches with 100+ artists' },
  { year: '2023', title: 'Beta Testing', description: 'Private beta with select artists and clients' },
  { year: '2022', title: 'Development', description: 'Building the platform with artist feedback' },
]

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gradient animate-pulse-slow">About InkTime</h1>
        <p className="text-xl text-gray-600 animate-fade-in-delay">
          Connecting artists and art lovers through the power of custom sketches
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 rounded-xl overflow-hidden hover-glow">
          <Image
            src="/andrew.png"
            alt="Andrew Cheng - Founder of InkTime"
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gradient">Meet the Founder</h2>
          <p className="text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Hi, I'm Andrew Cheng, the founder of InkTime. As an art enthusiast and tech entrepreneur, 
            I created InkTime to bridge the gap between talented artists and people looking for 
            unique, personalized artwork.
          </p>
          <p className="text-gray-600 animate-fade-in" style={{ animationDelay: '400ms' }}>
            Our mission is to make custom art accessible to everyone while providing artists with 
            a platform to showcase their talent and connect with clients worldwide.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-gradient">Our Vision</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 transform hover:scale-105 transition-transform duration-200 hover-glow">
            <div className="text-4xl mb-2 animate-float">🎨</div>
            <h3 className="font-semibold mb-2">Empower Artists</h3>
            <p className="text-gray-600">Provide artists with tools and opportunities to grow their business</p>
          </div>
          <div className="p-4 transform hover:scale-105 transition-transform duration-200 hover-glow">
            <div className="text-4xl mb-2 animate-float" style={{ animationDelay: '0.2s' }}>💫</div>
            <h3 className="font-semibold mb-2">Quality Art</h3>
            <p className="text-gray-600">Ensure every piece of art meets our high standards of quality</p>
          </div>
          <div className="p-4 transform hover:scale-105 transition-transform duration-200 hover-glow">
            <div className="text-4xl mb-2 animate-float" style={{ animationDelay: '0.4s' }}>🌟</div>
            <h3 className="font-semibold mb-2">Community</h3>
            <p className="text-gray-600">Build a thriving community of artists and art lovers</p>
          </div>
        </div>
      </div>

      <div className="space-y-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-gradient">Our Journey</h2>
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.year}
              className="card p-6 transform hover:scale-105 transition-all duration-300 hover-glow"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-accent">{milestone.year}</div>
                <div>
                  <h3 className="font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-8 text-center animate-fade-in hover-glow">
        <h2 className="text-2xl font-bold mb-4 text-gradient">Join Our Community</h2>
        <p className="text-gray-600 mb-6">Be part of the growing InkTime family</p>
        <div className="flex justify-center gap-4">
          <a 
            href="/artists" 
            className="btn-primary transform hover:scale-105 transition-transform duration-200"
          >
            Find an Artist
          </a>
          <a 
            href="/contact" 
            className="px-4 py-2 border-2 border-accent text-accent rounded-lg hover:bg-accent/5 transition-all duration-200 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
} 