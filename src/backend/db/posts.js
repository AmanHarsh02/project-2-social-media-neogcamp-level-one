import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "xhzTkUi2Nt",
    content:
      "Excited for the photowalk tomorrow! Can't wait to capture some amazing shots in the city.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "okzxcf",
        username: "alicesmith",
        text: "I'm looking forward to it too! It's always fun exploring new places with fellow photographers.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "amanharsh",
    createdAt: "2022-01-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "siFFxfYI1s",
    content:
      "Check out this stunning landscape shot I took during my recent trip!",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652188886/upload-socialmedia/landscape-photo.jpg",
    likes: {
      likeCount: 18,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "alicesmith",
    createdAt: "2022-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP1fg",
    content:
      "Sharing some macro shots I captured in my backyard. Nature never ceases to amaze me!",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652188492/upload-socialmedia/macro-photography.jpg",
    likes: {
      likeCount: 14,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nImWvImxo",
        username: "amanharsh",
        text: "These are incredible! The level of detail is mind-blowing.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "frankwilson",
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "pOX2sDQF7e",
    content:
      "Just returned from a photography workshop. Learned so many new techniques! Here's a sneak peek of what I captured.",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652188954/upload-socialmedia/workshop-shot.jpg",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "carolwilliams",
    createdAt: "2022-06-05T15:30:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "fIHrB5Ny3X",
    content:
      "Had a great time exploring the countryside with my camera. Nature never fails to inspire me!",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652188771/upload-socialmedia/countryside.jpg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "wcvTY7qrM4",
        username: "carolwilliams",
        text: "These landscapes are breathtaking! I can almost feel the serenity.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "bobjohnson",
    createdAt: "2022-07-10T09:15:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "tUH3oPm6Rx",
    content:
      "Experimenting with long exposure photography at night. Love how the city lights create beautiful light trails.",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652189102/upload-socialmedia/long-exposure.jpg",
    likes: {
      likeCount: 34,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "amanharsh",
    createdAt: "2022-08-15T20:45:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "aXLkT4zR9n",
    content:
      "Visited a local art gallery featuring stunning photography. Feeling inspired by the creativity on display!",
    mediaURL: "",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "bER3u6SjFp",
        username: "amanharsh",
        text: "Art galleries are the best source of inspiration. Did you have a favorite photograph?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "carolwilliams",
    createdAt: "2022-09-20T11:30:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "kLWR4sJg6E",
    content:
      "Captured this beautiful portrait during a street photography session. Love the expression!",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652189298/upload-socialmedia/street-portrait.jpg",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "davidbrown",
    createdAt: "2022-10-05T14:20:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "mNDu3jZb2A",
    content:
      "Throwback to my trip to the mountains. The view from the top was absolutely breathtaking!",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652189447/upload-socialmedia/mountain-view.jpg",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "oDEs6fWc9V",
        username: "alicesmith",
        text: "I can imagine the sense of wonder you felt. Mountains always leave a lasting impression.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "davidbrown",
    createdAt: "2022-11-12T12:10:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "nGHt2yFv8R",
    content:
      "Attended a photography exhibition showcasing incredible wildlife photographs. Nature's beauty is truly unmatched.",
    mediaURL: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "bobjohnson",
    createdAt: "2023-01-07T16:55:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "dJIs5kAv4G",
    content:
      "Explored the city's street art scene and captured some vibrant shots. Street photography is so full of life!",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652189664/upload-socialmedia/street-art.jpg",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "pQWe2rXs5B",
        username: "",
        text: "These photos capture the essence of street art so well. It's like bringing the walls to life!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "frankwilson",
    createdAt: "2023-02-15T10:05:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "gKLt7qFu3D",
    content:
      "Sharing a series of black and white portraits I took. There's something timeless about monochrome photography.",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652189816/upload-socialmedia/black-white-portraits.jpg",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "emmadavis",
    createdAt: "2023-03-20T14:40:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "jYRl5qNd4S",
    content:
      "Documented a local cultural festival with my camera. The colors and traditions were absolutely captivating!",
    mediaURL:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652189971/upload-socialmedia/cultural-festival.jpg",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "qWEr6fUv5P",
        username: "emmadavis",
        text: "Cultural festivals are such a vibrant celebration of diversity. Your photos truly bring the atmosphere to life.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "davidbrown",
    createdAt: "2023-04-25T18:25:00+05:30",
    updatedAt: formatDate(),
  },
];
