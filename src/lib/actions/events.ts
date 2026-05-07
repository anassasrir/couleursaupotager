'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function getEvents() {
  return prisma.event.findMany({
    orderBy: {
      startDate: 'asc',
    },
  })
}

export async function createEvent(data: { title: string; description?: string; startDate: Date; endDate: Date }) {
  const event = await prisma.event.create({
    data,
  })
  revalidatePath('/calendar')
  return event
}

export async function deleteEvent(id: string) {
  await prisma.event.delete({
    where: { id },
  })
  revalidatePath('/calendar')
}
