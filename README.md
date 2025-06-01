# Inktime

Inktime is a modern marketplace platform that connects art enthusiasts with talented artists for custom sketches and illustrations. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Browse a curated selection of artists and their portfolios
- Filter artists by style and price range
- View detailed artist profiles with sample work and reviews
- Book sessions with artists through an intuitive scheduling system
- Responsive design for optimal viewing on all devices

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Date Handling**: date-fns

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/inktime.git
   cd inktime
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── artists/           # Artists marketplace
│   │   └── [id]/         # Individual artist profiles
│   ├── booking/          # Booking system
│   │   └── [id]/        # Artist-specific booking
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout
└── components/           # Reusable components
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## About the Founder

Andrew Cheng is the founder of Inktime, bringing together his passion for technology and art to create a platform that makes custom artwork accessible to everyone. With a background in technology and a deep appreciation for creative expression, Andrew created Inktime to help artists share their talent and connect with art enthusiasts worldwide.
