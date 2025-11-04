import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Grid3x3, List, StickyNote, Folder, Star, Settings, LogOut } from "lucide-react";
import { NoteCard } from "@/components/NoteCard";
import { FolderCard } from "@/components/FolderCard";

const Dashboard = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const notes = [
    { id: "1", title: "Meeting Notes", content: "Discuss Q4 objectives...", color: "yellow", isPinned: true, isFavorite: false },
    { id: "2", title: "Ideas", content: "New feature concepts", color: "pink", isPinned: false, isFavorite: true },
    { id: "3", title: "Todo", content: "Buy groceries\nFinish report", color: "blue", isPinned: false, isFavorite: false },
    { id: "4", title: "Reminders", content: "Call dentist tomorrow", color: "green", isPinned: true, isFavorite: false },
  ];

  const folders = [
    { id: "1", name: "Work", noteCount: 12, color: "purple" },
    { id: "2", name: "Personal", noteCount: 8, color: "orange" },
    { id: "3", name: "Projects", noteCount: 15, color: "blue" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-xl">
                <StickyNote className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DigiNotes
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search notes and folders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-card"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              className="h-12 w-12"
              onClick={() => setViewMode("grid")}
            >
              <Grid3x3 className="w-5 h-5" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              className="h-12 w-12"
              onClick={() => setViewMode("list")}
            >
              <List className="w-5 h-5" />
            </Button>
            <Button className="h-12 px-6 gap-2 font-semibold" onClick={() => window.location.href = '/new-note'}>
              <Plus className="w-5 h-5" />
              New Note
            </Button>
          </div>
        </div>

        {/* Folders Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Folder className="w-6 h-6 text-secondary" />
              Folders
            </h2>
            <Button variant="ghost" className="gap-2" onClick={() => window.location.href = '/new-folder'}>
              <Plus className="w-4 h-4" />
              New Folder
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {folders.map((folder) => (
              <FolderCard key={folder.id} folder={folder} />
            ))}
          </div>
        </section>

        {/* Pinned Notes */}
        {notes.some(note => note.isPinned) && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-accent fill-accent" />
              Pinned
            </h2>
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              : "space-y-3"
            }>
              {notes.filter(note => note.isPinned).map((note) => (
                <NoteCard key={note.id} note={note} viewMode={viewMode} />
              ))}
            </div>
          </section>
        )}

        {/* All Notes */}
        <section>
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <StickyNote className="w-6 h-6 text-primary" />
            All Notes
          </h2>
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            : "space-y-3"
          }>
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} viewMode={viewMode} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
