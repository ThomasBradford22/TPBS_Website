import { 
  BookOpenIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  LinkIcon,
  DownloadIcon,
  ExternalLinkIcon,
  StarIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const studyGuides = [
  {
    id: 1,
    title: 'Complete Web Development Roadmap',
    description: 'A comprehensive guide covering HTML, CSS, JavaScript, React, Node.js, and deployment strategies.',
    category: 'Web Development',
    difficulty: 'Beginner to Advanced',
    duration: '6 months',
    rating: 4.8,
    downloads: 1250,
    url: '/resources/web-dev-roadmap.pdf',
    topics: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Databases', 'Deployment']
  },
  {
    id: 2,
    title: 'Data Structures & Algorithms Cheat Sheet',
    description: 'Quick reference for common data structures, algorithms, and their time/space complexities.',
    category: 'Computer Science',
    difficulty: 'Intermediate',
    duration: '2 weeks',
    rating: 4.9,
    downloads: 2100,
    url: '/resources/dsa-cheatsheet.pdf',
    topics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Sorting', 'Searching']
  },
  {
    id: 3,
    title: 'Git & GitHub Best Practices',
    description: 'Essential Git commands, branching strategies, and collaborative development workflows.',
    category: 'Version Control',
    difficulty: 'Beginner',
    duration: '1 week',
    rating: 4.7,
    downloads: 980,
    url: '/resources/git-best-practices.pdf',
    topics: ['Git Basics', 'Branching', 'Merging', 'Pull Requests', 'Issues']
  },
  {
    id: 4,
    title: 'System Design Fundamentals',
    description: 'Introduction to scalable system architecture, load balancing, and distributed systems.',
    category: 'System Design',
    difficulty: 'Advanced',
    duration: '1 month',
    rating: 4.6,
    downloads: 750,
    url: '/resources/system-design.pdf',
    topics: ['Scalability', 'Load Balancing', 'Caching', 'Databases', 'Microservices']
  }
]

const resumeTemplates = [
  {
    id: 1,
    title: 'Software Engineer Resume Template',
    description: 'Clean, professional template optimized for software engineering positions.',
    category: 'Resume',
    format: 'PDF + Word',
    downloads: 3200,
    url: '/resources/software-engineer-resume.pdf',
    preview: '/api/placeholder/300/400'
  },
  {
    id: 2,
    title: 'Data Scientist Resume Template',
    description: 'Template highlighting technical skills, projects, and data science experience.',
    category: 'Resume',
    format: 'PDF + Word',
    downloads: 1800,
    url: '/resources/data-scientist-resume.pdf',
    preview: '/api/placeholder/300/400'
  },
  {
    id: 3,
    title: 'Frontend Developer Resume Template',
    description: 'Modern template showcasing frontend skills, projects, and design experience.',
    category: 'Resume',
    format: 'PDF + Word',
    downloads: 2400,
    url: '/resources/frontend-developer-resume.pdf',
    preview: '/api/placeholder/300/400'
  }
]

const portfolioTemplates = [
  {
    id: 1,
    title: 'React Portfolio Template',
    description: 'Modern, responsive portfolio template built with React and TailwindCSS.',
    category: 'Portfolio',
    technologies: ['React', 'TailwindCSS', 'Vercel'],
    stars: 450,
    url: 'https://github.com/tech-portfolio-builders/react-portfolio-template',
    demo: 'https://react-portfolio-demo.vercel.app'
  },
  {
    id: 2,
    title: 'Next.js Developer Portfolio',
    description: 'Full-stack portfolio template with blog functionality and project showcase.',
    category: 'Portfolio',
    technologies: ['Next.js', 'TypeScript', 'MDX'],
    stars: 320,
    url: 'https://github.com/tech-portfolio-builders/nextjs-portfolio',
    demo: 'https://nextjs-portfolio-demo.vercel.app'
  },
  {
    id: 3,
    title: 'Minimal Portfolio Template',
    description: 'Clean, minimal portfolio template focusing on content and readability.',
    category: 'Portfolio',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    stars: 280,
    url: 'https://github.com/tech-portfolio-builders/minimal-portfolio',
    demo: 'https://minimal-portfolio-demo.vercel.app'
  }
]

const usefulLinks = [
  {
    id: 1,
    title: 'LeetCode',
    description: 'Practice coding problems and prepare for technical interviews.',
    category: 'Interview Prep',
    url: 'https://leetcode.com',
    type: 'external'
  },
  {
    id: 2,
    title: 'MDN Web Docs',
    description: 'Comprehensive documentation for web technologies.',
    category: 'Documentation',
    url: 'https://developer.mozilla.org',
    type: 'external'
  },
  {
    id: 3,
    title: 'GitHub Student Pack',
    description: 'Free tools and services for students including hosting, domains, and software.',
    category: 'Student Resources',
    url: 'https://education.github.com/pack',
    type: 'external'
  },
  {
    id: 4,
    title: 'FreeCodeCamp',
    description: 'Free coding bootcamp with interactive lessons and projects.',
    category: 'Learning',
    url: 'https://freecodecamp.org',
    type: 'external'
  },
  {
    id: 5,
    title: 'Stack Overflow',
    description: 'Q&A community for programmers to ask and answer questions.',
    category: 'Community',
    url: 'https://stackoverflow.com',
    type: 'external'
  },
  {
    id: 6,
    title: 'UW Madison CS Resources',
    description: 'Department-specific resources and course information.',
    category: 'University',
    url: 'https://cs.wisc.edu',
    type: 'external'
  }
]

const categories = [
  { name: 'All Resources', count: studyGuides.length + resumeTemplates.length + portfolioTemplates.length + usefulLinks.length, active: true },
  { name: 'Study Guides', count: studyGuides.length, active: false },
  { name: 'Resume Templates', count: resumeTemplates.length, active: false },
  { name: 'Portfolio Templates', count: portfolioTemplates.length, active: false },
  { name: 'Useful Links', count: usefulLinks.length, active: false }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Resources
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to build your technical skills and advance your career. 
              From study guides to portfolio templates, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
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

      {/* Study Guides */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Study Guides
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive guides to help you master different areas of technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studyGuides.map((guide) => (
              <div key={guide.id} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <BookOpenIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {guide.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                    <StarIcon className="h-4 w-4 mr-1 text-yellow-400" />
                    <span>{guide.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {guide.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {guide.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-4">
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{guide.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <DownloadIcon className="h-4 w-4 mr-1" />
                    <span>{guide.downloads} downloads</span>
                  </div>
                </div>

                <a
                  href={guide.url}
                  className="btn-primary inline-flex items-center"
                >
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download Guide
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Templates */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Resume Templates
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Professional resume templates tailored for different tech roles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resumeTemplates.map((template) => (
              <div key={template.id} className="card text-center">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <DocumentTextIcon className="h-16 w-16 text-gray-400 dark:text-gray-500" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {template.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {template.description}
                </p>
                
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-500 mb-4">
                  <DownloadIcon className="h-4 w-4 mr-1" />
                  <span>{template.downloads} downloads</span>
                </div>
                
                <a
                  href={template.url}
                  className="btn-primary inline-flex items-center"
                >
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download Template
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Templates */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Portfolio Templates
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ready-to-use portfolio templates to showcase your work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioTemplates.map((template) => (
              <div key={template.id} className="card">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg mb-4 flex items-center justify-center">
                  <CodeBracketIcon className="h-16 w-16 text-primary-600 dark:text-primary-400" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {template.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {template.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-4">
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 mr-1 text-yellow-400" />
                    <span>{template.stars} stars</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={template.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-center text-sm"
                  >
                    View Code
                  </a>
                  <a
                    href={template.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-center text-sm inline-flex items-center justify-center"
                  >
                    Live Demo
                    <ExternalLinkIcon className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Useful Links
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Curated collection of helpful resources for your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usefulLinks.map((link) => (
              <div key={link.id} className="card">
                <div className="flex items-start space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex-shrink-0">
                    <LinkIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {link.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                        {link.category}
                      </span>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium inline-flex items-center"
                      >
                        Visit
                        <ExternalLinkIcon className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
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
            Need More Resources?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Have a resource you'd like to share or need help finding something specific? 
            Reach out to our community for recommendations and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:tpbs@wisc.edu"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Suggest a Resource
            </a>
            <a
              href="/events"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Join Our Events
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
