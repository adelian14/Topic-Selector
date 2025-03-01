let topics = [
    "The Future of Virtual Reality in Education",
    "The Psychology of Decision-Making: Unraveling the Influences",
    "Sustainable Fashion: Balancing Style and Ethics",
    "Blockchain Beyond Cryptocurrency: Real-World Applications",
    "The Art of Storytelling in Marketing: Creating Lasting Impressions",
    "The Impact of Social Media on Mental Health",
    "Innovative Approaches to Urban Planning for a Sustainable Future",
    "Biohacking: Enhancing Human Performance through Technology",
    "The Rise of Remote Work: Challenges and Opportunities",
    "Exploring the Intersection of Art and Artificial Intelligence",
    "Servant Leadership: A Paradigm Shift in Management",
    "Leading with Empathy in the Corporate World",
    "Adaptive Leadership in Times of Uncertainty",
    "The Role of Emotional Intelligence in Effective Leadership",
    "Leadership Lessons from Unlikely Sources: Animals, Nature, and Beyond",
    "Fostering a Culture of Innovation: Leadership Strategies",
    "The Power of Authentic Leadership in Building Trust",
    "Cross-Cultural Leadership: Navigating Global Teams",
    "Resilient Leadership: Bouncing Back from Setbacks",
    "Balancing Confidence and Humility: The Art of Humble Leadership",
    "Non-verbal Communication in the Digital Age",
    "Crisis Communication: Strategies for Effective Response",
    "Navigating Difficult Conversations in the Workplace",
    "The Influence of Language on Business Negotiations",
    "The Art of Persuasion: Building Convincing Arguments",
    "Digital Etiquette: Navigating Professionalism Online",
    "The Role of Empathy in Customer Communication",
    "Building a Strong Personal Brand through Communication",
    "Overcoming Communication Barriers in Diverse Teams",
    "Humor in Business Communication: When and How to Use It",
    "The Ethics of Genetic Engineering: Navigating the CRISPR Era",
    "Exploring Both Sides: The Controversy of Universal Basic Income",
    "The Debate on Privacy vs. National Security in the Digital Age",
    "The Morality of Artificial Intelligence: Can Machines Have Ethics?",
    "The Role of Government in Regulating Social Media: Striking the Right Balance",
    "The Controversy of Fast Fashion: Environmental Impact vs. Accessibility",
    "The Ethics of Animal Testing: Finding Alternatives",
    "Free Speech in Digital Space: Where to Draw the Line?",
    "The Psychology of Color in Graphic Design: A Deep Dive",
    "User-Centered Design: Shaping Products Around People’s Needs",
    "Minimalism vs. Maximalism: Finding the Right Design Balance",
    "Designing for Accessibility: Ensuring Inclusivity in Every Interface",
    "The Evolution of Logo Design: From Tradition to Modern Trends",
    "Immersive Experiences in Web Design: Beyond the Screen",
    "The Art of Visual Storytelling: Engaging Audiences through Design",
    "Typography Trends: Balancing Readability and Aesthetics",
    "Environmental Design: Merging Sustainability with Aesthetics",
    "Augmented Reality in Design: Enhancing User Experiences",
    "The Psychology of Consumer Behavior: Understanding the Purchase Decision",
    "Influencer Marketing: Strategies for Authentic Brand Partnerships",
    "The Power of Emotional Marketing: Creating Lasting Connections",
    "Content Marketing in the Age of Information Overload",
    "Ethical Marketing: Building Trust and Loyalty with Transparency",
    "The Future of Social Media Marketing: Emerging Platforms and Trends",
    "Neuromarketing: Leveraging Brain Science to Drive Engagement",
    "Storytelling in Branding: Crafting Compelling Narratives",
    "Data-Driven Marketing: Turning Analytics into Actionable Insights",
    "Interactive Marketing Campaigns: Engaging Audiences in the Digital Age",
    "Bootstrapping vs. Funding: Choosing the Right Path for Your Startup",
    "The Role of Failure in Entrepreneurial Success: Embracing Setbacks",
    "Social Entrepreneurship: Making a Profit with a Purpose",
    "Innovative Business Models: Disrupting Traditional Industries",
    "The Art of Pitching: Capturing Investors’ Attention in 5 Minutes",
    "Balancing Creativity and Structure in Entrepreneurial Ventures",
    "Building a Sustainable Business: Environmental and Financial Considerations",
    "The Future of E-Commerce: Trends and Opportunities",
    "Cultivating a Culture of Innovation in Small Businesses",
    "The Gig Economy: Navigating the Rise of Freelance and Remote Work",
    "Overcoming Fear of Public Speaking: A Personal Triumph",
    "Navigating Cross-Cultural Experiences: Stories of Adaptation",
    "The Metaverse: Exploring the Next Frontier of Digital Interaction",
    "Decentralized Finance (DeFi): Transforming Traditional Banking Systems",
    "NFTs (Non-Fungible Tokens): Redefining Ownership in the Digital Age",
    "The Evolution of Electric Vehicles: Sustainable Transportation Trends",
    "The Subscription Economy: Shifting from Ownership to Access",
    "Health and Wellness Tech: The Rise of Wearables and Digital Health",
    "Micro-Moments in Marketing: Capturing Attention in Seconds",
    "The Influence of Remote Learning on Education: Challenges and Innovations",
    "Circular Economy: Reducing Waste and Promoting Sustainable Consumption",
    "Productizing the Services in 2024",
    "Revolutionizing Healthcare: The Impact of Telemedicine and Health Tech",
    "Smart Cities: Integrating Technology for Urban Development",
    "The Future of Aerospace: Space Tourism and Beyond",
    "Renewable Energy Innovations: Advancements in Solar, Wind, and Beyond",
    "Evolving Trends in the Fashion Industry: Sustainability and Tech Integration",
    "The Changing Landscape of the Food Industry: Plant-Based and Lab-Grown Alternatives",
    "Emerging Trends in the Gaming Industry: AR, VR, and Cloud Gaming",
    "Transforming Agriculture: AgTech Solutions for a Sustainable Future",
    "The Future of Transportation: Hyperloop, Autonomous Vehicles, and Drones",
    "Innovations in Construction: Sustainable Materials and Smart Infrastructure",
    "Ethical Considerations in AI: Addressing Bias and Fairness",
    "Explainable AI: Bridging the Gap Between Complexity and Understanding",
    "AI in Healthcare: Diagnosing, Treating, and Preventing Diseases",
    "The Role of AI in Climate Change: From Prediction to Mitigation",
    "AI and Creativity: Exploring the Intersection of Technology and Art",
    "AI in Education: Personalized Learning and Classroom Integration",
    "Robotics and AI in Manufacturing: Transforming Production Processes",
    "AI-Enhanced Cybersecurity: Protecting Against Evolving Threats",
    "Natural Language Processing: Breaking Barriers in Human-Computer Interaction",
    "AI for Social Good: Solving Global Challenges with Technology"
  ];

