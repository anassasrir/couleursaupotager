import { getNotes } from "@/lib/actions/notes";
import { NotesManager } from "@/components/notes/NotesManager";

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <NotesManager initialNotes={notes} />
    </div>
  );
}
