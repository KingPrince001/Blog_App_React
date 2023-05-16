const BlogSection= ({Title,Content}) =>{
    return (
        <div className="blog-section">
            <h2 className="blog-title">{Title}</h2>
            <p className="blog-content">{Content}</p>
            <button className="btn">Read More</button>
        </div>
    );
}
export default BlogSection;