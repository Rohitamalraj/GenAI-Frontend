"use client"

import { Check, ChevronRight } from 'lucide-react'

interface WorkflowProgressProps {
  currentStep: number
  className?: string
}

export function WorkflowProgress({ currentStep, className = '' }: WorkflowProgressProps) {
  const steps = [
    {
      id: 1,
      title: 'Upload Document',
      description: 'Select and upload your legal document'
    },
    {
      id: 2,
      title: 'AI Analysis',
      description: 'Our AI processes and analyzes your document'
    },
    {
      id: 3,
      title: 'Get Summary',
      description: 'Receive a comprehensive summary and insights'
    },
    {
      id: 4,
      title: 'Ask Questions',
      description: 'Interactive Q&A about your document'
    }
  ]

  return (
    <div className={`liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl rounded-lg p-6 ${className}`}>
      <h3 className="font-semibold text-white mb-6 text-center">Your Progress</h3>
      
      <div className="space-y-4">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep
          const isCurrent = step.id === currentStep
          const isUpcoming = step.id > currentStep
          
          return (
            <div key={step.id} className="flex items-center space-x-4">
              {/* Step Indicator */}
              <div className={`
                flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors
                ${isCompleted 
                  ? 'bg-green-500 border-green-500 text-white' 
                  : isCurrent 
                    ? 'bg-purple-500 border-purple-500 text-white animate-pulse' 
                    : 'border-gray-500 text-gray-400'
                }
              `}>
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span className="text-sm font-medium">{step.id}</span>
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <h4 className={`
                  font-medium text-sm transition-colors
                  ${isCompleted 
                    ? 'text-green-300' 
                    : isCurrent 
                      ? 'text-purple-300' 
                      : 'text-gray-400'
                  }
                `}>
                  {step.title}
                </h4>
                <p className={`
                  text-xs mt-0.5 transition-colors
                  ${isCompleted 
                    ? 'text-green-400/70' 
                    : isCurrent 
                      ? 'text-purple-400/70' 
                      : 'text-gray-500'
                  }
                `}>
                  {step.description}
                </p>
              </div>

              {/* Arrow Indicator */}
              {index < steps.length - 1 && (
                <ChevronRight className={`
                  w-4 h-4 transition-colors
                  ${isCompleted 
                    ? 'text-green-400' 
                    : isCurrent 
                      ? 'text-purple-400' 
                      : 'text-gray-600'
                  }
                `} />
              )}
            </div>
          )
        })}
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-green-500 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">
          Step {currentStep} of {steps.length}
        </p>
      </div>
    </div>
  )
}