'use server'

import { prisma } from '@/lib/prisma'
import { PostStatus } from '@prisma/client'

export async function getPosts() {
  return prisma.post.findMany({
    where: {
      status: PostStatus.PUBLISHED,
    },
    orderBy: {
      publishedAt: 'desc',
    },
  })
}

export async function getPostBySlug(slug: string) {
  return prisma.post.findUnique({
    where: {
      slug,
    },
  })
}
