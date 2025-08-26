// ==========================================================================
// Portfolio Data
// Author: Alex Chen
// Description: All portfolio data and content
// ==========================================================================

// Personal Information
const personalInfo = {
  name: "Alex Chen",
  title: "Data Scientist & AI Developer",
  subtitle: "Transforming data into intelligent solutions",
  description: "Passionate about transforming complex data into actionable insights and building intelligent systems that solve real-world problems. Specialized in machine learning, deep learning, and AI applications with 4+ years of experience.",
  email: "alex.chen@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "https://alexchen.dev",
  social: {
    linkedin: "https://linkedin.com/in/alexchen",
    github: "https://github.com/alexchen",
    twitter: "https://twitter.com/alexchen",
    kaggle: "https://kaggle.com/alexchen"
  }
};

// Typing Animation Text
const typingTexts = [
  "Data Scientist",
  "ML Engineer", 
  "AI Developer",
  "Python Expert",
  "Deep Learning Specialist",
  "Chatbot Developer"
];

// Statistics/Counter Data
const stats = [
  {
    number: 50,
    label: "Projects Completed",
    description: "Across various domains",
    suffix: "+"
  },
  {
    number: 4,
    label: "Years Experience",
    description: "In ML & Data Science",
    suffix: "+"
  },
  {
    number: 95,
    label: "Accuracy Rate",
    description: "Best model performance",
    suffix: "%"
  },
  {
    number: 15,
    label: "Technologies",
    description: "Mastered & Applied",
    suffix: "+"
  }
];

// Skills Data
const skills = {
  programming: [
    { name: "Python", percentage: 95 },
    { name: "SQL", percentage: 90 },
    { name: "R", percentage: 80 },
    { name: "JavaScript", percentage: 75 },
    { name: "Java", percentage: 70 },
    { name: "C++", percentage: 65 }
  ],
  frameworks: [
    "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "NLTK", 
    "spaCy", "Transformers", "XGBoost", "LightGBM", "CatBoost", "Optuna",
    "FastAPI", "Flask", "Django", "Streamlit", "Gradio"
  ],
  cloud: [
    "AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "MLflow", 
    "Apache Airflow", "Jenkins", "Git", "DVC", "Terraform", "Ansible"
  ],
  tools: [
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Tableau", 
    "Power BI", "Apache Spark", "Jupyter", "VS Code", "PyCharm", "Databricks"
  ]
};

