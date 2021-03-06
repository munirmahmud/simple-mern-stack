require("dotenv").config();

import { ObjectID } from "mongodb";
import { connectDatabase } from "../src/database";
import { Listing } from "../src/lib/types";

const seed = async () => {
  try {
    console.log("[seed]: running...");

    const db = await connectDatabase();
    const listings: Listing[] = [
      {
        _id: new ObjectID(),
        title: "Rest House. 4 Bedrooms with 2 ensuite.",
        image:
          "https://a0.muscache.com/im/pictures/bccf7fa8-c026-44b5-b5b9-35b955e9ebb3.jpg",
        address: "Sylhet, Sylhet Division, Bangladesh",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectID(),
        title: "Luxurious & Spacious Apartment near GEC Circle",
        image:
          "https://a0.muscache.com/im/pictures/4d8fdd22-4474-42b0-9e31-8b4d41e57a3a.jpg",
        address: "Chittagong, Chittagong Division, Bangladesh",
        price: 15000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 1,
        rating: 4,
      },
      {
        _id: new ObjectID(),
        title: "Awesome Green views and silence of the nature.",
        image:
          "https://a0.muscache.com/im/pictures/e94162ee-29ca-4b04-bf53-3b5844214108.jpg",
        address: "Cox's Bazar, Chittagong Division, Bangladesh",
        price: 25000,
        numOfGuests: 3,
        numOfBeds: 2,
        numOfBaths: 2,
        rating: 3,
      },
      {
        _id: new ObjectID(),
        title: "Eco Friendly, Quite and Traditional ambience.",
        image:
          "https://a0.muscache.com/im/pictures/bbd61d6d-fa12-47bb-8def-109102c6b5f8.jpg",
        address: "Sreepur Upazila, Dhaka Division, Bangladesh",
        price: 35000,
        numOfGuests: 6,
        numOfBeds: 4,
        numOfBaths: 3,
        rating: 4,
      },
    ];

    for (const listing of listings) {
      await db.listings.insertOne(listing);
    }

    console.log("[seed]: success");
  } catch (error) {
    throw new Error("Failed to seed database");
  }
};

seed();
