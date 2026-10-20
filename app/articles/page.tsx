import CloneNavbar from "@/components/CloneNavbar";
import CloneFooter from "@/components/CloneFooter";
import ArticlesClient, { type WPPost } from "./ArticlesClient";

const WP_BASE = process.env.WORDPRESS_URL ?? "https://www.maidwonderland.com";
const PER_PAGE = 12;

async function fetchPage1(): Promise<{ posts: WPPost[]; totalPages: number }> {
  try {
    const res = await fetch(
      `${WP_BASE}/wp-json/wp/v2/posts?page=1&per_page=${PER_PAGE}&_embed`,
      { next: { revalidate: 3600 } }
    );
    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") ?? "1", 10);
    const posts: WPPost[] = await res.json();
    return { posts: Array.isArray(posts) ? posts : [], totalPages: isNaN(totalPages) ? 1 : totalPages };
  } catch {
    return { posts: [], totalPages: 1 };
  }
}

export default async function ArticlesPage() {
  const { posts, totalPages } = await fetchPage1();
  return (
    <>
      <CloneNavbar />
      <main>
        <ArticlesClient initialPosts={posts} initialTotalPages={totalPages} />
      </main>
      <CloneFooter />
    </>
  );
}
