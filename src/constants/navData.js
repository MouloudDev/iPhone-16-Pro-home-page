import Parcel from '../components/icons/Parcel';
import Bookmark from '../components/icons/Bookmark';
import Cog from '../components/icons/Cog';
import UserIcon from '../components/icons/UserIcon';

export const navList = [
  'Store',
  'Mac',
  'iPad',
  'iPhone',
  'Watch',
  'Vision',
  'AirPods',
  'TV & Home',
  'Entertainment',
  'Accessories',
  'Support',
];

export const profileLinks = [
  {name: 'Orders', Icon: Parcel},
  {name: 'Your Saves', Icon: Bookmark},
  {name: 'Account', Icon: Cog},
  {name: 'Sign in', Icon: UserIcon},
];

export const navSearchLinks = [
  'Find a Store',
  'Apple Vision Pro',
  'AirPods',
  'Apple Intelligence',
  'Apple Trade In'
]

// ******************************************* //
const store = {
  primCol: {
    heading: 'shop',
    links: ['Shop the Latest', 'Mac', 'iPad', 'iPhone', 'Apple Watch', 'Apple Vision Pro', 'Accessories', 'AirPods', 'TV & Home', 'Entertainment', 'Support'],
  },
  secCols: [
    { heading: 'Quick Links', links: ['Find a Store', 'Order Status', 'Apple Trade In', 'Financing', 'Personal Setup'] },
    { heading: 'Shop Special Stores', links: ['Certified Refurbished', 'Education', 'Business', 'Veterans and Military', 'Government'] }
  ]
};

const mac = {
  primCol: {
    heading: 'Explore Mac',
    links: ["Explore All Mac", "MacBook Air", "MacBook Pro", "iMac", "Mac mini", "Mac Studio", "Mac Pro", "Displays"],
  },
  secCols: [
    { heading: 'Shop Mac', links: ["Shop Mac", "Help Me Choose", "Mac Accessories", "Apple Trade In", "Financing"]},
    { heading: 'More from Mac', links:  ["Mac Support", "AppleCare+ for Mac", "macOS Sequoia", "Apple Intelligence", "Apps by Apple", "Continuity", "iCloud+", "Mac for Business", "Education"]}
  ]
};

const iPad = {
  primCol: {
    heading: "Explore iPad",
    links: ["Explore All iPad", "iPad Pro", "iPad Air", "iPad", "iPad mini", "Apple Pencil", "Keyboards", "Compare iPad", "Why iPad"]
  },
  secCols: [
    {
      heading: "Shop iPad",
      links: ["Shop iPad", "iPad Accessories", "Apple Trade In", "Financing"]
    },
    {
      heading: "More from iPad",
      links: ["iPad Support", "AppleCare+ for iPad", "iPadOS 18", "Apple Intelligence", "Apps by Apple", "iCloud+", "Education"]
    }
  ]
};

const iPhone = {
  primCol: {
    heading: "Explore iPhone",
    links: ["Explore All iPhone", "iPhone 16 Pro", "iPhone 16", "iPhone 15", "iPhone 14", "iPhone SE"]
  },
  secCols: [
    {
      heading: "Shop iPhone",
      links: ["Shop iPhone", "iPhone Accessories", "Apple Trade In", "Carrier Deals at Apple", "Financing"]
    },
    {
      heading: "More from iPhone",
      links: ["iPhone Support", "AppleCare+ for iPhone", "iOS 18", "Apple Intelligence", "Apps by Apple", "iPhone Privacy", "iCloud+", "Wallet, Pay, Card", "Siri"]
    }
  ]
};

const watch = {
  primCol: {
    heading: "Explore Watch",
    links: ["Explore All Apple Watch", "Apple Watch Series 10", "Apple Watch Ultra 2", "Apple Watch SE", "Apple Watch Nike", "Apple Watch Hermès"]
  },
  secCols: [
    {
      heading: "Shop Watch",
      links: ["Shop Apple Watch", "Apple Watch Studio", "Apple Watch Bands", "Apple Watch Accessories", "Apple Trade In", "Financing"]
    },
    {
      heading: "More from Watch",
      links: ["Apple Watch Support", "AppleCare+", "watchOS 11", "Apple Watch For Your Kids", "Apps by Apple", "Apple Fitness+"]
    }
  ]
};

const vision = {
  primCol: {
    heading: "Explore Vision",
    links: ["Explore Apple Vision Pro"]
  },
  secCols: [
    {
      heading: "Shop Vision",
      links: ["Shop Apple Vision Pro", "Apple Vision Pro Accessories", "Book a Demo", "Financing"]
    },
    {
      heading: "More from Vision",
      links: ["Apple Vision Pro Support", "AppleCare+", "visionOS 2"]
    }
  ]
};

const AirPods = {
  primCol: {
    heading: "Explore AirPods",
    links: ["Explore All AirPods", "AirPods 4", "AirPods Pro 2", "AirPods Max"]
  },
  secCols: [
    {
      heading: "Shop AirPods",
      links: ["Shop AirPods", "AirPods Accessories"]
    },
    {
      heading: "More from AirPods",
      links: ["AirPods Support", "AppleCare+ for Headphones", "Hearing Health", "Apple Music"]
    }
  ]
};

const TVHome = {
  primCol: {
    heading: "Explore TV & Home",
    links: ["Explore TV & Home", "Apple TV 4K", "HomePod", "HomePod mini"]
  },
  secCols: [
    {
      heading: "Shop TV & Home",
      links: ["Shop Apple TV 4K", "Shop HomePod", "Shop HomePod mini", "Shop Siri Remote", "TV & Home Accessories"]
    },
    {
      heading: "More from TV & Home",
      links: ["Apple TV Support", "HomePod Support", "AppleCare+", "Apple TV app", "Apple TV+", "Home app", "Apple Music", "Siri", "AirPlay"]
    }
  ]
};

const entertainment = {
  primCol: {
    heading: "Explore Entertainment",
    links: ["Explore Entertainment", "Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"]
  },
  secCols: [
    {
      heading: "Support",
      links: ["Apple TV+ Support", "Apple Music Support"]
    }
  ]
};

const accessories = {
  primCol: {
    heading: "Shop Accessories",
    links: ["Shop All Accessories", "Mac", "iPad", "iPhone", "Apple Watch", "Apple Vision Pro", "AirPods", "TV & Home"]
  },
  secCols: [
    {
      heading: "Explore Accessories",
      links: ["Made by Apple", "Beats by Dr. Dre", "AirTag"]
    }
  ]
};

const support = {
  primCol: {
    heading: "Explore Support",
    links: ["iPhone", "Mac", "iPad", "Watch", "Apple Vision Pro", "AirPods", "Music", "TV"]
  },
  secCols: [
    {
      heading: "Get Help",
      links: ["Community", "Check Coverage", "Repair"]
    },
    {
      heading: "Helpful Topics",
      links: ["Get AppleCare+", "Apple Account and Password", "Billing & Subscriptions", "Accessibility"]
    }
  ]
};

const navData = {
  Store: store,
  Mac: mac,
  iPad: iPad,
  iPhone: iPhone,
  Watch: watch,
  Vision: vision,
  AirPods,
  'TV & Home': TVHome,
  Entertainment: entertainment,
  Accessories: accessories,
  Support: support
};

export default navData;
