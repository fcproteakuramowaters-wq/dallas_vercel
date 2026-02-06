import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sampleReviews = [
  {
    id: 'r1',
    author: 'James A.',
    time: '2 days ago',
    rating: 4,
    text: 'Fantastic stay — great service, clean rooms and a beautiful pool area. Breakfast buffet was excellent.',
  },
  {
    id: 'r2',
    author: 'Kemi S.',
    time: '1 week ago',
    rating: 5,
    text: 'Exceptional experience. The staff went above and beyond to make our anniversary special.',
  },
  {
    id: 'r3',
    author: 'M. O.',
    time: '3 weeks ago',
    rating: 3,
    text: 'Good location and value, but Wi-Fi was intermittent during our stay.',
  },
  {
    id: 'r4',
    author: 'Ada N.',
    time: '1 month ago',
    rating: 4,
    text: 'Lovely property and attentive staff. Room service could be quicker.',
  },
];

export const metadata = {
  title: 'Reviews - Dallas Grand Beach Hotel',
  description: 'Read guest reviews and ratings for Dallas Grand Beach Hotel — real guest feedback about rooms, service, and facilities.',
};

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-20 bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Guest Reviews</h1>
            <p className="text-blue-100 mt-2">See what guests are saying about Dallas Grand Beach Hotel</p>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4">Overall rating</h2>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-start">
                  <div className="text-5xl font-bold">4.7</div>
                  <div className="text-sm text-gray-500">based on 1,234 reviews</div>
                </div>
                <div className="flex items-center gap-1 text-yellow-500 text-2xl">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>☆</span>
                </div>
              </div>

              <a href="https://www.google.com/travel/search?q=dallas%20grand%20beach%20resort" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">Read more on Google Reviews</a>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {sampleReviews.map((r) => (
                  <article key={r.id} className="bg-white rounded-lg p-4 review-card">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold">{r.author.split(' ').map(n=>n[0]).slice(0,2).join('').toUpperCase()}</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">{r.author}</h3>
                          <div className="text-sm text-gray-500">• {r.time}</div>
                        </div>
                        <div className="text-sm text-yellow-500 mt-1">{Array.from({length:5}).map((_,i)=>(i<r.rating? '★':'☆')).join('')}</div>
                        <p className="mt-2 text-sm text-gray-700">{r.text}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-3">Share your experience</h3>
                <p className="text-sm text-gray-600 mb-4">We'd love your feedback. Leave a review on Google or submit it here and we'll follow up.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
