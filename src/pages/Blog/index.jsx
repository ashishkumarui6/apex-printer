import React from "react";
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className={styles.blogHero}>
        <div className={`${styles.heroShape} ${styles.shapeOne}`}></div>
        <div className={`${styles.heroShape} ${styles.shapeTwo}`}></div>

        <div className={`${styles.container} ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className={styles.heroLabel}>✒️ OUR BLOG</span>

            <h1>
              Ideas That Make Your <span>Brand Stand Out</span>
            </h1>

            <p>
              Discover expert printing tips, creative ideas, branding
              inspiration and the latest trends in flex printing.
            </p>

            <div className={styles.heroButtons}>
              <a href="#blogs" className={styles.primaryBtn}>
                Explore Articles →
              </a>

              <a href="#" className={styles.secondaryBtn}>
                Our Services
              </a>
            </div>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.heroCardImage}>
              <div className={styles.imageOverlay}>
                <span>FEATURED ARTICLE</span>
              </div>
            </div>

            <div className={styles.heroCardContent}>
              <div className={styles.postMeta}>
                <span>📅 Aug 20, 2026</span>
                <span>◷ 5 Min Read</span>
              </div>

              <h3>7 Creative Flex Printing Ideas For Your Business</h3>

              <a href="#">Read Article →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG SECTION ================= */}
      <section className={styles.blogSection} id="blogs">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionLabel}>LATEST ARTICLES</span>

              <h2>
                Printing Tips & <span>Ideas</span>
              </h2>
            </div>

            <p>Helpful guides and creative ideas to help your business grow.</p>
          </div>

          {/* Categories */}
          <div className={styles.categories}>
            <button className={`${styles.category} ${styles.active}`}>
              All Posts
            </button>

            <button className={styles.category}>Flex Printing</button>

            <button className={styles.category}>Branding</button>

            <button className={styles.category}>Marketing</button>

            <button className={styles.category}>Design Tips</button>
          </div>

          {/* Blog Grid */}
          <div className={styles.blogGrid}>
            <BlogCard
              imageClass={styles.blogImageOne}
              category="FLEX PRINTING"
              date="Aug 18, 2026"
              time="6 Min Read"
              title="Complete Guide to Choosing the Right Flex Material"
              description="Learn how to select the perfect flex material for indoor and outdoor advertising."
            />

            <BlogCard
              imageClass={styles.blogImageTwo}
              category="BRANDING"
              date="Aug 15, 2026"
              time="4 Min Read"
              title="How Flex Banners Can Improve Your Business Visibility"
              description="Discover how attractive banners can increase visibility and attract customers."
            />

            <BlogCard
              imageClass={styles.blogImageThree}
              category="DESIGN"
              date="Aug 12, 2026"
              time="5 Min Read"
              title="10 Banner Design Mistakes You Should Avoid"
              description="Avoid common design mistakes and create professional banners that get attention."
            />

            <BlogCard
              imageClass={styles.blogImageFour}
              category="MARKETING"
              date="Aug 10, 2026"
              time="7 Min Read"
              title="Outdoor Advertising Ideas For Local Businesses"
              description="Powerful outdoor advertising strategies for small and growing businesses."
            />

            <BlogCard
              imageClass={styles.blogImageFive}
              category="PRINTING"
              date="Aug 08, 2026"
              time="5 Min Read"
              title="Flex Printing vs Vinyl Printing: What's Better?"
              description="Compare flex and vinyl printing and choose the right option for your project."
            />

            <BlogCard
              imageClass={styles.blogImageSix}
              category="BUSINESS"
              date="Aug 05, 2026"
              time="6 Min Read"
              title="Why Professional Printing Matters For Your Brand"
              description="Understand why high-quality printing can create a stronger impression on customers."
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.blogCta}>
        <div className={styles.container}>
          <div className={styles.ctaWrapper}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaLabel}>READY TO PRINT?</span>

              <h2>
                Let's Make Your <span>Brand Visible</span>
              </h2>

              <p>
                From flex banners to complete branding solutions, we bring your
                ideas to life with quality printing.
              </p>

              <a href="#" className={styles.ctaBtn}>
                Get Free Quote →
              </a>
            </div>

            <div className={styles.ctaIcon}>🖨️</div>
          </div>
        </div>
      </section>
    </div>
  );
};

const BlogCard = ({ imageClass, category, date, time, title, description }) => {
  return (
    <article className={styles.blogCard}>
      <div className={`${styles.blogImage} ${imageClass}`}>
        <span className={styles.blogCategory}>{category}</span>
      </div>

      <div className={styles.blogContent}>
        <div className={styles.blogMeta}>
          <span>📅 {date}</span>
          <span>{time}</span>
        </div>

        <h3>{title}</h3>

        <p>{description}</p>

        <a href="#" className={styles.readMore}>
          Read More →
        </a>
      </div>
    </article>
  );
};

export default Blog;
