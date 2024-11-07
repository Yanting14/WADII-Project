const courses = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      category: 'tech',
      duration: '8 weeks',
      level: 'Beginner',
      rating: 4.5,
      enrolled: 1234,
      description: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript.',
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      title: 'Business Communication',
      category: 'business',
      duration: '4 weeks',
      level: 'Intermediate',
      rating: 4.8,
      enrolled: 2156,
      description: 'Master the art of professional communication in the workplace.',
      skills: ['Communication', 'Presentation', 'Writing']
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      category: 'design',
      duration: '6 weeks',
      level: 'Beginner',
      rating: 4.6,
      enrolled: 1789,
      description: 'Learn the principles of user interface and experience design.',
      skills: ['Figma', 'Design Thinking', 'Prototyping']
    },
    {
      id: 4,
      title: 'Python for Data Science',
      category: 'data',
      duration: '10 weeks',
      level: 'Intermediate',
      rating: 4.7,
      enrolled: 3421,
      description: 'Master Python programming for data analysis and visualization.',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      id: 5,
      title: 'Digital Marketing Essentials',
      category: 'marketing',
      duration: '6 weeks',
      level: 'Beginner',
      rating: 4.4,
      enrolled: 2890,
      description: 'Learn core concepts of digital marketing and social media strategy.',
      skills: ['Social Media', 'SEO', 'Content Marketing']
    },
    {
      id: 6,
      title: 'Project Management Fundamentals',
      category: 'business',
      duration: '8 weeks',
      level: 'Intermediate',
      rating: 4.9,
      enrolled: 1567,
      description: 'Learn essential project management methodologies and tools.',
      skills: ['Agile', 'Scrum', 'Project Planning']
    },
    {
      id: 7,
      title: 'React.js Development',
      category: 'tech',
      duration: '12 weeks',
      level: 'Advanced',
      rating: 4.8,
      enrolled: 2345,
      description: 'Build modern web applications using React.js and its ecosystem.',
      skills: ['React', 'Redux', 'JavaScript', 'REST APIs']
    },
    {
      id: 8,
      title: 'Leadership & Team Management',
      category: 'soft-skills',
      duration: '5 weeks',
      level: 'Intermediate',
      rating: 4.7,
      enrolled: 1890,
      description: 'Develop essential leadership skills for managing teams effectively.',
      skills: ['Leadership', 'Conflict Resolution', 'Team Building']
    },
    {
      id: 9,
      title: 'Data Analytics with SQL',
      category: 'data',
      duration: '7 weeks',
      level: 'Beginner',
      rating: 4.6,
      enrolled: 2678,
      description: 'Master SQL for data analysis and database management.',
      skills: ['SQL', 'Database Design', 'Data Analysis']
    },
    {
      id: 10,
      title: 'Brand Strategy & Marketing',
      category: 'marketing',
      duration: '6 weeks',
      level: 'Intermediate',
      rating: 4.5,
      enrolled: 1456,
      description: 'Learn to build and maintain strong brand presence in the market.',
      skills: ['Brand Management', 'Marketing Strategy', 'Consumer Behavior']
    },
    {
      id: 11,
      title: 'Mobile App Design',
      category: 'design',
      duration: '8 weeks',
      level: 'Intermediate',
      rating: 4.7,
      enrolled: 1234,
      description: 'Create engaging mobile app interfaces and experiences.',
      skills: ['Mobile UI', 'Interaction Design', 'Wireframing']
    },
    {
      id: 12,
      title: 'Public Speaking Mastery',
      category: 'soft-skills',
      duration: '4 weeks',
      level: 'Beginner',
      rating: 4.8,
      enrolled: 3456,
      description: 'Build confidence and master the art of public speaking.',
      skills: ['Public Speaking', 'Storytelling', 'Audience Engagement']
    },
    {
      id: 13,
      title: 'Machine Learning Basics',
      category: 'data',
      duration: '12 weeks',
      level: 'Advanced',
      rating: 4.9,
      enrolled: 1789,
      description: 'Introduction to machine learning algorithms and applications.',
      skills: ['Python', 'Scikit-learn', 'TensorFlow']
    },
    {
      id: 14,
      title: 'Financial Management',
      category: 'business',
      duration: '8 weeks',
      level: 'Intermediate',
      rating: 4.6,
      enrolled: 2134,
      description: 'Understand key concepts of financial management and analysis.',
      skills: ['Financial Analysis', 'Budgeting', 'Risk Management']
    },
    {
      id: 15,
      title: 'Cloud Computing Fundamentals',
      category: 'tech',
      duration: '10 weeks',
      level: 'Intermediate',
      rating: 4.7,
      enrolled: 1567,
      description: 'Learn basic concepts of cloud computing and major platforms.',
      skills: ['AWS', 'Azure', 'Cloud Architecture']
    }
  ];


function search(){
    let word = document.getElementById("search").value.toLowerCase()
    let result = document.getElementById("result")
    result.innerHTML = ""
    for (let course of courses){
        if (course.title.toLowerCase().includes(word)){
            let card = document.createElement("div")
            card.classList.add("card")
            let heading = document.createElement("h3")
            let duration = document.createElement("p")
            let description = document.createElement("p")
            let showskill = document.createElement("div")
            let rating = document.createElement("div")
            let star = document.createElement("span")
            let enrolled = document.createElement("span")
            for (let skill of course.skills){
                showskill.append(skill + " ")
            }
            heading.append(course.title)
            description.append(course.description)
            duration.append(course.duration + " • " + course.level)
            duration.style.color = "grey"

            enrolled.append(" (Enrolled: " + course.enrolled + ")")
            enrolled.style.color = "grey"
            star.append("★ ")
            star.style.color = "gold"
            rating.append(star)
            rating.append(course.rating)
            rating.append(enrolled)

            card.append(heading)
            card.append(duration)
            card.append(description)
            card.append(showskill)
            card.append(rating)
            result.append(card)
        }
        else if(word == ""){
            let card = document.createElement("div")
            card.classList.add("card")
            let heading = document.createElement("h3")
            let duration = document.createElement("p")
            let description = document.createElement("p")
            let showskill = document.createElement("div")
            let rating = document.createElement("div")
            let star = document.createElement("span")
            let enrolled = document.createElement("span")
            for (let skill of course.skills){
                showskill.append(skill + " ")
            }
            heading.append(course.title)
            description.append(course.description)
            duration.append(course.duration + " • " + course.level)
            duration.style.color = "grey"

            enrolled.append(" (Enrolled: " + course.enrolled + ")")
            enrolled.style.color = "grey"
            star.append("★ ")
            star.style.color = "gold"
            rating.append(star)
            rating.append(course.rating)
            rating.append(enrolled)

            card.append(heading)
            card.append(duration)
            card.append(description)
            card.append(showskill)
            card.append(rating)
            result.append(card)
        }
    }
  }


