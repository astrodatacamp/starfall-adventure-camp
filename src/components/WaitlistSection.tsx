import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Send, Star } from "lucide-react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "You're on the list! 🌟",
        description: "We'll notify you when applications open in November.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="waitlist-section" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-nebula opacity-20" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="animate-fade-in">
          <Star className="w-12 h-12 text-accent mx-auto mb-4 animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-stellar bg-clip-text text-transparent">
            Join the Waitlist
          </h2>
          <p className="text-lg text-foreground/80 mb-2">
            Be the first to know when applications open
          </p>
          <p className="text-2xl font-semibold text-accent mb-8 animate-pulse">
            Applications open November 2025
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-card/50 border-border text-foreground placeholder:text-muted-foreground"
              disabled={isSubmitting}
            />
            <Button 
              type="submit" 
              variant="stellar" 
              size="lg"
              disabled={isSubmitting}
              className="whitespace-nowrap"
            >
              <Send className="mr-2" />
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-6">
            Limited spots available • No spam, we promise
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            By joining, you'll be invited to a live Q&A about the camp.
          </p>
        </div>
      </div>
    </section>
  );
}