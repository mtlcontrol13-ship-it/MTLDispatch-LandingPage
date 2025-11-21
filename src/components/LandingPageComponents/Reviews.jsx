import React from "react";

const reviews = [
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "Software Engineer",
    rating: 5,
    comment:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    role: "Product Manager",
    rating: 4,
    comment:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    role: "UX Designer",
    rating: 5,
    comment:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Reviews = () => {
  return (
    <section className="pt-20 pb-10 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-0 mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          What Our Customers Say
        </h1>
        <p className="mt-4 text-gray-600">
          Hear from our satisfied customers who have experienced our exceptional
          service and products.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <p className="mt-2 text-yellow-500">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </p>
            <p className="mt-4 text-gray-700">{review.comment}</p>
            <div className="mt-4 flex items-center">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <p className="font-medium">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
