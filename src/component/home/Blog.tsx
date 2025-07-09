const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide To Black Friday: Tips, Deals, And Must-Have Items",
    date: "Jun 20, 2024, 4:28 PM",
    author: "admin",
    image: "/home/furniture_one_6.png",
  },
  {
    id: 2,
    title: "How To Host A Magical Christmas Party: Tips And Ideas",
    date: "Jun 19, 2024, 11:32 AM",
    author: "admin",
    image: "/home/furniture_one_8.png",
  },
  {
    id: 3,
    title: "Christmas Eve Traditions: Creating Magical Memories",
    date: "Jun 19, 2024, 11:30 AM",
    author: "admin",
   image: "/home/furniture_one_7.png",
  },
]

export default function Blog() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-lg mb-2">Recent Story</p>
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 relative  before:w-16 before:h-1.5 before:bg-primary before:absolute before:left-[50%] before:translate-x-[-50%] before:top-8 md:before:top-12">LATEST BLOG</h2>
           
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer bg-neutral  p-5 rounded-xl">
              {/* Image */}
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Date */}
              <p className="text-gray-400 text-sm mb-4">{post.date}</p>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-200 leading-tight">
                {post.title}
              </h3>

              {/* Author */}
              <p className="text-gray-500 text-sm">
                By: <span className="text-gray-600">{post.author}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
