import React from 'react'
import BioCard from './BioCard'

function App() {
    const myData = {
        name: "Pyae Sone Win",
        age: 25,
        gender: "Male",
        country: "Myanmar",
        bioText: "I am a software engineer passionate about building modern web applications. I love learning new technologies and solving complex problems.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        websiteUrl: "https://github.com/mgmgpyaesonewin",
        socialLinks: [
            { platform: "Twitter", url: "https://twitter.com/pyaesonewin" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/pyaesonewin" },
            { platform: "GitHub", url: "https://github.com/mgmgpyaesonewin" },
            { platform: "Email", url: "mailto:pyaesoewin.dev@gmail.com" }
        ],
        skills: [
            { name: "React & TypeScript", level: 90 },
            { name: "Node.js & Express", level: 85 },
            { name: "Python & Django", level: 80 },
            { name: "UI/UX Design", level: 75 },
            { name: "Cloud Services (AWS)", level: 70 }
        ]
    };

    return (
        <BioCard {...myData} />
    );
}

export default App;
