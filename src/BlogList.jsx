const BlogList = ({ blogs }) => {

    const tagStyles = ["hot-pink", "success", "light-blue", "indigo", "primary", "blue-gray", "orange", "rose"];

    return (

        blogs.map((blog, index) => (
            <article key={index}>
                <img src={blog.thumbnail} alt="thumbnail" />
                <div className="blog-details">
                    <p className="author">Anonymous • 17 Jan 2022</p>

                    <h3 className="blog-heading">{blog.title}</h3>


                    <p className="blog-paragraph">
                        {blog.description}
                    </p>
                    <div className="tags">
                        {blog.categories.map((label, i) => (
                            <div key={i} className="tags">
                                <p className={tagStyles[Math.floor(Math.random() * 8)]} >{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        ))

    );
}

export default BlogList;