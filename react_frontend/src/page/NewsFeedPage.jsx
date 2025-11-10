import React from "react";

const NewsFeedPage = () => {
 
  const newsItems = [
    {
      id: 1,
      title: "Youth Leadership Summit 2024",
      content: "Join us for the annual Youth Leadership Summit happening next month. Registration is now open for all SK members and youth volunteers.",
      author: "SK Chairman",
      date: "2 hours ago",
      category: "Event",
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      title: "New Basketball Court Inauguration",
      content: "The newly constructed basketball court in Barangay Central is now open for public use. Thanks to everyone who supported this project!",
      author: "SK Secretary",
      date: "1 day ago",
      category: "Infrastructure",
      likes: 45,
      comments: 12
    },
    {
      id: 3,
      title: "Scholarship Program Applications",
      content: "Applications for the SK Educational Assistance Program are now being accepted. Deadline for submission is on October 30, 2024.",
      author: "Education Committee",
      date: "3 days ago",
      category: "Education",
      likes: 67,
      comments: 15
    },
    {
      id: 4,
      title: "Community Clean-up Drive Results",
      content: "Last weekend's clean-up drive collected over 200kg of waste. Thank you to all 150 volunteers who participated!",
      author: "Environment Committee",
      date: "5 days ago",
      category: "Environment",
      likes: 89,
      comments: 23
    }
  ];

  return (
    <div className="min-h-screen flex bg-[#F0F2EE]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#285C2F] text-white flex flex-col">
        <div className="px-6 py-4 text-2xl font-bold border-b border-[#2E7034]">
          SK Platform
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#35723E]"
          >
            <span>🏠</span>
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#35723E]"
          >
            <span>📰</span>
            Newsfeed
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#35723E]"
          >
            <span>📋</span>
            Projects
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#35723E]"
          >
            <span>📊</span>
            Reports
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#35723E]"
          >
            <span>👥</span>
            SK Officials
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#35723E]"
          >
            <span>⚙️</span>
            Settings
          </a>
        </nav>

        <button className="flex items-center gap-3 px-6 py-3 text-sm border-t border-[#2E7034] hover:bg-[#1F4B26]">
          <span>🚪</span>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#285C2F]">SK Newsfeed</h1>
            <button className="bg-[#285C2F] text-white px-6 py-2 rounded-lg hover:bg-[#35723E] transition-colors">
              Create Post
            </button>
          </div>

          {/* Create Post Card */}
          <div className="bg-white shadow rounded-lg p-6 mb-6 border border-[#E8E8E8]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#285C2F] rounded-full flex items-center justify-center text-white font-bold">
                SK
              </div>
              <input
                type="text"
                placeholder="Share an update with the community..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#285C2F]"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 text-gray-600">
                <button className="flex items-center gap-2 hover:text-[#285C2F]">
                  <span>📷</span> Photo
                </button>
                <button className="flex items-center gap-2 hover:text-[#285C2F]">
                  <span>🎥</span> Video
                </button>
                <button className="flex items-center gap-2 hover:text-[#285C2F]">
                  <span>📄</span> Document
                </button>
              </div>
              <button className="bg-[#285C2F] text-white px-6 py-2 rounded-lg hover:bg-[#35723E] transition-colors">
                Post
              </button>
            </div>
          </div>

          {/* News Feed */}
          <div className="space-y-6">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white shadow rounded-lg p-6 border border-[#E8E8E8]">
                {/* Post Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#285C2F] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#285C2F]">{item.author}</h3>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                  <span className="bg-[#F0F2EE] text-[#285C2F] px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Post Content */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-[#285C2F] mb-2">{item.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{item.content}</p>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                  <span>{item.likes} likes</span>
                  <span>{item.comments} comments</span>
                </div>

                {/* Action Buttons */}
                <div className="flex border-t border-gray-200 pt-4">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-600 hover:text-[#285C2F] hover:bg-[#F0F2EE] rounded transition-colors">
                    <span>👍</span> Like
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-600 hover:text-[#285C2F] hover:bg-[#F0F2EE] rounded transition-colors">
                    <span>💬</span> Comment
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-600 hover:text-[#285C2F] hover:bg-[#F0F2EE] rounded transition-colors">
                    <span>🔄</span> Share
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8">
            <button className="bg-white text-[#285C2F] border border-[#285C2F] px-6 py-2 rounded-lg hover:bg-[#F0F2EE] transition-colors">
              Load More Posts
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsFeedPage;
