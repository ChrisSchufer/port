import ImageUrlBuilder from '@sanity/image-url';
import {createClient} from 'next-sanity';

export const sanityClient = createClient({
  projectId: '7ae3gg7r',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
});

const builder = ImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
