import { getPosts } from "@/lib/actions/blog";
import { PostCard } from "@/components/blog/PostCard";
import { BookOpen } from "lucide-react";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center space-x-3 mb-8">
        <BookOpen className="w-8 h-8 text-green-600" />
        <h1 className="text-3xl font-extrabold text-gray-900">Blog</h1>
      </div>

      {posts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-dashed border-gray-300 p-12 text-center">
          <p className="text-gray-500 text-lg">Aucun article publié pour le moment.</p>
        </div>
      )}
    </div>
  );
}
