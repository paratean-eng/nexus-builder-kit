import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 bg-surface-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              NexusKit
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We're building the future of web development with modern tools, 
            beautiful design, and developer-first experiences.
          </p>
        </div>

        <Card className="mb-12 shadow-elegant">
          <CardContent className="p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                NexusKit was born from the frustration of setting up the same boilerplate 
                code for every new project. We wanted to create a comprehensive development 
                kit that would allow developers to focus on building great features rather 
                than configuring tooling and writing repetitive code.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Built with React, TypeScript, and TailwindCSS, NexusKit provides a solid 
                foundation with modern best practices, beautiful components, and a 
                delightful developer experience. Whether you're building a simple landing 
                page or a complex web application, NexusKit has you covered.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to democratize modern web development by providing tools 
                that are both powerful and accessible to developers of all skill levels.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center shadow-soft">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Team</h3>
              <p className="text-muted-foreground">
                A passionate group of developers and designers committed to 
                building exceptional developer tools.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower developers with modern tools that make building 
                beautiful web applications faster and more enjoyable.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where every developer has access to high-quality, 
                modern development tools that inspire creativity.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;