import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: '4h6y9z76',
    dataset: 'production',
    title: 'My Personal Sanity Site',
    apiVersion: '2023-04-08',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas },
});

export default config;
