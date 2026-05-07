import React from 'react'
import { Card, CardBody, CardHeader, CardFooter } from '../ui/Card'
import { Calendar } from 'lucide-react'
import Link from 'next/link'

interface PostCardProps {
  post: {
    title: string
    slug: string
    content: string
    publishedAt: Date | null
  }
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const formattedDate = post.publishedAt 
    ? new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(new Date(post.publishedAt))
    : 'Brouillon'

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{post.title}</h3>
      </CardHeader>
      <CardBody className="flex-grow">
        <p className="text-gray-600 line-clamp-3 mb-4">
          {post.content.substring(0, 150)}...
        </p>
      </CardBody>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-1" />
          {formattedDate}
        </div>
        <Link 
          href={`/blog/${post.slug}`}
          className="text-green-600 font-semibold text-sm hover:underline"
        >
          Lire la suite
        </Link>
      </CardFooter>
    </Card>
  )
}
