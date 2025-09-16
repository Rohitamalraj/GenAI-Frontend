"use client"

import { useState } from 'react'
import { FileText, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Download, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DocumentData {
  id: string
  name: string
  uploadDate: string
  size: number | string
  type: string
  status: string
  extractedText: string
}

interface DocumentContextPanelProps {
  isCollapsed?: boolean
  document: DocumentData | null
  onToggle?: (collapsed: boolean) => void
  onRestart?: () => void
  onDownload?: () => void
}

export function DocumentContextPanel({ 
  isCollapsed = false, 
  document = null,
  onToggle = () => {},
  onRestart = () => {},
  onDownload = () => {}
}: DocumentContextPanelProps) {
  const [isExpanded, setIsExpanded] = useState(!isCollapsed)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
    onToggle(!isExpanded)
  }

  const formatFileSize = (size: number | string) => {
    if (!size) return 'Unknown size'
    if (typeof size === 'string') return size
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(size) / Math.log(1024))
    return Math.round(size / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i]
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Unknown date'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (!document) {
    return null
  }

  return (
    <>
      {/* Desktop Sidebar Panel */}
      <div className="hidden lg:block">
        <div
          className={`fixed right-0 top-16 h-[calc(100vh-4rem)] liquid-glass border-l border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-200 ease-out z-40 ${
            isExpanded ? 'w-80' : 'w-12'
          }`}
        >
          {/* Toggle Button */}
          <div className="absolute -left-3 top-4">
            <Button
              variant="outline"
              size="icon"
              className="w-6 h-6 rounded-full bg-white/10 border-white/20 shadow-lg hover:bg-white/20"
              onClick={handleToggle}
            >
              {isExpanded ? (
                <ChevronRight className="w-3 h-3 text-white" />
              ) : (
                <ChevronLeft className="w-3 h-3 text-white" />
              )}
            </Button>
          </div>

          {/* Panel Content */}
          {isExpanded && (
            <div className="p-6 h-full overflow-y-auto">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold text-white">Document</h3>
                </div>

                {/* Document Info */}
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                      File Name
                    </label>
                    <p className="mt-1 text-sm text-white font-medium break-words">
                      {document.name || 'Untitled Document'}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                      Upload Date
                    </label>
                    <p className="mt-1 text-sm text-gray-300">
                      {formatDate(document.uploadDate)}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                      File Size
                    </label>
                    <p className="mt-1 text-sm text-gray-300">
                      {formatFileSize(document.size)}
                    </p>
                  </div>

                  {document.type && (
                    <div>
                      <label className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                        Document Type
                      </label>
                      <p className="mt-1 text-sm text-gray-300">
                        {document.type}
                      </p>
                    </div>
                  )}

                  {document.status && (
                    <div>
                      <label className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                        Analysis Status
                      </label>
                      <div className="mt-1 flex items-center space-x-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            document.status === 'completed'
                              ? 'bg-green-400'
                              : document.status === 'processing' 
                              ? 'bg-yellow-400 animate-pulse' 
                              : 'bg-gray-400'
                          }`}
                        />
                        <span className="text-sm text-gray-300 capitalize">
                          {document.status}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-white/5 border-white/20 text-white hover:bg-white/10"
                    onClick={onDownload}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-white/5 border-white/20 text-white hover:bg-white/10"
                    onClick={onRestart}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    New Analysis
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Expandable Header */}
      <div className="lg:hidden">
        <div className="liquid-glass border-b border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="container mx-auto px-4">
            <div className="py-3">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-between text-white hover:bg-white/10"
                onClick={handleToggle}
              >
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-purple-400" />
                  <span className="font-medium text-white">
                    {document.name || 'Document Details'}
                  </span>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </Button>

              {isExpanded && (
                <div className="mt-4 space-y-3 pb-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Uploaded:</span>
                      <p className="font-medium text-white">
                        {formatDate(document.uploadDate)}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-400">Size:</span>
                      <p className="font-medium text-white">
                        {formatFileSize(document.size)}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onDownload}
                      className="bg-white/5 border-white/20 text-white hover:bg-white/10"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onRestart}
                      className="bg-white/5 border-white/20 text-white hover:bg-white/10"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      New Analysis
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}