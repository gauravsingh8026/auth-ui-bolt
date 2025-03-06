import Link from 'next/link';
import { Card } from '@/components/ui/card';
import {
  BookOpen,
  Calendar,
  FileText,
  MessageSquare,
  Settings,
  Users,
} from 'lucide-react';

const apps = [
  {
    name: 'Documents',
    description: 'Manage and organize your documents',
    icon: FileText,
    href: '#',
  },
  {
    name: 'Calendar',
    description: 'Schedule and track your events',
    icon: Calendar,
    href: '#',
  },
  {
    name: 'Messages',
    description: 'Chat with your team members',
    icon: MessageSquare,
    href: '#',
  },
  {
    name: 'Team',
    description: 'Manage your team and roles',
    icon: Users,
    href: '#',
  },
  {
    name: 'Knowledge Base',
    description: 'Access documentation and guides',
    icon: BookOpen,
    href: '#',
  },
  {
    name: 'Settings',
    description: 'Configure your preferences',
    icon: Settings,
    href: '#',
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to AuthUI</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A modern authentication service with a beautiful interface. Access all
          your applications securely from one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => {
          const Icon = app.icon;
          return (
            <Link key={app.name} href={app.href}>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold">{app.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {app.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}