const HighlightsSection = ({ sectionTitle }) => {
    const blogs = ['Introduction to Javascript', 'Python Basics', 'Java Basics','C++ Basics','HTML Basics'];
  
    return (
      <div className="highlights-section">
        <h2>{sectionTitle}</h2>
        <ul>
          {blogs.map((blog, index) => (
            <li key={index}>{blog}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default HighlightsSection;
  