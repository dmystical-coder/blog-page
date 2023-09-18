import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: 'MinIO - Mock S3 in local development',
            description: 'Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services that provides...',
            thumbnail: 'https://res.cloudinary.com/practicaldev/image/fetch/s--ytKBvqfx--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2xkvntjhavr7xx64rx10.png',
            link: 'https://dev.to/arifszn/minio-mock-s3-in-local-development-4ke6',
            categories: ['webdev', 'cloud', 'opensource', 'aws'],
            
        },
        {
            title: 'OneClick: navigate to your favorite actions on the websites you love with just one click',
            description: "Let's introduce a simple productivity extension that has been recently featured on Chrome Web...",
            thumbnail: 'https://res.cloudinary.com/practicaldev/image/fetch/s--7bNbdBqo--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gzq29zixj5xb0ou65ivx.png',
            link: 'https://dev.to/arifszn/awesome-shortcuts-navigate-to-your-favorite-actions-on-the-websites-you-love-with-just-one-click-aen',
            categories: ['javascript', 'webdev', 'programming', 'react'],
            
        },
        {
            title: 'Get recent blog posts from popular blogging platforms with PHP',
            description: 'PHP Blog Client is a PHP package to get recent blog posts from popular blogging platforms by just...',
            thumbnail: 'https://res.cloudinary.com/practicaldev/image/fetch/s--onBxSMro--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/95zr35nycr021yw4mneo.png',
            link: 'https://dev.to/arifszn/get-recent-blog-posts-from-popular-blogging-platforms-with-php-3gd8',
            categories: ['showdev', 'php', 'opensource', 'webdev'],
            
        },
        {
            title: 'Create Personal Portfolio Using Github Api with Blog',
            description: 'For a developer, a personal portfolio plays an important role to showcase his/her works, reach to...',
            thumbnail: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Cd8ogkCD--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9edykcuvaajogjymav2i.png',
            link: 'https://dev.to/arifszn/create-personal-portfolio-using-github-api-with-blog-1a57',
            categories: ['portfolio', 'github', 'opensource', 'javascript'],
            
        },
        {
            title: 'Reactive Button: 3D animated react button component with progress bar',
            description: "I was looking for an animated button library with progress bar for react. I didn't want to add any UI...",
            thumbnail: 'https://res.cloudinary.com/practicaldev/image/fetch/s--zFCxbUAR--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/23ffp7omyqhb3h0a44fm.png',
            link: 'https://dev.to/arifszn/reactive-button-3d-animated-react-button-component-with-progress-bar-2dm6',
            categories: ['opensource', 'github', 'react', 'npm'],
            
        }]
    );
    return (
        <div className="home">
            <BlogList blogs={blogs} />
        </div>
    )
}

export default Home;