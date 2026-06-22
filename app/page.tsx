'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('event');

  const teams = [
    {
      distance: '6k',
      name: 'The Happy Pathfinders',
      number: 'Team 1',
      captain: 'Neil Hazra',
      members: 'Kardelen Cepni, Michael Kies, Michiel Pieters, Mia Inacio, Milica Gostiljac',
    },
    {
      distance: '12k',
      name: 'The PIG Builders',
      number: 'Team 2',
      captain: 'Nag Patta',
      members: 'Thijn Vries, Tim Bendermacher, Vitor Hugo de Sousa Carvalho, Niels Matthijssen',
    },
    {
      distance: '12k',
      name: 'The Rainmakers',
      number: 'Team 3',
      captain: 'Thijn Vrielink',
      members: 'Jonathan Incrocci, Enver Revazov, Christian Tabois, Alejandro Urbina, Isida Mullai, Rick Westland',
    },
    {
      distance: '6k',
      name: 'The Dirty Demoers',
      number: 'Team 4',
      captain: 'Divya Chawla',
      members: 'Brenden Biermann, Felipe Gonzaga Fernandes, Hilde Jongeling, Robbert-Jan Sweerts, Gabe Okabayashi, Yifang (TBC)',
    },
    {
      distance: '12k',
      name: 'The Value Runners',
      number: 'Team 5',
      captain: 'Max Kuppens',
      members: 'Thijs Villevoije, Eva Borsdorf, Srinath Vijayaraghavan, David Schipilov',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="h-8 sm:h-10 w-auto">
            <Image
              src="/celonis-logo.svg"
              alt="Celonis"
              width={100}
              height={40}
              style={{ width: 'auto', height: '100%' }}
            />
          </div>
          <div className="hidden sm:flex gap-6 text-sm font-medium text-gray-600">
            <a href="#event" className="hover:text-black">Event</a>
            <a href="#teams" className="hover:text-black">Teams</a>
            <a href="#steps" className="hover:text-black">Next Steps</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-black text-white px-4 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Left: Date */}
            <div className="flex flex-col gap-2">
              <p className="text-gray-400 text-sm font-semibold">MudMasters NL 2026</p>
              <div className="bg-white text-black px-3 py-2 rounded inline-block w-fit">
                <div className="flex items-center gap-2">
                  <div className="text-2xl sm:text-3xl font-black">25</div>
                  <div className="text-xs">
                    <div className="font-light opacity-90">September</div>
                    <div className="font-semibold">2026</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Title & Tabs */}
            <div className="sm:col-span-1">
              <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-4">
                Stepping out of our <span className="underline decoration-2 underline-offset-4">comfort zone</span>
              </h1>
              <div className="flex gap-3 flex-wrap">
                {[
                  { id: 'event', label: '📅 EVENT DETAILS' },
                  { id: 'teams', label: '👥 TEAMS' },
                  { id: 'steps', label: '✓ NEXT STEPS' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-xs sm:text-sm font-semibold pb-2 transition-colors ${
                      activeTab === tab.id
                        ? 'text-white border-b-2 border-white'
                        : 'text-gray-400 border-b-2 border-transparent hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Badge */}
            <div className="flex justify-start sm:justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src="/badge-team.svg"
                  alt="Best Team Wins"
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Event Details Tab */}
        {activeTab === 'event' && (
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: '⏰', title: 'Time', value: '13:50 - 17:30' },
                { icon: '📍', title: 'Location', value: 'Biddinghuizen' },
                { icon: '👥', title: 'Participants', value: '30 People' },
              ].map((card, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition">
                  <div className="text-3xl mb-2">{card.icon}</div>
                  <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">{card.title}</h3>
                  <p className="text-xl sm:text-2xl font-bold">{card.value}</p>
                </div>
              ))}
            </div>

            {/* Activity Overview */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-black inline-block">Activity Overview</h2>
              <div className="bg-black text-white rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black">
                  {[
                    { icon: '🏅', title: 'Challenge', desc: 'One shared activity: 12k / 6k obstacle run' },
                    { icon: '🎯', title: 'Competition', desc: 'Friendly competition between teams' },
                    { icon: '🎓', title: 'Training', desc: 'Monthly / bi-monthly training sessions' },
                    { icon: '🏆', title: 'Prize', desc: 'Well-being Prize for winning team' },
                  ].map((item, i) => (
                    <div key={i} className="bg-black p-6 border border-gray-800">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <h3 className="font-semibold text-sm uppercase tracking-wide mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Teams Tab */}
        {activeTab === 'teams' && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold">Teams Registration</h2>
              <div className="w-12 h-12">
                <Image
                  src="/badge-team.svg"
                  alt="Team Badge"
                  width={48}
                  height={48}
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="bg-black text-white rounded-lg overflow-hidden">
              {teams.map((team, i) => (
                <div
                  key={i}
                  className={`p-4 sm:p-5 hover:bg-gray-900 transition ${
                    i !== teams.length - 1 ? 'border-b border-gray-800' : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    {/* Distance Badge */}
                    <div className="flex-shrink-0">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${
                          team.distance === '6k' ? 'bg-green-500' : 'bg-blue-500'
                        }`}
                      >
                        {team.distance}
                      </span>
                    </div>

                    {/* Team Info */}
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <div className="font-bold text-base">
                            {team.name}{' '}
                            <span className="font-normal text-gray-400 text-sm">({team.number})</span>
                          </div>
                          <div className="text-xs text-gray-400 mt-1 border-l-2 border-gray-600 pl-2">
                            {team.members}
                          </div>
                        </div>
                        <div className="font-bold text-sm flex-shrink-0">{team.captain}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Steps Tab */}
        {activeTab === 'steps' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-black inline-block">Next Steps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { num: 1, title: 'Confirm Training Schedule', desc: 'Add sessions to calendars' },
                { num: 2, title: 'Finalize Well-being Prize', desc: 'Prize details TBD' },
                { num: 3, title: 'Share Preparation Guide', desc: 'Training tips & resources' },
                { num: 4, title: 'Regular Check-ins', desc: 'Motivational updates' },
              ].map((step) => (
                <div key={step.num} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition relative pl-16">
                  <div className="absolute left-6 top-6 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 mt-12">
        <p className="font-semibold">Let's get muddy and have fun together! 💪</p>
      </footer>
    </div>
  );
}
