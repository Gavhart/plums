import projectData from "@/data/data.json";

export default function TasksPage() {
  return (
    <>
      {projectData.projects.map((project) => (
        <div key={project.id} className="border py-4 px-4 flex flex-col gap-4">
          <p>{project.name}</p>
          <p>{project.description}</p>
          {project.tasks.map((task) => (
            <div key={task.id} className="flex flex-col gap-4 pl-4">
              <p>{task.title}</p>
              <p>{task.description}</p>
              <p>{task.status}</p>
              <p>{task.dueDate}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