// Projects Data
const projects = [
  {
    id: 1,
    title: "AI-Powered Customer Sentiment Analysis",
    description: "Built an end-to-end sentiment analysis system using BERT and custom neural networks to analyze customer feedback across multiple channels, achieving 94% accuracy.",
    image: "assets/images/projects/sentiment-analysis.jpg",
    category: ["nlp", "dl"],
    technologies: ["Python", "BERT", "PyTorch", "FastAPI", "Docker", "AWS"],
    github: "https://github.com/alexchen/sentiment-analysis",
    demo: "https://sentiment-demo.alexchen.dev",
    features: [
      "Real-time sentiment classification",
      "Multi-language support",
      "Custom BERT fine-tuning",
      "RESTful API deployment"
    ],
    metrics: {
      accuracy: "94%",
      processingTime: "50ms",
      languages: "12"
    }
  },
  {
    id: 2,
    title: "Predictive Maintenance ML Pipeline",
    description: "Developed a machine learning pipeline to predict equipment failures 30 days in advance, reducing downtime by 40% and saving $2M annually.",
    image: "assets/images/projects/predictive-maintenance.jpg",
    category: ["ml", "web"],
    technologies: ["Python", "XGBoost", "Apache Airflow", "MLflow", "Kubernetes", "PostgreSQL"],
    github: "https://github.com/alexchen/predictive-maintenance",
    demo: "https://maintenance-dashboard.alexchen.dev",
    features: [
      "Automated data pipeline",
      "Real-time monitoring dashboard",
      "Anomaly detection algorithms",
      "Maintenance scheduling optimization"
    ],
    metrics: {
      accuracy: "92%",
      downtime: "-40%",
      savings: "$2M"
    }
  },
  {
    id: 3,
    title: "Computer Vision Quality Control System",
    description: "Implemented a computer vision system using CNNs and YOLO for automated quality control in manufacturing, detecting defects with 97% precision.",
    image: "assets/images/projects/quality-control.jpg",
    category: ["cv", "dl"],
    technologies: ["Python", "YOLO", "OpenCV", "TensorFlow", "NVIDIA TensorRT", "Edge Computing"],
    github: "https://github.com/alexchen/quality-control-cv",
    demo: "https://qc-demo.alexchen.dev",
    features: [
      "Real-time defect detection",
      "Multi-class classification",
      "Edge deployment optimization",
      "Quality metrics tracking"
    ],
    metrics: {
      precision: "97%",
      speed: "60 FPS",
      defectTypes: "15+"
    }
  },
  {
    id: 4,
    title: "Intelligent Chatbot with RAG",
    description: "Created an intelligent chatbot using Retrieval-Augmented Generation (RAG) with LLaMA and vector databases, handling 10k+ queries daily.",
    image: "assets/images/projects/chatbot-rag.jpg",
    category: ["nlp", "dl", "web"],
    technologies: ["Python", "LLaMA", "LangChain", "Pinecone", "FastAPI", "React", "Docker"],
    github: "https://github.com/alexchen/intelligent-chatbot",
    demo: "https://chatbot.alexchen.dev",
    features: [
      "Context-aware responses",
      "Document retrieval system",
      "Multi-turn conversations",
      "Custom knowledge base integration"
    ],
    metrics: {
      accuracy: "91%",
      responseTime: "2.1s",
      dailyQueries: "10k+"
    }
  },
  {
    id: 5,
    title: "Time Series Forecasting Platform",
    description: "Built a comprehensive time series forecasting platform using ensemble methods and deep learning models for financial and business predictions.",
    image: "assets/images/projects/time-series.jpg",
    category: ["ml", "dl", "web"],
    technologies: ["Python", "Prophet", "LSTM", "Streamlit", "PostgreSQL", "Docker", "AWS"],
    github: "https://github.com/alexchen/time-series-platform",
    demo: "https://forecast.alexchen.dev",
    features: [
      "Multiple forecasting algorithms",
      "Interactive visualizations",
      "Automated model selection",
      "Confidence interval estimation"
    ],
    metrics: {
      accuracy: "88%",
      models: "12+",
      predictions: "1M+"
    }
  },
  {
    id: 6,
    title: "Recommendation System at Scale",
    description: "Designed and deployed a hybrid recommendation system serving millions of users, improving engagement by 35% using collaborative and content-based filtering.",
    image: "assets/images/projects/recommendation.jpg",
    category: ["ml", "web"],
    technologies: ["Python", "Apache Spark", "Redis", "Elasticsearch", "Kafka", "Kubernetes"],
    github: "https://github.com/alexchen/recommendation-system",
    demo: "https://recsys-demo.alexchen.dev",
    features: [
      "Real-time recommendations",
      "Hybrid filtering approach",
      "A/B testing framework",
      "Scalable architecture"
    ],
    metrics: {
      users: "5M+",
      engagement: "+35%",
      latency: "15ms"
    }
  }
];

// Experience Data
const experience = [
  {
    position: "Senior Data Scientist",
    company: "TechCorp AI",
    location: "San Francisco, CA",
    startDate: "Jan 2022",
    endDate: "Present",
    type: "full-time",
    description: "Leading AI initiatives and building scalable machine learning solutions for enterprise clients.",
    achievements: [
      "Led development of computer vision system that improved quality control by 40%",
      "Built recommendation engine serving 5M+ users with 35% engagement increase",
      "Mentored team of 5 junior data scientists and ML engineers",
      "Reduced model deployment time by 60% through MLOps automation"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "AWS", "Kubernetes", "MLflow"]
  },
  {
    position: "ML Engineer",
    company: "DataFlow Inc.",
    location: "San Francisco, CA", 
    startDate: "Mar 2020",
    endDate: "Dec 2021",
    type: "full-time",
    description: "Developed and deployed machine learning models for predictive analytics and automation.",
    achievements: [
      "Implemented predictive maintenance system saving $2M annually",
      "Built real-time fraud detection model with 94% accuracy",
      "Established CI/CD pipelines for ML model deployment",
      "Optimized data processing workflows reducing runtime by 50%"
    ],
    technologies: ["Python", "Scikit-learn", "Apache Spark", "Docker", "Jenkins", "PostgreSQL"]
  },
  {
    position: "Data Scientist",
    company: "Analytics Pro",
    location: "San Francisco, CA",
    startDate: "Jun 2019",
    endDate: "Feb 2020",
    type: "full-time", 
    description: "Analyzed large datasets and created predictive models for business intelligence and decision making.",
    achievements: [
      "Developed customer segmentation model improving marketing ROI by 25%",
      "Created automated reporting system reducing manual work by 80%",
      "Built time series forecasting models for demand planning",
      "Collaborated with cross-functional teams on data-driven projects"
    ],
    technologies: ["Python", "R", "SQL", "Tableau", "Apache Airflow", "AWS"]
  },
  {
    position: "Junior Data Analyst",
    company: "StartupHub",
    location: "San Francisco, CA",
    startDate: "Aug 2018",
    endDate: "May 2019",
    type: "full-time",
    description: "Performed data analysis and created visualizations to support business operations and growth.",
    achievements: [
      "Built interactive dashboards for executive reporting",
      "Conducted A/B testing for product feature optimization",
      "Automated data collection and cleaning processes",
      "Supported data infrastructure setup and maintenance"
    ],
    technologies: ["Python", "SQL", "Tableau", "Excel", "Google Analytics"]
  }
];

