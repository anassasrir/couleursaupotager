import { getPostBySlug } from "@/lib/actions/blog";
import { notFound } from "next/navigation";
import { Calendar, ChevronLeft } from "lucide-react";
import Link from "next/link";

export const dynamic = 'force-dynamic';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.publishedAt
    ? new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(new Date(post.publishedAt))
    : 'Brouillon';

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors mb-8 group"
      >
        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
        Retour au blog
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-500">
          <Calendar className="w-5 h-5 mr-2" />
          <time dateTime={post.publishedAt?.toISOString() || ''}>
            {formattedDate}
          </time>
        </div>
      </header>

      <div className="prose prose-green prose-lg max-w-none text-gray-700 leading-relaxed">
        {/* For now, we just render the content as text. In the future, this would be Markdown. */}
        {post.content.split('\n').map((paragraph: string, index: number) => (
          <p key={index} className="mb-6">{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
