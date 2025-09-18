import { 
  CodeBracketIcon, 
  StarIcon, 
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    name: 'Campus Study Spot Finder',
    description: 'A web application that helps UW Madison students find the best study spots on campus with real-time availability and amenities information.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    githubUrl: 'https://github.com/tech-portfolio-builders/campus-study-spots',
    liveUrl: 'https://campus-study-spots.vercel.app',
    contributors: ['Alex Chen', 'Sarah Johnson', 'Mike Rodriguez'],
    status: 'Active',
    lastUpdated: '2024-01-10',
    stars: 24,
    forks: 8
  },
  {
    id: 2,
    name: 'UW Hackathon Tracker',
    description: 'A comprehensive platform for tracking hackathons, competitions, and tech events at UW Madison with preparation resources and team formation tools.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Supabase'],
    githubUrl: 'https://github.com/tech-portfolio-builders/hackathon-tracker',
    liveUrl: 'https://uw-hackathon-tracker.vercel.app',
    contributors: ['Emma Wilson', 'David Kim', 'Lisa Zhang'],
    status: 'Active',
    lastUpdated: '2024-01-08',
    stars: 18,
    forks: 5
  },
  {
    id: 3,
    name: 'Tech Portfolio Builders Website',
    description: 'The official website for the Tech Portfolio Builders Club, built as a showcase of modern web development practices and member contributions.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
    githubUrl: 'https://github.com/tech-portfolio-builders/website',
    liveUrl: 'https://tech-portfolio-builders.vercel.app',
    contributors: ['Club Members'],
    status: 'Active',
    lastUpdated: '2024-01-12',
    stars: 12,
    forks: 3
  },
  {
    id: 4,
    name: 'Local Nonprofit Volunteer Portal',
    description: 'A volunteer management system built for a local Madison nonprofit to help coordinate volunteers and track community impact.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/tech-portfolio-builders/volunteer-portal',
    liveUrl: null,
    contributors: ['Rachel Green', 'Tom Anderson', 'Jessica Lee'],
    status: 'Completed',
    lastUpdated: '2023-12-15',
    stars: 31,
    forks: 12
  },
  {
    id: 5,
    name: 'Resume Builder as Code',
    description: 'A tool that generates professional resumes from Markdown files, with multiple templates and PDF export functionality.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'LaTeX', 'Puppeteer', 'GitHub Actions'],
    githubUrl: 'https://github.com/tech-portfolio-builders/resume-builder',
    liveUrl: 'https://resume-builder-demo.vercel.app',
    contributors: ['Kevin Park', 'Amy Chen'],
    status: 'Active',
    lastUpdated: '2024-01-05',
    stars: 45,
    forks: 15
  },
  {
    id: 6,
    name: 'Weather Dashboard',
    description: 'A beautiful weather dashboard that displays current conditions and forecasts with data visualization and location-based features.',
    image: '/api/placeholder/600/400',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'PWA'],
    githubUrl: 'https://github.com/tech-portfolio-builders/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.vercel.app',
    contributors: ['Daniel Kim', 'Sophie Martinez'],
    status: 'Completed',
    lastUpdated: '2023-11-20',
    stars: 22,
    forks: 7
  }
]

const projectCategories = [
  { name: 'All Projects', count: projects.length, active: true }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Project
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              For now we're highlighting one project from our portfolio. More projects coming soon —
              feel free to check back later or contribute your own.
            </p>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {projectCategories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category.active
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {projects.slice(0, 1).map((project) => (
              <div key={project.id} className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg mb-4 flex items-center justify-center">
                  <CodeBracketIcon className="h-16 w-16 text-primary-600 dark:text-primary-400" />
                </div>

                {/* Project Info */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.name}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contributors */}
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <UserGroupIcon className="h-4 w-4 mr-2" />
                    <span>{project.contributors.length} contributors</span>
                  </div>
                </div>

                {/* GitHub Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 mr-1" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <span>{project.forks} forks</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{new Date(project.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-center text-sm"
                  >
                    View Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center text-sm inline-flex items-center justify-center"
                    >
                      Live Demo
                      <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 dark:bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Contribute?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join our club and start building projects that will enhance your portfolio 
            and help you stand out to potential employers.
          </p>
          <a
            href="/events"
            className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
          >
            Join Our Next Event
          </a>
        </div>
      </section>
    </div>
  )
}
