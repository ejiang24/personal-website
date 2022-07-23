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
        <AboutCard />   
        {sectionElements}
      </main>
      <Footer />
    </div>
  )
}