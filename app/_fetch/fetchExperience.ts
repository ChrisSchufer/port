import {sanityClient} from '@/lib/sanity';
import {groq} from 'next-sanity';

export const fetchExperience = async () => {
  const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
    `;

  const experiences = await sanityClient.fetch(query);

  return experiences;
};
