const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    listingId: { type: String, required: true, unique: true },

    name: String,

    host: {
      hostId: String,
      name: String,
      identityVerified: {
        type: Boolean,
        default: false
      },
      totalListings: Number
    },

    location: {
      neighbourhoodGroup: String,
      neighbourhood: String,
      country: String,
      countryCode: String,
      coordinates: {
        type: { type: String, enum: ["Point"], default: "Point" },
        coordinates: { type: [Number], index: "2dsphere" }
      }
    },

    details: {
      roomType: String,
      propertyType: String,
      constructionYear: Number,
      minimumNights: Number,
      houseRules: String,
      license: String
    },

    pricing: {
      price: Number,
      serviceFee: Number,
      currency: { type: String, default: "USD" }
    },

    booking: {
      instantBookable: Boolean,
      cancellationPolicy: String,
      availability365: Number
    },

    reviews: {
      numberOfReviews: Number,
      lastReview: Date,
      reviewsPerMonth: Number,
      rating: Number
    },

    images: {
      thumbnail: String,
      gallery: [String]
    }
  },
  {
    timestamps: true
  }
);

// IMPORTANT FIX HERE: specify correct collection name
module.exports = mongoose.model("Listing", listingSchema, "Airbnb_Listings");