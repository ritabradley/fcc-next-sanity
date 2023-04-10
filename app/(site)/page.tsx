import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
    const projects = await getProjects();

    return (
        <div>
            <h1 className='text-7xl font-extrabold'>
                👋🏽 Hey there,I&apos;m{' '}
                <span className='bg-gradient-to-tl from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent'>
                    Rita
                </span>
                !
            </h1>
            <p className='text-slate-600 mt-3 text-xl'>
                Thanks for visiting my personal site. Stay a while, look around. I have some cool projects for you to
                check out!
            </p>

            <h2 className='text-slate-700 mt-24 text-3xl font-bold'>Those Projects I Mentioned</h2>
            <div className='md:grid-cols-2 lg:grid-cols-3 grid gap-8 mt-5'>
                {projects.map((project) => (
                    <Link
                        href={`/projects/${project.slug}`}
                        className='border-slate-500 hover:scale-105 hover:border-cyan-500 p-2 transition duration-300 border-2 rounded-lg cursor-pointer'
                        key={project._id}
                    >
                        {project.image && (
                            <Image
                                className='border-slate-500 object-cover border rounded-lg'
                                src={project.image}
                                alt={project.alt}
                                width={750}
                                height={300}
                            />
                        )}
                        <h3 className='bg-gradient-to-l from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text mt-2 font-extrabold text-transparent'>
                            {project.name}
                        </h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}
