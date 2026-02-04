import ArticleCard from "./ArticleCard"

const dummyArticles = [
  {
    id: 1,
    title: "Benefits of Early Rising",
    author: "Focus Forge",
    category: "Productivity",
    image: "/sleep_img.jpg",
    date: "6th Jul, 2025",
  },
  {
    id: 2,
    title: "The Transformative Power of Silence: A Game-Changer in Conflict and Relationships",
    author: "Focus Forge",
    category: "Emotional Intelligence",
    image: "/silence.jpg",
    date: "5th Jul, 2025",
  },
  {
    id: 3,
    title: "Unlocking Unshakeable Confidence",
    author: "Focus Forge",
    category: "Self Development",
    image: "/believe.jpg",
    date: "6th Jul, 2025",
  },
  {
    id: 4,
    title: "The Multifaceted Self: On Masking Personality",
    author: "Focus Forge",
    category: "Self-awareness",
    image: "/mask.jpg",
    date: "19th Jul, 2025",
  },
  {
    id: 5,
    title: "The Power of Walking Away from Toxic Environments",
    author: "Focus Forge",
    category: "Self Awareness",
    image: "/toxic.jpg",
    date: "25th Jul, 2025"
  },
  {
    id: 6,
    title: "Who Truly Wins in Politics?",
    author: "Focus Forge",
    category: "Politics",
    image: "/politics.jpg",
    date: "30th Jul, 2025"
  },
  {
    id: 7,
    title: "The multifaceted self (unmasking personality 2)",
    author: "Focus Forge",
    category: "Self Awareness",
    image: "/mask.jpg",
    date: "2nd Aug, 2025"
  },
  {
    id: 8,
    title: "Understanding Ghosting: Why It Happens",
    author: "Focus Forge",
    category: "Relationship",
    image: "/ghost2.jpg",
    date: "4th Aug, 2025"
  },
  {
    id: 9,
    title: "Integrity",
    author: "Focus Forge",
    category: "Self Development",
    image: "/integrity.jpg",
    date: "4th Aug, 2025"
  },
  {
    id: 10,
    title: "The Power of Decision: The Choices We Make",
    author: "Focus Forge",
    category: "Self Development",
    image: "/decision.jpg",
    date: "9th Aug, 2025"
  },
  {
    id: 11,
    title: "How to Get Right With God",
    author: "Focus Forge",
    category: "Spiritual Life",
    image: "/Jesus.jpg",
    date: "17th Aug, 2025"
  },
  {
    id: 12,
    title: "FORGIVENESS",
    author: "Focus Forge",
    category: "Self Awareness",
    image: "/forgive.jpg",
    date: "17th Aug, 2025"
  },
  {
    id: 13,
    title: "The Smartness in Acting Dumb",
    author: "Focus Forge",
    category: "Self Awareness",
    image: "/politics.jpg",
    date: "23rd Aug, 2025"
  },
  {
    id: 14,
    title: "Mental Health and Its Importance: Why a Healthy Mind is Your Greatest Asset",
    author: "Focus Forge",
    category: "Mental Health",
    image: "/mental-2.jpg",
    date: "23rd Aug, 2025"
  },
  {
    id: 15,
    title: "Depression: Signs You Shouldn't Ignore",
    author: "Focus Forge",
    category: "Mental Health",
    image: "/depressed-1.jpg",
    date: "26th Aug, 2025"
  },
  {
    id: 16,
    title: "Benefits of Drinking Water First Thing in the Morning",
    author: "Focus Forge",
    category: "Health Benefits",
    image: "/water.jpg",
    date: "29th Aug, 2025"
  },
  {
    id: 17,
    title: "The Ultimate Beginner's Guide to Skincare (With a Personal Touch)",
    author: "Focus Forge",
    category: "Skincare",
    image: "/skin.jpg",
    date: "29th Aug, 2025"
  },
  {
    id: 18,
    title: "Evening Self-Care Habits for Stress",
    author: "Focus Forge",
    category: "Health Tips",
    image: "/self.jpg",
    date: "30th Aug, 2025"
  },
  {
    id: 19,
    title: "Causes of a Big Tummy (Bloating)",
    author: "Focus Forge",
    category: "Health Care",
    image: "/tummy3.jpg",
    date: "4th Sept, 2025"
  },
  {
    id: 20,
    title: "STRESS: A Door to Many Health Problems",
    author: "Focus Forge",
    category: "Mental Health",
    image: "/stress.jpg",
    date: "5th Sept, 2025"
  },
  {
    id: 21,
    title: "♡ LOVE ♡",
    author: "Focus Forge",
    category: "Relationship",
    image: "/love.jpg",
    date: "17th Sept, 2025"
  },
  {
    id: 22,
    title: "Sexual Child Abuse — Justice for Ochanya",
    author: "Focus Forge",
    category: "Child Rights",
    image: "/right1.jpg",
    date: "10th Nov, 2025"
  },
  {
    id: 23,
    title: "The Waiting Room ; Embracing the Power of Patience",
    author: "Focus Forge",
    category: "Patience",
    image: "/patience.jpg",
    date: "19th Nov, 2025"
  },
  {
    id: 24,
    title: "How to Monetize Your Hobbies as a Student",
    author: "Focus Forge",
    category: "Self Development",
    image: "/hobby.jpg",
    date: "20th Nov, 2025"
  },
  {
    id: 25,
    title: "5 Powerful Shifts That Will Make Success Come Naturally",
    author: "Focus Forge",
    category: "Success Mindset",
    image: "/successful.jpg",
    date: "20th Jan, 2026",
  },
    {
    id: 26,
    title: "Limerence vs Love (Quick Reality Check)",
    author: "Focus Forge",
    category: "Relationship",
    image: "/lovevslimerence.jpg",
    date: "20th Jan, 2026",
  },
   {
    id: 27,
    title: "The Thing We Avoid That’s Ruining Our Relationships",
    author: "Focus Forge",
    category: "Relationship",
     image: "/relationship.jpg",
    date: "20th Jan, 2026",
   },
]

const ArticleGrid = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      {dummyArticles.slice().reverse().map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  )
}

export default ArticleGrid

