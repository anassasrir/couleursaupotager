import { getEvents } from "@/lib/actions/events";
import { Calendar as CalendarIcon, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { Event } from "@prisma/client";

export const dynamic = 'force-dynamic';

export default async function CalendarPage() {
  const events = await getEvents();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-3">
          <CalendarIcon className="w-8 h-8 text-green-600" />
          <h1 className="text-3xl font-extrabold text-gray-900">Calendrier</h1>
        </div>
        <Button variant="primary" className="flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Ajouter un événement</span>
        </Button>
      </div>

      <div className="grid gap-6">
        {events.length > 0 ? (
          events.map((event: Event) => (
            <Card key={event.id}>
              <CardBody className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <p className="text-gray-500">
                    {new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(new Date(event.startDate))}
                    {event.endDate && ` - ${new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(new Date(event.endDate))}`}
                  </p>
                  {event.description && <p className="mt-2 text-gray-600">{event.description}</p>}
                </div>
              </CardBody>
            </Card>
          ))
        ) : (
          <div className="bg-white rounded-lg border border-dashed border-gray-300 p-12 text-center">
            <p className="text-gray-500 text-lg">Aucun événement prévu pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
