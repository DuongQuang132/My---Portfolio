export const navLinks = [
  { id: 1, title: "Giới thiệu", path: "#about" },
  { id: 2, title: "Kỹ năng", path: "#skills" },
  { id: 3, title: "Dự án", path: "#projects" },
  { id: 4, title: "Liên hệ", path: "#contact" },
];

export const heroInfo = {
  name: "Trịnh Đường Quang",
  avatar: "/images/avatar.jpg",
  title: "Sinh viên ngành Công Nghệ Thông Tin",
  description: "Sinh viên năm 4 chuyên ngành Kỹ sư phần mềm. Mong muốn trở thành một lập trình viên Front-end và học tập kiến thức, kinh nghiệm từ các anh chị đi trước.",
};


export const skills = [
  {
    id: 1,
    title: "Ngôn ngữ & Công nghệ",
    items: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ]
  },
  {
    id: 2,
    title: "Công cụ",
    items: [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ]
  }
];

export const projects = [
{
    id: 1,
    title: "Website Công ty An Thái Khang",
    desc: "Xây dựng giao diện Front-end cho website doanh nghiệp. Trực tiếp phát triển UX/UI cho các trang trọng yếu: Trang chủ, Trang Dự án tiêu biểu, và Trang Liên hệ.",
    role: "Front-end Developer",
    tech: ["ReactJS", "CSS Modules", "React Router", "Responsive Design"],
    demoLink: null,
    repoLink: null, 
    image: "/images/AnThaiKhang-Project.png" 
  },
  {
    id: 2,
    title: "Portfolio Cá Nhân",
    desc: "Trang web giới thiệu bản thân và trình bày các dự án cá nhân, được xây dựng với React và Vite để tối ưu hiệu suất và trải nghiệm người dùng.",
    role: "Full-stack Developer",
    tech: ["React", "Vite", "CSS Modules", "Responsive Design"],
    demoLink: "https://myportfolio-hazel-three-75.vercel.app/",
    repoLink: "https://github.com/DuongQuang132/My---Portfolio.git",
    image: "/images/my-portfolio.png"
  },
{
    id: 3,
    title: "Real-time Weather App",
    desc: "Ứng dụng theo dõi thời tiết thời gian thực cho mọi thành phố trên thế giới. Tích hợp OpenWeatherMap API để lấy dữ liệu nhiệt độ, độ ẩm và sức gió. Xử lý bất đồng bộ (Async/Await) và quản lý trạng thái tải trang (Loading State).",
    role: "Front-end Developer",
    tech: ["ReactJS", "OpenWeatherMap API", "Axios", "Fetch API", "CSS Glassmorphism"],
    demoLink: "https://weatherdemolink.vercel.app/", 
    repoLink: "https://github.com/DuongQuang132/Real-Time-Weather.git",
    image: "/images/Weather-App.png"
  }
];


export const contactInfo = {
  title: "Liên hệ với tôi",
  subtitle: "Hiện tại tôi đang tìm kiếm công ty thực tập để có cơ hội học tập và tích lũy kinh nghiệm làm việc thực tế từ các anh/chị đi trước. Nếu bạn có bất kỳ cơ hội nào phù hợp, xin hãy liên hệ với tôi!",
  email: "trinhduongquang132@gmail.com",
  phone: "0842 863 646",
  address: "TP. Hồ Chí Minh, Việt Nam",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/DuongQuang132",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/trinh.duong.wang/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
    }
  ]
};