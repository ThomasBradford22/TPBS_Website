import { 
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  CodeBracketIcon,
  BookOpenIcon,
  PresentationChartBarIcon,
  TrophyIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const upcomingEvents = [
  {
    id: 1,
    title: 'Git & GitHub 101 Workshop',
    date: '2024-01-15',
    time: '6:00 PM - 8:00 PM',
    location: 'Computer Sciences Building, Room 1240',
    type: 'Workshop',
    description: 'Learn the fundamentals of version control and collaborative development. Perfect for beginners who want to understand Git workflows, branching, pull requests, and GitHub best practices.',
    instructor: 'Alex Chen',
    maxAttendees: 30,
    currentAttendees: 18,
    difficulty: 'Beginner',
    topics: ['Git Basics', 'GitHub Workflow', 'Branching', 'Pull Requests', 'Issues'],
    requirements: 'Bring your laptop with Git installed',
    registrationUrl: 'https://forms.gle/example1'
  },
  {
    id: 2,
    title: 'Personal Portfolio Website Workshop',
    date: '2024-01-22',
    time: '6:00 PM - 8:00 PM',
    location: 'Computer Sciences Building, Room 1240',
    type: 'Workshop',
    description: 'Build your personal portfolio website using modern web technologies. We\'ll cover HTML, CSS, React basics, and deployment strategies.',
    instructor: 'Sarah Johnson',
    maxAttendees: 25,
    currentAttendees: 22,
    difficulty: 'Beginner',
    topics: ['HTML/CSS', 'React Basics', 'Responsive Design', 'GitHub Pages', 'Netlify'],
    requirements: 'Basic programming knowledge recommended',
    registrationUrl: 'https://forms.gle/example2'
  },
  {
    id: 3,
    title: 'Docker Crash Course',
    date: '2024-01-29',
    time: '6:00 PM - 8:00 PM',
    location: 'Computer Sciences Building, Room 1240',
    type: 'Workshop',
    description: 'Learn how to containerize applications with Docker. We\'ll cover Docker basics, Dockerfiles, and container orchestration.',
    instructor: 'Mike Rodriguez',
    maxAttendees: 20,
    currentAttendees: 15,
    difficulty: 'Intermediate',
    topics: ['Docker Basics', 'Dockerfiles', 'Container Orchestration', 'Docker Compose'],
    requirements: 'Basic command line knowledge',
    registrationUrl: 'https://forms.gle/example3'
  },
  {
    id: 4,
    title: 'Mini Hack Night: Weather App',
    date: '2024-02-05',
    time: '6:00 PM - 10:00 PM',
    location: 'Computer Sciences Building, Room 1240',
    type: 'Hackathon',
    description: 'Join us for a 4-hour coding sprint to build a weather application. Work in teams or solo to create something amazing!',
    instructor: 'Club Members',
    maxAttendees: 40,
    currentAttendees: 28,
    difficulty: 'All Levels',
    topics: ['API Integration', 'Frontend Development', 'Team Collaboration'],
    requirements: 'Bring your laptop and creativity',
    registrationUrl: 'https://forms.gle/example4'
  },
  {
    id: 5,
    title: 'Resume & Portfolio Review Night',
    date: '2024-02-12',
    time: '6:00 PM - 8:00 PM',
    location: 'Computer Sciences Building, Room 1240',
    type: 'Career Development',
    description: 'Get feedback on your resume and portfolio from industry professionals and experienced club members.',
    instructor: 'Guest Speakers',
    maxAttendees: 35,
    currentAttendees: 24,
    difficulty: 'All Levels',
    topics: ['Resume Writing', 'Portfolio Optimization', 'Career Advice'],
    requirements: 'Bring your resume and portfolio links',
    registrationUrl: 'https://forms.gle/example5'
  }
]

const pastEvents = [
  {
    id: 6,
    title: 'Intro to APIs Workshop',
    date: '2023-12-18',
    type: 'Workshop',
    description: 'Learned how to integrate with public APIs and display data in applications.',
    attendees: 25
  },
  {
    id: 7,
    title: 'Mock Technical Interviews',
    date: '2023-12-11',
    type: 'Career Development',
    description: 'Practiced coding problems and interview techniques with fellow members.',
    attendees: 20
  },
  {
    id: 8,
    title: 'Holiday Hack Night',
    date: '2023-12-04',
    type: 'Hackathon',
    description: 'Built festive-themed applications and games in a fun, collaborative environment.',
    attendees: 35
  }
]

const eventTypes = [
  { name: 'All Events', count: upcomingEvents.length + pastEvents.length, active: true },
  { name: 'Workshops', count: upcomingEvents.filter(e => e.type === 'Workshop').length, active: false },
  { name: 'Hackathons', count: upcomingEvents.filter(e => e.type === 'Hackathon').length, active: false },
  { name: 'Career Development', count: upcomingEvents.filter(e => e.type === 'Career Development').length, active: false }
]

const getEventIcon = (type: string) => {
  switch (type) {
    case 'Workshop':
      return <BookOpenIcon className="h-6 w-6" />
    case 'Hackathon':
      return <CodeBracketIcon className="h-6 w-6" />
    case 'Career Development':
      return <PresentationChartBarIcon className="h-6 w-6" />
    default:
      return <CalendarDaysIcon className="h-6 w-6" />
  }
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    case 'Advanced':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    default:
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
  }
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Events & Workshops
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join us for hands-on workshops, hackathons, and career development events. 
              All skill levels are welcome!
            </p>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {eventTypes.map((type) => (
              <button
                key={type.name}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  type.active
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {type.name} ({type.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Register for our upcoming workshops and events
            </p>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="card">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg">
                        {getEventIcon(event.type)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          {event.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center">
                            <CalendarDaysIcon className="h-4 w-4 mr-1" />
                            <span>{new Date(event.date).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}</span>
                          </div>
                          <div className="flex items-center">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(event.difficulty)}`}>
                        {event.difficulty}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                        {event.type}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        Instructor: {event.instructor}
                      </span>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-md"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <UserGroupIcon className="h-4 w-4 mr-1" />
                          <span>{event.currentAttendees}/{event.maxAttendees} registered</span>
                        </div>
                        <div className="text-xs">
                          Requirements: {event.requirements}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:ml-8 lg:flex-shrink-0">
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center"
                    >
                      Register Now
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Past Events
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Check out what we've been up to recently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    {getEventIcon(event.type)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {event.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                    {event.type}
                  </span>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                    <UserGroupIcon className="h-4 w-4 mr-1" />
                    <span>{event.attendees} attendees</span>
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
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Have an idea for a workshop or event? We'd love to hear from you! 
            Contact us to suggest topics or volunteer to lead a session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:tpbs@wisc.edu"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Suggest an Event
            </a>
            <a
              href="/members"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
