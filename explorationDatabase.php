<?php
$industries = [
    [
        "id" => 1,
        "name" => "Healthcare",
        "description" => "In healthcare, every day is a chance to make a difference. From lifesaving procedures to compassionate care, healthcare professionals are the heartbeat of society, dedicated to enhancing and protecting lives. Discover roles where empathy, skill, and dedication come together to impact people at their most vulnerable moments.",
        "roles" => [
            [
                "id" => 1,
                "name" => "Doctor",
                "description" => "Doctors diagnose and treat health conditions, creating personalized care plans and guiding patients to better health."
            ],
            [
                "id" => 2,
                "name" => "Nurse",
                "description" => "Nurses provide hands-on care, administer treatments, and offer crucial emotional support to patients and their families."
            ],
            [
                "id" => 3,
                "name" => "Paramedic",
                "description" => "Paramedics are first responders, delivering life-saving care in emergencies and ensuring safe patient transport."
            ],
            [
                "id" => 4,
                "name" => "Therapist & Counselor",
                "description" => "Therapists and counselors empower individuals to manage mental health challenges and lead more fulfilling lives."
            ],
            [
                "id" => 5,
                "name" => "Veterinarian",
                "description" => "Veterinarians provide care for animals, treating health issues, performing surgeries, and guiding owners on pet wellness."
            ],
            [
                "id" => 6,
                "name" => "Pharmacist",
                "description" => "Pharmacists are medication experts, ensuring safe and effective treatment while offering health advice to patients."
            ]
        ],
        "image_url"=>"https://www.national.edu/wp-content/uploads/2021/11/Nov_4_iStock-1127069581-scaled.jpeg"
    ],
    [
        "id" => 2,
        "name" => "Information Technology (IT)",
        "description" => "IT professionals are the innovators behind our digital world, creating the technology that connects and empowers us. Whether it's coding a new app, analyzing data, or securing networks, IT is where ideas become reality, driving the future forward one solution at a time.",
        "roles" => [
            [
                "id" => 1,
                "name" => "Software Development",
                "description" => "Develops and refines software applications, turning concepts into functional, user-friendly programs."
            ],
            [
                "id" => 2,
                "name" => "Data Science & Analytics",
                "description" => "Transforms raw data into actionable insights, supporting smarter decisions and strategic goals."
            ],
            [
                "id" => 3,
                "name" => "Networking & Systems",
                "description" => "Ensures robust, secure networks, keeping information flowing safely and systems operating seamlessly."
            ],
            [
                "id" => 4,
                "name" => "Support & Operations",
                "description" => "Provides essential support, troubleshooting issues and ensuring smooth IT operations for organizations."
            ]
        ],
        "image_url"=>"https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041859.jpg"
    ],
    [
        "id" => 3,
        "name" => "Finance and Banking",
        "description" => "Finance and Banking professionals are more than number-crunchers—they’re the architects of financial success. From managing investments to securing assets, they empower individuals and businesses to achieve their financial dreams and build a prosperous future.",
        "roles" => [
            [
                "id" => 1,
                "name" => "Corporate Finance",
                "description" => "Guides a company's financial health, focusing on budgets, growth strategies, and sustainable success."
            ],
            [
                "id" => 2,
                "name" => "Investment Banking",
                "description" => "Advises clients on raising capital, mergers, and acquisitions, helping them achieve major financial goals."
            ],
            [
                "id" => 3,
                "name" => "Insurance",
                "description" => "Manages risks and creates policies, providing clients with protection against life’s uncertainties."
            ],
            [
                "id" => 4,
                "name" => "Real Estate",
                "description" => "Guides clients through property investments, helping them buy, sell, or lease assets for future gains."
            ],
            [
                "id" => 5,
                "name" => "Wealth Management",
                "description" => "Crafts personalized financial plans, guiding clients toward successful investments and secure futures."
            ]
        ],
        "image_url"=>"https://www.hoasen.edu.vn/tuyensinh/wp-content/uploads/sites/7/2022/06/nganh-tai-chinh-ngan-hang-la-gi-hinh-anh2.jpg"
    ]
];

header('Content-Type: application/json');
echo json_encode($industries);

?>