// Education Data
const education = [
  {
    degree: "Master of Science in Data Science",
    school: "Stanford University",
    location: "Stanford, CA",
    year: "2016-2018",
    gpa: "3.9/4.0",
    description: "Specialized in machine learning, statistical modeling, and big data technologies.",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Statistical Inference", 
      "Big Data Analytics",
      "Natural Language Processing",
      "Computer Vision"
    ],
    projects: [
      "Master's Thesis: 'Advanced Deep Learning for Medical Image Analysis'",
      "Capstone: Real-time Sentiment Analysis System"
    ]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "UC Berkeley",
    location: "Berkeley, CA", 
    year: "2012-2016",
    gpa: "3.7/4.0",
    description: "Focus on algorithms, data structures, and software engineering principles.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Engineering",
      "Artificial Intelligence",
      "Statistics",
      "Linear Algebra"
    ],
    honors: ["Dean's List (6 semesters)", "Computer Science Honor Society"]
  }
];

// Certifications Data
const certifications = [
  {
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-MLS-2023-001",
    link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/"
  },
  {
    name: "Google Cloud Professional ML Engineer",
    issuer: "Google Cloud",
    date: "2022", 
    credentialId: "GCP-PML-2022-001",
    link: "https://cloud.google.com/certification/machine-learning-engineer"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera - DeepLearning.AI",
    date: "2021",
    credentialId: "DL-SPEC-2021-001",
    link: "https://www.coursera.org/specializations/deep-learning"
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    date: "2021",
    credentialId: "TF-DEV-2021-001", 
    link: "https://www.tensorflow.org/certificate"
  },
  {
    name: "Microsoft Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "2020",
    credentialId: "AZ-AI-2020-001",
    link: "https://docs.microsoft.com/en-us/learn/certifications/azure-ai-engineer"
  }
];

// Testimonials Data
const testimonials = [
  {
    name: "Sarah Johnson",
    position: "VP of Engineering",
    company: "TechCorp AI",
    image: "assets/images/testimonials/sarah.jpg",
    text: "Alex is an exceptional data scientist who consistently delivers innovative solutions. His work on our computer vision system has transformed our quality control process."
  },
  {
    name: "Michael Rodriguez",
    position: "CTO",
    company: "DataFlow Inc.",
    image: "assets/images/testimonials/michael.jpg", 
    text: "Working with Alex was a game-changer for our predictive analytics initiatives. His technical expertise and problem-solving skills are unmatched."
  },
  {
    name: "Emily Chen",
    position: "Product Manager",
    company: "Analytics Pro",
    image: "assets/images/testimonials/emily.jpg",
    text: "Alex has an incredible ability to translate complex data insights into actionable business strategies. His communication skills make him invaluable to any team."
  }
];

// Blog Posts Data (if needed)
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt: "Exploring how artificial intelligence is revolutionizing healthcare delivery and patient outcomes.",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "assets/images/blog/ai-healthcare.jpg",
    tags: ["AI", "Healthcare", "Machine Learning"],
    slug: "future-ai-healthcare"
  },
  {
    id: 2, 
    title: "Building Scalable ML Pipelines: Best Practices and Lessons Learned",
    excerpt: "A comprehensive guide to designing and implementing production-ready machine learning pipelines.",
    date: "2023-12-10",
    readTime: "12 min read",
    image: "assets/images/blog/ml-pipelines.jpg",
    tags: ["MLOps", "Engineering", "Best Practices"],
    slug: "scalable-ml-pipelines"
  },
  {
    id: 3,
    title: "Natural Language Processing: From Rule-Based to Transformer Models",
    excerpt: "The evolution of NLP techniques and how modern transformer models are changing the landscape.",
    date: "2023-11-22",
    readTime: "10 min read", 
    image: "assets/images/blog/nlp-evolution.jpg",
    tags: ["NLP", "Transformers", "Deep Learning"],
    slug: "nlp-evolution"
  }
];

// Contact Form Configuration
const contactConfig = {
  emailService: "EmailJS", // or your preferred service
  serviceId: "service_your_id",
  templateId: "template_your_id",
  publicKey: "your_public_key"
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
