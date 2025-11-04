import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Folder } from "lucide-react";
import { toast } from "sonner";

const FOLDER_COLORS = [
  { name: "Purple", value: "purple" },
  { name: "Orange", value: "orange" },
  { name: "Blue", value: "blue" },
  { name: "Green", value: "green" },
  { name: "Pink", value: "pink" },
  { name: "Yellow", value: "yellow" },
];

const NewFolder = () => {
  const navigate = useNavigate();
  const [folderName, setFolderName] = useState("");
  const [color, setColor] = useState("purple");

  const handleCreate = () => {
    if (!folderName.trim()) {
      toast.error("Please enter a folder name");
      return;
    }

    // TODO: Save folder to database
    console.log("Creating folder:", { name: folderName, color });
    toast.success("Folder created successfully!");
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
            <h1 className="text-2xl font-semibold">Create New Folder</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-card rounded-lg border border-border p-6 space-y-6">
          <div>
            <Label htmlFor="folderName">Folder Name</Label>
            <Input
              id="folderName"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              placeholder="Enter folder name"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="color">Folder Color</Label>
            <Select value={color} onValueChange={setColor}>
              <SelectTrigger id="color" className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {FOLDER_COLORS.map((c) => (
                  <SelectItem key={c.value} value={c.value}>
                    <div className="flex items-center gap-2">
                      <Folder className={`w-4 h-4 text-note-${c.value}`} />
                      {c.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="pt-4">
            <h3 className="text-sm font-medium mb-2">Preview</h3>
            <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
              <Folder className={`w-8 h-8 text-note-${color}`} />
              <span className="font-medium">{folderName || "Folder Name"}</span>
            </div>
          </div>

          <Button onClick={handleCreate} className="w-full">
            Create Folder
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewFolder;
