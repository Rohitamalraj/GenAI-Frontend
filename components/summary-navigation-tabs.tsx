"use client"

import { FileText, List, Shield } from 'lucide-react'

interface TabData {
  id: string
  label: string
  icon: any
  description: string
}

interface SummaryNavigationTabsProps {
  activeTab: string
  onTabChange: (tabId: string) => void
}

export function SummaryNavigationTabs({ activeTab, onTabChange }: SummaryNavigationTabsProps) {
  const tabs: TabData[] = [
    {
      id: 'summary',
      label: 'Summary',
      icon: FileText,
      description: 'Overview and key information'
    },
    {
      id: 'clauses',
      label: 'Clauses',
      icon: List,
      description: 'Simplified explanations'
    },
    {
      id: 'risks',
      label: 'Risk Analysis',
      icon: Shield,
      description: 'Identified concerns'
    }
  ]

  return (
    <div className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl rounded-lg shadow-xl p-2 mb-6">
      <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
        {tabs.map((tab) => {
          const IconComponent = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-md text-left transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <IconComponent 
                className={`w-5 h-5 ${activeTab === tab.id ? 'text-white' : 'text-current'}`} 
              />
              <div className="flex-1">
                <div className="font-medium text-sm">{tab.label}</div>
                <div className={`text-xs ${
                  activeTab === tab.id 
                    ? 'text-purple-100' 
                    : 'text-gray-400'
                }`}>
                  {tab.description}
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}