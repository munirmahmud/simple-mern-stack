import React from "react";
import { server } from "../../lib/api";
import {
  DeleteListingData,
  DeleteListingVariables,
  ListingsData,
} from "./types";

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBeds
      numOfBaths
      rating
    }
  }
`;

const DELETE_LISTING = `
  mutation DeleteListing($id: ID!) {
    deleteListing(id: ) {
      id
    }
  }
`;

export const Listings = () => {
  const handleClick = async () => {
    const { data } = await server.fetch<ListingsData>({
      query: LISTINGS,
      variables: {
        id: "",
      },
    });
    console.log(data.listings);
  };

  const deleteListing = async () => {
    const { data } = await server.fetch<
      DeleteListingData,
      DeleteListingVariables
    >({
      query: DELETE_LISTING,
    });
  };

  return (
    <div>
      <h2>Listings</h2>
      <button onClick={handleClick}>Get Data</button>
    </div>
  );
};
