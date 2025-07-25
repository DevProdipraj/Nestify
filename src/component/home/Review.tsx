"use client"
import { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from "react-icons/fa"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp Inc.",
    rating: 5,
    review:
      "Absolutely fantastic service! The team went above and beyond to deliver exactly what we needed. Their attention to detail and professionalism is unmatched.",
    avatar: "/home/client.jpeg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    rating: 5,
    review:
      "Working with this team has been a game-changer for our business. They delivered high-quality results on time and within budget. Highly recommended!",
    avatar: "/home/client.jpeg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateLab",
    rating: 4,
    review:
      "Great experience overall. The communication was excellent throughout the project, and the final deliverables exceeded our expectations.",
    avatar: "/home/client.jpeg",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder",
    company: "GrowthCo",
    rating: 5,
    review:
      "Professional, reliable, and creative. They understood our vision perfectly and brought it to life. We'll definitely be working together again.",
    avatar: "/home/client.jpeg",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Operations Manager",
    company: "ScaleUp Solutions",
    rating: 5,
    review:
      "The quality of work and level of service provided was exceptional. They were responsive, professional, and delivered outstanding results.",
    avatar: "/home/client.jpeg",
  },
]

export default function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <FaStar key={index} className={`w-4 h-4 ${index < rating ? "text-primary" : "text-gray-300"}`} />
    ))
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 relative before:w-16 before:h-1.5 before:bg-primary before:absolute before:left-[50%] before:translate-x-[-50%] before:top-8 md:before:top-12">What Our <span className="text-primary">Clients</span> Say</h2>
        <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our satisfied clients have to say about their experience working
          with us.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Reviews Container */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-neutral rounded-xl shadow-lg p-8 mx-auto max-w-4xl">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Quote Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaQuoteLeft className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="flex-1">
                    

                      {/* Review Text */}
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">"{review.review}"</p>

                      {/* Client Info */}
                      <div className="flex items-center gap-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <p className="text-gray-600 text-sm">
                            {review.role} at {review.company}
                          </p>
                          {/* Stars */}
                      <div className="flex items-center mb-4">{renderStars(review.rating)}</div>
                        </div>
                          
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 cursor-pointer bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
          aria-label="Previous review"
        >
          <FaChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 cursor-pointer bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
          aria-label="Next review"
        >
          <FaChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer ${
              index === currentIndex ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">
          {currentIndex + 1} of {reviews.length}
        </p>
      </div>
    </div>
  )
}








