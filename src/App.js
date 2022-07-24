import React from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import AboutCard from "./components/AboutCard"
import Section from "./components/Section"
import sectionData from "./sectionData"

export default function App() {
  const sectionElements = sectionData.map(section => {
    return (
        <Section 
            key={section.id}
            title={section.title}  
            entries={section.entries}
        />
    )
  })

  return (
    <div>
      <Navbar />
      <main>
        <h1 className='hello'>Hi, I'm Ethan! >:)</h1>
        <AboutCard />   
        {sectionElements}
      </main>
      <Footer />
    </div>
  )
}