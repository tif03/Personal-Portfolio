interface Position {
  role: string
  date: string
  bullets: string[]
}

export interface LeadershipEntry {
  org: string
  location: string
  positions: Position[]
}

export const leadership: LeadershipEntry[] = [
  {
    org: "Women in Computer Science",
    location: "Boston, MA",
    positions: [
      {
        role: "Senior Advisor",
        date: "Jan 2025 - May 2025",
        bullets: [
          "Supported leadership transition by mentoring incoming board members and ensuring continuity of club initiatives, partnerships, and community programming",
        ]
      },
      {
        role: "President",
        date: "May 2024 - Dec 2024",
        bullets: [
          "Drove strategic partnerships with 10+ Boston tech companies and local women in tech orgs, expanding event opportunities and doubling membership",
          "Managed $5000 semester budget and led weekly board meetings, delivering ~10 events per semester on schedule",
        ]
      },
      {
        role: "Vice President",
        date: "April 2023 - May 2024",
        bullets: [
          "Spearheaded impactful events including WiCS x SWE x GWC Galentines, Fidelity Women in Tech Panel, and Smart Eye Office Visit",
          "Maintained club website for potential sponsors and members",
        ]
      },
      {
        role: "Social Media Manager",
        date: "Sept 2022 - April 2023",
        bullets: [
          "Managed Instagram communications with members and partner clubs, handling DMs and collaboration inquiries",
          "Maintained consistent post schedule and designed event graphics using Adobe Photoshop and Canva for 500+ members",
          "Facilitated recurring content series including Takeover Tuesdays, Q&As, and live event coverage",
        ]
      }
    ]
  },
  {
    org: "BU MiXx Dance Company",
    location: "Boston, MA",
    positions: [
      {
        role: "Choreography Leader",
        date: "Sept 2022 - May 2025",
        bullets: [
          "Arranged and taught dance pieces, facilitating auditions and organizing detailed practice schedules",
          "Coordinated filming and performances of self-led projects for the MiXx YouTube channel with 25k+ subscribers",
        ]
      }
    ]
  },
]