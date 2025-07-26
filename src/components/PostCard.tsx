import React, { useState } from 'react';
import { Heart, MessageCircle, Share, ShoppingBag, Flame } from 'lucide-react';

interface Post {
  id: string;
  user: {
    username: string;
    avatar: string;
    isVerified?: boolean;
  };
  image: string;
  caption: string;
  likes: number;
  comments: number;
  isShoppable: boolean;
  price?: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mb-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.user.avatar}
            alt={post.user.username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-900">@{post.user.username}</span>
              {post.user.isVerified && (
                <div className="w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {post.isShoppable && (
          <div className="flex items-center space-x-1 bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
            <ShoppingBag size={14} />
            <span className="text-xs font-medium">Shop</span>
          </div>
        )}
      </div>

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt="Post content"
          className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
        />
        {post.price && (
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full">
            <span className="font-semibold">{post.price}</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 transition-colors duration-200 ${
                isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
              }`}
            >
              <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
              <span className="text-sm font-medium">{likesCount}</span>
            </button>
            
            <button className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors duration-200">
              <MessageCircle size={20} />
              <span className="text-sm font-medium">{post.comments}</span>
            </button>
            
            <button className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
              <Share size={20} />
            </button>
          </div>

          {post.isShoppable && (
            <button className="flex items-center space-x-1 bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-full hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
              <Flame size={16} />
              <span className="text-sm font-medium">Buy & Streak</span>
            </button>
          )}
        </div>

        {/* Caption */}
        <div className="text-gray-900">
          <span className="font-semibold">@{post.user.username}</span>
          <span className="ml-2">{post.caption}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;