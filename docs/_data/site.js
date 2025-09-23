export default {
  title: "kdlr",
  description: "Dramaturg and narrative consultant specializing in new play development and storytelling strategy.",
  keywords: "dramaturgy, theater, new plays, narrative consulting, storytelling",
  author: "Kathryn de la Rosa",
  url: process.env.NODE_ENV === 'production' ? 'https://kathryndelarosa.com' : 'http://localhost:8080',
  
  // Contact info
  email: "krdlrosa@gmail.com",
  
  // Social links (adjust as needed)
  social: {
    // linkedin: "https://linkedin.com/in/yourname",
    // instagram: "https://instagram.com/yourhandle"
  },
  
  // Professional info
  profession: "Dramaturg & Narrative Consultant",
  location: "Everywhere",
  
  // Navigation (if you want to generate nav from data)
  nav: [
    {
      text: "About",
      url: "/about/"
    },
    {
      text: "Work",
      url: "/work/"
    },
    {
      text: "Contact",
      url: "/contact/"
    }
  ],
  
  // Build info
  buildTime: new Date()
};
