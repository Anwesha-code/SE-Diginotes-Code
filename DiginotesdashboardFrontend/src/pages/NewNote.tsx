import { useNavigate } from "react-router-dom";
import { NoteEditor, NoteData } from "@/components/NoteEditor";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const NewNote = () => {
  const navigate = useNavigate();

  const handleSave = (note: NoteData) => {
    // TODO: Save note to database
    console.log("Saving note:", note);
    toast.success("Note created successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/dashboard")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-semibold">Create New Note</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <NoteEditor onSave={handleSave} />
      </div>
    </div>
  );
};

export default NewNote;
