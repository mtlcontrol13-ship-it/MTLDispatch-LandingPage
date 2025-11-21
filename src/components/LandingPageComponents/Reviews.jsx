import React from "react";

const reviews = [
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "Logistics Lead, FreightFlow",
    rating: 5,
    comment:
      "MTL Dispatch helped us cut response times in half. The platform is smooth, and their team is always on it.",
  },
  {
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    role: "Ops Manager, SwiftHaul",
    rating: 4,
    comment:
      "Great visibility across our routes and drivers. The onboarding was painless and support is responsive.",
  },
  {
    name: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    role: "Fleet Supervisor, NorthStar",
    rating: 5,
    comment:
      "We grew without adding headcount thanks to their automations. The dashboards are clear and actionable.",
  },
];

const StarRow = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, idx) => {
        const filled = idx < rating;
        return (
          <svg
            key={idx}
            className={`h-4 w-4 ${filled ? "text-amber-400" : "text-gray-300"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      })}
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="pt-20 pb-16 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-0 mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Customer Love
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          Teams stay on time with MTL Dispatch
        </h1>
        <p className="mt-3 text-gray-600">
          Real operators sharing how they ship faster, keep customers informed,
          and scale without adding headcount.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white/70 p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400" />
            <div className="flex items-center justify-between">
              <StarRow rating={review.rating} />
              <span className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
                Verified
              </span>
            </div>
            <p className="mt-4 text-gray-800 leading-relaxed">{review.comment}</p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="h-12 w-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
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
