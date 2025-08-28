// ==========================================================================
// Portfolio Data
// Author: John Evans Okyere
// Description: All portfolio data and content
// ==========================================================================

// Personal Information
const personalInfo = {
  name: "John Evans Okyere",
  title: "Data Scientist & Machine Learning Engineer",
  subtitle: "Transforming data into business value",
  description: "Data Scientist & Machine Learning Engineer with proven ability to turn complex data into business value. With hands-on experience in SQL, AI, and machine learning, I have delivered solutions that boosted sales by 20%, optimized delivery operations, and reduced inefficiencies in the e-commerce industry.",
  email: "johnevansokyere@gmail.com",
  phone: "+233544954643",
  location: "Accra, Ghana",
  website: "https://johnevans.dev",
  social: {
    linkedin: "https://www.linkedin.com/in/john-evans-okyere/",
    github: "https://github.com/JohnEvansOkyere",
    twitter: "https://x.com/DataGrejoy",
    kaggle: "https://www.kaggle.com/okyereevansjohn"
  }
};

// Typing Animation Text
const typingTexts = [
  "Data Scientist",
  "ML Engineer", 
  "Python Expert",
  "SQL Specialist",
  "Analytics Expert",
  "Chatbot Developer"
];

// Statistics/Counter Data
const stats = [
  {
    number: 15,
    label: "Projects Completed",
    description: "Across ML & Data Analytics",
    suffix: "+"
  },
  {
    number: 2,
    label: "Years Experience",
    description: "In Data Science & ML",
    suffix: "+"
  },
  {
    number: 20,
    label: "Sales Increase",
    description: "Achieved at Shaq Express",
    suffix: "%"
  },
  {
    number: 8,
    label: "Certifications",
    description: "In ML & Data Analytics",
    suffix: "+"
  }
];

// Skills Data
const skills = {
  programming: [
    { name: "Python", percentage: 95 },
    { name: "SQL", percentage: 90 },
    { name: "HTML/CSS", percentage: 80 },
    { name: "JavaScript", percentage: 70 },
    { name: "Tableau", percentage: 85 }

  ],
  frameworks: [
    "Scikit-learn", "XGBoost", "Random Forest", "Pandas", "NumPy", 
    "PyTorch", "KNN", "Clustering", "Regression", "Dialogflow", 
    "NLTK", "FastAPI", "Flask", "Streamlit", "n8n"
  ],
  cloud: [
    "AWS Cloud", "Git/GitHub", "Docker", "CI/CD", "MLOps", 
    "FastAPI", "Flask", "Streamlit", "MySQL"
  ],
  tools: [
    "Tableau", "Excel", "Power BI", "MySQL", "Matplotlib", 
    "Seaborn", "Plotly", "Jupyter", "VS Code", "PyCharm"
  ]
};

