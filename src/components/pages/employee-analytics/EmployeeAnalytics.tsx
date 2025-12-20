"use client";
import React, { useState, useMemo, useRef} from 'react';
import { MOCK_ADVISORS} from './constants';
import { Advisor} from './types';
import {CartesianGrid, Legend , Line, LineChart, Tooltip, XAxis, YAxis, } from 'recharts';
import {
  ClockIcon,
  UserGroupIcon,
  ChevronDownIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  
  StarIcon,

} from './icons';




const formatCurrency = (value: number) => {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`;
  }
  if (value >= 1_000) {
    return `$${Math.round(value / 1_000)}K`;
  }
  return `$${value}`;
};


/*
const MetricCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
  subValue: string;
  iconBgColor: string;
  iconTextColor: string;
}> = ({ icon, title, value, subValue, iconBgColor, iconTextColor }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm flex items-center">
    <div className={`p-3 rounded-full mr-4 ${iconBgColor} ${iconTextColor}`}>{icon}</div>
    <div>
      <p className="text-sm text-black">{title}</p>
      <p className="text-2xl font-bold text-black">{value}</p>
      <p className="text-xs font-medium text-brand-green">{subValue}</p>
    </div>
  </div>
);

const AdvisorPerformanceCard: React.FC<{ advisor: Advisor }> = ({ advisor }) => {
  const getPerformanceColor = (score: number) => {
    if (score >= 9.0) return 'bg-green-500';
    if (score >= 8.0) return 'bg-blue-500';
    if (score >= 7.0) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start">
        <div
          className={`w-10 h-10 rounded-full ${advisor.avatarColor} text-white flex-shrink-0 flex items-center justify-center font-bold text-sm mr-4`}
        >
          {advisor.initials}
        </div>
        <div className="flex-grow">
          <p className="font-semibold text-black">{advisor.name}</p>
          <p className="text-xs text-black">{advisor.title}</p>
          <div className="flex items-center space-x-3 text-sm mt-1">
            <span>{advisor.clients} Clients</span>
            <span className="font-semibold text-green-600">{formatCurrency(advisor.aum)} AUM</span>
          </div>
        </div>
        <div
          className={`w-12 h-12 rounded-full ${getPerformanceColor(
            advisor.performanceScore
          )} text-white flex flex-col items-center justify-center font-bold text-sm leading-tight`}
        >
          <span>{advisor.performanceScore.toFixed(1)}</span>
          <span className="text-xs font-normal">Perf.</span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm border-t pt-3">
        <div>
          <span className="text-black">Comm. Score: </span>
          <span className="font-medium text-black">{advisor.communicationScore}</span>
        </div>
        <div>
          <span className="text-black">Task Completion: </span>
          <span className="font-medium text-black">{advisor.taskCompletion}%</span>
        </div>
        <div>
          <span className="text-black">Avg Response: </span>
          <span className="font-medium text-black">{advisor.avgResponse}h</span>
        </div>
        <div>
          <span className="text-black">Client Retention: </span>
          <span className="font-medium text-black">{advisor.clientRetention}%</span>
        </div>
        <div>
          <span className="text-black">Client Satisfaction: </span>
          <span className="font-medium text-black">{advisor.clientSatisfaction}/5</span>
        </div>
        <div>
          <span className="text-black">New Clients YTD: </span>
          <span className="font-medium text-black">{advisor.newClientsYTD}</span>
        </div>
      </div>
    </div>
  );
};

const TeamPerformanceTrends: React.FC = () => {
  const data = TEAM_PERFORMANCE_DATA;
  const width = 300,
    height = 150,
    padding = 20;
  const yMin = 7.0,
    yMax = 10.0;

  const points = data
    .map((point, i) => {
      const x = (i / (data.length - 1)) * (width - 2 * padding) + padding;
      const y = height - ((point.y - yMin) / (yMax - yMin)) * (height - 2 * padding) - padding;
      return `${x},${y}`;
    })
    .join(' ');

  const yAxisLabels = [7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0];

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="text-md font-semibold text-black mb-2">Team Performance Trends</h3>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {yAxisLabels.map((label) => {
          const y = height - ((label - yMin) / (yMax - yMin)) * (height - 2 * padding) - padding;
          return (
            <g key={label}>
              <line x1={padding} y1={y} x2={width - padding} y2={y} stroke="#E5E7EB" strokeWidth="0.5" />
              <text x={padding - 5} y={y + 3} textAnchor="end" fontSize="8" fill="#000000">
                {label.toFixed(1)}
              </text>
            </g>
          );
        })}
        {data.map((point, i) => {
          const x = (i / (data.length - 1)) * (width - 2 * padding) + padding;
          return (
            <text key={point.x} x={x} y={height - padding + 12} textAnchor="middle" fontSize="8" fill="#000000">
              {point.x}
            </text>
          );
        })}
        <polyline fill="none" stroke="#1D4ED8" strokeWidth="1.5" points={points} />
      </svg>
    </div>
  );
};

const QualityMetric: React.FC<{ label: string; value: string | number; barColor: string; barWidth: string }> = ({
  label,
  value,
  barColor,
  barWidth,
}) => (
  <div>
    <div className="flex justify-between items-center text-sm mb-1">
      <span className="text-black">{label}</span>
      <span className="font-semibold text-black">{value}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-1.5">
      <div className={`${barColor} h-1.5 rounded-full`} style={{ width: barWidth }}></div>
    </div>
  </div>
);

const CommunicationQuality: React.FC = () => (
  <div className="bg-white p-4 rounded-xl shadow-sm">
    <h3 className="text-md font-semibold text-black mb-3">Communication Quality</h3>
    <div className="space-y-3">
      <QualityMetric label="Response Time" value="2.3h avg" barColor="bg-green-500" barWidth="90%" />
      <QualityMetric label="Client Engagement" value="87%" barColor="bg-blue-500" barWidth="87%" />
      <QualityMetric label="Follow-up Completion" value="91%" barColor="bg-purple-500" barWidth="91%" />
      <QualityMetric label="Professional Quality" value="94%" barColor="bg-green-500" barWidth="94%" />
    </div>
  </div>
);

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={`full-${i}`} className="w-4 h-4 text-black" solid />
      ))}
      {halfStar && <StarIcon className="w-4 h-4 text-black" solid />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarIcon key={`empty-${i}`} className="w-4 h-4 text-black" />
      ))}
    </div>
  );
};

const ServiceDeliveryExcellence: React.FC = () => (
  <div className="bg-white p-4 rounded-xl shadow-sm">
    <h3 className="text-md font-semibold text-black mb-3">Service Delivery Excellence</h3>
    <ul className="space-y-2 text-sm">
      <li className="flex justify-between items-center">
        <span className="text-black">Client Satisfaction</span>{' '}
        <div className="flex items-center gap-1">
          <span className="font-semibold">4.6/5</span>
          <StarRating rating={4.6} />
        </div>
      </li>
      <li className="flex justify-between items-center">
        <span className="text-black">Issue Resolution Rate</span>{' '}
        <span className="font-semibold text-green-600">96%</span>
      </li>
      <li className="flex justify-between items-center">
        <span className="text-black">Cross-selling Success</span>{' '}
        <span className="font-semibold text-red-600">23%</span>
      </li>
      <li className="flex justify-between items-center">
        <span className="text-black">Referral Generation</span>{' '}
        <span className="font-semibold">18 this quarter</span>
      </li>
    </ul>
  </div>
);

const AnalyticsAgent: React.FC = () => (
  <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200">
    <div className="flex items-center mb-3">
      <div className="w-10 h-10 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center font-bold text-lg mr-3">
        E
      </div>
      <div>
        <h4 className="font-semibold text-indigo-900">Ethan - Analytics Agent</h4>
        <p className="text-xs text-indigo-700">AI Assistant for Performance Analysis</p>
      </div>
    </div>
    <div className="space-y-3">
      <div className="bg-white p-3 rounded-md shadow-sm">
        <p className="text-sm text-black mb-2">
          David Wilson's response times are above target. Recommend additional training on client communication best
          practices?
        </p>
        <div className="flex items-center space-x-2">
          <button className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700">Schedule Training</button>
          <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-50">Review Later</button>
        </div>
      </div>
      <div className="bg-white p-3 rounded-md shadow-sm">
        <p className="text-sm text-black mb-2">Sarah Johnson shows excellent performance metrics. Consider her for team lead role?</p>
        <div className="flex items-center space-x-2">
          <button className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700">Discuss with HR</button>
          <button className="text-xs bg-white border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-50">Not now</button>
        </div>
      </div>
    </div>
    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 mt-4 inline-block text-center w-full">
      Chat with Ethan →
    </a>
  </div>
);

const ProfessionalDevelopment: React.FC = () => (
  <div className="bg-white p-4 rounded-xl shadow-sm">
    <h3 className="text-md font-semibold text-black mb-3">Professional Development</h3>
    <ul className="space-y-2 text-sm">
      <li className="flex justify-between items-center">
        <span className="text-black">Training Completion</span>{' '}
        <span className="font-semibold text-green-600">94%</span>
      </li>
      <li className="flex justify-between items-center">
        <span className="text-black">Certifications Current</span>{' '}
        <span className="font-semibold">11/12</span>
      </li>
      <li className="flex justify-between items-center">
        <span className="text-black">Compliance Score</span>{' '}
        <span className="font-semibold">9.1/10</span>
      </li>
      <li className="flex justify-between items-center">
        <span className="text-black">Risk Incidents YTD</span>{' '}
        <span className="font-semibold text-red-600">2</span>
      </li>
    </ul>
  </div>
);

const EmployeeAnalytics: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState('All Teams');
  const [selectedPeriod, setSelectedPeriod] = useState('This Quarter');
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const [isPeriodDropdownOpen, setIsPeriodDropdownOpen] = useState(false);

  const teamDropdownRef = useRef<HTMLDivElement>(null);
  const periodDropdownRef = useRef<HTMLDivElement>(null);

  const teamOptions = ['All Teams', 'Senior Advisors', 'Junior Advisors', 'Operations Team'];
  const periodOptions = ['This Quarter', 'This Month', 'Last Quarter', 'Year to Date'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (teamDropdownRef.current && !teamDropdownRef.current.contains(event.target as Node)) setIsTeamDropdownOpen(false);
      if (periodDropdownRef.current && !periodDropdownRef.current.contains(event.target as Node)) setIsPeriodDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredAdvisors = useMemo(() => {
    return MOCK_ADVISORS.filter((advisor: Advisor) => {
      if (selectedTeam === 'All Teams') return true;
      if (selectedTeam === 'Senior Advisors') return advisor.title.includes('Senior');
      if (selectedTeam === 'Junior Advisors') return advisor.title.includes('Junior');
      return true;
    });
  }, [selectedTeam]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-black">Employee Analytics</h2>
          <p className="text-sm text-black">
            Performance tracking and analysis for advisors and teams with productivity metrics and communication analysis
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative" ref={teamDropdownRef}>
            <button
              onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
              className="flex items-center text-sm px-3 py-1.5 border rounded-md bg-white hover:bg-gray-50 border-gray-300 w-40 justify-between"
            >
              <span>{selectedTeam}</span>
              <ChevronDownIcon className="w-4 h-4 ml-2 text-black" />
            </button>
            {isTeamDropdownOpen && (
              <div className="absolute z-10 mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200">
                <ul className="py-1">
                  {teamOptions.map((team) => (
                    <li
                      key={team}
                      onClick={() => {
                        setSelectedTeam(team);
                        setIsTeamDropdownOpen(false);
                      }}
                      className={`block px-4 py-2 text-sm text-black hover:bg-gray-100 cursor-pointer ${
                        selectedTeam === team ? 'font-semibold bg-gray-100' : ''
                      }`}
                    >
                      {team}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="relative" ref={periodDropdownRef}>
            <button
              onClick={() => setIsPeriodDropdownOpen(!isPeriodDropdownOpen)}
              className="flex items-center text-sm px-3 py-1.5 border rounded-md bg-white hover:bg-gray-50 border-gray-300 w-40 justify-between"
            >
              <span>{selectedPeriod}</span>
              <ChevronDownIcon className="w-4 h-4 ml-2 text-black" />
            </button>
            {isPeriodDropdownOpen && (
              <div className="absolute z-10 mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200">
                <ul className="py-1">
                  {periodOptions.map((period) => (
                    <li
                      key={period}
                      onClick={() => {
                        setSelectedPeriod(period);
                        setIsPeriodDropdownOpen(false);
                      }}
                      className={`block px-4 py-2 text-sm text-black hover:bg-gray-100 cursor-pointer ${
                        selectedPeriod === period ? 'font-semibold bg-gray-100' : ''
                      }`}
                    >
                      {period}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          icon={<UserGroupIcon className="w-6 h-6" />}
          title="Total Advisors"
          value=""
          subValue="2 new this quarter"
          iconBgColor="bg-blue-100"
          iconTextColor="text-blue-600"
        />
        <MetricCard
          icon={<CurrencyDollarIcon className="w-6 h-6" />}
          title="Total AUM Man..."
          value="$47.2M"
          subValue="+8.3% this quarter"
          iconBgColor="bg-green-100"
          iconTextColor="text-green-600"
        />
        <MetricCard
          icon={<ChartBarIcon className="w-6 h-6" />}
          title="Avg Performance"
          value="8.4/10"
          subValue="Industry: 7.2/10"
          iconBgColor="bg-purple-100"
          iconTextColor="text-purple-600"
        />
        <MetricCar
          icon={<ClockIcon className="w-6 h-6" />}
          title="Avg Response Ti..."
          value="2.3h"
          subValue="Target: <4h"
          iconBgColor="bg-yellow-100"
          iconTextColor="text-yellow-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-black">Advisor Performance Analytics</h3>
            <div className="flex items-center space-x-2">
              <button className="flex items-center text-sm px-3 py-1.5 border rounded-md bg-white hover:bg-blue-50 border-gray-300 text-black">
                <FunnelIcon className="w-4 h-4 mr-2 text-black" /> Filter
              </button>
              <button className="flex items_center text-sm px-3 py-1.5 border rounded-md bg-white hover:bg-blue-50 border-gray-300 text-black">
                <ArrowsUpDownIcon className="w-4 h-4 mr-2 text-black" /> Sort
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {filteredAdvisors.map((advisor) => (
              <AdvisorPerformanceCard key={advisor.id} advisor={advisor} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <TeamPerformanceTrends />
          <CommunicationQuality />
          <ServiceDeliveryExcellence />
          <AnalyticsAgent />
          <ProfessionalDevelopment />
        </div>
      </div>

      <button className="fixed bottom-8 right-8 bg-brand-purple hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110">
        <BrainIcon className="w-6 h-6" />
      </button>

      <div className="text-xs text-black flex justify-between items-center pt-2">
        <span className="flex items-center">
          <ClockIcon className="w-4 h-4 mr-1" />Employee analytics last updated: Today at 1:30 PM
        </span>
        <span>Next refresh in 30 minutes</span>
      </div>
    </div>
  );
};
*/


const AdvisorPerformanceCard: React.FC<{ advisor: Advisor[] }> = ({advisor}) => {
  const getPerformanceColor = (score: number) => {
    if (score >= 9.0) return 'bg-green-500';
    if (score >= 8.0) return 'bg-blue-500';
    if (score >= 7.0) return 'bg-yellow-500';
    return 'bg-red-500';
  };


  return(<>
  <div className='md:flex w-full '>
  <div className='flex-col m-2 p-4 '>
    <div className='text-3xl p-2 font-black '> Advisor Performance Analytics </div>
   {advisor.map((adv) => (
        <div
          key={adv.id}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow"
        >
          {/* Header: Avatar + Name + Title */}
          <div className="flex items-center mb-6">
            <div
              className={`w-16 h-16 rounded-full ${adv.avatarColor} text-white flex items-center justify-center font-bold text-xl mr-4`}
            >
              {adv.initials}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{adv.name}</h3>
              <p className="text-sm text-gray-600">{adv.title}</p>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2  gap-1 text-sm">
            {/* Clients */}
            <div>
              <p className="text-gray-500">Clients</p>
              <p className="text-xl font-bold text-gray-900">{adv.clients}</p>
            </div>

            {/* AUM */}
            <div>
              <p className="text-gray-500">AUM</p>
              <p className="text-xl font-bold text-gray-900">
                ${ (adv.aum / 1e6).toFixed(1) }M
              </p>
            </div>

            {/* Performance Score */}
            <div>
              <p className="text-gray-500">Performance Score</p>
              <p className="text-xl font-bold text-gray-900">
                {adv.performanceScore.toFixed(1)}/10
              </p>
            </div>

            {/* Avg Response Time */}
            <div>
              <p className="text-gray-500">Avg Response</p>
              <p className="text-xl font-bold text-gray-900">{adv.avgResponse}</p>
            </div>

            {/* Client Satisfaction */}
            <div>
              <p className="text-gray-500 flex items-center gap-1">
                Satisfaction <StarIcon className="w-4 h-4 text-yellow-500" />
              </p>
              <p className="text-xl font-bold text-gray-900">
                {adv.clientSatisfaction.toFixed(1)}/5
              </p>
            </div>

            {/* New Clients YTD */}
            <div>
              <p className="text-gray-500">New Clients YTD</p>
              <p className="text-xl font-bold text-green-600">+{adv.newClientsYTD}</p>
            </div>

            {/* Task Completion */}
            <div>
              <p className="text-gray-500">Task Completion</p>
              <p className="text-xl font-bold text-gray-900">{adv.taskCompletion}%</p>
            </div>

            {/* Client Retention */}
            <div>
              <p className="text-gray-500">Retention Rate</p>
              <p className="text-xl font-bold text-gray-900">{adv.clientRetention}%</p>
            </div>
          </div>

          {/* Communication Badge */}
          <div className="mt-6">
            <span
              className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                adv.communicationScore === 'Excellent'
                  ? 'bg-green-100 text-green-800'
                  : adv.communicationScore === 'Good'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              Communication: {adv.communicationScore}
            </span>
          </div>

          {/* Quarter Tag */}
          <div className="mt-3 text-xs text-gray-500">
            Active Quarter: {adv.Quarter}
          </div>
        </div>
      ))}
    </div>
    <div>
      <EmployeGraph advisor={advisor} />
      <CommunicationQuality advisor={advisor} />
      <ServiceDeliveryExcellence advisors={advisor} />
      <ProfessionalDevelopment advisors={advisor} />
    </div>
    </div>
</>
  )
}
 
const EmployeGraph : React.FC <{advisor: Advisor[]}> =({advisor})=>{
return (<div className='md:mt-20 width-[90%] m-4 p-2 border rounded-2xl border-gray-300'>

<h1 className='font-black text-2xl text-center '> Employee analytics </h1>
<LineChart 
style={{ aspectRatio: '16/9', width: '100%' , height:300  }}   
data={advisor}>
  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> 
  <Line dataKey="performanceScore" /> 
  <XAxis dataKey="name" />
  <YAxis dataKey="performanceScore"  />
  <Tooltip />
  <Legend />
</LineChart>

</div>)
}

const QualityMetric: React.FC<{ label: string;  barColor: string; barWidth: string }> = ({
  label,  //later will add value type string | number;
  barColor,
  barWidth,
}) => (
  <div>
    <div className="flex justify-between items-center text-sm mb-1">
      <span className="text-black">{label}</span>
      {/*<span className="font-semibold text-black">{value}</span>*/}
    </div>
    <div className="w-full bg-gray-200 rounded-full h-1.5">
      <div className={`${barColor} h-1.5 rounded-full`} style={{ width: barWidth }}></div>
    </div>
  </div>
);
const CommunicationQuality : React.FC <{advisor: Advisor[]}> =({advisor})=>{
return(< div className='border m-4 rounded-2xl border-gray-300'>
 <div className=' width-[70%]  m-2 p-4'>  
  <h2 className='font-black text-xl '> Communication Quality </h2>
  <div className="space-y-3 flex-col width-[100px]">
      <QualityMetric label="Response Time"  barColor="bg-green-500" barWidth="90%" />
      <QualityMetric label="Client Engagement"  barColor="bg-blue-500" barWidth="87%" />
      <QualityMetric label="Follow-up Completion"  barColor="bg-purple-500" barWidth="91%" />
      <QualityMetric label="Professional Quality"  barColor="bg-green-500" barWidth="94%" />
    </div>
   
 </div>
</div>)
}

const ServiceDeliveryExcellence: React.FC<{ advisors: Advisor[] }> = ({ advisors }) => {
  const totalAdvisors = advisors.length;
  const avgRetention =
    totalAdvisors > 0
      ? Math.round(advisors.reduce((sum, a) => sum + a.clientRetention, 0) / totalAdvisors)
      : 0;
  const avgNewClients =
    totalAdvisors > 0
      ? Math.round(advisors.reduce((sum, a) => sum + a.newClientsYTD, 0) / totalAdvisors)
      : 0;
  const avgTaskCompletion =
    totalAdvisors > 0
      ? Math.round(advisors.reduce((sum, a) => sum + a.taskCompletion, 0) / totalAdvisors)
      : 0;
  const issueResolutionRate = avgTaskCompletion; // Derived
  const crossSellingSuccess = avgNewClients * 2; // Mock derivation
  const referralGeneration = avgNewClients; // Mock

return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Delivery Excellence</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="text-gray-600 mb-2">Issue Resolution Rate</p>
          <p className="text-xl font-bold text-purple-400">{issueResolutionRate}%</p>
        </div>
        <div>
          <p className="text-gray-600 mb-2">Cross-selling Success</p>
          <p className="text-xl font-bold text-sky-600">{crossSellingSuccess}%</p>
        </div>
        <div>
          <p className="text-gray-600 mb-2">Referral Generation</p>
          <p className="text-xl font-bold text-yellow-600">{referralGeneration} this quarter</p>
        </div>
      </div>
    </div>
  );
};

const ProfessionalDevelopment: React.FC<{ advisors: Advisor[] }> = ({ advisors }) => {
  const totalAdvisors = advisors.length;
  const avgTaskCompletion =
    totalAdvisors > 0
      ? Math.round(advisors.reduce((sum, a) => sum + a.taskCompletion, 0) / totalAdvisors)
      : 0;
  const avgSatisfaction =
    totalAdvisors > 0
      ? (advisors.reduce((sum, a) => sum + a.clientSatisfaction, 0) / totalAdvisors).toFixed(1)
      : 0;
  const totalNewClientsYTD = advisors.reduce((sum, a) => sum + a.newClientsYTD, 0);
  const complianceScore = avgSatisfaction; // Mock derivation
  const riskIncidentsYTD = totalAdvisors > 0 ? Math.max(0, 4 - totalNewClientsYTD / 2) : 2; // Mock

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Development</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div>
          <p className="text-gray-600 mb-2">Training Completion</p>
          <p className="text-xl font-bold text-purple-400">{avgTaskCompletion}%</p>
        </div>
        <div>
          <p className="text-gray-600 mb-2">Certifications Current</p>
          <p className="text-xl font-bold text-yellow-500">{totalAdvisors}/12</p>
        </div>
        <div>
          <p className="text-gray-600 mb-2">Compliance Score</p>
          <p className="text-xl font-bold text-blue-400">{complianceScore}/5</p>
        </div>
        <div>
          <p className="text-gray-600 mb-2">Risk Incidents YTD</p>
          <p className="text-xl font-bold text-red-600">{riskIncidentsYTD}</p>
        </div>
      </div>
    </div>
  );};

const Footer: React.FC = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mt-6 text-center text-sm text-gray-500">
    Employee analytics last updated: Today at 1:30 PM | Next refresh in 30 minutes
  </div>
);

const EmployeeAnalytics: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<string>('All Teams');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('Year to Date');

  // Map team options to advisor titles or logic
  const getFilteredAdvisors = useMemo(() => {
    let filtered = MOCK_ADVISORS;

    // Filter by Team
    if (selectedTeam !== 'All Teams') {
      if (selectedTeam === 'Senior Advisor') {
        filtered = filtered.filter(a => a.title.includes('Senior'));
      } else if (selectedTeam === 'Junior Advisor') {
        filtered = filtered.filter(a => a.title.includes('Junior'));
      } else if (selectedTeam === 'Operational team') {
        // Assuming no operational team in mock data, return empty or adjust as needed
        filtered = [];
      }
    }

    // Filter by Period (using Quarter field in mock data)
    if (selectedPeriod !== 'Year to Date') {
      filtered = filtered.filter(a => a.Quarter === selectedPeriod.replace(' to date', ''));
    }

    return filtered;
  }, [selectedTeam, selectedPeriod]);

  // Calculate metrics based on filtered advisors
  const metrics = useMemo(() => {
    const advisors = getFilteredAdvisors;
  

    const totalAdvisors = advisors.length;

    const totalAUM = advisors.reduce((sum, a) => sum + a.aum, 0);
    const formattedAUM = totalAUM >= 1e9
      ? `$${(totalAUM / 1e9).toFixed(1)}B`
      : `$${(totalAUM / 1e6).toFixed(1)}M`;

    const avgPerformance = advisors.length > 0
      ? (advisors.reduce((sum, a) => sum + a.performanceScore, 0) / advisors.length).toFixed(1)
      : '0.0';

    const parseHours = (str: string) => parseFloat(str.replace('h', '')) || 0;
    const avgResponseHours = advisors.length > 0
      ? (advisors.reduce((sum, a) => sum + parseHours(a.avgResponse), 0) / advisors.length).toFixed(1)
      : '0.0';

    // Example: new this quarter - count advisors with "This Quarter"
    const newThisQuarter = MOCK_ADVISORS.filter(a => a.Quarter === 'This Quarter').length;

    return {
      totalAdvisors,
      formattedAUM,
      avgPerformance,
      avgResponseHours,
      newThisQuarter,
    };
  }, [getFilteredAdvisors]);

 

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8 lg:p-12 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">Employee Analytics</h1>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Performance tracking and analysis for advisors and teams with productivity metrics and communication analysis
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="appearance-none bg-white border border-gray-300 px-6 py-3 pr-12 rounded-2xl font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
              >
                <option>All Teams</option>
                <option>Senior Advisor</option>
                <option>Junior Advisor</option>
                <option>Operational team</option>
              </select>
              <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="appearance-none bg-white border border-gray-300 px-6 py-3 pr-12 rounded-2xl font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
              >
                <option>This Quarter</option>
                <option>Last Quarter</option>
                <option>This Month</option>
                <option>Year to Date</option>
              </select>
              <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Metric Cards - Now Dynamic! */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Advisors */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <UserGroupIcon className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Total Advisors</p>
            <p className="text-3xl font-bold text-gray-900">{metrics.totalAdvisors}</p>
            <p className="text-green-600 text-sm mt-3">
              {metrics.newThisQuarter > 0 ? `+${metrics.newThisQuarter} new this quarter` : 'No new this quarter'}
            </p>
          </div>

          {/* Total AUM */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <CurrencyDollarIcon className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Total AUM</p>
            <p className="text-3xl font-bold text-gray-900">{metrics.formattedAUM}</p>
            <p className="text-green-600 text-sm mt-3">+8.3% this quarter</p>
          </div>

          {/* Average Performance */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <ChartBarIcon className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Avg Performance</p>
            <p className="text-3xl font-bold text-gray-900">{metrics.avgPerformance}/10</p>
            <p className="text-gray-500 text-sm mt-3">Industry: 7.2/10</p>
          </div>

          {/* Average Response Time */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-yellow-100 rounded-xl">
                <ClockIcon className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-1">Avg Response Time</p>
            <p className="text-3xl font-bold text-gray-900">{metrics.avgResponseHours}h</p>
            <p className="text-green-600 text-sm mt-3">Target: &lt;4h</p>
          </div>
        </div>
      </div>
      <AdvisorPerformanceCard advisor={getFilteredAdvisors}/>
     <Footer/>
    </div>
  );
}; 

export default EmployeeAnalytics;



