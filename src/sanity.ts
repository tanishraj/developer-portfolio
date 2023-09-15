import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'i9qw4lnn',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-08-16', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPageData() {
  return await client.fetch('*[_type == "pageBuilder"]');
}
