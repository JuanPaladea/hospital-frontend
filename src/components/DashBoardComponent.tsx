import { Link } from "react-router";

const DashBoardComponent: React.FC = () => {
  const sections = [
    { name: "Patients", path: "/patients", color: "bg-blue-500" },
    { name: "Bills", path: "/bills", color: "bg-green-500" },
    { name: "Studies", path: "/studies", color: "bg-purple-500" },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12 py-24">
        <div className="flex flex-wrap -m-4">
          {sections.map((section) => (
            <Link to={section.path} key={section.path} className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  {section.name}
                </h1>
                <p className="leading-relaxed mb-3">
                  View, Create and Edit {section.name}{" "}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashBoardComponent;
