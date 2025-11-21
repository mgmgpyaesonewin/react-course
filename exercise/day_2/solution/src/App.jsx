import React, { useState } from 'react';
import BioCard from './components/BioCard';
import './App.css'; // Assuming you'll add some global app styles here

function App() {
  const myData = {
    name: "Pyae Sone Win",
    bioText: "I am a software engineer passionate about building modern web applications. I love learning new technologies and solving complex problems.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-1428bc3cd40a?q=80&w=2940&auto=format&fit=crop",
    websiteUrl: "https://github.com/yourusername" // Placeholder, encourage students to use their own
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Interactive Bio Page</h1>
      </header>
      <main>
        <BioCard {...myData} />
      </main>
    </div>
  );
}

export default App;
