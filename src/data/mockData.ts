export interface User {
  id: string;
  username: string;
  avatar: string;
  isVerified: boolean;
  bio: string;
  followers: number;
  following: number;
  posts: number;
  streak: number;
  totalPoints: number;
}

export interface Post {
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
  category?: string;
}

export const currentUser: User = {
  id: '1',
  username: 'fashionfrenzy',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b1e2-2618-4adf-ba97-2d7cb7f3e4a3?w=150&h=150&fit=crop&crop=face',
  isVerified: true,
  bio: 'Fashion enthusiast 👗 | Trend setter ✨ | Shopping streak champion 🔥',
  followers: 2847,
  following: 1203,
  posts: 156,
  streak: 12,
  totalPoints: 2450
};

export const mockPosts: Post[] = [
  {
    id: '1',
    user: {
      username: 'trendguru',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      isVerified: true
    },
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=400&fit=crop',
    caption: 'Just discovered this amazing vintage jacket! Perfect for the autumn season 🍂 #VintageStyle #FashionFinds',
    likes: 234,
    comments: 18,
    isLiked: false,
    isShoppable: true,
    price: '$89.99',
    timestamp: '2h ago',
    category: 'Fashion'
  },
  {
    id: '2',
    user: {
      username: 'stylequeen',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      isVerified: false
    },
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
    caption: 'Coffee shop vibes ☕ Living my best life with this cozy setup. What\'s your favorite study spot?',
    likes: 156,
    comments: 23,
    isLiked: true,
    isShoppable: false,
    timestamp: '4h ago',
    category: 'Lifestyle'
  },
  {
    id: '3',
    user: {
      username: 'techsavvy',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      isVerified: true
    },
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=400&fit=crop',
    caption: 'New setup is finally complete! This monitor has been a game-changer for productivity 💻 #TechLife #Productivity',
    likes: 89,
    comments: 12,
    isLiked: false,
    isShoppable: true,
    price: '$299.99',
    timestamp: '6h ago',
    category: 'Electronics'
  },
  {
    id: '4',
    user: {
      username: 'fitnessfirst',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      isVerified: false
    },
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    caption: 'Morning workout complete! These new running shoes are incredible 🏃‍♀️ #FitnessJourney #RunningLife',
    likes: 167,
    comments: 15,
    isLiked: true,
    isShoppable: true,
    price: '$129.99',
    timestamp: '8h ago',
    category: 'Sports'
  },
  {
    id: '5',
    user: {
      username: 'artlover',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      isVerified: true
    },
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
    caption: 'Finished this painting today! Art supplies from my favorite store never disappoint 🎨 #ArtLife #Creativity',
    likes: 203,
    comments: 31,
    isLiked: false,
    isShoppable: true,
    price: '$45.99',
    timestamp: '12h ago',
    category: 'Art'
  },
  {
    id: '6',
    user: {
      username: 'wanderlust',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b1e2-2618-4adf-ba97-2d7cb7f3e4a3?w=150&h=150&fit=crop&crop=face',
      isVerified: false
    },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    caption: 'Mountain adventures with my new hiking gear! The view was absolutely breathtaking 🏔️ #Adventure #Hiking',
    likes: 298,
    comments: 42,
    isLiked: true,
    isShoppable: true,
    price: '$179.99',
    timestamp: '1d ago',
    category: 'Outdoor'
  }
];

export const trendingPosts: Post[] = [
  {
    id: 't1',
    user: {
      username: 'fashionista',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      isVerified: true
    },
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop',
    caption: 'Trending: Oversized blazers are back! 🔥 #TrendAlert #Fashion2024',
    likes: 1234,
    comments: 89,
    isLiked: false,
    isShoppable: true,
    price: '$149.99',
    timestamp: '3h ago',
    category: 'Fashion'
  },
  {
    id: 't2',
    user: {
      username: 'homecoziness',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
      isVerified: false
    },
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    caption: 'Cozy home vibes with this minimalist decor piece 🏠 #HomeDecor #Minimalism',
    likes: 567,
    comments: 34,
    isLiked: true,
    isShoppable: true,
    price: '$79.99',
    timestamp: '5h ago',
    category: 'Home'
  },
  {
    id: 't3',
    user: {
      username: 'foodiegram',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face',
      isVerified: true
    },
    image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=400&h=400&fit=crop',
    caption: 'Brunch goals! This new cookbook has the best recipes 📖 #Foodie #BrunchLife',
    likes: 789,
    comments: 56,
    isLiked: false,
    isShoppable: true,
    price: '$24.99',
    timestamp: '7h ago',
    category: 'Food'
  }
];

export const categories = [
  'All',
  'Fashion',
  'Electronics',
  'Lifestyle',
  'Sports',
  'Art',
  'Outdoor',
  'Home',
  'Food'
];