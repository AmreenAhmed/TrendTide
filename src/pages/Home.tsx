import React from 'react';
import PostCard from '../components/PostCard';

const Home: React.FC = () => {
  const dummyPosts = [
    {
      id: '1',
      user: {
        username: 'fashionfrenzy',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
        isVerified: true
      },
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
      caption: 'Just dropped my new summer collection! 🌞 These flowy dresses are perfect for the season. What do you think?',
      likes: 2847,
      comments: 89,
      isShoppable: true,
      price: '$89.99'
    },
    {
      id: '2',
      user: {
        username: 'trendguru',
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
        isVerified: true
      },
      image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
      caption: 'Minimalist workspace vibes ✨ This desk setup has been a game changer for my productivity. Link in bio!',
      likes: 1923,
      comments: 45,
      isShoppable: true,
      price: '$299.99'
    },
    {
      id: '3',
      user: {
        username: 'styleicon',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
      },
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=500',
      caption: 'Golden hour walks in the city 🌅 Sometimes the best moments are the simple ones.',
      likes: 3241,
      comments: 127,
      isShoppable: false
    },
    {
      id: '4',
      user: {
        username: 'techlifestyle',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
        isVerified: true
      },
      image: 'https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg?auto=compress&cs=tinysrgb&w=500',
      caption: 'New headphones just arrived! The sound quality is incredible 🎧 Perfect for my morning runs.',
      likes: 1567,
      comments: 73,
      isShoppable: true,
      price: '$149.99'
    },
    {
      id: '5',
      user: {
        username: 'homestyle_',
        avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
      },
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500',
      caption: 'Cozy corner transformed! 🏠 Added some plants and fairy lights for the perfect reading nook.',
      likes: 892,
      comments: 34,
      isShoppable: true,
      price: '$79.99'
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Feed</h1>
        <p className="text-gray-600">Discover trending posts and shop with streaks</p>
      </div>
      
      <div className="space-y-0">
        {dummyPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-8">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105">
          Load More Posts
        </button>
      </div>
    </div>
  );
};

export default Home;