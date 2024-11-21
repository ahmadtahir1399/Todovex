import React from 'react';
import { Github, Twitter, Mail, Heart, Instagram, LinkedinIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Tutorials", href: "/tutorials" },
        { label: "Support", href: "/support" }
      ]
    }
  ];

  const socialLinks = [
    { Icon: Github, href: "https://github.com", label: "GitHub" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:contact@example.com", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 py-12 mt-24">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              AI Todo
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Empowering your productivity with AI-driven task management solutions for the modern workflow.
            </p>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-primary">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="h-9 w-9 hover:scale-110 transition-transform"
                asChild
              >
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2024 AI Todo.</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500 animate-pulse" /> by AI Todo Team
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;