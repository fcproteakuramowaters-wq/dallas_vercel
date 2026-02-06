export type Room = {
  id: string;
  title: string;
  rate: number; // numeric rate per night
  image: string; // public path
  color?: string;
  description?: string;
  slideImages?: string[]; // additional sliding images for room showcase
};

export const rooms: Room[] = [
  { id: 'deluxe', title: 'Deluxe Room', rate: 23000, image: '/rooms/9.jpg', color: 'blue', description: 'Experience comfort in our spacious deluxe room with premium amenities. Features a Queen size bed.', slideImages: ['/rooms/9.jpg', '/iupdate/bed8.jpg', '/iupdate/bed7.jpg', '/iupdate/bed22.jpg', '/iupdate/bed23.jpg'] },
  { id: 'executive', title: 'Executive Deluxe', rate: 28000, image: '/rooms/8.jpg', color: 'amber', description: 'Elevated luxury with premium features and exclusive benefits. Features a Queen size bed.', slideImages: ['/rooms/8.jpg', '/iupdate/bed6.jpg', '/iupdate/bed13.jpg', '/iupdate/bed14.jpg', '/iupdate/bed24.jpg', '/iupdate/bed27.jpg'] },
  { id: 'super', title: 'Super Executive Deluxe', rate: 34000, image: '/rooms/6.jpg', color: 'purple', description: 'The pinnacle of luxury with exclusive amenities and services. Features a King size bed.', slideImages: ['/rooms/6.jpg', '/iupdate/bed16.jpg', '/iupdate/bed17.jpg', '/iupdate/bed21.jpg', '/iupdate/bed26.jpg'] },
  { id: 'suite', title: 'Executive Suite', rate: 47000, image: '/rooms/5.jpg', color: 'red', description: 'The ultimate luxury experience with premium suites and services. Features a King size bed.', slideImages: ['/rooms/5.jpg', '/iupdate/bed18.jpg', '/iupdate/bed19.jpg', '/iupdate/bed20.jpg', '/iupdate/bed25.jpg'] },
];

export function getRoomById(id?: string) {
  if (!id) return rooms[0];
  return rooms.find((r) => r.id === id) || rooms[0];
}
