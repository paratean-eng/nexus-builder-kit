import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User as UserIcon, ArrowLeft, Mail, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const User = () => {
  const { userid } = useParams<{ userid: string }>();

  // Mock user data based on userid
  const getUserData = (id: string) => {
    const users: Record<string, any> = {
      demo: {
        name: 'Demo User',
        email: 'demo@nexuskit.dev',
        joinDate: 'January 2024',
        location: 'San Francisco, CA',
        bio: 'Exploring NexusKit and its amazing features!',
        avatar: 'DU'
      },
      john: {
        name: 'John Smith',
        email: 'john.smith@example.com',
        joinDate: 'March 2024',
        location: 'New York, NY',
        bio: 'Full-stack developer passionate about modern web technologies.',
        avatar: 'JS'
      }
    };
    
    return users[id] || {
      name: `User ${id}`,
      email: `user${id}@example.com`,
      joinDate: 'Recently',
      location: 'Unknown',
      bio: 'Welcome to NexusKit!',
      avatar: id?.slice(0, 2).toUpperCase() || 'U'
    };
  };

  const user = getUserData(userid || '');

  return (
    <div className="py-20 bg-surface-gradient min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
        </div>

        {/* Page title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            User Profile
          </h1>
          <p className="text-xl text-muted-foreground">
            Viewing profile for user: <span className="font-semibold text-foreground">{userid}</span>
          </p>
        </div>

        {/* User profile card */}
        <Card className="shadow-elegant">
          <CardHeader className="pb-6">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              {/* Avatar */}
              <div className="w-24 h-24 bg-hero-gradient rounded-2xl flex items-center justify-center shadow-primary">
                <span className="text-primary-foreground font-bold text-2xl">
                  {user.avatar}
                </span>
              </div>
              
              {/* User info */}
              <div className="text-center md:text-left flex-1">
                <CardTitle className="text-2xl mb-2">{user.name}</CardTitle>
                <p className="text-muted-foreground mb-4">{user.bio}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {user.joinDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{user.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <UserIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Profile Status</h3>
                  <p className="text-sm text-muted-foreground">Active Member</p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/50 border-secondary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-secondary-foreground font-bold">15</span>
                  </div>
                  <h3 className="font-semibold mb-2">Projects</h3>
                  <p className="text-sm text-muted-foreground">Created</p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent/50 border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent-foreground font-bold">4.8</span>
                  </div>
                  <h3 className="font-semibold mb-2">Rating</h3>
                  <p className="text-sm text-muted-foreground">Community Score</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 p-6 bg-hero-glow rounded-xl border border-primary/20">
              <h3 className="font-semibold mb-2">About this User</h3>
              <p className="text-muted-foreground">
                This is a dynamic user page that displays information for user ID: <strong>{userid}</strong>. 
                In a real application, this data would be fetched from a database or API based on the user ID parameter.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default User;