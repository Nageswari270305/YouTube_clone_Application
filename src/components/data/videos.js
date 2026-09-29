const videos = [
  {
    id: 1,
    title: "Learn React for Beginners",
    channel: "Code With Me",
    views: "1.2M views",
    uploaded: "2 days ago",
    videoId: "eILUmCJhl64",
    thumbnail: "https://img.youtube.com/vi/eILUmCJhl64/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=eILUmCJhl64"
  },

  {
    id: 2,
    title: "JavaScript Full Course",
    channel: "Programming World",
    views: "850K views",
    uploaded: "1 week ago",
    videoId: "PkZNo7MFNFg",
    thumbnail: "https://img.youtube.com/vi/PkZNo7MFNFg/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=PkZNo7MFNFg"
  },

  {
    id: 3,
    title: "Tamil Music",
    channel: "Tamil Music",
    views: "3.4M views",
    uploaded: "3 days ago",
    videoId: "zwtnCErn0I8",
    thumbnail: "https://img.youtube.com/vi/zwtnCErn0I8/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=zwtnCErn0I8"
  },

  {
    id: 4,
    title: "React Hooks Tutorial",
    channel: "Frontend Masters",
    views: "425K views",
    uploaded: "5 days ago",
    videoId: "TNhaISOUy6Q",
    thumbnail: "https://img.youtube.com/vi/TNhaISOUy6Q/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=TNhaISOUy6Q"
  },

  {
    id: 5,
    title: "Funny Moments",
    channel: "Comedy Zone",
    views: "2.8M views",
    uploaded: "1 day ago",
    videoId: "jNQXAC9IVRw",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw"
  },

  {
    id: 6,
    title: "How To Build A Website",
    channel: "Web Dev Academy",
    views: "620K views",
    uploaded: "1 week ago",
    videoId: "acBJsjCqgtM",
    thumbnail: "https://img.youtube.com/vi/acBJsjCqgtM/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=acBJsjCqgtM"
  },

  {
    id: 7,
    title: "Movies You Should Watch",
    channel: "Movie Talk",
    views: "950K views",
    uploaded: "4 days ago",
    videoId: "8hP9D6kZseM",
    thumbnail: "https://img.youtube.com/vi/8hP9D6kZseM/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=8hP9D6kZseM"
  },

  {
    id: 8,
    title: "Learn CSS From Scratch",
    channel: "CSS World",
    views: "340K views",
    uploaded: "2 weeks ago",
    videoId: "1Rs2ND1ryYc",
    thumbnail: "https://img.youtube.com/vi/1Rs2ND1ryYc/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1Rs2ND1ryYc"
  },

  {
    id: 9,
    title: "Morning Workout Routine",
    channel: "Fitness Daily",
    views: "1.5M views",
    uploaded: "3 days ago",
    videoId: "UItWltVZZmE",
    thumbnail: "https://img.youtube.com/vi/UItWltVZZmE/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=UItWltVZZmE"
  },

  {
    id: 10,
    title: "Travel Guide",
    channel: "Travel With Me",
    views: "780K views",
    uploaded: "6 days ago",
    videoId: "IL-m-hbAoI8",
    thumbnail: "https://img.youtube.com/vi/IL-m-hbAoI8/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=IL-m-hbAoI8"
  },

  {
    id: 11,
    title: "Redux Toolkit Explained",
    channel: "React Simplified",
    views: "510K views",
    uploaded: "3 days ago",
    videoId: "u3KlatzB7GM",
    thumbnail: "https://img.youtube.com/vi/u3KlatzB7GM/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=u3KlatzB7GM"
  },

  {
    id: 12,
    title: "Latest Tech News",
    channel: "Tech Today",
    views: "230K views",
    uploaded: "8 hours ago",
    videoId: "JGwWNGJdvx8",
    thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=JGwWNGJdvx8"
  },

  {
  id: 13,
  title: "Best Cooking Recipes",
  channel: "Food Corner",
  views: "1.9M views",
  uploaded: "1 week ago",
  videoId: "1APwq1df6Mw",
thumbnail: "https://img.youtube.com/vi/1APwq1df6Mw/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=1APwq1df6Mw"
},

  {
    id: 14,
    title: "Python Programming Tutorial",
    channel: "Coding School",
    views: "2.1M views",
    uploaded: "2 weeks ago",
    videoId: "rfscVS0vtbw",
    thumbnail: "https://img.youtube.com/vi/rfscVS0vtbw/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=rfscVS0vtbw"
  },

  {
    id: 15,
    title: "Relaxing Music for Study",
    channel: "Study Beats",
    views: "4.2M views",
    uploaded: "1 month ago",
    videoId: "IL-m-hbAoI8",
    thumbnail: "https://img.youtube.com/vi/IL-m-hbAoI8/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=IL-m-hbAoI8"
  },

  {
    id: 16,
    title: "How Does the Internet Work?",
    channel: "Tech Explained",
    views: "680K views",
    uploaded: "5 days ago",
    videoId: "zN8YNNHcaZc",
    thumbnail: "https://img.youtube.com/vi/zN8YNNHcaZc/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=zN8YNNHcaZc"
  },

  {
    id: 17,
    title: "Tamil Comedy Scenes",
    channel: "Comedy Tamil",
    views: "5.6M views",
    uploaded: "2 days ago",
    videoId: "5qap5aO4i9A",
    thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=5qap5aO4i9A"
  },

  {
    id: 18,
    title: "Build a React Project",
    channel: "Code Academy",
    views: "390K views",
    uploaded: "4 days ago",
    videoId: "eILUmCJhl64",
    thumbnail: "https://img.youtube.com/vi/eILUmCJhl64/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=eILUmCJhl64"
  },

 {
  id: 19,
  title: "Amazing Places in India",
  channel: "India Explorer",
  views: "1.7M views",
  uploaded: "1 week ago",
  videoId: "xUphsn5b1w8",
  thumbnail: "https://img.youtube.com/vi/xUphsn5b1w8/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=xUphsn5b1w8"
},
  {
    id: 20,
    title: "Developer Interview Questions",
    channel: "Career Coding",
    views: "275K views",
    uploaded: "3 days ago",
    videoId: "Q33KBiDriJY",
    thumbnail: "https://img.youtube.com/vi/Q33KBiDriJY/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Q33KBiDriJY"
  },

  {
    id: 21,
    title: "Learn Git and GitHub",
    channel: "Developer Hub",
    views: "890K views",
    uploaded: "1 week ago",
    videoId: "tRZGeaHPoaw",
    thumbnail: "https://img.youtube.com/vi/tRZGeaHPoaw/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=tRZGeaHPoaw"
  }
];

export default videos;