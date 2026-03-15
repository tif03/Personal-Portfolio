interface Position {
  role: string
  date: string
  bullets: string[]
}

export interface ExperienceEntry {
  company: string
  location: string
  positions: Position[]
}

export const experiences: ExperienceEntry[] = [
  {
    company: "John Hancock",
    location: "Boston, MA",
    positions: [
      {
        role: "Software Engineer Intern",
        date: "May 2024 - Aug 2024",
        bullets: [
          "Built and modernized internal search tool on an intern team using SAFE/Agile frameworks",
          "Completed Salesforce Admin and Developer training, configuring workflows, automation, and custom objects on a mock onboarding platform",
          "Supported integration of Alfresco Digital Workspace with Salesforce to streamline retirement payment plan management",
        ]
      }
    ]
  },
  {
    company: "Boston University Department of Computer Science",
    location: "Boston, MA",
    positions: [
      {
        role: "Python Teaching Assistant",
        date: "Sept 2024 - May 2025",
        bullets: [
          "Led interactive coding labs for 50+ students, reinforcing weekly lecture concepts through hands-on Python exercises",
          "Collaborated with course staff in weekly meetings to review pain points and identify areas of improvement",
          "Held regular office hours offering one-on-one assistance",
          "Proctored and graded exams with thorough feedback",
        ]
      },
      {
        role: "Discrete Mathematics Teaching Assistant",
        date: "Sept 2023 - May 2024",
        bullets: [
          "Authored weekly homework, lab, and exam problems with full solutions in LaTeX and Python",
          "Mentored 50+ students in lab sessions, breaking down proof-based concepts into approachable explanations",
          "Dedicated 5 hours a week to office hours for personalized student guidance",
        ]
      }
    ]
  },
  {
    company: "Enviro Networks Inc.",
    location: "San Jose, CA",
    positions: [
      {
        role: "Data Analyst Intern",
        date: "May 2022 - Nov 2022",
        bullets: [
          "Developed a Python optimization algorithm to model soil moisture sensor data and predict irrigation schedules",
        ]
      }
    ]
  },
]