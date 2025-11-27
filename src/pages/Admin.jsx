import React, { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Save, User, FolderKanban, Wrench, MessageSquare, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { toast } from 'sonner';

import ProfileForm from '@/components/admin/ProfileForm';
import SkillsForm from '@/components/admin/SkillsForm';
import ProjectsManager from '@/components/admin/ProjectsManager';
import MessagesManager from '@/components/admin/MessagesManager';

export default function Admin() {
  const [settings, setSettings] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const queryClient = useQueryClient();

  const { data: settingsList, isLoading: loadingSettings } = useQuery({
    queryKey: ['portfolio-settings'],
    queryFn: () => base44.entities.PortfolioSettings.list(),
  });

  const { data: projects, isLoading: loadingProjects } = useQuery({
    queryKey: ['projects'],
    queryFn: () => base44.entities.Project.list('-created_date'),
  });

  const { data: messages, isLoading: loadingMessages } = useQuery({
    queryKey: ['messages'],
    queryFn: () => base44.entities.ContactMessage.list('-created_date'),
  });

  useEffect(() => {
    if (settingsList?.length > 0) {
      setSettings(settingsList[0]);
    }
  }, [settingsList]);

  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings);
    setHasChanges(true);
  };

  const handleSave = async () => {
    if (!settings.name?.trim() || !settings.email?.trim()) {
      toast.error("Name and Email are required");
      return;
    }

    setIsSaving(true);
    
    if (settingsList?.length > 0) {
      await base44.entities.PortfolioSettings.update(settingsList[0].id, settings);
    } else {
      await base44.entities.PortfolioSettings.create(settings);
    }
    
    queryClient.invalidateQueries({ queryKey: ['portfolio-settings'] });
    setHasChanges(false);
    setIsSaving(false);
    toast.success('Settings saved!');
  };

  const refreshProjects = () => {
    queryClient.invalidateQueries({ queryKey: ['projects'] });
  };

  const refreshMessages = () => {
    queryClient.invalidateQueries({ queryKey: ['messages'] });
  };

  const unreadCount = messages?.filter(m => !m.read).length || 0;

  if (loadingSettings) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-violet-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-900">Portfolio Admin</h1>
          <div className="flex items-center gap-3">
            <Link to={createPageUrl('Home')}>
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                View Site
              </Button>
            </Link>
            <Button
              onClick={handleSave}
              disabled={!hasChanges || isSaving}
              className="bg-violet-600 hover:bg-violet-700"
              size="sm"
            >
              {isSaving ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-white border shadow-sm">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <FolderKanban className="w-4 h-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2 relative">
              <MessageSquare className="w-4 h-4" />
              Messages
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-violet-600 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <ProfileForm settings={settings} onChange={handleSettingsChange} />
          </TabsContent>

          <TabsContent value="skills">
            <SkillsForm settings={settings} onChange={handleSettingsChange} />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectsManager projects={projects} onRefresh={refreshProjects} />
          </TabsContent>

          <TabsContent value="messages">
            <MessagesManager messages={messages} onRefresh={refreshMessages} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}