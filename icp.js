import React, { useState } from 'react';
import { Building2, Globe, TrendingUp, DollarSign, Users, Target, CheckCircle, AlertCircle, BarChart3, Briefcase } from 'lucide-react';

const ICPOverviewDashboard = () => {
  const [activeSection, setActiveSection] = useState('demographics');

  const industries = [
    { name: 'Aerospace & Defense', priority: 'Primary', color: 'bg-blue-500' },
    { name: 'Medical Devices', priority: 'Primary', color: 'bg-green-500' },
    { name: 'Life Sciences', priority: 'Primary', color: 'bg-pink-500' },
    { name: 'Automotive', priority: 'Secondary', color: 'bg-gray-400' },
    { name: 'Hi-Tech Electronics', priority: 'Secondary', color: 'bg-gray-400' },
    { name: 'Industrial Manufacturing', priority: 'Secondary', color: 'bg-gray-400' },
  ];

  const keyMetrics = [
    { label: 'Revenue Range', value: '$100M - $10B', optimal: '$500M - $5B', icon: DollarSign },
    { label: 'Employee Count', value: '1K - 50K', optimal: '5K - 20K', icon: Users },
    { label: 'Supplier Count', value: '500 - 10K', optimal: '1K - 5K', icon: Briefcase },
    { label: 'Geographic Reach', value: '10+ Countries', optimal: '50+ Countries', icon: Globe },
  ];

  const scoringIndicators = [
    { category: 'High-Value', score: '+2', items: [
      'Annual revenue $500M - $5B',
      'Global operations in 20+ countries',
      'Recent regulatory issues',
      '1,000+ suppliers',
      'Centralized decision-making'
    ]},
    { category: 'Positive', score: '+1', items: [
      'Operations in 10-20 countries',
      'Digital transformation initiative',
      '500-1,000 suppliers',
      'Cost reduction pressure'
    ]},
    { category: 'Negative', score: '-1', items: [
      'Revenue under $100M',
      'Fewer than 500 suppliers',
      'Single country operations',
      'Low regulatory requirements'
    ]},
  ];

  const buyingTriggers = [
    { type: 'Regulatory', icon: AlertCircle, triggers: ['FDA warning letters', 'Audit findings', 'New regulations'] },
    { type: 'Business', icon: TrendingUp, triggers: ['M&A activity', 'Geographic expansion', 'Product launches'] },
    { type: 'Operational', icon: BarChart3, triggers: ['Quality incidents', 'Scaling challenges', 'Cost reduction'] },
  ];

  const primaryIndustries = industries.filter(i => i.priority === 'Primary');
  const secondaryIndustries = industries.filter(i => i.priority === 'Secondary');

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50 rounded-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">SQA Services - Ideal Customer Profile Overview</h1>
        <p className="text-gray-600">Large-scale manufacturers in regulated industries with complex global supply chains</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1 shadow-sm">
        {['demographics', 'characteristics', 'triggers', 'scoring'].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`flex-1 py-2 px-4 rounded-md transition-all duration-200 ${
              activeSection === section 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* Demographics Section */}
      {activeSection === 'demographics' && (
        <div className="space-y-6">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyMetrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Icon className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-gray-700">{metric.label}</h3>
                  </div>
                  <p className="text-lg font-bold text-gray-900">{metric.value}</p>
                  <p className="text-sm text-green-600 mt-1">Optimal: {metric.optimal}</p>
                </div>
              );
            })}
          </div>

          {/* Industry Focus with Visual Hierarchy */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-blue-600" />
              Target Industries
            </h3>
            
            {/* Primary Industries - Featured */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Primary Target Markets</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {primaryIndustries.map((industry, idx) => (
                  <div key={idx} className="border-2 border-blue-200 bg-blue-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-4 h-4 rounded-full ${industry.color}`}></div>
                      <span className="font-medium text-gray-800">{industry.name}</span>
                    </div>
                    <div className="text-xs text-gray-600">High regulatory requirements • Complex supply chains</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Industries */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-3">Secondary Target Markets</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {secondaryIndustries.map((industry, idx) => (
                  <div key={idx} className="border border-gray-200 bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${industry.color}`}></div>
                      <span className="text-gray-700">{industry.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industry Distribution Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Industry Focus Distribution</h3>
            <div className="flex items-center space-x-8">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Primary Industries</span>
                  <span className="text-sm font-bold text-blue-600">60% Focus</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Secondary Industries</span>
                  <span className="text-sm font-bold text-gray-600">40% Focus</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gray-400 h-3 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Characteristics Section */}
      {activeSection === 'characteristics' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Building2 className="w-5 h-5 mr-2 text-blue-600" />
              Organizational Profile
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">Centralized decision-making structure</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">Established QA/Quality department</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">Strategic sourcing with SRM</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">Progressive technology adoption</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
              Financial Requirements
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">Minimum $100K annual budget for quality</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">Preference for annualized contracts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">High profit margins</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">5%+ annual growth rate</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Buying Triggers Section */}
      {activeSection === 'triggers' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {buyingTriggers.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <Icon className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">{category.type} Triggers</h3>
                </div>
                <ul className="space-y-2">
                  {category.triggers.map((trigger, tidx) => (
                    <li key={tidx} className="text-gray-700 text-sm pl-4 relative">
                      <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      {trigger}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}

      {/* Scoring Section */}
      {activeSection === 'scoring' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">ICP Scoring Framework</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scoringIndicators.map((category, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-700">{category.category}</h4>
                    <span className={`text-sm font-bold px-2 py-1 rounded ${
                      category.score === '+2' ? 'bg-green-100 text-green-700' :
                      category.score === '+1' ? 'bg-blue-100 text-blue-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {category.score} points
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {category.items.map((item, iidx) => (
                      <li key={iidx} className="text-sm text-gray-600">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg text-white">
            <h3 className="text-lg font-semibold mb-3">Scoring Tiers</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">10+</div>
                <div className="text-sm">Tier 1 - Prime Target</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">6-9</div>
                <div className="text-sm">Tier 2 - Strong Fit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">3-5</div>
                <div className="text-sm">Tier 3 - Potential Fit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">&lt;3</div>
                <div className="text-sm">Not Aligned</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ICPOverviewDashboard;