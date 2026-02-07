import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FacilitySlider from '@/components/FacilitySlider';

export default function Home() {
  const facilities = [
    {
      id: 'casino',
      title: 'Casino',
      description: 'Experience the ultimate thrill of gaming at our luxury beachfront resort casino. Enjoy an exclusive mix of classic and modern games — including roulette, blackjack, and slot machines — all in a stylish, world-class setting. Designed for relaxation and entertainment, our casino offers guests the perfect balance of excitement, elegance, and leisure by the beach.',
      images: ['/facilities/casino/1.jpg', '/facilities/casino/2.jpg'],
      isImageLeft: true,
    },
    {
      id: 'event-center',
      title: 'Event Center & VIP Bar',
      description: 'Celebrate special moments in our elegant Event Center and VIP Bar. Ideal for weddings, conferences, and private events, with modern AV, flexible layouts (50–500 guests), professional planning, and a VIP bar serving fine wines and crafted cocktails.',
      images: ['/facilities/event-center/1.jpg', '/facilities/event-center/2.jpg', '/facilities/event-center/eventhall.jpg', '/facilities/event-center/event_hall.jpg'],
      isImageLeft: false,
    },
    {
      id: 'gym',
      title: 'Gym',
      description: 'Maintain your fitness routine in our fully equipped gym, featuring modern cardio machines, free weights, and strength-training equipment. Designed for comfort and performance, our fitness center lets you energize your day and stay active throughout your stay.',
      images: ['/facilities/gym/1.jpg'],
      isImageLeft: true,
    },
    {
      id: 'night-club',
      title: 'Night Club',
      description: 'Dance the night away in our vibrant nightclub, where top DJs, live performances, and an electrifying atmosphere come together for unforgettable nights. Enjoy premium drinks, great company, and non-stop entertainment in a stylish, modern setting designed for pure excitement.',
      images: ['/facilities/night-club/1.jpg', '/facilities/night-club/2.jpg'],
      isImageLeft: false,
    },
    {
      id: 'pool-bar',
      title: 'Pool Bar',
      description: 'Relax and unwind at our stylish pool bar, where refreshing cocktails, light bites, and a sparkling poolside view create the perfect atmosphere for leisure and relaxation. Enjoy tropical drinks, soothing music, and the warm ambiance of a true resort experience.',
      images: [
        '/facilities/pool-bar/1.jpg',
        '/facilities/pool-bar/2.jpg',
        '/facilities/pool-bar/3.jpg',
        '/facilities/pool-bar/4.jpg',
        '/facilities/pool-bar/5.jpg',
        '/facilities/pool-bar/6.jpg',
        '/facilities/pool-bar/7.jpg',
        '/facilities/pool-bar/8.jpg',
        '/facilities/pool-bar/9.jpg',
        '/facilities/pool-bar/10.jpg',
        '/facilities/pool-bar/11.jpg',
        '/facilities/pool-bar/12.jpg',
        '/facilities/pool-bar/13.jpg',
        '/facilities/pool-bar/14.jpg',
        '/facilities/pool-bar/15.jpg',
        '/facilities/pool-bar/16.jpg',
        '/facilities/pool-bar/17.jpg',
        '/facilities/pool-bar/18.jpg',
        '/facilities/pool-bar/19.jpg',
        '/facilities/pool-bar/poolside.jpg',
      ],
      isImageLeft: true,
    },
    {
      id: 'sports-bar',
      title: 'Sports Bar',
      description: 'Catch every major sporting event at our lively sports bar, featuring multiple big-screen TVs, an energetic atmosphere, and a great selection of drinks and snacks. It\'s the perfect place to cheer for your favorite team and enjoy good company.',
      images: [
        '/facilities/sports-bar/1.jpg',
        '/facilities/sports-bar/2.jpg',
        '/facilities/sports-bar/3.jpg',
        '/facilities/sports-bar/4.jpg',
      ],
      isImageLeft: false,
    },
    {
      id: 'wine-bar',
      title: 'Wine Bar',
      description: 'Savor an exceptional selection of fine wines and premium spirits in our sophisticated wine bar. Enjoy a relaxed and elegant ambiance, perfect for intimate conversations, business meetings, or unwinding after a long day.',
      images: ['/facilities/wine-bar/1.jpg', '/facilities/wine-bar/2.jpg'],
      isImageLeft: true,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <main className="flex-grow">
        {/* Our Facilities Section */}
        <div className="w-full py-20 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">Our Premium Facilities</h2>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">Experience world-class amenities designed for your comfort and enjoyment</p>
          </div>
          <div className="mx-auto w-4/5">
            {facilities.map((facility) => (
              <div key={facility.id} className="mb-20 last:mb-0">
                <FacilitySlider
                  title={facility.title}
                  description={facility.description}
                  images={facility.images}
                  isImageLeft={facility.isImageLeft}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
