import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Sidebar = () => {
  return (
    <Card className="bg-card border-border rounded-3xl p-8 lg:sticky lg:top-8 h-fit shadow-elegant">
      <div className="flex flex-col items-center space-y-6">
        {/* Profile Image */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary/50 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
          <div className="relative bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl p-1">
            <img
              src={profileImage}
              alt="Hasibul Hassan"
              className="w-full max-w-64 h-auto rounded-3xl object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">Hasibul Hassan</h2>
          <div className="inline-block bg-secondary px-4 py-2 rounded-lg">
            <span className="text-sm text-muted-foreground">SQA Intern & SEO Specialist</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border"></div>

        {/* Contact Info */}
        <div className="w-full space-y-4">
          <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors group">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-sm group-hover:shadow-glow transition-shadow">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
              <a 
                href="mailto:hasibulgreen@gmail.com" 
                className="text-sm text-foreground hover:text-primary transition-colors break-all"
              >
                hasibulgreen@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors group">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-sm group-hover:shadow-glow transition-shadow">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
              <div className="space-y-1">
                <a 
                  href="tel:+8801849896090" 
                  className="block text-sm text-foreground hover:text-primary transition-colors"
                >
                  +880 1849 896090
                </a>
                <a 
                  href="tel:+8801733795278" 
                  className="block text-sm text-foreground hover:text-primary transition-colors"
                >
                  +880 1733 795278
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors group">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-sm group-hover:shadow-glow transition-shadow">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Location</p>
              <p className="text-sm text-foreground">Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors group">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-sm group-hover:shadow-glow transition-shadow">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Graduation</p>
              <p className="text-sm text-foreground">2025</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="w-full pt-2">
          <div className="flex justify-center gap-3">
            <a
              href="https://www.facebook.com/eng.hasibulhassanshanto/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110 hover:shadow-glow group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/trendy_tycoon/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110 hover:shadow-glow group"
              aria-label="Instagram"
            >
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;