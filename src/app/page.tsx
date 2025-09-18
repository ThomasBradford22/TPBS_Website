import Link from 'next/link'
import { 
  CodeBracketIcon, 
  UserGroupIcon, 
  CalendarDaysIcon,
  BookOpenIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Hands-on Workshops',
    description: 'Learn Git, GitHub, Docker, APIs, and more through practical workshops designed to build real skills.',
    icon: CodeBracketIcon,
    href: '/events'
  },
  {
    name: 'Portfolio Projects',
    description: 'Work on semester-long team projects that showcase your abilities to potential employers.',
    icon: SparklesIcon,
    href: '/projects'
  },
  {
    name: 'Career Development',
    description: 'Get feedback on resumes, practice technical interviews, and connect with industry professionals.',
    icon: UserGroupIcon,
    href: '/resources'
  },
  {
    name: 'Community',
    description: 'Join a supportive community of like-minded students passionate about technology and growth.',
    icon: BookOpenIcon,
    href: '/members'
  }
]

const upcomingEvents = [
  {
    title: 'Git & GitHub 101 Workshop',
    date: 'January 15, 2024',
    time: '6:00 PM - 8:00 PM',
    location: 'Computer Sciences Building, Room 1240',
    description: 'Learn the fundamentals of version control and collaborative development.'
  },
  {
    title: 'Portfolio Website Workshop',
    date: 'January 22, 2024',
    time: '6:00 PM - 8:00 PM',
    location: 'Computer Sciences Building, Room 1240',
    description: 'Build your personal portfolio website using modern web technologies.'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Tech Portfolio{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                Builders Club
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Building portfolios, building futures. Join us at UW Madison to develop your technical skills 
              and create impressive portfolio projects that will set you apart in the tech industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="btn-primary inline-flex items-center justify-center px-8 py-3 text-lg"
              >
                Join Our Next Event
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/projects"
                className="btn-secondary inline-flex items-center justify-center px-8 py-3 text-lg"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide a comprehensive platform for students to develop technical skills, 
              build impressive portfolios, and prepare for successful careers in technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.name}
                href={feature.href}
                className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-200">
                  <feature.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join us for hands-on workshops and collaborative projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <CalendarDaysIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {event.date} • {event.time}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {event.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  📍 {event.location}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/events"
              className="btn-primary inline-flex items-center"
            >
              View All Events
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Future?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the Tech Portfolio Builders Club and start creating projects that will 
            impress employers and advance your career in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Join Our Next Event
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/members"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Meet Our Members
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
