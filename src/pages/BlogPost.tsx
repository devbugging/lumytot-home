import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

interface BlogPostData {
  title: string;
  category: string;
  date: string;
  readTime: string;
  content: JSX.Element;
  description: string;
  keywords: string[];
  author: string;
  publishedTime: string;
}

const blogPosts: Record<string, BlogPostData> = {
  'the-great-bedtime-battle': {
    title: 'The Great Bedtime Battle: Why It Happens (and How to Win Without Bribes)',
    category: 'Sleeping',
    date: 'September 11, 2025',
    readTime: '6 min read',
    description: 'Struggling with toddler bedtime resistance? Learn science-backed strategies to win the bedtime battle without bribes, threats, or exhaustion. Expert tips for peaceful nights.',
    keywords: ['toddler bedtime resistance', 'bedtime routine for toddlers', 'how to get toddler to sleep', 'toddler sleep training', 'bedtime battles', 'toddler sleep problems'],
    author: 'Lumytot',
    publishedTime: '2025-09-11T00:00:00Z',
    content: (
      <div className="prose prose-lg max-w-none text-text-custom">
        <p className="text-lg mb-6 leading-relaxed">
          Picture this: It's 7:30PM. Pajamas are on. The books are stacked. You've even dimmed the lights and started humming like some kind of Zen sleep guru. And then—boom.
        </p>
        
        <p className="mb-6 leading-relaxed font-bold text-foreground">
          "NO SLEEP! I'M A DRAGON!"
        </p>
        
        <p className="mb-6 leading-relaxed">
          Your toddler is now galloping naked down the hallway, roaring, with zero intention of going to bed.
        </p>
        
        <p className="mb-8 leading-relaxed">
          If this sounds familiar, welcome to the <strong>Bedtime Battle Club</strong>. And don't worry—you're not alone. Most parents face bedtime resistance at some point, and it has <em>nothing</em> to do with your parenting skills. It's just toddlers being… toddlers.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          🤯 Why Toddlers Resist Bedtime (a.k.a. The Science Behind the Shenanigans)
        </h2>
        
        <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">
          🧠 1. They're Gaining Independence
        </h3>
        
        <p className="mb-6 leading-relaxed">
          Toddlers are <em>mini control freaks</em>. It's developmentally normal! Saying "no" to sleep is often just a way for them to assert control over their little worlds.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">
          🕒 2. They're Overtired or Under-Tired
        </h3>
        
        <p className="mb-6 leading-relaxed">
          Yes, both can cause chaos. Overtired kids become wired and hyper. Under-tired kids… just aren't ready yet. This is where routines (and knowing your kid's sleep needs) come in handy.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">
          📱 3. Overstimulation Before Bed
        </h3>
        
        <p className="mb-6 leading-relaxed">
          Screens, sugar, wild play, and light exposure can push their little brains into "party mode" right before bed.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">
          😢 4. They Have FOMO (Yes, Really)
        </h3>
        
        <p className="mb-8 leading-relaxed">
          Toddlers think you're living your best life while they're stuck in bed. They don't want to miss <em>anything</em>—even if it's just you folding laundry and stress-eating pretzels.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          🛁 How to Actually Win Bedtime (Without Losing Your Mind)
        </h2>
        
        <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">
          1. Create a Consistent (But Short) Routine
        </h3>
        
        <p className="mb-4 leading-relaxed">
          The key word here is <em>predictable</em>. Toddlers thrive on structure. A simple 20–30 minute routine works wonders:
        </p>
        
        <div className="bg-accent p-4 rounded-lg mb-6">
          <p className="leading-relaxed italic">
            Bath → Pajamas → Book → Cuddles → Lights off (+ turn on the moonlight on Lumytot)
          </p>
        </div>
        
        <p className="mb-6 leading-relaxed">
          Bonus: Use the same phrases every night. "It's time to rest our bodies." "The moon is glowing now." Over time, these become sleep cues.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">
          2. Set Clear Expectations (And Stick To Them)
        </h3>
        
        <p className="mb-6 leading-relaxed">
          Don't let them drag you into a 45-minute debate over one more book. When you say "last one," mean it. Calm, kind, but firm. Like a gentle drill sergeant in fuzzy slippers.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">
          3. Make the Environment Sleep-Friendly
        </h3>
        
        <ul className="mb-6 leading-relaxed list-disc pl-6">
          <li>Dim lights 30–60 minutes before bed</li>
          <li>Use blackout curtains (toddlers can detect <em>any</em> stray photon)</li>
          <li>Try white noise to block out barking dogs, creaky floors, or your midnight snack run</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">
          4. Use a Visual Cue to Reinforce Boundaries
        </h3>
        
        <p className="mb-4 leading-relaxed">
          Here's where <strong>Lumytot</strong> can change the game. Toddlers don't understand time, but they understand light and symbols.
        </p>
        
        <p className="mb-6 leading-relaxed">
          With <strong>Lumytot</strong>, the moon icon glows softly during sleep time and switches to a sun when it's okay to wake up or get out of bed. No buttons to push. No overstimulating screens. Just one clear signal that says: <em>Sleep now, play later.</em>
        </p>
        
        <p className="mb-8 leading-relaxed">
          It's like a traffic light for bedtime—but cuter.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          😂 Things That Don't Work (But We've All Tried Them)
        </h2>
        
        <ul className="mb-8 leading-relaxed list-disc pl-6">
          <li>Negotiating: "Okay, just ONE more episode of Peppa…" (You played yourself.)</li>
          <li>Bribing: "If you sleep now, you get a lollipop at breakfast." (Sure. Great parenting.)</li>
          <li>Threatening: "If you don't go to bed, Santa's watching." (Yikes.)</li>
          <li>Giving in: You're now sharing a bed with a toddler, three plushies, and 3/4 of a granola bar.</li>
        </ul>
        
        <p className="mb-8 leading-relaxed">
          It's okay. We've all been there. The key is consistency, not perfection.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          ✨ Enter: The Toddler Sleep Whisperer (That's You + Lumytot)
        </h2>
        
        <p className="mb-6 leading-relaxed">
          With consistency, clear boundaries, and a little help from tools like <strong>Lumytot</strong>, bedtime can go from <em>chaotic standoff</em> to <em>cozy ritual</em>.
        </p>
        
        <p className="mb-8 leading-relaxed">
          The best part? You're not yelling. You're not bribing. You're not bargaining with bedtime terrorists. You're guiding your child with confidence, calm—and one very cute glowing sleep trainer.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          TL;DR
        </h2>
        
        <ul className="leading-relaxed list-disc pl-6">
          <li>Bedtime resistance is normal (but fixable)</li>
          <li>Toddlers need clear cues, not chaos</li>
          <li>Keep routines short, consistent, and boring</li>
          <li>Lumytot helps toddlers <em>see</em> when it's time to sleep</li>
          <li>You're doing better than you think</li>
        </ul>
      </div>
    )
  },
  'why-red-light-helps-your-toddler-sleep': {
    title: 'Why Red Light Helps Your Toddler Sleep (And Why Lumytot Glows Just Right)',
    category: 'Sleeping',
    date: 'September 10, 2025',
    readTime: '5 min read',
    description: 'Discover the science behind red light for toddler sleep. Learn why red light helps melatonin production and how Lumytot uses this research for better toddler sleep.',
    keywords: ['red light for toddler sleep', 'best night light for sleep', 'toddler night light red light', 'melatonin and sleep', 'circadian rhythm toddlers', 'sleep science'],
    author: 'Lumytot',
    publishedTime: '2025-09-10T00:00:00Z',
    content: (
      <div className="prose prose-lg max-w-none text-text-custom">
        <p className="text-lg mb-6 leading-relaxed">
          Imagine this: It's 2AM. Your toddler wakes up. You shuffle in, stub your toe on a wooden train, and flip on the hallway light…
        </p>
        
        <p className="mb-6 leading-relaxed font-bold text-foreground">
          💥 Now <em>everyone's</em> awake. Welcome to the <strong>Sleep Apocalypse</strong>.
        </p>
        
        <p className="mb-6 leading-relaxed">
          Let's rewind.
        </p>
        
        <p className="mb-6 leading-relaxed">
          What if your child had just the right kind of light—soft, warm, and science-backed—to keep them calm and sleepy, not wide-eyed and ready to redecorate the living room?
        </p>
        
        <p className="mb-8 leading-relaxed">
          Enter: <strong>red light</strong>. (Yes, <em>red</em>—not blue, not white, and definitely not the glowing rainbow light show your neighbor's sleep clock is giving off.)
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          🔬 What's the Deal With Red Light?
        </h2>
        
        <p className="mb-4 leading-relaxed">
          Short answer: It's the only light that doesn't mess with your sleep hormones.
        </p>
        
        <p className="mb-8 leading-relaxed">
          Longer (but still parent-friendly) answer: Light affects our circadian rhythms—those internal clocks that tell our bodies when to sleep and wake. Blue and white light, which is what you find in most overhead lights and screens, <strong>suppress melatonin</strong> (the hormone that helps you fall and stay asleep). Red light, on the other hand? ✨ <strong>Melatonin-friendly. Brain-calming. Toddler-whispering magic.</strong>
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          💡 Why Most "Night Lights" Are Actually Too Bright
        </h2>
        
        <p className="mb-6 leading-relaxed">
          Let's be real: A lot of sleep products look like carnival rides.
        </p>
        
        <p className="mb-6 leading-relaxed">
          Bright white LEDs, color-changing effects, twinkling stars on the ceiling—it's overstimulation city in there. And guess what toddlers do when they're overstimulated?
        </p>
        
        <p className="mb-8 leading-relaxed">
          They <em>party</em>.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          🌙 Why Lumytot Uses Red Light (And Why It Works So Well)
        </h2>
        
        <p className="mb-4 leading-relaxed">
          Here's where we got picky—because we're parents too.
        </p>
        
        <p className="mb-4 leading-relaxed">
          <strong>Lumytot</strong> features a <strong>red light option</strong> that's:
        </p>
        
        <ul className="mb-8 leading-relaxed list-disc pl-6">
          <li>🔴 <strong>Scientifically sleep-safe</strong></li>
          <li>🌒 <strong>Fully adjustable</strong> (brightness goes <em>waaay</em> down)</li>
          <li>👁️ <strong>Barely visible if you want it that way</strong></li>
          <li>🤫 <strong>No flicker, no hum, no toddler disco</strong></li>
        </ul>
        
        <p className="mb-8 leading-relaxed">
          We didn't just throw in red light to check a box—we designed it to be <em>as adjustable as your bedtime patience.</em>
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          🧒 How Toddlers Actually Respond to Red Light
        </h2>
        
        <p className="mb-4 leading-relaxed">
          When you use Lumytot's red glow as a consistent bedtime and overnight cue, here's what starts to happen:
        </p>
        
        <ul className="mb-8 leading-relaxed list-disc pl-6">
          <li>Your toddler associates the red moon glow with "time to sleep"</li>
          <li>Their melatonin stays flowing (even if they stir at 3AM)</li>
          <li>You stop playing flashlight tag every night</li>
          <li>You start waking up wondering why it's… <em>quiet</em>?!</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          😂 Real Talk: What Red Light Won't Do
        </h2>
        
        <p className="mb-4 leading-relaxed">
          Let's be honest here. Red light won't:
        </p>
        
        <ul className="mb-6 leading-relaxed list-disc pl-6">
          <li>Brush your toddler's teeth for you</li>
          <li>Convince them they <em>don't</em> need "just one more sip of water"</li>
          <li>Fix a missed nap or a sugar rush from Grandma's house</li>
        </ul>
        
        <p className="mb-8 leading-relaxed">
          But it <em>will</em> support healthy sleep hormones, give gentle overnight guidance, and keep your nights calmer and darker—so <em>everyone</em> gets more rest.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          💤 TL;DR
        </h2>
        
        <ul className="leading-relaxed list-disc pl-6">
          <li>Red light = good for melatonin + toddler sleep</li>
          <li>Blue/white light = brain says "WAKE UP"</li>
          <li>Most night lights = way too bright</li>
          <li>Lumytot = gentle, fully adjustable red glow</li>
          <li>Your sleep = about to improve significantly</li>
        </ul>
      </div>
    )
  },
  'why-your-toddler-thinks-5am-is-party-time': {
    title: 'Why Your Toddler Thinks 5AM Is Party Time (And How to Gently Say \'Nope\')',
    category: 'Sleeping',
    date: 'September 7, 2025',
    readTime: '4 min read',
    description: 'Stop early morning wake-ups! Learn why toddlers wake at 5AM and proven strategies to help them sleep until a reasonable hour. Expert tips for exhausted parents.',
    keywords: ['toddler waking up too early', 'toddler sleep trainer', 'early morning wakeups', 'how to stop toddler waking early', '5am wake ups', 'toddler sleep schedule'],
    author: 'Lumytot',
    publishedTime: '2025-09-07T00:00:00Z',
    content: (
      <div className="prose prose-lg max-w-none text-text-custom">
        <p className="text-lg mb-6 leading-relaxed">
          If your toddler thinks the day starts at 5AM—congrats! You've unlocked one of parenting's most dreaded levels: <strong>The Early Riser Boss Battle</strong>.
        </p>
        
        <p className="mb-8 leading-relaxed">
          Let's get one thing straight: your child is <em>not</em> doing this to ruin your life (even if it really feels like it when you're blinking at the coffee machine in total darkness). Early waking is incredibly common in babies and toddlers—and thankfully, there are ways to fix it.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          ☀️ Why Toddlers Wake Up Too Early (Even on Weekends)
        </h2>
        
        <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">
          1. Bedtime is Too Early (or Too Late)
        </h3>
        
        <p className="mb-6 leading-relaxed">
          This sounds backwards, but both can cause early waking. Too-early bedtimes can leave them fully rested before 6AM. Too-late bedtimes can lead to overtiredness, which messes with sleep quality and causes… you guessed it: early wakes.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">
          2. Sleep Environment is Too Stimulating
        </h3>
        
        <p className="mb-6 leading-relaxed">
          Light streaming in at 5AM? Birds chirping like it's a Disney movie? That might be enough to signal "Rise and Shine!" even though you're just trying to survive.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">
          3. They Don't Know They Should Stay in Bed
        </h3>
        
        <p className="mb-8 leading-relaxed">
          Toddlers don't have the internal clock yet. To them, 5AM and 7AM might feel the same. If they wake up and <em>nobody</em> tells them "Nope, not yet," they might just assume it's go-time.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          How to Fix Early Toddler Wake-Ups (Without Sacrificing Your Sanity)
        </h2>
        
        <p className="mb-8 leading-relaxed">
          Let's be honest: there is no <strong>magic fix</strong>, but these consistent steps can make a huge difference over time. (And by "time," we mean maybe a week or two—<em>not until college</em>.)
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">
          ✅ 1. Check the Schedule
        </h3>
        
        <ul className="mb-6 leading-relaxed list-disc pl-6">
          <li>Make sure your toddler isn't napping too long or too late.</li>
          <li>Bedtime sweet spot for toddlers is usually between <strong>6:30PM–8PM</strong>.</li>
          <li>Don't be afraid to adjust by 15-minute increments to test what works.</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">
          🕶️ 2. Control the Environment
        </h3>
        
        <ul className="mb-6 leading-relaxed list-disc pl-6">
          <li>Use blackout curtains (like, <em>actual blackout</em>, not "kind of dark").</li>
          <li>White noise can help mask those early morning chirps, trash trucks, or mysteriously creaky floors.</li>
          <li>Keep the room cool, quiet, and cozy.</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">
          🌙 3. Use Visual Sleep Cues (This is Where Lumytot Shines!)
        </h3>
        
        <p className="mb-4 leading-relaxed">
          Here's the thing: toddlers don't tell time—but they <strong>do</strong> understand cues. That's where sleep trainers like <strong>Lumytot</strong> come in.
        </p>
        
        <p className="mb-6 leading-relaxed">
          Lumytot is a simple glowing clock that visually shows your toddler when it's time to sleep and when it's okay to wake. It uses calming, soft light (not the eye-burning kind) and has <strong>no buttons to mash or animations to distract</strong>.
        </p>
        
        <p className="mb-6 leading-relaxed">
          When the moon is glowing, it's still sleep time. When the sun comes on, they know it's time to get up. Over a few days, kids start to <em>get it</em>—and mornings magically get quieter.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">
          🧸 4. Keep Early Mornings Boring
        </h3>
        
        <p className="mb-4 leading-relaxed">
          This one is key: <em>Don't accidentally reward early waking.</em>
        </p>
        
        <p className="mb-6 leading-relaxed">
          If your toddler wakes early and gets cuddles, snacks, or iPad time… guess what? They're going to keep doing it. Keep it boring. Calm. Lights dim. Minimal talking. No showbiz.
        </p>
        
        <p className="mb-8 leading-relaxed">
          They'll eventually learn that early waking isn't worth the effort.
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          😂 What NOT to Do (Unless You're Into Chaos)
        </h2>
        
        <ul className="mb-8 leading-relaxed list-disc pl-6">
          <li>Don't let them nap wherever, whenever—consistency is your new religion.</li>
          <li>Don't say "Just this once" (you'll say it 14 times).</li>
          <li>Don't scream into a pillow at 5:01AM. (Okay, fine, maybe once.)</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          🧠 The Toddler Brain Is Wild—but Trainable
        </h2>
        
        <p className="mb-6 leading-relaxed">
          The truth is, toddlers are learning <em>everything</em>. Including how to sleep well. It's not about punishment or control—it's about creating clear signals, safety, and routine.
        </p>
        
        <p className="mb-8 leading-relaxed">
          That's exactly why <strong>Lumytot</strong> was born. (Fun fact: Our founder's toddler once woke up at 4:48AM for a full week. We don't talk about that week.)
        </p>
        
        <h2 className="text-2xl font-bold text-foreground mb-6 mt-8">
          🎯 TL;DR
        </h2>
        
        <ul className="mb-6 leading-relaxed list-disc pl-6">
          <li>Toddler waking at 5AM? Super common.</li>
          <li>Fix bedtime, environment, and use visual cues.</li>
          <li>Lumytot helps toddlers learn when it's okay to wake.</li>
          <li>Stay consistent. Stay boring. Stay caffeinated.</li>
        </ul>
        
        <p className="leading-relaxed">
          Want to see if Lumytot can help your family snooze past sunrise?
        </p>
        
        <p className="leading-relaxed font-semibold">
          👉 Join our waitlist!
        </p>
      </div>
    )
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !blogPosts[slug]) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-24 pb-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button variant="outline">Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const post = blogPosts[slug];
  
  const currentUrl = `https://lumytot.com/blog/${slug}`;
  const siteTitle = 'Lumytot - Sleep Better, Parent Better';
  
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{post.title} | {siteTitle}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <meta name="author" content={post.author} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.publishedTime} />
        <meta property="article:section" content={post.category} />
        {post.keywords.map((keyword, index) => (
          <meta key={index} property="article:tag" content={keyword} />
        ))}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:site" content="@lumytot" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "author": {
              "@type": "Organization",
              "name": post.author,
              "url": "https://lumytot.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lumytot",
              "url": "https://lumytot.com"
            },
            "datePublished": post.publishedTime,
            "dateModified": post.publishedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": currentUrl
            },
            "url": currentUrl,
            "keywords": post.keywords.join(', '),
            "articleSection": post.category,
            "wordCount": post.content.props.children.length || 1000,
            "timeRequired": post.readTime,
            "inLanguage": "en-US"
          })}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Blog Post Header */}
      <header className="pt-24 pb-8">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                ← Back to Blog
              </Link>
            </nav>
            
            <div className="mb-8">
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {post.title}
              </h1>
              <div className="flex items-center text-muted-foreground text-sm">
                <time dateTime={post.publishedTime}>{post.date}</time>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Post Content */}
      <main className="pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <article 
              itemScope 
              itemType="https://schema.org/BlogPosting"
              role="main"
            >
              <meta itemProp="headline" content={post.title} />
              <meta itemProp="description" content={post.description} />
              <meta itemProp="datePublished" content={post.publishedTime} />
              <meta itemProp="dateModified" content={post.publishedTime} />
              <meta itemProp="author" content={post.author} />
              <meta itemProp="keywords" content={post.keywords.join(', ')} />
              
              <div itemProp="articleBody">
                {post.content}
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
