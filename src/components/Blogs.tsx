import "./styles/Blogs.css";
import { TbArticle, TbArrowUpRight } from "react-icons/tb";

const blogs = [
  {
    title: "AWS Systems Manager (SSM): The Ultimate Tool for Secure and Automated Cloud Operations",
    summary: "Learn how to manage a fleet of servers in the cloud with security, consistency, and automation using AWS SSM services like Run Command, Session Manager, and Parameter Store.",
    readTime: "15 min read",
    year: "2024",
    url: "https://medium.com/@shubhpandet/%EF%B8%8F-aws-systems-manager-ssm-the-ultimate-tool-for-secure-and-automated-cloud-operations-fbe47b9f4539",
    thumbnail: "/SSM.png"
  },
  {
    title: "Mastering AWS Monitoring: Your Guide to Observability with CloudWatch and Beyond",
    summary: "Comprehensive guide to CloudWatch, EventBridge, and observability patterns designed for modern cloud native system administrators.",
    readTime: "12 min read",
    year: "2024",
    url: "https://medium.com/@shubhpandet/mastering-aws-monitoring-your-guide-to-observability-with-cloudwatch-and-beyond-a4dfec196726",
    thumbnail: "/Monitoring.png"
  },
  {
    title: "Database Scaling on AWS: Deep Dive into RDS, Aurora, and DynamoDB for Global Scale",
    summary: "Deep dive architectural analysis of database scaling capabilities using RDS read replicas, Aurora Serverless, and global DynamoDB clusters.",
    readTime: "15 min read",
    year: "2024",
    url: "https://medium.com/@shubhpandet/mastering-database-scaling-on-aws-rds-aurora-and-dynamodb-cb3c9f806969",
    thumbnail: "/Database.png"
  }
];

const Blogs = () => {
  return (
    <div className="blogs-section section-container" id="blogs">
      <div className="blogs-container">
        <h2>
          Technical <span>Publications</span>
        </h2>
        
        <h3 className="sub-title">
          <TbArticle className="icon-header" /> Medium Articles ({blogs.length})
        </h3>

        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <a 
              href={blog.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="blog-card"
              key={index}
            >
              <div className="blog-img-container">
                <img src={blog.thumbnail} alt={blog.title} className="blog-img" />
                <span className="blog-readtime">{blog.readTime}</span>
              </div>
              <div className="blog-info">
                <div className="blog-header">
                  <span className="blog-year">{blog.year}</span>
                  <span className="blog-arrow-link">
                    Read Article <TbArrowUpRight />
                  </span>
                </div>
                <h4>{blog.title}</h4>
                <p>{blog.summary}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
