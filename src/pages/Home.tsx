import { Button } from '@/components/ui/button';
import { Download, Sparkles, Rocket } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-surface-gradient">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Modern Development Kit
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Build Amazing{' '}
                  <span className="bg-hero-gradient bg-clip-text text-transparent">
                    Web Apps
                  </span>{' '}
                  with NexusKit
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  A powerful React + TypeScript development kit with beautiful components, 
                  modern design patterns, and everything you need to build exceptional web applications.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-hero-gradient hover:opacity-90 shadow-primary">
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </Button>
                <Button variant="outline" size="lg">
                  <Rocket className="w-5 h-5 mr-2" />
                  View Documentation
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">50K+</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">Components</div>
                </div>
              </div>
            </div>

            {/* Hero Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl p-8 shadow-elegant">
                    <div className="w-12 h-12 bg-primary rounded-xl mb-4 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Modern Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Beautiful, responsive components built with the latest design trends.
                    </p>
                  </div>
                  <div className="bg-card rounded-2xl p-8 shadow-soft border">
                    <div className="w-12 h-12 bg-secondary rounded-xl mb-4 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Fast Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Pre-built components and utilities to speed up your workflow.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-card rounded-2xl p-8 shadow-soft border">
                    <div className="w-12 h-12 bg-accent rounded-xl mb-4 flex items-center justify-center">
                      <Download className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">Easy Setup</h3>
                    <p className="text-sm text-muted-foreground">
                      Get started in minutes with our comprehensive documentation.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-primary-glow/20 to-primary/20 rounded-2xl p-8 shadow-elegant">
                    <div className="w-16 h-16 bg-hero-gradient rounded-2xl mb-4 flex items-center justify-center shadow-primary">
                      <span className="text-primary-foreground font-bold text-xl">N</span>
                    </div>
                    <h3 className="font-semibold mb-2">NexusKit</h3>
                    <p className="text-sm text-muted-foreground">
                      The complete toolkit for modern web development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;