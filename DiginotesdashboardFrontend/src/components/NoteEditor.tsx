import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ImagePlus, Save } from "lucide-react";

interface NoteEditorProps {
  initialTitle?: string;
  initialContent?: string;
  initialColor?: string;
  initialFontSize?: number;
  initialOpacity?: number;
  onSave: (note: NoteData) => void;
}

export interface NoteData {
  title: string;
  content: string;
  color: string;
  fontSize: number;
  opacity: number;
  width: number;
  height: number;
  image?: string;
}

const NOTE_COLORS = [
  { name: "Yellow", value: "yellow" },
  { name: "Pink", value: "pink" },
  { name: "Blue", value: "blue" },
  { name: "Green", value: "green" },
  { name: "Purple", value: "purple" },
  { name: "Orange", value: "orange" },
];

export const NoteEditor = ({
  initialTitle = "",
  initialContent = "",
  initialColor = "yellow",
  initialFontSize = 14,
  initialOpacity = 100,
  onSave,
}: NoteEditorProps) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [color, setColor] = useState(initialColor);
  const [fontSize, setFontSize] = useState(initialFontSize);
  const [opacity, setOpacity] = useState(initialOpacity);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [image, setImage] = useState<string>();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave({
      title,
      content,
      color,
      fontSize,
      opacity,
      width,
      height,
      image,
    });
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Editor Controls */}
      <div className="space-y-6">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note here..."
            className="mt-1 min-h-[200px]"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="color">Color</Label>
            <Select value={color} onValueChange={setColor}>
              <SelectTrigger id="color" className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {NOTE_COLORS.map((c) => (
                  <SelectItem key={c.value} value={c.value}>
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded bg-note-${c.value}`} />
                      {c.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="fontSize">Font Size: {fontSize}px</Label>
            <Slider
              id="fontSize"
              min={10}
              max={32}
              step={1}
              value={[fontSize]}
              onValueChange={(v) => setFontSize(v[0])}
              className="mt-3"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="opacity">Opacity: {opacity}%</Label>
          <Slider
            id="opacity"
            min={20}
            max={100}
            step={5}
            value={[opacity]}
            onValueChange={(v) => setOpacity(v[0])}
            className="mt-3"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="width">Width: {width}px</Label>
            <Slider
              id="width"
              min={200}
              max={600}
              step={10}
              value={[width]}
              onValueChange={(v) => setWidth(v[0])}
              className="mt-3"
            />
          </div>

          <div>
            <Label htmlFor="height">Height: {height}px</Label>
            <Slider
              id="height"
              min={200}
              max={600}
              step={10}
              value={[height]}
              onValueChange={(v) => setHeight(v[0])}
              className="mt-3"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="image">Add Image/Diagram</Label>
          <div className="mt-1">
            <label htmlFor="image" className="cursor-pointer">
              <div className="flex items-center gap-2 px-4 py-2 border border-input rounded-md hover:bg-accent transition-colors">
                <ImagePlus className="w-4 h-4" />
                <span className="text-sm">Upload Image</span>
              </div>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <Button onClick={handleSave} className="w-full gap-2">
          <Save className="w-4 h-4" />
          Save Note
        </Button>
      </div>

      {/* Preview */}
      <div className="lg:sticky lg:top-4">
        <Label>Preview</Label>
        <div
          className={`mt-1 bg-note-${color} rounded-lg shadow-lg p-4 transition-all`}
          style={{
            opacity: opacity / 100,
            width: `${width}px`,
            height: `${height}px`,
            fontSize: `${fontSize}px`,
          }}
        >
          <h3 className="font-semibold mb-2 text-foreground">{title || "Note Title"}</h3>
          <div className="text-foreground whitespace-pre-wrap overflow-auto h-[calc(100%-2rem)]">
            {image && (
              <img src={image} alt="Note" className="mb-2 max-w-full h-auto rounded" />
            )}
            {content || "Your note content will appear here..."}
          </div>
        </div>
      </div>
    </div>
  );
};
