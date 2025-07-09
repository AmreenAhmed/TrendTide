import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, ShoppingBag, User } from 'lucide-react';

interface Post {
  id: string;
  user: {
    username: string;
    avatar: string;
    isVerified: boolean;
  };
  image: string;
  caption: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  isShoppable: boolean;
  price?: string;
  timestamp: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mb-6">
      {/* Header */}
      <div className="flex items-center p-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div className="ml-3 flex-1">
          <div className="flex items-center">
            <h3 className="text-sm font-semibold text-gray-900">@{post.user.username}</h3>
            {post.user.isVerified && (
              <div className="ml-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500">{post.timestamp}</p>
        </div>
        {post.isShoppable && (
          <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium flex items-center">
            <ShoppingBag className="w-3 h-3 mr-1" />
            {post.price}
          </div>
        )}
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={post.image}
          alt="Post"
          className="w-full h-80 object-cover"
        />
        {post.isShoppable && (
          <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200">
            <ShoppingBag className="w-5 h-5 text-gray-700" />
          </button>
        )}
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 transition-all duration-200 ${
                isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
              }`}
            >
              <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">{likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 transition-colors duration-200">
              <MessageCircle className="w-6 h-6" />
              <span className="text-sm font-medium">{post.comments}</span>
            </button>
            <button className="text-gray-600 hover:text-green-500 transition-colors duration-200">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
          {post.isShoppable && (
            <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
              Shop Now
            </button>
          )}
        </div>

        {/* Caption */}
        <p className="text-gray-800 text-sm leading-relaxed">
          <span className="font-semibold">@{post.user.username}</span> {post.caption}
        </p>
      </div>
    </div>
  );
};

export default PostCard;