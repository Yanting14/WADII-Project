<?php

$industries = [
    [
        'id' => 1,
        'name' => 'Healthcare',
        'description' => 'Explore roles in Healthcare like Doctor, Nurse, Paramedic, Therapist & Counsellor, and Veterinarians.',
        'roles' => [
            [
                'id' => 1,
                'name' => 'Doctor',
                'description' => 'Doctors diagnose and treat health issues, consult with patients, prescribe medications, and create treatment plans, often specializing in fields like pediatrics or cardiology.',
                'qual' => 'Educational Path: Completion of a bachelor\'s degree, followed by medical school (MD or DO). Training: Completion of a residency program (usually 3 to 4 years, depending on the specialty). Licensure: Passing a licensing exam (e.g., USMLE in the United States or equivalent in other countries) and obtaining a medical license to practice in their state or country. Board Certification (Optional): Many doctors seek certification in their specialty for greater credibility and career opportunities.',
                'envt' => 'Doctors typically work in hospitals, private practices, outpatient clinics, or community health centers. They may also work in research institutions or for public health organizations.',
                'salary' => 'Depending on specialty, location, and experience, doctors may earn from $150,000 to $300,000 per year or more.',
                'hours' => 'Doctors may work 40 to 60 hours per week, depending on their specialty and place of employment.',
                'outlook' => 'The demand for doctors is expected to grow due to an aging population and increased focus on healthcare access.',
                'cr' => 'Challenges: High levels of responsibility, long hours, and emotional challenges when dealing with severe or terminal cases. Rewards: Helping improve patients\' lives, high earning potential, job security, and the opportunity to make a difference in individual and community health.'
            ],
            [
                'id' => 2,
                'name' => 'Nurse',
                'description' => 'Nurses provide patient care, assist doctors, and support patients\' emotional needs. They handle tasks like administering medication, monitoring vital signs, and coordinating with other healthcare providers.',
                'qual' => 'Education: Diploma or degree in nursing. Certification: Must pass relevant exams and be licensed, with further specialization possible.',
                'skills' => 'Medical & Technical Skills, with knowledge of healthcare practices and procedures. Compassion & Patience essential for patient support. Communication & Adaptability to work in diverse, fast-paced settings.',
                'envt' => 'Nurses work in hospitals, clinics, nursing homes, and home healthcare. They may specialize in areas like pediatrics, intensive care, or gerontology.',
                'salary' => '$60,000 to $100,000, depending on specialization, experience, and location.',
                'hours' => 'Usually shift-based, with night, weekend, and holiday shifts common.',
                'outlook' => 'High demand due to the healthcare sector\'s expansion, with growth opportunities in advanced practice, management, or education.',
                'cr' => 'Challenges: Physically demanding, high-stress, and risk of exposure to illnesses. Rewards: Fulfilling work with a strong impact on patient recovery and wellbeing.'
            ],
            [
                'id' => 3,
                'name' => 'Paramedic',
                'description' => 'Paramedics provide emergency medical care, often being the first responders in critical situations. They perform life-saving procedures, stabilize patients, and transport them to medical facilities.',
                'qual' => 'Education: Training in paramedicine or emergency medical services, often at a diploma or certificate level. Certification: Certification and licensing exams are required, with continued education for advanced skills.',
                'skills' => 'Emergency Medical Knowledge & Physical Stamina to perform under pressure and handle physically demanding tasks. Critical Thinking & Communication for quick decision-making in emergencies and effective communication with patients.',
                'envt' => 'Paramedics work in ambulances, emergency scenes, and occasionally hospitals. The job is high-stress and unpredictable, with exposure to diverse environments.',
                'salary' => '$40,000 to $60,000, with potential for higher pay based on experience and location.',
                'hours' => 'Shift-based, including nights, weekends, and holidays.',
                'outlook' => 'Demand is steady as emergency services are essential in any healthcare system. Growth opportunities may include advanced paramedic roles or transitioning into training roles.',
                'cr' => 'Challenges: Physically and emotionally demanding, risk of exposure to trauma. Rewards: High impact in critical situations and satisfaction in saving lives.'
            ],
            [
                'id' => 4,
                'name' => 'Therapist & Counselor',
                'description' => 'Therapists and counselors work with individuals to address mental, emotional, and behavioral issues. They may provide therapy for conditions like anxiety, depression, or relationship problems, using various approaches such as cognitive-behavioral therapy or talk therapy.',
                'qual' => 'Education: Bachelor\'s or master\'s degree in psychology, counseling, or social work, with specialized training in therapeutic techniques. Licensure/Certification: Certification varies by location and specialty, with continued education often required.',
                'skills' => 'Empathy & Listening Skills to understand and respond to clients\' emotions. Communication & Problem-Solving essential for guiding clients through challenges. Analytical Skills helps in identifying the root cause of clients\' issues.',
                'envt' => 'Therapists and counselors work in hospitals, private practices, schools, community centers, and sometimes online. Sessions can be individual, family, or group-based.',
                'salary' => '$50,000 to $85,000, depending on the type (e.g., physical, occupational, or mental health therapist) and experience.',
                'outlook' => 'Growing need due to increased awareness of mental health. Opportunities to specialize in specific populations (e.g., children, trauma survivors) or advance to supervisory roles.',
                'cr' => 'Challenges: Emotional strain from working with difficult cases. Rewards: Profoundly fulfilling as it involves helping clients improve their quality of life and mental health.'
            ],
            [
                'id' => 5,
                'name' => 'Veterinarian',
                'description' => 'Veterinarians diagnose and treat health conditions in animals, conduct surgeries, provide vaccinations, and offer preventive care. They work with pets, livestock, and sometimes wildlife.',
                'qual' => 'Education: Veterinary degree from an accredited institution. Licensure: Passing relevant licensing exams and obtaining certification to practice.',
                'skills' => 'Medical Knowledge in Animal Health of animal anatomy and diseases. Manual Dexterity & Problem-Solving essential for diagnosing and performing surgeries. Compassion to care for animals and communicate with pet owners.',
                'envt' => 'Veterinarians work in animal clinics, hospitals, farms, zoos, and sometimes in the field. Work may involve exposure to animals of all sizes.',
                'salary' => '$80,000 to $120,000, with variations based on specialty, location, and years of experience.',
                'outlook' => 'Steady demand with growth opportunities in specialized fields like surgery, pathology, or wildlife conservation.',
                'cr' => 'Challenges: Physical strain, risk of bites or injuries, and dealing with difficult cases. Rewards: Fulfilling work as it involves improving the health and lives of animals.'
            ],
            [
                'id' => 6,
                'name' => 'Pharmacist',
                'description' => 'Pharmacists are healthcare professionals who prepare, dispense, and provide advice on medications to patients. They ensure that medications are used safely and effectively, educate patients about proper medication use, and may also provide general health advice, such as tips for managing chronic conditions.',
                'qual' => 'Education: Doctor of Pharmacy (Pharm.D.) degree from an accredited pharmacy school. Licensure: Must pass relevant licensing exams (like the NAPLEX in the U.S.) and obtain a license to practice in their country or state.',
                'skills' => 'Pharmaceutical Knowledge of medications, their effects, interactions, and contraindications. Attention to Detail, Accuracy in medication preparation, labeling, and dosage is critical. Communication & Empathy to clearly explain medication instructions and potential side effects to patients, and listen to their concerns.',
                'envt' => 'Pharmacists work in a variety of settings, including retail pharmacies, hospitals, clinics, and sometimes research institutions. In hospital settings, they may collaborate closely with doctors and nurses to monitor patient medications.',
                'salary' => 'Varies widely by country, experience, and setting (e.g., retail vs. hospital). Benefits: Health insurance, paid leave, retirement plans, and sometimes performance bonuses.',
                'hours' => 'Pharmacists in retail settings may work evenings, weekends, and holidays, while those in hospital settings may have more standardized shifts.',
                'outlook' => 'The demand for pharmacists remains steady as healthcare systems continue to emphasize medication management and preventive care. Growth opportunities include specialization in fields like oncology or infectious diseases, as well as roles in pharmacy management or clinical research.',
                'cr' => 'Challenges: High responsibility to ensure accuracy, long hours on feet, and dealing with difficult cases such as medication shortages or drug interactions. Rewards: A fulfilling role in healthcare, the ability to help patients manage their health effectively, and a stable career with growth potential.'
            ]
            ]
    ],

    [
        'id' => 2,
        'name' => 'Tech',
        'description' => 'Explore roles in IT like Software Development, Data Science & Analytics, Networking & Systems, Support & Operations and Cybersecurity Analyst.',
        'roles' => [
            [
                'id' => 1,
                'name' => 'Software Development',
                'description' => 'Develops, tests, and maintains software applications. Core tasks include coding, debugging, and collaborating with cross-functional teams to implement new features.',
                'qual' => 'Bachelor\'s degree in Computer Science or related field. Relevant certifications like CompTIA or AWS can be beneficial.',
                'skills' => 'Proficiency in programming languages (e.g., Java, Python), problem-solving skills, and teamwork.',
                'envt' => 'Typically office-based, but remote work is also common.',
                'salary' => 'Varies widely, generally between $70,000 and $120,000 depending on experience and location.',
                'hours' => 'Standard 40-hour workweek, with occasional overtime for deadlines.',
                'outlook' => 'High demand due to digital transformation, with career progression to senior developer, team lead, or software architect.',
                'cr' => 'Challenges include long hours and tight deadlines, while rewards are the satisfaction of creating functional and valuable applications.'
            ],
            [
                'id' => 2,
                'name' => 'Data Science & Analytics',
                'description' => 'Analyzes data to provide insights and support decision-making. Responsibilities include data cleaning, analysis, and visualization.',
                'qual' => 'Bachelor\'s degree in Data Science, Statistics, or similar. Skills in data analytics tools like SQL and Python.',
                'skills' => 'Strong analytical skills, statistical knowledge, and proficiency in data visualization tools (Tableau, Power BI).',
                'envt' => 'Office or remote work; often collaborative with other departments.',
                'salary' => 'Typically between $80,000 and $130,000.',
                'hours' => 'Standard 9-5 hours, though project-based work may require extra time.',
                'outlook' => 'Rapidly growing field with roles like Data Engineer or Machine Learning Engineer as progression paths.',
                'cr' => 'Handling large datasets and ensuring data integrity are challenging, while insights can lead to significant business impacts.'
            ],
            [
                'id' => 3,
                'name' => 'Networking & Systems',
                'description' => 'Manages and secures network infrastructure. Tasks include system configuration, network monitoring, and troubleshooting.',
                'qual' => 'Degree in Computer Science or Information Systems, and certifications (e.g., Cisco CCNA).',
                'skills' => 'Knowledge of network protocols, troubleshooting, and security awareness.',
                'envt' => 'Office-based, sometimes on-call for network issues.',
                'salary' => 'Average salary ranges from $60,000 to $100,000.',
                'hours' => 'Often regular hours, with potential on-call shifts.',
                'outlook' => 'Growing need as businesses expand their digital infrastructure.',
                'cr' => 'High responsibility for network reliability; rewarding to maintain uninterrupted connectivity.'
            ],
            [
                'id' => 4,
                'name' => 'Support & Operations',
                'description' => 'Provides technical support and ensures the smooth operation of IT systems.',
                'qual' => 'Entry-level requires an associate or bachelor\'s degree in IT.',
                'skills' => 'Customer service, problem-solving, and technical troubleshooting.',
                'envt' => 'Office or remote, may include helpdesk support.',
                'salary' => '$40,000 to $70,000 depending on experience.',
                'hours' => 'Standard office hours, though some roles require shift work.',
                'outlook' => 'Stable demand, with opportunities to move into specialized IT roles.',
                'cr' => 'Stable demand, with opportunities to move into specialized IT roles.'
            ],
            [
                'id' => 5,
                'name' => 'Cybersecurity Analyst',
                'description' => 'Monitors and protects networks, systems, and data from cyber threats, conducting vulnerability assessments and implementing security measures.',
                'qual' => 'Bachelor\'s degree in Cybersecurity, Information Technology, or related field. Certifications like CompTIA Security+, CISSP, or CEH are advantageous.',
                'skills' => 'Knowledge of network security, threat analysis, risk assessment, and strong analytical skills.',
                'envt' => 'Typically office-based, but remote work is also common; may work within a cybersecurity team or for a managed security provider.',
                'salary' => '$60,000 to $100,000 depending on experience and certifications.',
                'hours' => 'Standard office hours, though on-call shifts may be required during incidents.',
                'outlook' => 'High demand due to increasing cybersecurity threats, with growth opportunities in roles like Senior Analyst, Security Consultant, or Chief Information Security Officer (CISO).',
                'cr' => 'Challenges: High-pressure environment, constant need to stay updated on evolving threats, and potential for long hours during security incidents. Rewards: Making a tangible impact by protecting sensitive data, high job stability, and the satisfaction of preventing cyber attacks.'
            ]
            ]
        ],

        [
        'id' => 3,
        'name' => 'Finance and Banking',
        'description' => 'Explore roles in finance like Corporate Finance, Investment Banking, Insurance, Real Estate, and Wealth Management.',
        'roles' => [
            [
                'id' => 1,
                'name' => 'Corporate Finance',
                'description' => 'Manages a company\'s finances, focusing on budgeting, forecasting, and financial analysis.',
                'qual' => 'Bachelor\'s degree in Finance, Accounting, or Business.',
                'skills' => 'Analytical skills, knowledge of financial modeling, and proficiency in Excel.',
                'envt' => 'Office setting, often collaborative with other departments.',
                'salary' => 'Ranges from $60,000 to $100,000.',
                'hours' => 'Generally standard hours, with additional hours during reporting periods.',
                'outlook' => 'Stable demand, with progression to CFO or financial director roles.',
                'cr' => 'High pressure with tight deadlines; rewarding to contribute to a company\'s growth.'
            ],
            [
                'id' => 2,
                'name' => 'Investment Banking',
                'description' => 'Provides financial services to help clients raise capital. Tasks include financial modeling, valuations, and M&A advisory.',
                'qual' => 'Bachelor\'s in Finance or Economics, often requires an MBA.',
                'skills' => 'Analytical, financial modeling, and communication skills.',
                'envt' => 'Fast-paced office setting, high-stress environment.',
                'salary' => 'Salaries range from $100,000 to over $150,000, with significant bonuses.',
                'hours' => 'Long hours, including weekends.',
                'outlook' => 'High demand but competitive field.',
                'cr' => 'High stress; rewards include high earning potential.'
            ],
            [
                'id' => 3,
                'name' => 'Insurance',
                'description' => 'Assesses risk and manages insurance policies. Tasks include claims assessment and policy underwriting.',
                'qual' => 'Degree in Finance or relevant field.',
                'skills' => 'Analytical skills, risk assessment, and customer service.',
                'envt' => 'Office, sometimes remote.',
                'salary' => 'Around $50,000 to $90,000.',
                'hours' => 'Regular business hours.',
                'outlook' => 'Steady demand with growth in specialized insurance areas.',
                'cr' => 'Requires attention to detail; rewarding to help clients manage risk.'
            ],
            [
                'id' => 4,
                'name' => 'Real Estate',
                'description' => 'Manages property sales, leases, or investments. Includes tasks like property valuation and client advising.',
                'qual' => 'Real estate license, degree in Finance is a plus.',
                'skills' => 'Communication, negotiation, and market analysis.',
                'envt' => 'Office and field-based work.',
                'salary' => 'Highly variable, with commission-based income.',
                'hours' => 'Often includes weekends and flexible hours.',
                'outlook' => 'Growing field with specialization opportunities.',
                'cr' => 'Market-driven challenges; rewards include commission and client satisfaction.'
            ],
            [
                'id' => 5,
                'name' => 'Wealth Management',
                'description' => 'Advises clients on investments, estate planning, and retirement. Core tasks include portfolio management and financial planning.',
                'qual' => 'Bachelor\'s degree in Finance, and often requires a Certified Financial Planner (CFP) designation.',
                'skills' => 'Financial knowledge, interpersonal skills, and strategic thinking.',
                'envt' => 'Office, sometimes meeting clients in various settings.',
                'salary' => '$80,000 to $150,000, with potential bonuses.',
                'hours' => 'Standard office hours, with flexibility.',
                'outlook' => 'Strong demand, especially for high-net-worth clients.',
                'cr' => 'Requires managing client expectations; rewarding to help clients achieve financial goals.'
            ]
            ]   
        ],
                    
        [
            'id' => 4,
            'name' => 'Education and Training',
            'description' => 'Explore roles in Education and Training like Teaching, Education Administration, Tutoring, Curriculum Developer, and Educational Technology Specialist.',
            'roles' => [
            [
                'id' => 1,
                'name' => 'Teaching',
                'description' => 'Educates students in various subjects, prepares lesson plans, and assesses student progress.',
                'qual' => 'Bachelor\'s degree in Education or relevant subject; teaching certification or license required.',
                'skills' => 'Communication, patience, subject matter expertise, and classroom management.',
                'envt' => 'Classroom setting in schools, sometimes online.',
                'salary' => 'Average salary ranges from $40,000 to $70,000 depending on experience and location.',
                'hours' => 'Regular school hours, plus additional time for grading and preparation.',
                'outlook' => 'Steady demand with potential to progress to department head or principal.',
                'cr' => 'Handling diverse student needs; rewarding to witness student growth and learning.'
            ],
            [
                'id' => 2,
                'name' => 'Education Administration',
                'description' => 'Manages school operations, supports teachers, and oversees curriculum development.',
                'qual' => 'Bachelor\'s or master\'s degree in Education Administration.',
                'skills' => 'Leadership, organizational, and communication skills.',
                'envt' => 'Office setting within educational institutions.',
                'salary' => 'Ranges from $60,000 to $120,000 based on role and institution.',
                'hours' => 'Regular office hours, with potential evening events.',
                'outlook' => 'Steady demand, with opportunities to progress to higher administrative positions.'
            ],
            [
                'id' => 3,
                'name' => 'Tutoring',
                'description' => 'Provides personalized instruction to students in specific subjects.',
                'qual' => 'Varies; a bachelor\'s degree in relevant subject preferred.',
                'skills' => 'Communication, patience, and subject matter expertise.',
                'salary' => 'Hourly rates from $20 to $60 depending on expertise.',
                'hours' => 'Flexible, often part-time.',
                'outlook' => 'Growing field, especially with online learning.',
                'cr' => 'Customizing lessons for individual needs; rewarding to see student improvement.'
            ],
            [
                'id' => 4,
                'name' => 'Curriculum Developer',
                'description' => 'Designs and updates educational content and curricula for schools or training programs. Responsibilities include researching current educational trends, developing lesson plans, and ensuring alignment with standards.',
                'qual' => 'Bachelor\'s or master\'s degree in Education, Curriculum Development, or a related field. Teaching experience or a background in education is often required.',
                'skills' => 'Knowledge of instructional design, creativity, research skills, and strong writing abilities.',
                'envt' => 'Office-based or remote, often collaborating with educators and instructional designers.',
                'salary' => 'Typically ranges from $50,000 to $90,000, depending on experience and organization.',
                'hours' => 'Standard hours, though deadlines may require additional time.',
                'outlook' => 'Growing demand as educational institutions increasingly focus on curriculum improvement. Potential to progress to senior curriculum design or educational consulting roles.',
                'cr' => 'Balancing the needs of different stakeholders and staying updated with educational trends; rewarding to create impactful learning experiences for students.'
            ],
            [
                'id' => 5,
                'name' => 'Educational Technology Specialist',
                'description' => 'Integrates technology into the classroom, providing training to teachers and selecting digital tools to enhance learning. Core tasks include researching educational technology tools, training staff, and troubleshooting tech issues.',
                'qual' => 'Bachelor\'s degree in Education, Educational Technology, or a related field. Certifications in specific technologies or platforms (e.g., Google Certified Educator) can be beneficial.',
                'skills' => 'Proficiency with educational technology tools, problem-solving skills, and strong communication skills.',
                'envt' => 'School setting, but can also work for educational organizations or remotely.',
                'salary' => 'Salaries typically range from $55,000 to $85,000.',
                'hours' => 'Regular school hours, with some after-hours work for technology setups.',
                'outlook' => 'High demand as more schools adopt digital learning tools; potential to progress to technology director or instructional designer roles.',
                'cr' => 'Keeping up with rapidly changing tech; rewarding to see technology improve student engagement and learning outcomes.'
            ]
            ]
        ],

        [
            'id' => 5,
            'name' => 'Engineering',
            'description' => 'Explore roles in Engineering like Civil Engineering, Mechanical Engineering, Electrical Engineering, Software & Systems Engineering, and Environmental Engineering.',
            'roles' => [
            [
                'id' => 1,
                'name' => 'Civil Engineering',
                'description' => 'Designs and oversees construction projects like roads, bridges, and buildings.',
                'qual' => 'Bachelor\'s degree in Civil Engineering; professional engineering (PE) license.',
                'skills' => 'Analytical skills, project management, and knowledge of construction materials.',
                'envt' => 'Office and on-site at construction locations.',
                'salary' => 'Typically ranges from $70,000 to $120,000.',
                'hours' => 'Regular hours with potential overtime on projects.',
                'outlook' => 'Steady demand, especially in infrastructure development.',
                'cr' => 'Managing project deadlines; rewarding to see completed structures.'
            ],
            [
                'id' => 2,
                'name' => 'Mechanical Engineering',
                'description' => 'Designs and tests mechanical devices and systems.',
                'qual' => 'Bachelor\'s degree in Mechanical Engineering.',
                'skills' => 'Proficiency in CAD software, problem-solving skills.',
                'envt' => 'Office and manufacturing or testing facilities.',
                'salary' => 'Around $70,000 to $110,000.',
                'hours' => 'Standard hours with project-based variations.',
                'outlook' => 'Stable, with growth in specialized fields like robotics.',
                'cr' => 'Problem-solving under constraints; satisfaction in seeing functional designs.'
            ],
            [
                'id' => 3,
                'name' => 'Electrical Engineering',
                'description' => 'Designs, develops, and tests electrical systems and equipment.',
                'qual' => 'Bachelor\'s in Electrical Engineering.',
                'skills' => 'Circuit design, problem-solving, and project management.',
                'envt' => 'Office, labs, and on-site for installations.',
                'salary' => 'From $70,000 to $120,000.',
                'hours' => 'Standard hours, with possible on-site overtime.',
                'outlook' => 'Strong demand in renewable energy and technology sectors.',
                'cr' => 'Ensuring safety and efficiency; rewarding to create energy-efficient systems.'
            ],
            [
                'id' => 4,
                'name' => 'Software & Systems Engineering',
                'description' => 'Develops and integrates software and systems solutions.',
                'qual' => 'Bachelor\'s degree in Software Engineering or similar.',
                'skills' => 'Programming, systems integration, and analytical skills.',
                'envt' => 'Office or remote.',
            ],
            [
                'id' => 5,
                'name' => 'Environmental Engineering',
                'description' => 'Focuses on improving environmental health through sustainable practices.',
                'qual' => 'Bachelor\'s in Environmental Engineering or similar.',
                'skills' => 'Knowledge of environmental regulations, analytical skills.',
                'envt' => 'Office, labs, and fieldwork.',
                'salary' => 'Ranges from $60,000 to $100,000.',
                'hours' => 'Standard hours, with fieldwork variability.',
                'outlook' => 'Growing demand due to environmental concerns.',
                'cr' => 'Addressing environmental issues; rewarding to improve public health.'
            ]
            ]
        ],

       [
            'id' => 6,
            'name' => 'Marketing & Advertising',
            'description' => 'Explore roles in Marketing & Advertising like Digital Marketing, Branding & Advertising, Market Research, Content Strategist, and SEO Specialist.',
            'roles' => [
            [
                'id' => 1,
                'name' => 'Digital Marketing',
                'description' => 'Develops online marketing campaigns, manages social media, and optimizes digital content.',
                'qual' => 'Bachelor\'s in Marketing or related field.',
                'skills' => 'SEO, social media management, data analysis.',
                'envt' => 'Office, hybrid, or remote.',
                'salary' => 'Around $50,000 to $90,000.',
                'hours' => 'Standard hours with flexibility for online campaigns.',
                'outlook' => 'High demand with progression to managerial roles.',
                'cr' => 'Rapidly changing digital landscape; rewarding to see campaign results.'
            ],
            [
                'id' => 2,
                'name' => 'Branding & Advertising',
                'description' => 'Creates brand strategies and advertising campaigns to build brand image.',
                'qual' => 'Bachelor\'s in Marketing, Advertising, or Communications.',
                'skills' => 'Creativity, communication, and project management.',
                'envt' => 'Office or agency settings.',
                'salary' => 'Ranges from $60,000 to $100,000.',
                'hours' => 'Regular hours with possible overtime for campaigns.',
                'outlook' => 'Stable demand with career growth in brand management.',
                'cr' => 'Competitive industry; rewarding to create influential brand campaigns.'
            ],
            [
                'id' => 3,
                'name' => 'Market Research',
                'description' => 'Analyzes market trends and consumer behavior to guide business decisions.',
                'qual' => 'Degree in Marketing, Statistics, or related field.',
                'skills' => 'Analytical skills, statistical knowledge, and attention to detail.',
                'envt' => 'Office or remote.',
                'salary' => 'Typically from $50,000 to $90,000.',
                'hours' => 'Regular hours with flexibility.',
                'outlook' => 'Growing field with opportunities in analytics.',
                'cr' => 'Requires precision and attention to trends; rewarding to provide data-driven insights.'
            ],
            [
                'id' => 4,
                'name' => 'Content Strategist',
                'description' => 'Develops content strategies to support marketing goals, plans content calendars, and oversees content quality and consistency.',
                'qual' => 'Bachelor\'s degree in Marketing, Communications, Journalism, or related field.',
                'skills' => 'Strong writing and editorial skills, strategic thinking, and proficiency in analytics tools (Google Analytics, social media analytics).',
                'envt' => 'Typically office-based or remote, often part of a marketing team.',
                'salary' => 'Generally between $60,000 and $100,000, depending on experience.',
                'hours' => 'Standard business hours with flexibility for deadlines or campaign launches.',
                'outlook' => 'Growing demand as companies focus on content-driven marketing. Progression to senior strategist or content director roles.',
                'cr' => 'Creating engaging, high-quality content consistently; rewarding to see content resonate with the audience and drive brand growth.'
            ],
            [
                'id' => 5,
                'name' => 'Search Engine Optimization (SEO) Specialist',
                'description' => 'Optimizes website content to improve search engine rankings. Key tasks include keyword research, on-page optimization, link building, and analyzing site traffic data.',
                'qual' => 'Bachelor\'s degree in Marketing, Computer Science, or related field. Certifications in SEO (e.g., Google Analytics, SEMrush) are often beneficial.',
                'skills' => 'Knowledge of SEO tools, analytical skills, content strategy, and understanding of Google\'s algorithms.',
                'envt' => 'Office or remote, often within a digital marketing team.',
                'salary' => 'Typically between $50,000 and $90,000.',
                'hours' => 'Standard business hours, with flexibility for campaign monitoring.',
                'outlook' => 'High demand as businesses recognize the value of organic search traffic. Potential for growth to SEO manager or digital marketing strategist.',
                'cr' => 'Keeping up with frequent algorithm changes; rewarding to see improved site rankings and organic traffic.'
            ]
            ]
        ],


        [
        'id' => 7,
        'name' => 'Retail and Customer Service',
        'description' => 'Explore roles in Retail and Customer Service like Sales, Customer Support, E-Commerce, Merchandiser, and Retail Buyer.',
        'roles' => [
            [
                'id' => 1,
                'name' => 'Sales',
                'description' => 'Engages with customers to sell products or services, often working to meet or exceed sales targets.',
                'qual' => 'High school diploma; additional sales certifications can be advantageous.',
                'skills' => 'Communication, persuasion, customer service, and negotiation skills.',
                'envt' => 'In-store or corporate settings, sometimes traveling to meet clients.',
                'salary' => 'Typically $30,000 to $60,000, with commissions and bonuses for high performance.',
                'hours' => 'Regular hours, with some evenings or weekends for retail settings.',
                'outlook' => 'Steady demand, with potential for growth into managerial or specialized sales roles.',
                'cr' => 'Pressure to meet sales targets; rewarding to build customer relationships and achieve high sales.'
            ],
            [
                'id' => 2,
                'name' => 'Customer Support',
                'description' => 'Assists customers by answering inquiries, resolving issues, and ensuring customer satisfaction.',
                'qual' => 'High school diploma; customer service training is beneficial.',
                'skills' => 'Patience, empathy, communication, and problem-solving skills.',
                'envt' => 'Office, retail, or remote settings.',
                'salary' => 'Typically $30,000 to $50,000.',
                'hours' => 'Standard business hours, with potential shift work in 24/7 support roles.',
                'outlook' => 'High demand, with advancement opportunities to supervisory roles.',
                'cr' => 'Handling difficult customers; rewarding to resolve issues and enhance customer satisfaction.'
            ],
            [
                'id' => 3,
                'name' => 'E-Commerce',
                'description' => 'Oversees online sales platforms, managing product listings, customer interactions, and order processing.',
                'qual' => 'Degree in Marketing, Business, or related field.',
                'skills' => 'Digital marketing, analytical skills, and customer service.',
                'envt' => 'Office or remote, often within digital marketing or retail departments.',
                'salary' => 'Generally ranges from $50,000 to $80,000.',
                'hours' => 'Standard business hours, with flexibility for online management.',
                'outlook' => 'Rapidly growing field, with potential for roles in e-commerce management.',
                'cr' => 'Keeping up with digital trends; rewarding to see online sales growth.'
            ],
            [
                'id' => 4,
                'name' => 'Merchandiser',
                'description' => 'Plans and displays products in a way that maximizes sales and enhances the customer experience.',
                'qual' => 'High school diploma or associate degree in Marketing or related field.',
                'skills' => 'Creativity, attention to detail, and an understanding of consumer behavior.',
                'envt' => 'In-store or corporate setting, often in collaboration with the sales team.',
                'salary' => 'Typically between $40,000 and $70,000.',
                'hours' => 'Regular hours, with additional time during store resets or product launches.',
                'outlook' => 'Steady demand, with opportunities to move into visual merchandising or management roles.',
                'cr' => 'Meeting sales goals through effective displays; rewarding to see the impact of visual strategies on sales.'
            ],
            [
                'id' => 5,
                'name' => 'Retail Buyer',
                'description' => 'Selects and purchases products for retail stores, analyzing trends and negotiating with suppliers.',
                'qual' => 'Bachelor\'s degree in Business, Marketing, or related field.',
                'skills' => 'Negotiation, market analysis, and decision-making skills.',
                'envt' => 'Office-based with travel for trade shows and supplier meetings.',
                'salary' => 'Typically ranges from $50,000 to $90,000.',
                'hours' => 'Standard business hours with occasional travel.',
                'outlook' => 'High demand with progression to senior buying or merchandising roles.',
                'cr' => 'Making accurate purchasing decisions; rewarding to see chosen products succeed in the market.'
            ]
        ]
            ],

            [
                'id' => 8,
                'name' => 'Hospitality and Tourism',
                'description' => 'Explore roles in Hospitality and Tourism like Hotel Management, Food & Beverage, Travel Services, Event Coordinator, and Tour Guide.',
                'roles' => [
                [
                    'id' => 1,
                    'name' => 'Hotel Management',
                    'description' => 'Oversees daily hotel operations, including staff management, guest services, and financial planning.',
                    'qual' => 'Degree in Hospitality Management or related field.',
                    'skills' => 'Leadership, problem-solving, and customer service.',
                    'envt' => 'On-site at hotels, often in office settings within the hotel.',
                    'salary' => 'Typically between $50,000 and $100,000, depending on hotel size and location.',
                    'hours' => 'Often long hours, with weekend and holiday shifts.',
                    'outlook' => 'Steady demand with growth opportunities in regional management or corporate roles.',
                    'cr' => 'High-pressure environment; rewarding to create a memorable guest experience.'
                ],
                [
                    'id' => 2,
                    'name' => 'Food & Beverage',
                    'description' => 'Manages operations in restaurants, bars, or catering services, focusing on quality, service, and profitability.',
                    'qual' => 'Degree in Hospitality, Culinary Arts, or related field.',
                    'skills' => 'Culinary knowledge, management skills, and customer service.',
                    'envt' => 'On-site at restaurants, hotels, or catering venues.',
                    'salary' => 'Typically ranges from $40,000 to $90,000, depending on the establishment.',
                    'hours' => 'Long hours, with weekends and holidays.',
                    'outlook' => 'Growing field, with advancement to senior management.',
                    'cr' => 'Handling customer expectations; rewarding to provide excellent dining experiences.'
                ],
                [
                    'id' => 3,
                    'name' => 'Travel Services',
                    'description' => 'Assists clients in planning and booking travel itineraries, including flights, hotels, and tours.',
                    'qual' => 'High school diploma or associate degree in Travel and Tourism.',
                    'skills' => 'Knowledge of travel software, customer service, and organizational skills.',
                    'envt' => 'Office or remote, often with a travel agency or tour operator.',
                    'salary' => 'Typically between $35,000 and $60,000.',
                    'hours' => 'Standard hours with potential for flexible shifts.',
                    'outlook' => 'Steady demand with opportunities in various travel services roles.',
                    'cr' => 'Managing client expectations; rewarding to help clients have enjoyable trips.'
                ],
                [
                    'id' => 4,
                    'name' => 'Event Coordinator',
                    'description' => 'Plans and organizes events, including weddings, conferences, and corporate gatherings.',
                    'qual' => 'Bachelor\'s degree in Hospitality Management or related field.',
                    'skills' => 'Organizational skills, creativity, and communication.',
                    'envt' => 'Office and event sites, sometimes involving travel.',
                    'salary' => 'Typically ranges from $40,000 to $70,000.',
                    'hours' => 'Flexible hours, with longer days during events.',
                    'outlook' => 'Steady demand with opportunities to advance to event management.',
                    'cr' => 'Handling client demands and logistics; rewarding to see successful events.'
                ],
                [
                    'id' => 5,
                    'name' => 'Tour Guide',
                    'description' => 'Leads tours for tourists, providing information about sites and ensuring a positive experience.',
                    'qual' => 'High school diploma; certification is beneficial in specialized fields.',
                    'skills' => 'Knowledge of local history, public speaking, and customer service.',
                    'envt' => 'On-site at tourist attractions, often outdoors.',
                    'salary' => 'Typically ranges from $25,000 to $50,000, with potential tips from tourists.',
                    'hours' => 'Often flexible and seasonal, depending on tourist traffic. May include weekends and holidays.',
                    'outlook' => 'Demand varies by location and season, with opportunities to become a senior guide or tour manager.',
                    'cr' => 'Dealing with large groups and weather conditions; rewarding to share knowledge and create memorable experiences for tourists.'
                ]
                ]
            ]

    
                ];

header('Content-Type: application/json');
echo json_encode($industries);

?>