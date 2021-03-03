interface Listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}

export const listings: Listing[] = [
  {
    id: "001",
    title: "Clean and fully furnished apartment. 5 min away from CN Tower",
    image:
      "https://res.cloudinary.com/munirmahmud/image/upload/v1607764372/samples/ecommerce/accessories-bag.jpg",
    address: "3210 Scotchmere Dr W, Toronto, ON, CA",
    price: 10000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 5,
  },
  {
    id: "002",
    title: "Luxurious home with private pool",
    image:
      "https://res.cloudinary.com/munirmahmud/image/upload/v1607764372/samples/ecommerce/leather-bag-gray.jpg",
    address: "100 Hollywood Hills Dr, Los Angeles, California",
    price: 15000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 1,
    rating: 4,
  },
  {
    id: "003",
    title: "Single bedroom located in the heart of downtown San Fransisco",
    image:
      "https://res.cloudinary.com/munirmahmud/image/upload/v1607764363/samples/ecommerce/analog-classic.jpg",
    address: "200 Sunnyside Rd, San Fransisco, California",
    price: 25000,
    numOfGuests: 3,
    numOfBeds: 2,
    numOfBaths: 2,
    rating: 3,
  },
  {
    id: "003",
    title: "Single bedroom located in the heart of downtown San Fransisco",
    image:
      "https://res.cloudinary.com/munirmahmud/image/upload/v1607764367/samples/ecommerce/shoes.png",
    address: "200 Sunnyside Rd, San Fransisco, California",
    price: 25000,
    numOfGuests: 3,
    numOfBeds: 2,
    numOfBaths: 2,
    rating: 3,
  },
];