// Projects Data
const projects = [
  {
    id: 1,
    title: "VexaAI Book Recommendation System",
    description: "Deployed a collaborative filtering recommendation system using KNN algorithm with Streamlit web interface, applying CI/CD best practices for seamless deployment.",
    image: "assets/images/books-removebg-preview.png",
    category: ["ml", "web"],
    technologies: ["Python", "KNN", "Scikit-learn", "Streamlit", "Pandas", "CI/CD"],
    github: "https://github.com/JohnEvansOkyere/book-recommendation-system",
    demo: "https://book-recommendation-system-fuzfe5pqyhaw3k7dvhwvcc.streamlit.app/",
    features: [
      "Collaborative filtering with KNN",
      "Interactive Streamlit interface",
      "CI/CD deployment pipeline",
      "Book similarity analysis"
    ],
    year: "2025",
    metrics: {
      accuracy: "87%",
      books: "10k+",
      users: "500+"
    }
  },

    {
    id: 2,
    title: "VexaAI Data Analyst Agent",
    description: "Deployed a A powerful data analysis application that allows you to query data using natural language, powered by Groq AI. The application features user authentication and is separated into modular components for better maintainability.",
    image: "assets/images/dataanalyst-removebg-preview.png",
    category: ["ml", "web"],
    technologies: ["Python", "Streamlit", "GroqAI", "Data Analysis"],
    github: "https://github.com/JohnEvansOkyere/Data-Analyst-AI-Agent",
    demo: "https://vexaai-data-analyst-ai-agent.streamlit.app/",
    features: [
      "Python backend with Streamlit frontend",
      "Interactive Streamlit interface",
      "Database Querying",
      "Analytical Insights"
    ],
    year: "2025",
    metrics: {
      accuracy: "87%",
      books: "10k+",
      users: "500+"
    }
  },

 {
  id: 3,
  title: "VexaAI Product Recommendation System",
  description: "Deep learning-based product recommendation system built with PyTorch, providing personalized product suggestions from user interaction data. Complete pipeline with feature engineering, model training, evaluation, MLOps deployment, and Streamlit web interface.",
  image: "assets/images/product-removebg-preview.png",
  category: ["ml", "web"],
  technologies: ["Python", "PyTorch", "Streamlit", "MLOps", "Data Analysis"],
  github: "https://github.com/JohnEvansOkyere/product_recommendation_system",
  demo: "https://vexaai-prorecommendationsystem.streamlit.app/",
  features: [
    "End-to-end recommendation pipeline",
    "User-item interaction and temporal feature engineering",
    "Neural network model with embeddings for users, items, and categories",
    "Evaluation with Precision@K, Recall@K, and NDCG@K",
    "Interactive Streamlit web interface for personalized recommendations"
  ],
  year: "2025",
  metrics: {
    accuracy: "87%",
    items: "10k+",
    users: "500+"
  }
},

{
  id: 4,
  title: "VexaAI AI Doctor Agent",
  description: "AI-powered medical consultation system tailored for Ghana, providing 24/7 culturally relevant guidance using the latest Google Gemini AI, FastAPI backend, and React frontend with MongoDB for secure session tracking.",
  image: "assets/images/doc-removebg-preview.png",
  category: ["ml", "web", "healthcare"],
  technologies: ["Python", "FastAPI", "React", "MongoDB", "Google Gemini"],
  github: "https://github.com/JohnEvansOkyere/AI-DOCTOR",
  demo: "#", 
  features: [
    "Real-time AI medical consultations with persistent session memory",
    "Ghana-specific medical knowledge: malaria, typhoid, cholera, tropical diseases",
    "Mobile-first responsive design with professional UI",
    "Secure patient data management with MongoDB",
    "Integration with Google Gemini 2.0 AI for natural language understanding"
  ],
  year: "2025",
  metrics: {
    consultations: "1000+",
    users: "500+",
    uptime: "24/7"
  }
},


  {
    id: 5,
    title: "Order Tracking Chatbot",
    description: "Built an intelligent chatbot using Dialogflow and FastAPI to automate customer order queries, significantly reducing support workload for e-commerce operations.",
    image: "assets/images/tracking-removebg-preview.png",
    category: ["chatbot", "web"],
    technologies: ["Dialogflow", "FastAPI", "Python", "NLP", "REST API"],
    github: "https://github.com/JohnEvansOkyere/order-tracking-chatbot",
    demo: "https://chatbot-demo.herokuapp.com",
    features: [
      "Natural language processing",
      "Order status tracking",
      "Automated customer support",
      "Multi-intent recognition"
    ],
    year: "2024",

    metrics: {
      accuracy: "92%",
      responseTime: "1.2s",
      queries: "1000+"
    }
  },
  {
    id: 6,
    title: "Customer Churn Prediction App",
    description: "Developed a machine learning web application using XGBoost to predict customer churn risk and identify key drivers, helping businesses retain valuable customers.",
    image: "assets/images/chunr-removebg-preview.png",
    category: ["ml", "web"],
    technologies: ["Python", "XGBoost", "Streamlit", "Pandas", "Scikit-learn", "Plotly"],
    github: "https://github.com/JohnEvansOkyere/churn-prediction",
    demo: "https://churn-prediction-app.streamlit.app",
    features: [
      "XGBoost classification model",
      "Feature importance analysis",
      "Interactive dashboard",
      "Risk scoring system"
    ],
    year: "2023",
    metrics: {
      accuracy: "89%",
      precision: "87%",
      recall: "91%"
    }
  },
  {
    id: 7,
    title: "Heart Disease Prediction System",
    description: "Created a Flask web application powered by Random Forest algorithm for medical risk prediction, providing healthcare professionals with data-driven insights.",
    image: "assets/images/haert-removebg-preview.png",
    category: ["ml", "web"],
    technologies: ["Python", "Random Forest", "Flask", "Scikit-learn", "HTML/CSS", "Bootstrap"],
    github: "https://github.com/JohnEvansOkyere/heart-disease-prediction",
    demo: "https://heart-prediction.herokuapp.com",
    features: [
      "Random Forest classification",
      "Medical risk assessment",
      "User-friendly web interface",
      "Clinical decision support"
    ],
    year: "2024",
    metrics: {
      accuracy: "85%",
      sensitivity: "88%",
      specificity: "83%"
    }
  },
  {
    id: 8,
    title: "Bank Term Deposit Predictor",
    description: "Built a predictive model to determine customer likelihood of subscribing to bank term deposits. This project earned acceptance into a graduate training program.",
    image: "assets/images/deposit-removebg-preview.png",
    category: ["ml", "analytics"],
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/JohnEvansOkyere/bank-deposit-prediction",
    demo: "https://bank-subscription-prediction-3ftwqfyndo7o2nwtuywwvt.streamlit.app/",
    features: [
      "Logistic regression model",
      "Feature engineering",
      "Data visualization",
      "Business insights"
    ],
    year: "2025",
    metrics: {
      accuracy: "91%",
      precision: "89%",
      roc_auc: "0.94"
    }
  },
  {
    id: 9,
    title: "IBM HR Attrition Analysis",
    description: "Designed comprehensive Tableau dashboards to analyze HR attrition patterns using IBM HR dataset, revealing key insights for employee retention strategies.",
    image: "assets/images/hr-removebg-preview.png",
    category: ["analytics", "web"],
    technologies: ["Tableau", "Data Analysis", "Statistical Analysis", "Data Visualization"],
    github: "https://github.com/JohnEvansOkyere/hr-attrition-analysis",
    demo: "https://public.tableau.com/views/HRAttritionAnalysis/Dashboard1",
    features: [
      "Interactive Tableau dashboards",
      "Attrition pattern analysis",
      "Employee segmentation",
      "Retention insights"
    ],
    year: "2023",
    metrics: {
      employees: "1470",
      departments: "3",
      insights: "15+"
    }
  },
  {
    id: 10,
    title: "World Happiness Analysis Dashboard",
    description: "Created interactive Tableau dashboards for global happiness analysis, providing insights for international development and policy-making through data storytelling.",
    image: "assets/images/happiness-removebg-preview.png",
    category: ["analytics", "web"],
    technologies: ["Tableau", "Data Visualization", "Statistical Analysis", "Global Data"],
    github: "https://github.com/JohnEvansOkyere/world-happiness-analysis",
    demo: "https://public.tableau.com/views/WorldHappinessAnalysis/Dashboard1",
    features: [
      "Global happiness rankings",
      "Country comparison tools",
      "Correlation analysis",
      "Interactive world map"
    ],
    year: "2024",
    metrics: {
      countries: "155",
      factors: "8",
      years: "6"
    }
  },
  {
    id: 11,
    title: "E-commerce Analytics Dashboard",
    description: "Built comprehensive analytics dashboards for Shaq Express e-commerce platform, analyzing user behavior, vendor performance, and revenue optimization strategies.",
    image: "assets/images/analytics_dash-removebg-preview.png",
    category: ["analytics", "web"],
    technologies: ["Tableau", "SQL", "Python", "Data Analysis", "Business Intelligence"],
    github: "https://github.com/JohnEvansOkyere/shaq-express-analytics",
    demo: "#",
    features: [
      "Sales performance tracking",
      "Customer behavior analysis",
      "Vendor performance metrics",
      "Delivery optimization insights"
    ],
    year: "2024",
    metrics: {
      salesIncrease: "20%",
      efficiency: "10%",
      timesSaved: "8hrs/week"
    }
  }
];

