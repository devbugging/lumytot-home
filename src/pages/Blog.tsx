import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogTitle = 'Sleep Better, Parent Better - Lumytot Blog';
  const blogDescription = 'Expert tips and insights to help your family get better sleep. Learn about toddler sleep training, bedtime routines, and science-backed sleep solutions.';
  const blogUrl = 'https://lumytot.com/blog';
  
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{blogTitle}</title>
        <meta name="description" content={blogDescription} />
        <meta name="keywords" content="toddler sleep, bedtime routines, sleep training, parenting tips, toddler sleep problems, sleep science, night light, sleep trainer" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={blogUrl} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={blogTitle} />
        <meta property="og:description" content={blogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:site_name" content="Lumytot" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogTitle} />
        <meta name="twitter:description" content={blogDescription} />
        <meta name="twitter:url" content={blogUrl} />
        <meta name="twitter:site" content="@lumytot" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Lumytot Blog",
            "description": blogDescription,
            "url": blogUrl,
            "publisher": {
              "@type": "Organization",
              "name": "Lumytot",
              "url": "https://lumytot.com"
            },
            "inLanguage": "en-US"
          })}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-warm">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sleep Better, Parent Better
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert insights, tips, and stories to help your family get the rest you deserve
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Blog Post 1 */}
            <article className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <div className="mb-6">
                <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Sleeping
                </span>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  The Great Bedtime Battle: Why It Happens (and How to Win Without Bribes)
                </h2>
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <span>September 11, 2025</span>
                  <span className="mx-2">•</span>
                  <span>6 min read</span>
                </div>
                <p className="text-text-custom leading-relaxed mb-6">
                  Picture this: It's 7:30PM. Pajamas are on. The books are stacked. You've even dimmed the lights and started humming like some kind of Zen sleep guru. And then—boom. "NO SLEEP! I'M A DRAGON!" If this sounds familiar, welcome to the Bedtime Battle Club...
                </p>
                <Link to="/blog/the-great-bedtime-battle">
                  <Button variant="outline">Read More</Button>
                </Link>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <div className="mb-6">
                <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Sleeping
                </span>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Why Red Light Helps Your Toddler Sleep (And Why Lumytot Glows Just Right)
                </h2>
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <span>September 10, 2025</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <p className="text-text-custom leading-relaxed mb-6">
                  Imagine this: It's 2AM. Your toddler wakes up. You shuffle in, stub your toe on a wooden train, and flip on the hallway light… Now everyone's awake. Welcome to the Sleep Apocalypse. What if your child had just the right kind of light—soft, warm, and science-backed?
                </p>
                <Link to="/blog/why-red-light-helps-your-toddler-sleep">
                  <Button variant="outline">Read More</Button>
                </Link>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <div className="mb-6">
                <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Sleeping
                </span>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Why Your Toddler Thinks 5AM Is Party Time (And How to Gently Say 'Nope')
                </h2>
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <span>September 7, 2025</span>
                  <span className="mx-2">•</span>
                  <span>4 min read</span>
                </div>
                <p className="text-text-custom leading-relaxed mb-6">
                  If your toddler thinks the day starts at 5AM—congrats! You've unlocked one of parenting's most dreaded levels: The Early Riser Boss Battle. Let's get one thing straight: your child is not doing this to ruin your life (even if it really feels like it)...
                </p>
                <Link to="/blog/why-your-toddler-thinks-5am-is-party-time">
                  <Button variant="outline">Read More</Button>
                </Link>
              </div>
            </article>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
