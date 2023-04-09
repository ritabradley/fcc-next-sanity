import { Project } from '@/types/Project';
import { createClient, groq } from 'next-sanity';

export const getProjects = async (): Promise<Project[]> => {
    const client = createClient({
        projectId: '4h6y9z76',
        dataset: 'production',
        apiVersion: '2023-04-08',
    });

    return client.fetch(groq`*[ _type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
    }`);
};
