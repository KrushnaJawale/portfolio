import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import projects from "../main/projects/projectsData";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white px-6 pb-20 pt-32 font-sans text-gray-900">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/#home"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          <ArrowLeft size={17} /> Back to portfolio
        </Link>

        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">My Projects</h1>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            A collection of web apps and projects I have built.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="carousel-card-enter overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="block aspect-video overflow-hidden bg-gray-100"
                aria-label={`Open ${project.title} project`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </a>
              <div className="flex items-center justify-between gap-4 p-5">
                <h2 className="text-lg font-bold">{project.title}</h2>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Visit <ExternalLink size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
