export type Room = {
  id: string;
  title: string;
  rate: number; // numeric rate per night
  image: string; // public path
  color?: string;
  description?: string;
};

export const rooms: Room[] = [
  { id: 'deluxe', title: 'Deluxe Room', rate: 25000, image: '/rooms/9.jpg', color: 'blue', description: 'Experience comfort in our spacious deluxe room with premium amenities.' },
  { id: 'executive', title: 'Executive Deluxe', rate: 35000, image: '/rooms/8.jpg', color: 'amber', description: 'Elevated luxury with premium features and exclusive benefits.' },
  { id: 'super', title: 'Super Executive Deluxe', rate: 45000, image: '/rooms/6.jpg', color: 'purple', description: 'The pinnacle of luxury with exclusive amenities and services.' },
  { id: 'suite', title: 'Executive Suite', rate: 60000, image: '/rooms/5.jpg', color: 'red', description: 'The ultimate luxury experience with premium suites and services.' },
];

export function getRoomById(id?: string) {
  if (!id) return rooms[0];
  return rooms.find((r) => r.id === id) || rooms[0];
}
