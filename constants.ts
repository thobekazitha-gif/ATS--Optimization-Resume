import type { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: "THOBEKA ZITHA",
  tagline: "AI & Machine Learning Enthusiast | Python Developer | Data-Driven Problem Solver",
  contact: {
    location: "Johannesburg, South Africa",
    email: "thobekazitha40@gmail.com",
    github: "github.com/thobekazitha-gif",
    linkedin: "www.linkedin.com/in/thobeka-zitha",
  },
  summary: "Motivated and detail-oriented AI & Machine Learning Enthusiast with hands-on experience developing intelligent, data-driven applications through the Tech Career Accelerator Bootcamp. Skilled in Python, Scikit-learn, TensorFlow, and Flask, with strong problem-solving, teamwork, and analytical abilities. Passionate about using technology to improve decision-making, automation, and digital experience.",
  skills: [
    { category: "Programming", items: "Python, JavaScript, HTML, CSS" },
    { category: "Machine Learning", items: "Scikit-learn, TensorFlow, Pandas, NumPy, Matplotlib, Seaborn" },
    { category: "Frameworks & Tools", items: "Flask, Git, GitHub, Jupyter Notebook" },
    { category: "Data Visualization", items: "Power BI, Matplotlib, Seaborn" },
    { category: "Design & UX", items: "Figma, Canva" },
    { category: "Soft Skills", items: "Problem Solving, Communication, Collaboration, Critical Thinking" },
  ],
  projects: [
    {
      title: "Loan Prediction Using Classification Machine Learning",
      subtitle: "Week 6",
      link: { url: "https://github.com/Logic-League/Loan-Prediction-Using-Classification-Machine-Learning-.git", text: "GitHub Repository" },
      details: [
        "Built a supervised ML model using Python and Scikit-learn to predict loan approvals.",
        "Conducted data preprocessing and feature engineering with Pandas.",
        "Implemented and compared Logistic Regression and Decision Tree algorithms.",
        "Achieved 87% accuracy and documented workflow in GitHub with clean structure.",
      ],
    },
    {
      title: "Sentiment Analyzer",
      subtitle: "Week 5",
      link: { url: "https://c0qai4ygity3.trickle.host", text: "Live Demo" },
      details: [
        "Developed a real-time NLP web app to detect sentiment polarity (positive/negative).",
        "Integrated Flask and Python for backend logic and text preprocessing.",
        "Applied tokenization, vectorization, and classification techniques.",
        "Designed a simple, user-friendly interface for seamless testing.",
      ],
    },
    {
      title: "Logic League Resume Builder",
      subtitle: "Week 4",
      link: { url: "https://logic-league-one.vercel.app/", text: "Live Demo" },
      details: [
        "Created a dynamic resume builder web app that generates structured resumes.",
        "Implemented form handling and layout logic using HTML, CSS, and JavaScript.",
        "Focused on responsive design and user input validation for smooth user experience.",
      ],
    },
    {
      title: "Logic League Educational Material",
      subtitle: "Week 3",
      link: { url: "https://logic-league.vercel.app", text: "Live Demo" },
      details: [
        "Designed and developed a web-based platform for AI-powered learning content.",
        "Showcased lesson navigation, user progress tracking, and modern UI/UX.",
        "Highlighted structured collaboration through GitHub version control.",
      ],
    },
    {
      title: "AI Predictive Maintenance Tool",
      subtitle: "Week 2",
      link: { url: "https://crow-flask-51049066.figma.site", text: "Prototype" },
      details: [
        "Built a predictive analytics concept using Figma prototypes and Python modeling.",
        "Demonstrated how ML can forecast machine failures to reduce downtime.",
        "Focused on data visualization and presentation of actionable insights.",
      ],
    },
    {
      title: "Chatbot",
      subtitle: "Week 1",
      link: { url: "https://landbot.online/v3/H-3106021-L0BWBVHVKR7Y1AMH/index.html", text: "Live Demo" },
      details: [
        "Designed an interactive chatbot that simulates real customer conversations.",
        "Implemented structured logic flows and tested response accuracy.",
        "Enhanced understanding of conversational design and data handling.",
      ],
    },
    {
      title: "GradJob Application",
      subtitle: "Week 7",
      link: { url: "https://grad-job-application.vercel.app/", text: "Live Demo" },
      details: [
        "Developed a web-based job application tool integrated with resume uploads and search functionality.",
        "Focused on responsive UI and clean navigation using modern JavaScript frameworks.",
        "Demonstrated full-cycle application development and deployment.",
      ],
    },
    {
      title: "ZithaSites — Modern Business Website Design Solutions",
      link: { url: "https://sites.google.com/view/zithasites", text: "Website Link" },
      details: [
        "Created a platform offering affordable, custom websites for small businesses and restaurants.",
        "Focused on branding, user experience, and full digital presence setup (WhatsApp Business, social media, and Google Maps integration).",
        "Designed with beige-accented modern UI and responsive layouts.",
      ],
    },
  ],
  education: [
    { degree: "Higher Certificate in Information Technology (Software Engineering)", period: "Completed 2024" },
    { degree: "Capaciti Tech Career Accelerator — AI & Machine Learning Stream", period: "Completed 2025" },
    { degree: "Coursera: Professional Development Certificate", period: "Completed October 2025" },
    { degree: "Coursera: AI Bootcamp Certificate", period: "Completed September 2025" },
  ],
  objective: "To advance my career as an AI Developer, mastering model deployment, cloud integration, and ethical AI development — while creating technology that connects innovation with human-centered impact.",
  additionalInfo: {
    interests: "Chess, movies, and exploring how creativity and data intersect.",
    availability: "Immediately available for internships, junior developer, or AI assistant roles.",
  },
};