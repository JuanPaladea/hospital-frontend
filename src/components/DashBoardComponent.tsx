import { Link } from "react-router";

const DashBoardComponent: React.FC = () => {
  const sections = [
    { name: "Patients", path: "/patients", color: "bg-blue-500" },
    { name: "Bills", path: "/bills", color: "bg-green-500" },
    { name: "Studies", path: "/studies", color: "bg-purple-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Medical Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div
            key={section.path}
            className={`${section.color} text-white p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform tap:scale-95 `}
          >
            <Link to={section.path} className="flex flex-col items-center">
              <h2 className="text-xl font-semibold">{section.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoardComponent;
