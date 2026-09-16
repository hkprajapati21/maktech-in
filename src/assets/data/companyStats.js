export const companyStats = {
  projects: {
    value: "126",
    suffix: "",
    label: "Projects Completed",
  },
  capacity: {
    value: "527",
    suffix: " kW",
    label: "Installed Capacity",
  },
  clients: {
    value: "120",
    suffix: "+",
    label: "Happy Clients",
  },
  warranty: {
    value: "25",
    suffix: "-Year",
    label: "Performance Warranty",
  },
};

export const formatStat = ({ value, suffix }) => `${value}${suffix}`;

export const homeStats = [
  {
    key: "projects",
    icon: "/images/home-one/stats/projects.svg",
    ...companyStats.projects,
  },
  {
    key: "capacity",
    icon: "/images/home-one/stats/awards.svg",
    ...companyStats.capacity,
  },
  {
    key: "clients",
    icon: "/images/home-one/stats/clients.svg",
    ...companyStats.clients,
  },
  {
    key: "warranty",
    icon: "/images/home-one/stats/members.svg",
    ...companyStats.warranty,
  },
];