// Experience Data
const experience = [
  {
    position: "Data Analyst",
    company: "Shaq Express",
    location: "Accra, Ghana",
    startDate: "2024",
    endDate: "2025",
    type: "full-time",
    description: "Analyzed user, vendor, and product data for e-commerce & delivery platform, delivering insights that directly impacted business growth and operational efficiency.",
    achievements: [
      "Analyzed user, vendor, and product data, uncovering insights that boosted sales by 20%",
      "Built interactive dashboards in Tableau & SQL to monitor vendor performance, customer behavior, and revenue",
      "Identified causes of delivery inefficiencies, helping reduce delays by 10%",
      "Automated weekly and monthly performance reports, saving 8+ hours of manual work per week"
    ],
    technologies: ["Python", "SQL", "Tableau", "Excel", "Data Analysis", "Business Intelligence"]
  }
];

// Education Data
const education = [
  {
    degree: "BSc Computer Science",
    school: "C.K. Tedam University of Technology and Applied Sciences",
    location: "Ghana",
    year: "2023",
    gpa: "",
    description: "Comprehensive computer science education with focus on programming, algorithms, and software development.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Engineering",
      "Programming Languages",
      "Computer Networks",
      "Web Development"
    ],
    projects: [
      "Final Year Project: Data Analytics System",
      "Software Development Projects"
    ]
  }
];

