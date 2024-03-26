export type Place = {
    isPremium?: boolean;
    image: string;
    name: string;
    type: 'Apartment' | 'Room';
    pricePerNight: number;
    rating: 1 | 2 | 3 | 4 | 5;
    isBookmarked?: boolean;
  };