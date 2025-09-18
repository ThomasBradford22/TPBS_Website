import { 
  UserCircleIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  CalendarIcon,
  CodeBracketIcon,
  StarIcon
} from 'lucide-react'

const members = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'President',
    major: 'Computer Science',
    year: 'Senior',
    avatar: '/api/placeholder/150/150',
    bio: 'Passionate about full-stack development and open source. Leading the club to help students build impressive portfolios.',
    github: 'https://github.com/alexchen',
    linkedin: 'https://linkedin.com/in/alexchen',
    email: 'alex.chen@wisc.edu',
    location: 'Madison, WI',
    joinDate: '2022-09-01',
    projects: 8,
    contributions: 156
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Vice President',
    major: 'Computer Engineering',
    year: 'Junior',
    avatar: '/api/placeholder/150/150',
    bio: 'Interested in mobile development and UI/UX design. Loves creating beautiful, user-friendly applications.',
    github: 'https://github.com/sarahjohnson',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    email: 'sarah.johnson@wisc.edu',
    location: 'Madison, WI',
    joinDate: '2022-09-15',
    projects: 6,
    contributions: 98
  },
  {
    id: 3,
    name: 'Mike Rodriguez',
    role: 'Treasurer',
    major: 'Data Science',
    year: 'Senior',
    avatar: '/api/placeholder/150/150',
    bio: 'Data science enthusiast with a passion for machine learning and analytics. Always eager to learn new technologies.',
    github: 'https://github.com/mikerodriguez',
    linkedin: 'https://linkedin.com/in/mikerodriguez',
    email: 'mike.rodriguez@wisc.edu',
    location: 'Madison, WI',
    joinDate: '2022-10-01',
    projects: 5,
    contributions: 87
  },
  {
    id: 4,
    name: 'Emma Wilson',
    role: 'Secretary',
    major: 'Computer Science',
    year: 'Sophomore',
    avatar: '/api/placeholder/150/150',
    bio: 'Web development enthusiast with a focus on React and modern JavaScript. Enjoys building interactive user experiences.',
    github: 'https://github.com/emmawilson',
    linkedin: 'https://linkedin.com/in/emmawilson',
    email: 'emma.wilson@wisc.edu',
    location: 'Madison, WI',
    joinDate: '2023-01-15',
    projects: 4,
    contributions: 72
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'Event Coordinator',
    major: 'Software Engineering',
    year: 'Junior',
    avatar: '/api/placeholder/150/150',
    bio: 'Backend development specialist with experience in Node.js and Python. Passionate about system architecture and DevOps.',
    github: 'https://github.com/davidkim',
    linkedin: 'https://linkedin.com/in/davidkim',
    email: 'david.kim@wisc.edu',
    location: 'Madison, WI',
    joinDate: '2022-11-01',
    projects: 7,
    contributions: 134
  },
  {
    id: 6,
    name: 'Lisa Zhang',
    role: 'Marketing Lead',
    major: 'Computer Science',
    year: 'Senior',
    avatar: '/api/placeholder/150/150',
    bio: 'Frontend developer with a passion for design systems and accessibility. Believes in creating inclusive technology.',
    github: 'https://github.com/lisazhang',
    linkedin: 'https://linkedin.com/in/lisazhang',
    email: 'lisa.zhang@wisc.edu',
    location: 'Madison, WI',
    joinDate: '2022-09-20',
    projects: 6,
    contributions: 112
  },
  {
    id: 7,
    name: 'Rachel Green',
    role: 'Member',
    major: 'Information Systems',
    year: 'Junior',
    avatar: '/api/placeholder/150/150',
    bio: 'Full-stack developer with a focus on database design and API development. Enjoys solving complex technical challenges.',
    github: 'https://github.com/rachelgreen',
    linkedin: 'https://linkedin.com/in/rachelgreen',
    email: 'rachel.green@wisc.edu',
    location: 'Madison, WI',
    joinDate: '2023-02-01',
    projects: 3,
    contributions: 45
  },
  {
    id: 8,
    name: 'Tom Anderson',
    role: 'Member',
    major: 'Computer Science',
    year: 'Sophomore',
    avatar: '/api/placeholder/150/150',
    bio: 'Mobile app developer with experience in React Native and Flutter. Passionate about creating seamless user experiences.',
    github: 'https://github.com/tomanderson',
    linkedin: 'https://linkedin.com/in/tomanderson',
    email: 'tom.anderson@wisc.edu',
    location: 'Madison, WI',
    joinDate: '2023-03-15',
    projects: 2,
    contributions: 28
  }
]

const leadership = members.filter(member => 
  ['President', 'Vice President', 'Treasurer', 'Secretary', 'Event Coordinator', 'Marketing Lead'].includes(member.role)
)

const regularMembers = members.filter(member => member.role === 'Member')

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Members
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the talented students who make up the Tech Portfolio Builders Club. 
              Each member brings unique skills and perspectives to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The dedicated leaders who guide our club's vision and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member) => (
              <div key={member.id} className="card text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-full flex items-center justify-center">
                    <UserCircleIcon className="h-16 w-16 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {member.major} • {member.year}
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                  {member.bio}
                </p>

                <div className="flex justify-center space-x-4 mb-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    aria-label="Email"
                  >
                    <MailIcon className="h-5 w-5" />
                  </a>
                </div>

                <div className="flex justify-center space-x-6 text-sm text-gray-500 dark:text-gray-500">
                  <div className="flex items-center">
                    <CodeBracketIcon className="h-4 w-4 mr-1" />
                    <span>{member.projects} projects</span>
                  </div>
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 mr-1" />
                    <span>{member.contributions} contributions</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Members */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Active Members
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our passionate members who contribute to projects and events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularMembers.map((member) => (
              <div key={member.id} className="card">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <UserCircleIcon className="h-12 w-12 text-primary-600 dark:text-primary-400" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {member.major} • {member.year}
                    </p>
                    <div className="flex items-center mt-1 text-xs text-gray-500 dark:text-gray-500">
                      <MapPinIcon className="h-3 w-3 mr-1" />
                      <span>{member.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 mb-4">
                  {member.bio}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  </div>
                  
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                    <CalendarIcon className="h-3 w-3 mr-1" />
                    <span>Joined {new Date(member.joinDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-primary-600 dark:bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Become part of a supportive community of tech enthusiasts. 
            Build projects, learn new skills, and grow your network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/events"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Attend Our Next Event
            </a>
            <a
              href="mailto:tpbs@wisc.edu"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
