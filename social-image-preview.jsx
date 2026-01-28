import React from 'react';

const SocialImagePreview = () => {
  // Sample data matching your blog post structure
  const post = {
    title: "About Helperbird",
    category: null,
    domain: "helperbird.com"
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Social Graph Image Preview</h2>
      <p className="text-gray-600 mb-4">This is how your new social images will appear when shared:</p>

      {/* Preview Container - 1200x627 aspect ratio scaled down */}
      <div
        className="relative overflow-hidden rounded-xl shadow-2xl"
        style={{
          width: '600px',
          height: '313px',
          background: '#2D1B4E'
        }}
      >
        {/* Gradient Blobs */}
        {/* Top-left blob */}
        <div
          className="absolute rounded-full blur-xl"
          style={{
            width: '300px',
            height: '300px',
            top: '-100px',
            left: '-80px',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
            opacity: 0.9
          }}
        />

        {/* Top-right blob */}
        <div
          className="absolute rounded-full blur-xl"
          style={{
            width: '280px',
            height: '280px',
            top: '-80px',
            right: '-100px',
            background: 'linear-gradient(225deg, #EC4899 0%, #8B5CF6 100%)',
            opacity: 0.9
          }}
        />

        {/* Bottom-left blob */}
        <div
          className="absolute rounded-full blur-xl"
          style={{
            width: '200px',
            height: '200px',
            bottom: '-80px',
            left: '-50px',
            background: 'linear-gradient(45deg, #7C3AED 0%, #DB2777 100%)',
            opacity: 0.8
          }}
        />

        {/* Bottom-right blob */}
        <div
          className="absolute rounded-full blur-xl"
          style={{
            width: '260px',
            height: '260px',
            bottom: '-100px',
            right: '-80px',
            background: 'linear-gradient(315deg, #8B5CF6 0%, #F472B6 100%)',
            opacity: 0.85
          }}
        />

        {/* Striped accents */}
        <div
          className="absolute"
          style={{
            width: '80px',
            height: '50px',
            left: '40px',
            top: '50%',
            transform: 'translateY(-50%) rotate(-10deg)',
            background: 'repeating-linear-gradient(90deg, #F59E0B 0px, #F59E0B 4px, transparent 4px, transparent 8px)',
            borderRadius: '50%',
            opacity: 0.8
          }}
        />

        <div
          className="absolute"
          style={{
            width: '100px',
            height: '60px',
            right: '50px',
            top: '45%',
            transform: 'translateY(-50%) rotate(15deg)',
            background: 'repeating-linear-gradient(90deg, #F472B6 0px, #F472B6 4px, transparent 4px, transparent 8px)',
            borderRadius: '50%',
            opacity: 0.7
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
          {/* Logo placeholder */}
          <div
            className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-3"
            style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
          >
            <span className="text-2xl">🦉</span>
          </div>

          {/* Category badge (if present) */}
          {post.category && (
            <div
              className="px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-3"
              style={{
                background: 'rgba(139, 92, 246, 0.3)',
                border: '2px solid rgba(167, 139, 250, 0.6)',
                color: '#E9D5FF'
              }}
            >
              {post.category.toUpperCase()}
            </div>
          )}

          {/* Title */}
          <h1
            className="text-white text-2xl font-bold text-center mb-8"
            style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.3)' }}
          >
            {post.title}
          </h1>

          {/* Bottom info */}
          <div className="absolute bottom-4 text-center">
            <p className="text-purple-200 text-xs opacity-70 mb-1">
              Accessibility & Productivity App
            </p>
            <p className="text-white text-sm font-semibold opacity-90">
              {post.domain}
            </p>
          </div>
        </div>
      </div>

      {/* With Category Example */}
      <h3 className="text-xl font-bold mt-10 mb-4 text-gray-800">With Category Badge (Blog Posts)</h3>
      <div
        className="relative overflow-hidden rounded-xl shadow-2xl"
        style={{
          width: '600px',
          height: '313px',
          background: '#2D1B4E'
        }}
      >
        {/* Same blob structure */}
        <div
          className="absolute rounded-full blur-xl"
          style={{
            width: '300px',
            height: '300px',
            top: '-100px',
            left: '-80px',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
            opacity: 0.9
          }}
        />
        <div
          className="absolute rounded-full blur-xl"
          style={{
            width: '280px',
            height: '280px',
            top: '-80px',
            right: '-100px',
            background: 'linear-gradient(225deg, #EC4899 0%, #8B5CF6 100%)',
            opacity: 0.9
          }}
        />
        <div
          className="absolute rounded-full blur-xl"
          style={{
            width: '200px',
            height: '200px',
            bottom: '-80px',
            left: '-50px',
            background: 'linear-gradient(45deg, #7C3AED 0%, #DB2777 100%)',
            opacity: 0.8
          }}
        />
        <div
          className="absolute rounded-full blur-xl"
          style={{
            width: '260px',
            height: '260px',
            bottom: '-100px',
            right: '-80px',
            background: 'linear-gradient(315deg, #8B5CF6 0%, #F472B6 100%)',
            opacity: 0.85
          }}
        />

        {/* Striped accents */}
        <div
          className="absolute"
          style={{
            width: '80px',
            height: '50px',
            left: '40px',
            top: '50%',
            transform: 'translateY(-50%) rotate(-10deg)',
            background: 'repeating-linear-gradient(90deg, #F59E0B 0px, #F59E0B 4px, transparent 4px, transparent 8px)',
            borderRadius: '50%',
            opacity: 0.8
          }}
        />
        <div
          className="absolute"
          style={{
            width: '100px',
            height: '60px',
            right: '50px',
            top: '45%',
            transform: 'translateY(-50%) rotate(15deg)',
            background: 'repeating-linear-gradient(90deg, #F472B6 0px, #F472B6 4px, transparent 4px, transparent 8px)',
            borderRadius: '50%',
            opacity: 0.7
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
          <div
            className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-2"
            style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
          >
            <span className="text-2xl">🦉</span>
          </div>

          {/* Category badge */}
          <div
            className="px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-3"
            style={{
              background: 'rgba(139, 92, 246, 0.3)',
              border: '2px solid rgba(167, 139, 250, 0.6)',
              color: '#E9D5FF'
            }}
          >
            UPDATE
          </div>

          {/* Title - multi-line */}
          <div className="text-center mb-6" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.3)' }}>
            <h1 className="text-white text-xl font-bold">
              Celebrating 10 Years of Helperbird
            </h1>
            <h1 className="text-white text-xl font-bold">
              Exciting Updates and Plans!
            </h1>
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-4 text-center">
            <p className="text-purple-200 text-xs opacity-70 mb-1">
              Accessibility & Productivity App
            </p>
            <p className="text-white text-sm font-semibold opacity-90">
              helperbird.com
            </p>
          </div>
        </div>
      </div>

      {/* Comparison section */}
      <div className="mt-10 p-6 bg-white rounded-xl shadow-lg max-w-2xl">
        <h3 className="text-lg font-bold text-gray-800 mb-4">✨ Improvements Made</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Dynamic gradient blobs</strong> matching your brand template style</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Striped accent shapes</strong> for visual interest</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Category badges</strong> for blog posts (shows blog_cat field)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Text shadows</strong> for better readability over blobs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Domain display</strong> (helperbird.com) prominently shown</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Purple color palette</strong> using #2D1B4E, #8B5CF6, #EC4899</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialImagePreview;
