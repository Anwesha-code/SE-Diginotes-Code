import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, UserPlus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface SharedUser {
  id: string;
  email: string;
  permission: "view" | "edit";
}

const ShareAccess = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [permission, setPermission] = useState<"view" | "edit">("view");
  const [sharedUsers, setSharedUsers] = useState<SharedUser[]>([
    { id: "1", email: "user@example.com", permission: "view" },
    { id: "2", email: "editor@example.com", permission: "edit" },
  ]);

  const handleAddUser = () => {
    if (!email.trim()) {
      toast.error("Please enter an email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (sharedUsers.some(u => u.email === email)) {
      toast.error("This user already has access");
      return;
    }

    const newUser: SharedUser = {
      id: Date.now().toString(),
      email,
      permission,
    };

    setSharedUsers([...sharedUsers, newUser]);
    setEmail("");
    toast.success(`Access granted to ${email}`);
  };

  const handleRemoveUser = (id: string) => {
    setSharedUsers(sharedUsers.filter(u => u.id !== id));
    toast.success("Access revoked");
  };

  const handlePermissionChange = (id: string, newPermission: "view" | "edit") => {
    setSharedUsers(
      sharedUsers.map(u =>
        u.id === id ? { ...u, permission: newPermission } : u
      )
    );
    toast.success("Permission updated");
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
            <h1 className="text-2xl font-semibold">Share & Access Management</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="space-y-6">
          {/* Add User Section */}
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-lg font-semibold mb-4">Grant Access</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@example.com"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="permission">Permission Level</Label>
                <Select value={permission} onValueChange={(v) => setPermission(v as "view" | "edit")}>
                  <SelectTrigger id="permission" className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="view">View Only</SelectItem>
                    <SelectItem value="edit">Can Edit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleAddUser} className="w-full gap-2">
                <UserPlus className="w-4 h-4" />
                Grant Access
              </Button>
            </div>
          </div>

          {/* Shared Users List */}
          <div className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-lg font-semibold mb-4">Users with Access</h2>
            <div className="space-y-3">
              {sharedUsers.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No users have access yet
                </p>
              ) : (
                sharedUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-3 bg-background rounded-lg border border-border"
                  >
                    <div className="flex-1">
                      <p className="font-medium">{user.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select
                        value={user.permission}
                        onValueChange={(v) => handlePermissionChange(user.id, v as "view" | "edit")}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="view">View Only</SelectItem>
                          <SelectItem value="edit">Can Edit</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveUser(user.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareAccess;
