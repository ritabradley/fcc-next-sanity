import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
    params: {
        project: string;
    };
};

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
        <div>
            <header className='flex items-center justify-between'>
                <h1 className='bg-gradient-to-tl from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text drop-shadow text-5xl font-extrabold text-transparent'>
                    {project.name}
                </h1>
                <a
                    className='bg-slate-100 text-slate-500 whitespace-nowrap hover:bg-gradient-to-br hover:from-cyan-400 hover:via-violet-400 hover:to-fuchsia-400 hover:text-white px-4 py-3 font-bold transition rounded-lg'
                    href={project.url}
                    title='View Project'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    View Project
                </a>
            </header>
            <div className='text-slate-700 mt-5 text-lg'>
                <PortableText value={project.content} />
            </div>
            <Image
                className='border-slate-700 rounded-xl object-cover mt-10 border-2 shadow-xl'
                src={project.image}
                alt={project.alt}
                width={1920}
                height={1080}
            />
        </div>
    );
}
