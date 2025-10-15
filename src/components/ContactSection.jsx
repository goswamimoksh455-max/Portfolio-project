import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Section - Fixed Layout */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center md:text-left">
              Contact Information
            </h3>
            <br></br>
            {/* Centered contact items container */}
            <div className="flex flex-col items-center md:items-start space-y-6">
              <div className="flex items-center space-x-4 w-full max-w-xs">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:MokshG@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    goswamimoksh355@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 w-full max-w-xs">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+918141000000"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (+91) 81410 00000
                  </a>
                </div>
              </div>
              
              
              <div className="flex items-center space-x-4 w-full max-w-xs">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Gandhinagar, Gujarat
                  </span>
                </div>
              </div>
            </div>
            
            {/* Social Links - Centered */}
            <div className="pt-8 text-center md:text-left">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/moksh-goswami-045189287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" target="_blank" className="hover:text-primary transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" target="_blank" className="hover:text-primary transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" target="_blank" className="hover:text-primary transition-colors">
                  <Twitch size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="Moksh Goswami..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="MokshG@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};