// Certifications Data
const certifications = [
  {
    name: "Google Data Analytics",
    issuer: "Coursera",
    date: "2024",
    credentialId: "GDA-2024-001",
    link: "https://coursera.org/verify/professional-cert/googledata"
  },
  {
    name: "Intermediate Machine Learning",
    issuer: "Kaggle",
    date: "2024",
    credentialId: "IML-2024-001",
    link: "https://www.kaggle.com/learn/intermediate-machine-learning"
  },
  {
    name: "Managing Big Data with MySQL",
    issuer: "Duke University",
    date: "2024",
    credentialId: "DUKE-SQL-2024",
    link: "https://coursera.org/verify/duke-mysql"
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    date: "2024",
    credentialId: "AWS-CPE-2024-001",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
  },
  {
    name: "Data Analysis with Python",
    issuer: "FreeCodeCamp",
    date: "2025",
    credentialId: "FCC-DAP-2025-001",
    link: "https://freecodecamp.org/certification/data-analysis-python"
  }
];

// Testimonials Data
const testimonials = [
  {
    name: "Michael Asante",
    position: "Operations Manager",
    company: "Shaq Express",
    image: "assets/images/testimonials/michael.jpg",
    text: "John's analytical skills transformed our understanding of customer behavior. His insights directly contributed to our 20% sales increase and operational improvements."
  },
  {
    name: "Sarah Mensah",
    position: "Business Development Lead",
    company: "Shaq Express",
    image: "assets/images/testimonials/sarah.jpg", 
    text: "Working with John was exceptional. His ability to translate complex data into actionable business strategies made him invaluable to our growth initiatives."
  },
  {
    name: "Dr. Kwame Adjei",
    position: "Computer Science Lecturer",
    company: "CKT-UTAS",
    image: "assets/images/testimonials/kwame.jpg",
    text: "John consistently demonstrated strong analytical thinking and technical skills throughout his studies. His passion for data science was evident in every project."
  }
];

// Blog Posts Data (if needed)
const blogPosts = [
  {
    id: 1,
    title: "Machine Learning in E-commerce: Boosting Sales Through Data",
    excerpt: "How we used machine learning algorithms to analyze customer behavior and increase sales by 20% at Shaq Express.",
    date: "2024-12-15",
    readTime: "6 min read",
    image: "assets/images/blog/ml-ecommerce.jpg",
    tags: ["Machine Learning", "E-commerce", "Data Analytics"],
    slug: "ml-ecommerce-sales-boost"
  },
  {
    id: 2, 
    title: "Building Chatbots with Dialogflow: A Practical Guide",
    excerpt: "Step-by-step guide to creating intelligent chatbots that can handle customer queries and reduce support workload.",
    date: "2024-11-20",
    readTime: "8 min read",
    image: "assets/images/blog/chatbot-guide.jpg",
    tags: ["Chatbots", "Dialogflow", "NLP"],
    slug: "dialogflow-chatbot-guide"
  },
  {
    id: 3,
    title: "From Student to Data Scientist: My Journey in Ghana's Tech Scene",
    excerpt: "Sharing my experience transitioning from computer science student to data scientist in Ghana's growing technology landscape.",
    date: "2024-10-10",
    readTime: "5 min read", 
    image: "assets/images/blog/data-science-journey.jpg",
    tags: ["Career", "Data Science", "Ghana Tech"],
    slug: "data-science-journey-ghana"
  }
];

// Contact Form Configuration
const contactConfig = {
  emailService: "EmailJS", // or your preferred service
  serviceId: "service_wpa4e28",
  templateId: "template_yja8nnz",
  publicKey: "qfm15fP7kAwGRCLID"
};

// Animation Configuration
const animationConfig = {
  typingSpeed: 100,
  typingDelay: 2000,
  counterDuration: 2000,
  scrollOffset: 100,
  parallaxIntensity: 0.5
};

// Theme Configuration
const themeConfig = {
  primaryColor: "#667eea",
  secondaryColor: "#764ba2",
  accentColor: "#10b981",
  darkMode: false,
  animations: true,
  particles: true
};

window.experience = experience;
window.education = education;

window.personalInfo = personalInfo;
window.typingTexts = typingTexts;
window.stats = stats;
window.skills = skills;
window.projects = projects;
window.experience = experience;
window.education = education;
window.certifications = certifications;
window.testimonials = testimonials;
window.blogPosts = blogPosts;
window.contactConfig = contactConfig;
window.animationConfig = animationConfig;
window.themeConfig = themeConfig;