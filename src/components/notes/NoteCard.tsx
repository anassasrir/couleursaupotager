import React from 'react'
import { Card, CardBody, CardHeader, CardFooter } from '../ui/Card'
import { Trash2, Edit } from 'lucide-react'
import { Button } from '../ui/Button'

interface NoteCardProps {
  note: {
    id: string
    title: string
    content: string
    updatedAt: Date
  }
  onDelete?: (id: string) => void
  onEdit?: (id: string) => void
}

export const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete, onEdit }) => {
  const formattedDate = new Intl.DateTimeFormat('fr-FR', { 
    dateStyle: 'medium', 
    timeStyle: 'short' 
  }).format(new Date(note.updatedAt))

  return (
    <Card className="flex flex-col h-full group">
      <CardHeader className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-gray-900">{note.title}</h3>
        <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {onEdit && (
            <Button 
              variant="secondary" 
              className="p-1 h-8 w-8 flex items-center justify-center"
              onClick={() => onEdit(note.id)}
              aria-label="Modifier la note"
            >
              <Edit className="w-4 h-4" />
            </Button>
          )}
          {onDelete && (
            <Button 
              variant="secondary" 
              className="p-1 h-8 w-8 flex items-center justify-center text-red-600 hover:text-red-700"
              onClick={() => onDelete(note.id)}
              aria-label="Supprimer la note"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardBody className="flex-grow">
        <p className="text-gray-600 text-sm whitespace-pre-wrap">{note.content}</p>
      </CardBody>
      <CardFooter>
        <div className="text-xs text-gray-400">
          Dernière modification : {formattedDate}
        </div>
      </CardFooter>
    </Card>
  )
}
