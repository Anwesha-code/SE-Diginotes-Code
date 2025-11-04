import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Pin, MoreVertical, Trash2, Edit, Share2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  isPinned: boolean;
  isFavorite: boolean;
}

interface NoteCardProps {
  note: Note;
  viewMode: "grid" | "list";
}

const colorMap: Record<string, string> = {
  yellow: "bg-note-yellow hover:shadow-[0_8px_24px_hsla(45,95%,30%,0.25)]",
  pink: "bg-note-pink hover:shadow-[0_8px_24px_hsla(330,85%,50%,0.25)]",
  blue: "bg-note-blue hover:shadow-[0_8px_24px_hsla(200,85%,40%,0.25)]",
  green: "bg-note-green hover:shadow-[0_8px_24px_hsla(140,75%,40%,0.25)]",
  purple: "bg-note-purple hover:shadow-[0_8px_24px_hsla(280,70%,45%,0.25)]",
  orange: "bg-note-orange hover:shadow-[0_8px_24px_hsla(25,95%,40%,0.25)]",
};

export function NoteCard({ note, viewMode }: NoteCardProps) {
  const [isPinned, setIsPinned] = useState(note.isPinned);
  const [isFavorite, setIsFavorite] = useState(note.isFavorite);
  
  const cardClass = viewMode === "grid" 
    ? "h-56" 
    : "flex-row items-start";

  return (
    <Card
      className={`${colorMap[note.color]} border-2 border-border/50 transition-all duration-300 hover:scale-105 hover:-rotate-1 cursor-pointer group relative overflow-hidden ${cardClass}`}
    >
      <div className="p-5 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-3 gap-2">
          <h3 className="font-bold text-lg text-foreground line-clamp-1 flex-1">
            {note.title}
          </h3>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-background/50"
              onClick={() => setIsPinned(!isPinned)}
            >
              {isPinned ? (
                <Pin className="w-4 h-4 fill-foreground" />
              ) : (
                <Pin className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-background/50"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              {isFavorite ? (
                <Star className="w-4 h-4 fill-accent text-accent" />
              ) : (
                <Star className="w-4 h-4" />
              )}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-background/50"
                >
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="gap-2">
                  <Edit className="w-4 h-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2" onClick={() => window.location.href = '/share-access'}>
                  <Share2 className="w-4 h-4" />
                  Share
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
                  <Trash2 className="w-4 h-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Content */}
        <p className="text-sm text-foreground/80 whitespace-pre-wrap line-clamp-6 flex-1">
          {note.content}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-3 flex items-center justify-between text-xs text-foreground/60">
          <span>Edited 2h ago</span>
        </div>
      </div>

      {/* Decorative corner fold */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-background/20 transform rotate-45 translate-x-4 -translate-y-4" />
    </Card>
  );
}
