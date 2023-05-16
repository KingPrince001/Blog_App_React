// import { useState } from 'react'
import React from 'react'
import './App.css'
import Site from './components/Site'
import BlogSection from './components/BlogSection'
import HighlightsSection from './components/HighlightsSection'  
import Header from './components/Header'
import Footer from './components/footer'

function App() {
 

  return (
    <div className="App">
      <div className="header">
      <Site />
      <Header />
      </div>
  
<div className="master-container">
  <div className="blog-column">
      < BlogSection Title="Basics of JavaScript" Content="JavaScript: The language of the web. It brings interactivity to websites, enhances user experience, and empowers developers to create dynamic conte"/>
  
  <BlogSection Title="Python Basics" Content="Python: A versatile and beginner-friendly language. It excels in simplicity, readability, and offers extensive libraries for diverse applications."/>

<BlogSection Title="Java Basics" Content="Java: A robust and widely-used language. It enables cross-platform development, offers strong object-oriented programming capabilities, and powers countless applications." />
<BlogSection Title="C++ Basics" Content="Getting Started with C++: An Introduction to Variables, Functions, and Object-Oriented Programming Concepts for Beginners"/>
<BlogSection Title="HTML Basics" Content="HTML Basics: A Beginner's Guide to the Building Blocks of the Web - Tags, Structure, and Creating Web Pages."/>
     </div>
     <div className="highlights">
<HighlightsSection sectionTitle="Highlights" />
     </div>
     </div>
     <Footer />
    </div>
  )
   
  
}

// am creating a blog app
// const AppName= () => {
//   return <h1 className='appName'>Blog medium</h1>;
// }

export default App
