import {
  CustomerReviewType,
  ItemMenuType,
  SlideItem,
} from "../types/main.type";

export const aboutContent: SlideItem = {
  image: "images/about-img.jpg",
  title: "Chhappanbhog Dhaba & Restaurant",
  desc: `ChhappanBhog Dhaba & Restaurant, founded by brothers Shivam and
    Adarsh Dubey, is more than just a place to dine. It is a
    tapestry being woven with the threads of community, culture, and
    culinary passion. Every bite is a journey, every visit is a
    memory to cherish. And as travelers continue on their way, they
    are carrying with them not just the flavors of the village, but
    also the warmth and hospitality that is embracing them at
    ChhappanBhog.`,
};

export const items: ItemMenuType = {
  Drinks: [
    {
      title: "Special Drinks 1",
      desc: "Sed id magna vitae eros sagittis euismod.",
      image: "/images/img-01.jpg",
      currencyType: "INR",
      price: 10,
    },
    {
      title: "Special Drinks 2",
      desc: "Sed id magna vitae eros sagittis euismod.",
      image: "/images/img-02.jpg",
      currencyType: "INR",
      price: 50,
    },
    {
      title: "Special Drinks 3",
      desc: "Sed id magna vitae eros sagittis euismod.",
      image: "/images/img-03.jpg",
      currencyType: "INR",
      price: 60,
    },
  ],
  Lunch: [
    {
      title: "Special Lunch 1",
      desc: "Sed id magna vitae eros sagittis euismod.",
      image: "/images/img-04.jpg",
      currencyType: "INR",
      price: 10,
    },
    {
      title: "Special Lunch 2",
      desc: "Sed id magna vitae eros sagittis euismod.",
      image: "/images/img-05.jpg",
      currencyType: "INR",
      price: 50,
    },
    {
      title: "Special Lunch 3",
      desc: "Sed id magna vitae eros sagittis euismod.",
      image: "/images/img-06.jpg",
      currencyType: "INR",
      price: 60,
    },
  ],
  Dinner: [
    {
      title: "Special Dinner 1",
      desc: "Sed id magna vitae eros sagittis euismod.",
      image: "/images/img-07.jpg",
      currencyType: "INR",
      price: 10,
    },
    {
      title: "Special Dinner 2",
      desc: "Sed id magna vitae eros sagittis euismod.",
      image: "/images/img-08.jpg",
      currencyType: "INR",
      price: 50,
    },
    {
      title: "Special Dinner 3",
      desc: "Sed id magna vitae eros sagittis euismod.",
      image: "/images/img-09.jpg",
      currencyType: "INR",
      price: 60,
    },
  ],
};

export const galleryContent: { image: string }[] = [
  {
    image: "/images/gallery-img-01.jpg",
  },
  {
    image: "/images/gallery-img-02.jpg",
  },
  {
    image: "/images/gallery-img-03.jpg",
  },
  {
    image: "/images/gallery-img-04.jpg",
  },
  {
    image: "/images/gallery-img-05.jpg",
  },
];

export const customerReviewContent: CustomerReviewType[] = [
  {
    name: "Shivam Dubey",
    image: "/images/profile-1.jpg",
    designation: "Founder",
    notes: `My stay at the hotel was fantastic! The staff was incredibly attentive, and the room was comfortable and stylish. The central location made it easy to explore the city. Overall, a great experience that I'd highly recommend`,
  },
  {
    name: "Adarsh Dubey",
    image: "/images/profile-7.jpg",
    designation: "Founder",
    notes: `During my recent stay at the hotel, I was thoroughly impressed. The level of service and attention from the staff was outstanding. The comfortable and well-appointed rooms provided a relaxing retreat, and the hotel's central location made it convenient for exploring the city. I couldn't have asked for a better experience and look forward to returning in the future to relive such a wonderful stay.`,
  },
  {
    name: "Satya Mishra",
    image: "/images/profile-3.jpg",
    designation: "Software Engineer",
    notes: `An exceptional stay at the hotel exceeded my expectations. From the warm and courteous staff to the luxurious amenities, every aspect of my experience was delightful. The attention to detail and the serene ambiance truly made my stay a memorable one. I can't wait to return to this oasis of comfort and hospitality.`,
  },
];

export const footerContent = {};

export const headerContent = {};

export const quoteContent = {
  content: `If you're not the one cooking, stay out of the way and compliment the chef.`,
  writer: "Shivam Dubey",
};

export const sliderContent: SlideItem[] = [
  {
    image: "/images/slider-01.jpg",
    title: "Welcome To Chhappanbhog Dhaba & Restaurant ",
    desc: ` See how your users experience your website in realtime or view
                trends to see any changes in performance over time.`,
  },
  {
    image: "/images/slider-02.jpg",
    title: "Welcome To Chhappanbhog Dhaba & Restaurant ",
    desc: ` See how your users experience your website in realtime or view
                trends to see any changes in performance over time.`,
  },
  {
    image: "/images/slider-03.jpg",
    title: "Welcome To Chhappanbhog Dhaba & Restaurant ",
    desc: ` See how your users experience your website in realtime or view
                trends to see any changes in performance over time.`,
  },
];
