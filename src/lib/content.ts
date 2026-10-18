import { getCollection, type CollectionEntry } from 'astro:content';

export const isLive = (p: CollectionEntry<'blog'>) => !p.data.draft;

export async function livePosts() {
  const posts = await getCollection('blog', isLive);
  return posts.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
}

/** Posts in one cluster, grouped by their `group` subheading, in first-seen order. */
export async function postsByGroup(cluster: string) {
  const posts = (await livePosts()).filter((p) => p.data.cluster === cluster).reverse();
  const groups = new Map<string, CollectionEntry<'blog'>[]>();
  for (const p of posts) groups.set(p.data.group, [...(groups.get(p.data.group) ?? []), p]);
  return [...groups.entries()];
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
