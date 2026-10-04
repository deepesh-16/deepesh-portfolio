export const profile = {
  name: "Srinivasa Deepesh Kommineni",
  role: "Software Engineer II at JPMorganChase",
  headline: "Software engineer building agentic AI and cloud platforms for banking.",
  lead: "Software Engineer 2 at JPMorganChase in Hyderabad, designing LLM-driven fraud detection, digital form onboarding and firmwide document OCR.",
  about:
    "I am a software engineer at JPMorganChase, where I work on the point where machine learning meets production banking. My focus is agentic AI: I design LLM-driven systems on LangGraph that review checks and flag fraud, and I keep them affordable with prompt caching on AWS Bedrock. I also build the platforms around them, including a digital onboarding platform that moved paper forms onto Chase.com and use cases on a firmwide OCR solution built on AWS Textract. Day to day I work across Java and Spring Boot services, Kafka and AWS messaging for reliable workflows, and React front ends, and I care about shipping systems that are fast, observable and easy to maintain.",
  email: "ks.deepesh16@gmail.com",
  phone: "+91 74166 99459",
  phoneHref: "tel:+917416699459",
  linkedin:
    "https://www.linkedin.com/in/kommineni-srinivasa-deepesh-0b9ba51b9/",
  linkedinLabel: "linkedin.com/in/kommineni-srinivasa-deepesh",
  // Add your GitHub profile URL here to show the link in the sidebar.
  github: "",
};

export const employer = {
  name: "JPMorganChase",
  meta: "Hyderabad, Telangana, India",
  // Start of the first role, matching the LinkedIn total.
  since: { year: 2024, month: 1 },
};

// start/end are { year, month }; omit end for the current role.
// Month counts are inclusive of both ends, as LinkedIn counts them.
export const roles = [
  {
    title: "Software Engineer 2",
    start: { year: 2026, month: 1 },
    stack: ["LangGraph", "LLM", "React.js", "AWS", "Docker", "Splunk"],
    points: [
      "Designed and built an LLM-powered agentic fraud detection framework on LangGraph to identify fraudulent checks, projected to save about $10M a year.",
      "Cut inference costs by adding prompt caching on AWS Bedrock, with no loss in detection accuracy.",
    ],
  },
  {
    title: "Software Engineer 1",
    start: { year: 2024, month: 7 },
    end: { year: 2026, month: 1 },
    stack: ["Kafka", "Spring Boot", "AWS"],
    points: [
      "Led a digital onboarding platform that moved paper forms onto Chase.com and plugged new use cases into the firmwide OCR solution. Kafka carries real-time messages to runtime systems, while ECS, SNS and SQS run the asynchronous workflows. New-form onboarding time dropped 60% and paper use fell.",
      "Implemented firmwide use cases on an OmniChannel OCR platform using AWS Textract.",
    ],
  },
  {
    title: "SEP Intern",
    start: { year: 2024, month: 1 },
    end: { year: 2024, month: 6 },
    stack: ["Spring Boot", "AWS"],
    points: [
      "Built a DynamoDB and S3 alternative to FileNet that improved performance and lowered storage costs.",
      "Backed it with JUnit tests, mutation tests and a shared exception-handling jar.",
    ],
  },
];

export const projects = [
  {
    title: "Multiple Brain Disease Detection with Explainable AI",
    stack: ["CNN", "Explainable AI", "Google Colab"],
    extra: "Research paper",
    body: "A transfer-learning model built on InceptionV3 that classifies Alzheimer's, Parkinson's and multiple sclerosis from brain MRIs. LIME explanations show which regions drove each prediction, so clinicians can check the reasoning.",
  },
  {
    title: "TEDxVNRVJIET",
    stack: ["React.js", "Tailwind CSS"],
    extra: "",
    body: "The event website for TEDxVNRVJIET. A simpler interface and clearer ticketing flow led to ticket sales worth over $1,000.",
  },
  {
    title: "CourseAI",
    stack: ["React.js", "Flask", "Machine Learning"],
    extra: "Demo · Research paper",
    body: "A course recommendation site, built with a team, that suggests what to study next from what you already know. It ranks courses using TF-IDF, cosine similarity and Jaccard metrics.",
  },
];

export const skills = [
  { label: "Domains", items: ["Full stack development", "Cloud technologies", "Machine learning", "Agentic AI", "Natural language processing"] },
  { label: "Front end", items: ["React.js", "ASP.NET", "Tailwind CSS", "Material UI", "Bootstrap"] },
  { label: "Back end", items: ["Spring Boot", "Node.js", "AWS S3", "DynamoDB", "RDS", "SQS", "SNS"] },
  { label: "Languages", items: ["TypeScript", "Java", "Python", "JavaScript"] },
  { label: "Problem solving", items: ["1758 rating on LeetCode (top 9%)", "200+ problems solved"] },
  { label: "Working style", items: ["Leadership", "Collaboration", "Clear communication", "Time management"] },
];

export const education = {
  school: "VNR Vignana Jyothi Institute of Engineering & Technology",
  meta: "Hyderabad, India · Graduated May 2024",
  degree: "Bachelor of Technology in Computer Science and Engineering. CGPA 8.81.",
  coursework:
    "Coursework: data structures and algorithms, object-oriented programming, database management systems, operating systems, computer networks, AI and ML.",
};

export const awards = [
  { title: "Innovation Award, Q4 2024", by: "JPMorganChase, Chase Operations Technology Tower" },
  { title: "Third place, national idea pitching competition", by: "IEEE Thinkpad" },
  { title: "AWS Certified Cloud Practitioner", by: "Amazon Web Services" },
];

export const sections = [
  { id: "top", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "recognition", label: "Recognition" },
  { id: "contact", label: "Contact" },
];

export const achievements = [
  { value: "$10M", label: "Projected yearly savings from the agentic fraud detection framework" },
  { value: "60%", label: "Faster onboarding of new forms on the digital platform" },
  { value: "Q4 2024", label: "Innovation Award, Chase Operations Technology Tower" },
  { value: "Top 9%", label: "LeetCode rating of 1758 across 200+ problems solved" },
];
