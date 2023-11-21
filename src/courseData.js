// courseData.js
const courses = [
    {
      courseName: 'Data Structures',
      teacherName: 'Amit Kumar',
      courseCode: 'CUTM1234',
      courseCredit: 3,
      courseObjective: 'Learn the fundamentals of data structures',
      courseSyllabus: [
        { module: 1, topic: 'Introduction to Data Structures' },
        { module: 2, topic: 'Arrays and Linked Lists' },
        { module: 3, topic: 'Stacks and Queues' },
        { module: 4, topic: 'Trees and Graphs' },
        { module: 5, topic: 'Sorting and Searching' },
      ],
    },
    {
        courseName: 'Computer Networks',
        teacherName: 'Rajesh Singh',
        courseCode: 'CUTM5678',
        courseCredit: 4,
        courseObjective: 'Understand the principles of computer networking',
        courseSyllabus: [
          { module: 1, topic: 'Introduction to Computer Networks' },
          { module: 2, topic: 'Network Protocols' },
          { module: 3, topic: 'Routing and Switching' },
          { module: 4, topic: 'Wireless Networking' },
          { module: 5, topic: 'Network Security' },
        ],
      },
      {
        courseName: 'Database Management',
        teacherName: 'Priya Sharma',
        courseCode: 'CUTM9012',
        courseCredit: 3,
        courseObjective: 'Master the concepts of database management',
        courseSyllabus: [
          { module: 1, topic: 'Introduction to Databases' },
          { module: 2, topic: 'Relational Database Management Systems' },
          { module: 3, topic: 'SQL and Query Optimization' },
          { module: 4, topic: 'NoSQL Databases' },
          { module: 5, topic: 'Database Administration' },
        ],
      },
      {
        courseName: 'Web Development',
        teacherName: 'Neha Gupta',
        courseCode: 'CUTM3456',
        courseCredit: 3,
        courseObjective: 'Build skills in front-end and back-end web development',
        courseSyllabus: [
          { module: 1, topic: 'HTML and CSS Basics' },
          { module: 2, topic: 'JavaScript Fundamentals' },
          { module: 3, topic: 'React.js Framework' },
          { module: 4, topic: 'Node.js and Express.js' },
          { module: 5, topic: 'Database Integration' },
        ],
      },
      {
        courseName: 'Algorithms Design',
        teacherName: 'Anand Verma',
        courseCode: 'CUTM7890',
        courseCredit: 4,
        courseObjective: 'Explore the realms of artificial intelligence and machine learning',
        courseSyllabus: [
          { module: 1, topic: 'Introduction to AI and ML' },
          { module: 2, topic: 'Supervised Learning' },
          { module: 3, topic: 'Unsupervised Learning' },
          { module: 4, topic: 'Neural Networks and Deep Learning' },
          { module: 5, topic: 'AI Applications and Ethics' },
        ],
      },
      {
        courseName: 'Operating Systems',
        teacherName: 'Sarika Patel',
        courseCode: 'CUTM2345',
        courseCredit: 3,
        courseObjective: 'Learn to develop mobile applications for iOS and Android',
        courseSyllabus: [
          { module: 1, topic: 'Introduction to Mobile App Development' },
          { module: 2, topic: 'React Native Framework' },
          { module: 3, topic: 'Swift Programming (iOS)' },
          { module: 4, topic: 'Kotlin Programming (Android)' },
          { module: 5, topic: 'App Deployment and Testing' },
        ],
      },
      {
        courseName: 'Cyber Security',
        teacherName: 'Rahul Joshi',
        courseCode: 'CUTM2222',
        courseCredit: 4,
        courseObjective: 'Understand the basics of cybersecurity and ethical hacking',
        courseSyllabus: [
          { module: 1, topic: 'Introduction to Cybersecurity' },
          { module: 2, topic: 'Network Security' },
          { module: 3, topic: 'Ethical Hacking Techniques' },
          { module: 4, topic: 'Security Policies and Compliance' },
          { module: 5, topic: 'Incident Response and Forensics' },
        ],
      },
    // You can add more courses as needed
  ];
  
  export default courses;
  