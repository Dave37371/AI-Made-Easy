export type Speaker = {
  slug: string;
  name: string;
  role: string;
  company?: string;
  tier: "vip" | "speaker" | "host";
  confirmed: boolean;
  photo: string | null;
  /** Manual object-position override — only set this if a specific photo still
   *  looks wrong under the standard aspect-[4/5] + object-cover + object-top
   *  treatment (see STANDING CONVENTION note in this repo's CLAUDE.md). Leave
   *  unset for every normal headshot. */
  photoPosition?: string;
  cardBio: string;
  bio: string[];
  facts: { label: string; detail: string }[];
  topics: string[];
};

export const speakers: Speaker[] = [
  {
    slug: "austin-armstrong",
    name: "Austin Armstrong",
    role: "Founder & CEO, Syllaby",
    company: "Founding Partner · VIP Mastermind Host",
    tier: "vip",
    confirmed: true,
    photo:
      "https://assets.cdn.filesafe.space/OtOPsRWlrRPyLs03ZSTG/media/6a87f3dde6501a9518307d6d.png",
    cardBio:
      "Author of VIRALITY!, two-time seven-figure entrepreneur, and Managing Partner at Bullhouse Ventures. Hosts the separate VIP mastermind.",
    bio: [
      "Austin is the author of VIRALITY!, a keynote speaker and a two-time seven-figure entrepreneur. He has created and published over 12,000 videos across social media, earning billions of views and millions of followers on every platform.",
      "He is CEO of Syllaby, an AI startup that helps content creators create, schedule and publish videos in minutes, Managing Partner at Bullhouse Ventures, and co-founder of AI Marketing World. He has also taught AI entrepreneurship at Duke University.",
      "At AI Made Easy Summit, Austin hosts the separate VIP mastermind, bringing the same playbook that's generated billions of views to marketers and business owners ready to put AI to work.",
    ],
    facts: [
      { label: "12,000+ Videos", detail: "Billions of views, millions of followers" },
      { label: "CEO, Syllaby", detail: "AI video creation for content creators" },
      { label: "Author", detail: "VIRALITY!" },
      { label: "Duke University", detail: "Former AI entrepreneurship instructor" },
    ],
    topics: [
      "Short-Form Video",
      "AI Marketing",
      "Personal Branding",
      "Audience Growth",
      "Entrepreneurship",
    ],
  },
  {
    slug: "jeff-ross",
    name: "Jeff Ross",
    role: "MC & Executive Producer",
    company: "Co-Founder, Voice to Influence",
    tier: "host",
    confirmed: true,
    photo:
      "https://assets.cdn.filesafe.space/bLj1eU2J7syW8tAl2WB0/media/6a4b33b41bf938e547aa49a2.png",
    cardBio:
      "Your MC and executive producer, and Co-Founder of Voice to Influence. Jeff brings seventeen years in online business, marketing and leadership to the stage.",
    bio: [
      "Jeff is an international speaker, customer value journey strategist, mentor and digital marketing leader with over seventeen years of experience in online business, social selling and influence-based marketing. Known for his ability to clarify chaos, he helps leaders and brands design simple, scalable customer journeys that turn strangers into advocates.",
      "A specialist in voice positioning and message clarity, Jeff helps thought leaders find, refine and monetise their voice through ethical copywriting, storytelling and attraction marketing.",
      "Jeff is also the creator of the Hero Makers movement, empowering purpose-driven leaders to rise, build legacy and serve from a place of identity and integrity — the same philosophy now at the centre of Voice to Influence.",
    ],
    facts: [
      { label: "17+ Years", detail: "Online business and social selling" },
      { label: "CVJ Strategist", detail: "Turning strangers into advocates" },
      { label: "Hero Makers", detail: "Creator of the movement" },
      { label: "Co-Founder", detail: "Voice to Influence" },
    ],
    topics: [
      "Customer Value Journey",
      "Voice Positioning",
      "Buying Psychology",
      "Attraction Marketing",
      "Storytelling",
      "Leadership",
    ],
  },
  {
    slug: "kanji-low",
    name: "Kanji Low",
    role: "TEDx Speaker & Founder, Synapze AI",
    tier: "vip",
    confirmed: true,
    photo: "https://assets.cdn.filesafe.space/OtOPsRWlrRPyLs03ZSTG/media/6ab324c3d356b1331a20d77b.png",
    cardBio:
      "Helps leaders and service businesses turn AI from buzzword into revenue through keynote speaking and done-for-you implementation.",
    bio: [
      "Kanji Low helps leaders, service businesses and organisations turn AI from buzzword into revenue through keynote speaking, done-for-you AI implementation and automation, and a community of growth-minded founders.",
      "He has helped over 1,000 clients across 13+ years in tech and business, spoken and hosted at 40+ events, and holds an average workshop rating of 98/100. Featured at TEDxIBMGITEX, AI AsiaLA Weekly, Yahoo Finance and the Melbourne AI & Web3 Network.",
    ],
    facts: [
      { label: "1,000+ Clients", detail: "Helped implement AI" },
      { label: "13+ Years", detail: "Tech & business" },
      { label: "40+ Events", detail: "Speaker & host" },
      { label: "98/100", detail: "Average workshop rating" },
    ],
    topics: [
      "AI Implementation",
      "Revenue Through AI",
      "Marketing",
      "Modern Leadership",
      "AI for Service Businesses",
    ],
  },
  {
    slug: "melissa-mitchell", name: "Melissa Mitchell", role: "Agency owner, Lolly Said Yes", tier: "vip", confirmed: true,
    photo: "https://assets.cdn.filesafe.space/OtOPsRWlrRPyLs03ZSTG/media/6ab324c87c231bdb64f76a2e.png",
    cardBio: "Helps businesses and creators use AI to produce content in-house and reduce the work behind their marketing.",
    bio: ["Melissa Mitchell runs Lolly Said Yes in Shepparton, Victoria.", "Her work helps businesses remove bottlenecks and reduce labour load through AI automation.", "She helps businesses and creators produce content and marketing faster, in-house, without outsourcing."],
    facts: [{label: "Agency owner", detail: "Lolly Said Yes"}, {label: "Based in", detail: "Shepparton, Victoria"}],
    topics: ["AI marketing", "In-house content", "Business automation"]
  },
  {
    slug: "scott-simson",
    name: "Scott Simson",
    role: "YouTube Strategist & Agency Founder",
    tier: "vip",
    confirmed: true,
    photo: "https://assets.cdn.filesafe.space/OtOPsRWlrRPyLs03ZSTG/media/6ab5dce26407f2cbe4c440d4.png",
    cardBio: "Leading YouTube strategist and founder of a multi-seven-figure agency, helping business owners turn content into consistent revenue.",
    bio: [
      "Scott Simson is a leading YouTube strategist and entrepreneur who helps business owners turn content into consistent revenue.",
      "As the founder of a multi-seven-figure agency, he's known for simplifying what actually works on YouTube and cutting through the noise.",
      "At AI Made Easy Summit, Scott shares insights on building authority, scaling content with AI systems, and using video to drive real business growth.",
    ],
    facts: [
      { label: "Founder", detail: "Multi-seven-figure agency" },
      { label: "YouTube Strategist", detail: "Content into consistent revenue" },
    ],
    topics: ["YouTube Strategy", "Building Authority", "Scaling Content With AI", "Video for Business Growth"],
  },
  {
    slug: "bruno-marcinkowski",
    name: "Bruno Marcinkowski",
    role: "Co-Founder, The Dream Team 1",
    company: "Co-Founder, AI Unlocked Interactive Workshops",
    tier: "speaker",
    confirmed: true,
    photo:
      "https://assets.cdn.filesafe.space/bLj1eU2J7syW8tAl2WB0/media/6a4b33b46f5641e105c92498.png",
    cardBio:
      "Real estate and AI investor. Co-founded AI Unlocked Interactive Workshops with wife Stacie, helping Realtors turn AI curiosity into AI confidence.",
    bio: [
      "Bruno Marcinkowski brings decades of experience in business ownership, real estate investment, and technology to The Dream Team. He studied Computer Science at Penn State and holds certifications in mathematics, coding, and computer security.",
      "Before partnering with Stacie to build The Dream Team 1, Bruno spent most of his career as an Owner/Operator in the Bar & Restaurant industry, then moved into Online Securities. That hands-on operator background informs everything The Dream Team does today.",
      "Together with his wife Stacie, Bruno co-founded AI Unlocked Interactive Workshops — helping Realtors nationwide turn likes into leads and AI curiosity into AI confidence, with hands-on implementation rather than theory.",
    ],
    facts: [
      { label: "Co-Founder", detail: "The Dream Team 1" },
      { label: "Co-Founder", detail: "AI Unlocked Interactive Workshops" },
      { label: "Penn State", detail: "Computer Science" },
      { label: "Certified", detail: "Mathematics, coding & computer security" },
    ],
    topics: [
      "AI for Realtors",
      "Turning Likes Into Leads",
      "Implementation Over Theory",
      "Real Estate Investing",
      "Tech for Real Estate",
    ],
  },
  {
    slug: "stacie-marcinkowski",
    name: "Stacie Marcinkowski",
    role: "Team Leader, The Dream Team 1",
    company: "Co-Founder, AI Unlocked Interactive Workshops",
    tier: "speaker",
    confirmed: true,
    photo:
      "https://assets.cdn.filesafe.space/bLj1eU2J7syW8tAl2WB0/media/6a4b33b46f5641e105c924a7.png",
    cardBio:
      "20+ years in operational leadership. Co-founded AI Unlocked Interactive Workshops with husband Bruno, bringing hands-on AI implementation to Realtors and beyond.",
    bio: [
      "Stacie Marcinkowski began her real estate business after over 20 years as a Director of Operations at one of Philadelphia's top legal offices. She holds a Bachelor of Arts in Psychology and has completed a Master of Science program in Human Resources.",
      "As Team Leader of The Dream Team 1, Stacie teaches her team compassion, integrity, and — most of all — to have fun. The Dream Team specialises in PA and NJ, with experienced partners across the country.",
      "Together with her husband Bruno, Stacie co-founded AI Unlocked Interactive Workshops — bringing decades of operational leadership to bear on helping Realtors, law firms, medical billing teams, banking professionals and more implement modern AI tools with hands-on care.",
    ],
    facts: [
      { label: "20+ Years", detail: "Director of Operations, legal offices" },
      { label: "Co-Founder", detail: "AI Unlocked Interactive Workshops" },
      { label: "BA Psychology", detail: "MS program, Human Resources" },
      { label: "PA · NJ", detail: "Real estate team" },
    ],
    topics: [
      "AI for Realtors",
      "Operational Leadership",
      "Team Building",
      "Legal Operations",
      "Implementation Workshops",
    ],
  },
  {
    slug: "louise-dutka", name: "Louise Dutka", role: "Founder, The Disruptive Suite", tier: "speaker", confirmed: true,
    photo: "https://assets.cdn.filesafe.space/OtOPsRWlrRPyLs03ZSTG/media/6ab324c630b0f957ccf150c6.png",
    cardBio: "Brings art, strategy and automation together through AI branding, avatars, video and practical workflows.",
    bio: ["Louise Dutka is the founder of The Disruptive Suite, working at the intersection of art, strategy and automation.", "She helps founders, brands and teams create AI-powered branding, video, product concepts and intelligent workflows.", "Her work includes digital avatars, virtual photoshoots, podcast production and content systems designed to make AI visual and accessible."],
    facts: [{label: "Founder", detail: "The Disruptive Suite"}, {label: "Speciality", detail: "AI branding and creative production"}],
    topics: ["AI branding", "Avatars", "Video creation", "Creative workflows"]
  },

  {
    slug: "dave-miller",
    name: "Dave Miller",
    role: "Founder, LSD Marketing",
    company: "Head of Systems & Automation, Voice to Influence",
    tier: "speaker",
    confirmed: true,
    photo: "https://assets.cdn.filesafe.space/OtOPsRWlrRPyLs03ZSTG/media/6aa8a4029f5a41333a6463c4.png",
    cardBio: "Runs an AI marketing agency and builds the AI workflows, funnels and automation behind Voice to Influence. Practical AI that gets used, not another tool to evaluate.",
    bio: [
      "Dave Miller is the founder of LSD Marketing, an AI marketing agency, and Head of Systems & Automation at Voice to Influence, where he builds the funnels, CRM workflows and AI-powered systems behind its events, content and community.",
      "His approach to AI is practical and no-fluff. The focus isn't chasing every new tool. It's picking the right ones and building AI systems that are functional, live and in daily use, so business owners spend less time rebuilding and more time delivering.",
      "With 15+ years of leadership experience in construction, covering safety, well-being and team development, he brings a grounded, people-first lens to AI adoption that most technical operators miss.",
      "At AI Made Easy Summit, Dave shows business owners how to move from dabbling in AI to running it inside their business, with simple systems and automation that carry the load.",
    ],
    facts: [
      { label: "Founder", detail: "LSD Marketing, AI marketing agency" },
      { label: "Head of Systems", detail: "Voice to Influence" },
      { label: "15+ Years", detail: "Leadership in construction" },
      { label: "Approach", detail: "Practical, function-first AI" },
    ],
    topics: [
      "Practical AI Adoption",
      "AI Systems & Automation",
      "AI Implementation for Business",
      "Funnel & Marketing Infrastructure",
      "Leadership & Team Systems",
    ],
  },
];

export function getSpeaker(slug: string) {
  return speakers.find((s) => s.slug === slug);
}
