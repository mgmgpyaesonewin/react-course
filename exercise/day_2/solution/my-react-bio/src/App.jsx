import './App.css'
import './index.css'
import BioCard from './components/BioCard'

function App() {
  const myData = {
    name: "Pyae Sone Win",
    bioText: "I am a software engineer passionate about building modern web applications. I love learning new technologies and solving complex problems.",
    imageUrl: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    websiteUrl: "https://github.com/mgmgpyaesonewin"
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
  )
}

export default App
