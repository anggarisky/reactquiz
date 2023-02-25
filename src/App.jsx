import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const careerRoadmaps = [
    {
      id: 1,
      title: "Frontend Developer",
      icon: "../public/code.svg",
      courses: 192,
    },
    {
      id: 2,
      title: "Backend Developer",
      icon: "../public/design.svg",
      courses: 42,
    },
    {
      id: 3,
      title: "iOS Developer",
      icon: "../public/soft.svg",
      courses: 832,
    },
  ];
  const roadmaps = careerRoadmaps.map((roadmap) => (
    <div key={roadmap.id} className="bg-white p-6 h-60 rounded-lg text-left">
      <img src={roadmap.icon} className="h-16 w-16 mb-16" alt="" />
      <h3 className="text-xl font-bold">{roadmap.title}</h3>
      <p>{roadmap.courses} courses</p>
    </div>
  ));
  return (
    <div className="App text-center pt-20 pb-10">
      <h1 className="text-3xl font-bold text-white">Career Roadmap</h1>
      <p className="text-lg text-indigo-100">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
      </p>
      <div className="grid gap-10 grid-cols-4 w-9/12 mx-auto py-10">
        {roadmaps}
      </div>
    </div>
  );
}

export default App;
