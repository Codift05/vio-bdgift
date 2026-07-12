import { BirthdayData } from "../types/birthday";

export const birthdayData: BirthdayData = {
  recipientName: "Alyah",
  recipientInitial: "A",
  senderName: "Vio",
  birthdayDate: "August 20, 2026",
  age: 21,

  opening: {
    eyebrow: "A Small Celebration, Made With Love",
    title: "A Little Surprise",
    highlightedTitle: "Made With Love",
    description:
      "Some moments deserve more than words. Some people deserve something made only for them.",
    buttonText: "Open Your Surprise",
  },

  introduction: {
    label: "Celebrating",
    message:
      "Happy Birthday to the person who makes ordinary days feel extraordinary.",
    supportingMessage:
      "Today is about you, your beautiful heart, your dreams, and every little thing that makes you who you are.",
  },

  gallery: {
    label: "A Few Pieces of You",
    title: "Moments Worth Remembering",
    description:
      "Every photograph holds a moment. Every moment holds a little piece of your story.",
    images: [
      {
        src: "/images/photo-01.jpg",
        alt: "A special memory",
        caption: "A moment I never want to forget.",
      },
      {
        src: "/images/photo-02.jpg",
        alt: "A beautiful portrait",
        caption: "You, being beautifully yourself.",
      },
      {
        src: "/images/photo-03.jpg",
        alt: "One of our favorite memories",
        caption: "One of my favorite memories.",
      },
      {
        src: "/images/photo-04.jpg",
        alt: "A happy smile",
        caption: "The kind of smile that changes everything.",
      },
      {
        src: "/images/photo-05.jpg",
        alt: "A meaningful day",
        caption: "A simple day that became special.",
      },
      {
        src: "/images/photo-06.jpg",
        alt: "A warm memory",
        caption: "A memory that still feels warm.",
      },
    ],
  },

  mainQuote: {
    label: "A Little Reminder",
    quote:
      "You are loved more than you realize, appreciated more than you know, and capable of more than you imagine.",
    description:
      "On your birthday, I hope you can see yourself the way the people who love you see you: kind, strong, beautiful, and completely irreplaceable.",
  },

  timeline: [
    {
      date: "The Day We Met",
      title: "Where It All Began",
      description:
        "I did not know that an ordinary day would become the beginning of so many meaningful memories.",
      image: "/images/memory-01.jpg",
    },
    {
      date: "Our First Favorite Memory",
      title: "A Moment That Felt Different",
      description:
        "It was simple, but somehow it became one of those moments I still remember with a smile.",
      image: "/images/memory-02.jpg",
    },
    {
      date: "One of Our Best Days",
      title: "Time Moved Too Quickly",
      description:
        "The best moments always seem to pass too fast, but they stay with us long after they are gone.",
      image: "/images/memory-03.jpg",
    },
    {
      date: "Today",
      title: "Another Beautiful Chapter",
      description:
        "Today is another reminder that your story continues, and I am grateful to witness a part of it.",
      image: "/images/memory-04.jpg",
    },
  ],

  reasons: [
    {
      title: "Your Kindness",
      description:
        "You make people feel seen, heard, and valued, even when you do not realize it.",
    },
    {
      title: "Your Smile",
      description:
        "It has a way of making difficult days feel a little lighter.",
    },
    {
      title: "Your Strength",
      description:
        "You have survived moments you once thought would break you, and you are still here.",
    },
    {
      title: "Your Heart",
      description:
        "You care deeply, love sincerely, and give more than people often notice.",
    },
    {
      title: "Your Presence",
      description:
        "Some places simply feel warmer when you are there.",
    },
    {
      title: "Simply Being You",
      description:
        "You do not need to become anyone else to be worthy of love and happiness.",
    },
  ],

  letter: {
    greeting: "My Dearest,",
    paragraphs: [
      "Today is more than just another date on the calendar. It is a celebration of your life, your heart, your journey, and every beautiful thing that makes you who you are.",
      "I hope you know how much light you bring into the lives of the people around you. Your presence has a quiet way of making things feel warmer, safer, and more meaningful.",
      "Thank you for every laugh, every conversation, every memory, and every small moment that became special simply because you were there.",
      "I hope this new chapter brings you closer to the dreams you keep in your heart. I hope you find courage when the road feels uncertain, peace when life becomes overwhelming, and happiness in places you never expected.",
      "Please remember that you do not have to have everything figured out. You are allowed to grow slowly, rest when you need to, change your mind, and begin again.",
      "On the days when you doubt yourself, I hope you remember how far you have already come. You have faced difficult moments, carried invisible battles, and still found ways to keep going.",
      "I am incredibly proud of you.",
      "May this birthday be the beginning of a year filled with gentle mornings, sincere laughter, meaningful adventures, answered prayers, and people who love you honestly.",
      "No matter where life takes us, I will always be grateful that our paths crossed.",
      "Happy Birthday."
    ],
    closing: "With all my heart,",
  },

  wish: {
    label: "One Last Thing",
    title: "Close Your Eyes",
    message:
      "Take a quiet moment. Think of something your heart truly wants. Then make a wish.",
    buttonText: "I Made My Wish",
  },

  finale: {
    label: "For You, Today and Always",
    titlePrefix: "Happy Birthday,",
    message:
      "May this year bring you closer to everything you have been hoping for.",
    secondaryMessage:
      "May you be surrounded by genuine love, peaceful moments, unforgettable memories, and countless reasons to smile.",
    quote:
      "You deserve a life that feels as beautiful as the happiness you bring to others.",
    closing: "Made with love, especially for you.",
  },

  music: {
    src: "/music/birthday-song.mp3",
    defaultVolume: 0.35,
  },
};
