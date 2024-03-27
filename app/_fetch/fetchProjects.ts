import {sanityClient} from '@/lib/sanity';
import {groq} from 'next-sanity';

export const fetchProjects = async () => {
  const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
    `;

  const projects = await sanityClient.fetch(query);

  return projects;
};
