import React from "react";
import { Github, Twitter, Mail, Instagram, LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { Icon: Github, href: "https://github.com", label: "GitHub" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 mt-3 pb-3 h-[100%]">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="h-9 w-9 hover:scale-110 transition-transform"
                asChild
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
