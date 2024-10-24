const employeeData = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    fullName: "John Doe",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create project report",
        description: "Prepare a detailed project report for Q1 2024.",
        date: "2024-02-15",
        category: "Work",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team meeting",
        description: "Attend the monthly team meeting.",
        date: "2024-01-25",
        category: "Meeting",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Code review",
        description: "Review the new feature code.",
        date: "2024-02-20",
        category: "Development",
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    fullName: "Jane Smith",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Client presentation",
        description: "Prepare slides for the upcoming client presentation.",
        date: "2024-03-01",
        category: "Work",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix UI bug",
        description: "Resolve the issue with the navigation bar on mobile.",
        date: "2024-02-18",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Annual review",
        description: "Complete the annual performance review.",
        date: "2024-01-30",
        category: "HR",
      },
    ],
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    fullName: "David Johnson",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database optimization",
        description: "Optimize the database queries for better performance.",
        date: "2024-02-22",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write documentation",
        description: "Document the new feature implementation.",
        date: "2024-01-28",
        category: "Work",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Create testing plan",
        description: "Draft the testing plan for the new release.",
        date: "2024-02-20",
        category: "QA",
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    fullName: "Emily Davis",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Marketing strategy",
        description: "Develop the marketing strategy for Q2.",
        date: "2024-02-25",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Budget report",
        description: "Complete the budget report for Q1.",
        date: "2024-02-05",
        category: "Finance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Update client contracts",
        description: "Review and update the contracts for key clients.",
        date: "2024-03-01",
        category: "Legal",
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    fullName: "Michael Brown",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Website redesign",
        description: "Lead the website redesign project.",
        date: "2024-02-28",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Social media campaign",
        description: "Launch the new social media campaign.",
        date: "2024-02-10",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Client feedback session",
        description: "Organize a session to gather feedback from key clients.",
        date: "2024-02-25",
        category: "Client Relations",
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
  },
];


const adminData = [
  {
    id: 6,
    email: "admin@me.com",
    password: "123",
    fullName: "Admin User",
    role: "admin",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employeeData));
  localStorage.setItem("admin", JSON.stringify(adminData));
};

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));

  return { employeesData, adminData };
};