let btn1 = document.getElementById("option1");
let btn2 = document.getElementById("option2");
let res = document.getElementById("result");
let round = document.getElementById("round");
let countTopics = document.getElementById("cnt");
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
let currIdx = 0;
let roundNum = 1
let selectedTopics = [];
round.innerHTML = "Round: " + roundNum
countTopics.innerHTML = "Topics in comparison: " + topics.length;
shuffle(topics);
btn1.innerHTML = topics[currIdx];
btn2.innerHTML = topics[currIdx + 1];

function handleBtns(btn1, btn2){
    btn1.addEventListener("click", function(){
        selectedTopics.push(btn1.innerHTML);
        currIdx += 2;
        if(topics.length==1){
            res.innerHTML = "Selected Topic: " + topics[0];
            btn1.style.display = "none";
            btn2.style.display = "none";
            round.innerHTML = "Selected Topic";
            countTopics.style.display = "none";
        }
        if(currIdx < topics.length){
            btn1.innerHTML = topics[currIdx];
            btn2.innerHTML = topics[currIdx + 1];
        } else {
            topics = selectedTopics;
            console.log(selectedTopics);
            shuffle(topics);
            console.log(topics);
            currIdx = 0;
            if(topics.length % 2 != 0 && topics.length > 1){
                topics.push(topics[0]);
            }
            selectedTopics = [];
            roundNum += 1;
            round.innerHTML = "Round: " + roundNum
            countTopics.innerHTML = "Topics in comparison: " + topics.length;
            if(topics.length > 1){
                btn1.innerHTML = topics[currIdx];
                btn2.innerHTML = topics[currIdx + 1];
            }
            else{
                res.innerHTML = topics[0];
                btn1.style.display = "none";
                btn2.style.display = "none";
                round.innerHTML = "Selected Topic";
                countTopics.style.display = "none";
            }
        }
    });
}

handleBtns(btn1, btn2);
handleBtns(btn2, btn1);