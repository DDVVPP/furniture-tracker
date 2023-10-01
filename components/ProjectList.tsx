import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects, rooms }: any) => {

  return (
    <div className='mt-16 prompt_layout'>
      {projects.map((project: any) => {
        return (
          <ProjectCard
            key={project.id}
            project={project}
            rooms={rooms}
          />
        )
      })}
    </div>
  )
};

export default ProjectList;
