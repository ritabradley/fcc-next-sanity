import { getProjects } from '@/sanity/sanity-utils';

export default async function Home() {
    const projects = await getProjects();

    return (
        <div>
            {projects.map((project) => (
                <div key={project._id}>
                    <h1>{project.name}</h1>
                </div>
            ))}
        </div>
    );
}
