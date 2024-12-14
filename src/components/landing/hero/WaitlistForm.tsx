import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const WaitlistForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    mobileNumber: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.from("waitlist").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          country: formData.country,
          mobile_number: formData.mobileNumber,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
      setIsOpen(false);
      setFormData({
        fullName: "",
        email: "",
        country: "",
        mobileNumber: "",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-kingdom-gold hover:bg-kingdom-gold/90">
          Join the Waitlist
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Join Our Waitlist
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              required
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Input
              id="mobileNumber"
              required
              value={formData.mobileNumber}
              onChange={(e) =>
                setFormData({ ...formData, mobileNumber: e.target.value })
              }
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-kingdom-gold hover:bg-kingdom-gold/90"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};