import { Card } from "@/components/ui/card";
import { Folder, MoreVertical, Edit, Trash2, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Folder {
  id: string;
  name: string;
  noteCount: number;
  color: string;
}

interface FolderCardProps {
  folder: Folder;
}

const folderColorMap: Record<string, string> = {
  purple: "text-secondary",
  orange: "text-note-orange",
  blue: "text-info",
  green: "text-success",
  pink: "text-accent",
};

export function FolderCard({ folder }: FolderCardProps) {
  return (
    <Card className="p-5 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group border-2 bg-card">
      <div className="flex items-start justify-between mb-3">
        <Folder className={`w-10 h-10 ${folderColorMap[folder.color]} transition-transform group-hover:scale-110`} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <MoreVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem className="gap-2">
              <Edit className="w-4 h-4" />
              Rename
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
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
      <h3 className="font-bold text-lg mb-1 text-foreground">{folder.name}</h3>
      <p className="text-sm text-muted-foreground">
        {folder.noteCount} {folder.noteCount === 1 ? 'note' : 'notes'}
      </p>
    </Card>
  );
}
