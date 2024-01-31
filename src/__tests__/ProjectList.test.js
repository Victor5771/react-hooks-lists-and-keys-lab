import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import ProjectList from "../components/ProjectList";

const projects = [
  {
    id: 1,
    name: "Reciplease",
    about: "A recipe tracking app",
    technologies: ["Rails", "Bootstrap CSS"],
  },
 
];

test("gives each <ProjectItem> a key based on the project id", async () => {
  render(<ProjectList projects={projects} />);

  await waitFor(() => {
    projects.forEach((project) => {
      const projectItem = screen.getByText(project.name);
      expect(projectItem.closest(".project-item")).toHaveAttribute("data-key", project.id.toString());
    });
  });
});

test("renders a <ProjectItem> for each project passed in as a prop", () => {
  render(<ProjectList projects={projects} />);

  projects.forEach((project) => {
    expect(screen.queryByText(project.name)).toBeInTheDocument();
  });
});
