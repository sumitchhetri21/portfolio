'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TabId, Theme } from '@/types/portfolio';
import { useSoundEffects } from '@/hooks/useSoundEffects';

import { BackgroundLayer } from '@/components/BackgroundLayer';
import { Header } from '@/components/Header';
import { MobileMenu } from '@/components/MobileMenu';
import { NavigationDots } from '@/components/NavigationDots';
import { Footer } from '@/components/Footer';

import { HomeSection } from '@/components/sections/HomeSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { YouTubeSection } from '@/components/sections/YouTubeSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ResumeSection } from '@/components/sections/ResumeSection';
import { ContactSection } from '@/components/sections/ContactSection';

import { VideoModal } from '@/components/modals/VideoModal';
import { StickyNoteModal } from '@/components/modals/StickyNoteModal';
import { FootballModal } from '@/components/modals/FootballModal';
import { Toast } from '@/components/ui/Toast';

const TABS: TabId[] = ['home', 'about', 'projects', 'youtube', 'gallery', 'resume', 'contact'];

export default function HomePage() {
  const [currentTab, setCurrentTab] = useState<TabId>('home');
  const [theme, setTheme] = useState<Theme>('dark');
  const [stickyNoteText, setStickyNoteText] = useState('Better Days Ahead...');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isStickyModalOpen, setIsStickyModalOpen] = useState(false);
  const [isFootballModalOpen, setIsFootballModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { audioEnabled, playChime, playShowreelSequence, toggleAudio } = useSoundEffects();

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2600);
  }, []);

  const handleTabChange = useCallback(
    (tabId: TabId) => {
      playChime('G4');
      setCurrentTab(tabId);
    },
    [playChime]
  );

  const cycleNextTab = useCallback(() => {
    const currentIndex = TABS.indexOf(currentTab);
    const nextIndex = (currentIndex + 1) % TABS.length;
    handleTabChange(TABS[nextIndex]);
  }, [currentTab, handleTabChange]);

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      const html = document.documentElement;
      if (nextTheme === 'light') {
        html.classList.remove('dark');
        html.classList.add('light');
        playChime('C6');
        showToast('Switched to Light Glassmorphism');
      } else {
        html.classList.remove('light');
        html.classList.add('dark');
        playChime('C4');
        showToast('Switched to Dark Glassmorphism');
      }
      return nextTheme;
    });
  }, [playChime, showToast]);

  const handleToggleAudio = useCallback(() => {
    toggleAudio();
    if (!audioEnabled) {
      showToast('Interface sounds turned ON');
    } else {
      showToast('Interface sounds MUTED');
    }
  }, [audioEnabled, toggleAudio, showToast]);

  const handleStickyNoteOpen = useCallback(() => {
    playChime('D5');
    setIsStickyModalOpen(true);
  }, [playChime]);

  const handleStickyNoteSave = useCallback(
    (newText: string) => {
      setStickyNoteText(newText);
      playChime('G5');
      showToast('Sticky note updated on desk!');
    },
    [playChime, showToast]
  );

  const handleOpenVideoModal = useCallback(() => {
    playChime('A5');
    setIsVideoModalOpen(true);
  }, [playChime]);

  const handleOpenFootballModal = useCallback(() => {
    playChime('F4');
    setIsFootballModalOpen(true);
  }, [playChime]);

  const handleTriggerEasterEgg = useCallback(() => {
    playChime('B5');
    showToast("✨ You found JD's secret signature chord!");
  }, [playChime, showToast]);

  const handlePlayShowreelAudio = useCallback(() => {
    playShowreelSequence();
    showToast('Playing 2026 Showreel...');
  }, [playShowreelSequence, showToast]);

  const handleDownloadResume = useCallback(() => {
    playChime('F5');
    showToast('Downloading JD_Resume_2026.pdf...');
  }, [playChime, showToast]);

  const handleContactSuccess = useCallback(() => {
    playChime('C6');
    showToast('Message sent to JD! Will respond within 24 hours.');
    setTimeout(() => {
      handleTabChange('home');
    }, 1500);
  }, [playChime, showToast, handleTabChange]);

  // Sync theme with html tag on initial client mount
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  return (
    <>
      {/* Dynamic Background Image & Atmospheric Orbs */}
      <BackgroundLayer theme={theme} />

      {/* Top Concept Badge */}
      <div className="fixed top-2 left-4 md:left-8 z-40 text-xs font-mono text-slate-400/90 tracking-wider flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-brand-accent animate-ping" />
        <span>02. Glassmorphism (Modern) • Interactive Preview</span>
      </div>

      {/* Main Glass Container Frame */}
      <main className="relative z-10 w-full max-w-7xl h-[92vh] min-h-[640px] glass-shell rounded-3xl p-5 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300">
        {/* Header & Nav */}
        <Header
          currentTab={currentTab}
          onTabChange={handleTabChange}
          audioEnabled={audioEnabled}
          onToggleAudio={handleToggleAudio}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onToggleMobileMenu={() => {
            setIsMobileMenuOpen((prev) => !prev);
            playChime('C5');
          }}
        />

        {/* Mobile Drawer */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          onSelectTab={handleTabChange}
          currentTab={currentTab}
        />

        {/* Tab Sections */}
        <HomeSection
          isActive={currentTab === 'home'}
          onNavigate={handleTabChange}
          onOpenVideoModal={handleOpenVideoModal}
          onOpenFootballModal={handleOpenFootballModal}
          onEditStickyNote={handleStickyNoteOpen}
          onTriggerEasterEgg={handleTriggerEasterEgg}
          stickyNoteText={stickyNoteText}
        />

        <AboutSection
          isActive={currentTab === 'about'}
          onOpenFootballModal={handleOpenFootballModal}
        />

        <ProjectsSection
          isActive={currentTab === 'projects'}
          onShowToast={showToast}
          onOpenFootballModal={handleOpenFootballModal}
          onOpenVideoModal={handleOpenVideoModal}
        />

        <YouTubeSection
          isActive={currentTab === 'youtube'}
          onOpenVideoModal={handleOpenVideoModal}
        />

        <GallerySection
          isActive={currentTab === 'gallery'}
          onShowToast={(moment) => showToast(moment)}
        />

        <ResumeSection
          isActive={currentTab === 'resume'}
          onDownloadResume={handleDownloadResume}
        />

        <ContactSection
          isActive={currentTab === 'contact'}
          onSubmitSuccess={handleContactSuccess}
        />

        {/* Floating Vertical Navigation Dots */}
        <NavigationDots
          currentTab={currentTab}
          onTabChange={handleTabChange}
        />

        {/* Footer with Cycle Next Tab */}
        <Footer onCycleNextTab={cycleNextTab} />
      </main>

      {/* Interactive Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onPlayReelAudio={handlePlayShowreelAudio}
      />

      <StickyNoteModal
        isOpen={isStickyModalOpen}
        onClose={() => setIsStickyModalOpen(false)}
        currentText={stickyNoteText}
        onSave={handleStickyNoteSave}
      />

      <FootballModal
        isOpen={isFootballModalOpen}
        onClose={() => setIsFootballModalOpen(false)}
      />

      {/* Toast Notification Capsule */}
      <Toast message={toastMessage} />
    </>
  );
}
