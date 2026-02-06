import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FacilitySlider from '@/components/FacilitySlider';

export const metadata = {
  title: 'Facilities - Dallas Grand Beach Hotel',
  description:
    'Explore world-class facilities at Dallas Grand Beach Hotel including a casino, pool bar, gym, nightclub and event center—designed for luxury and leisure.',
};

export default function FacilitiesPage() {
  const facilities = [
    {
      id: 'casino',
      title: 'Casino',
      description:
        'Step into our opulent gaming sanctuary, where world-class entertainment meets luxury. Our state-of-the-art casino features an extensive selection of gaming tables including blackjack, roulette, and poker, alongside cutting-edge slot machines.',
      images: ['/facilities/casino/1.jpg', '/facilities/casino/2.jpg'],
      isImageLeft: true,
    },
    {
      id: 'event-center',
      title: 'Event Center',
      description:
        'Host your most important celebrations in our magnificent event center. Spanning thousands of square feet with soaring ceilings and customizable layouts, our venue is perfect for weddings, corporate conferences, gala dinners, and private functions.',
      images: ['/facilities/event-center/event_hall.jpg','/facilities/event-center/eventhall.jpg','/facilities/event-center/1.jpg', '/facilities/event-center/2.jpg'],
      isImageLeft: false,
    },
    {
      id: 'gym',
      title: 'Fitness Center',
      description:
        'Maintain your wellness routine at our state-of-the-art fitness center. Equipped with the latest cardio machines, free weights, strength training equipment, and functional fitness zones, our gym is staffed with professional trainers.',
      images: ['/facilities/gym/1.jpg'],
      isImageLeft: true,
    },
    {
      id: 'night-club',
      title: 'Night Club',
      description:
        'Experience electrifying nights at our premium nightclub. Top DJs spin the latest tracks, live performers take the stage, and premium cocktails flow freely in an energetic atmosphere.',
      images: ['/facilities/night-club/1.jpg', '/facilities/night-club/2.jpg'],
      isImageLeft: false,
    },
    {
      id: 'pool-bar',
      title: 'Pool Bar',
      description:
        'Relax in paradise at our luxurious poolside bar. Lounge in comfortable cabanas while enjoying refreshing tropical drinks, light appetizers, and stunning water views.',
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
      description:
        'Catch every major sporting event at our state-of-the-art sports bar. Multiple high-definition screens display live games, matches, and tournaments from around the world.',
      images: ['/facilities/sports-bar/1.jpg', '/facilities/sports-bar/2.jpg', '/facilities/sports-bar/3.jpg', '/facilities/sports-bar/4.jpg'],
      isImageLeft: false,
    },
    {
      id: 'wine-bar',
      title: 'Wine Bar',
      description:
        'Indulge in refined elegance at our prestigious wine bar. Our curated selection of fine wines, premium spirits, and craft cocktails is expertly paired with gourmet appetizers and charcuterie.',
      images: ['/facilities/wine-bar/1.jpg', '/facilities/wine-bar/3.jpg'],
      isImageLeft: true,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">World-Class Facilities</h1>
            <p className="text-blue-100 text-lg">Discover our premium amenities designed for your ultimate comfort and entertainment</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((f, i) => (
            <div key={f.id} className="facility-item bg-white rounded-lg shadow-lg overflow-hidden">
              <FacilitySlider images={f.images} title={f.title} description={f.description} isImageLeft={f.isImageLeft} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
