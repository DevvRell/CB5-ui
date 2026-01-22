import { useState } from 'react'
import { MessageSquare, AlertCircle, CheckCircle, Clock, MapPin, Plus, Filter } from 'lucide-react'

const ComplaintsPage = () => {
  const [showForm, setShowForm] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState('all')

  // Mock complaints data
  const complaints = [
    {
      id: 1,
      title: "Broken Street Light",
      description: "Street light on Oak Street between 5th and 6th Avenue has been out for 3 days. It's very dark and unsafe for pedestrians.",
      category: "Infrastructure",
      location: "Oak Street, between 5th and 6th Avenue",
      status: "resolved",
      priority: "high",
      submittedBy: "John Smith",
      submittedDate: "2024-02-10",
      resolvedDate: "2024-02-12",
      response: "Street light has been repaired. Thank you for reporting this issue."
    },
    {
      id: 2,
      title: "Pothole on Main Street",
      description: "Large pothole on Main Street near the intersection with Pine Avenue. It's causing damage to vehicles.",
      category: "Roads & Sidewalks",
      location: "Main Street, near Pine Avenue intersection",
      status: "in-progress",
      priority: "medium",
      submittedBy: "Sarah Johnson",
      submittedDate: "2024-02-08",
      resolvedDate: null,
      response: "Issue has been identified and scheduled for repair within the next week."
    },
    {
      id: 3,
      title: "Noise Complaint - Construction",
      description: "Construction work starting at 6 AM on weekends is too early and disturbing residents.",
      category: "Noise",
      location: "Construction site on Maple Drive",
      status: "pending",
      priority: "low",
      submittedBy: "Mike Davis",
      submittedDate: "2024-02-14",
      resolvedDate: null,
      response: "We are investigating this complaint and will contact the construction company."
    },
    {
      id: 4,
      title: "Garbage Not Collected",
      description: "Garbage collection was missed on Tuesday for the entire block of Elm Street.",
      category: "Sanitation",
      location: "Elm Street, entire block",
      status: "resolved",
      priority: "medium",
      submittedBy: "Lisa Wilson",
      submittedDate: "2024-02-06",
      resolvedDate: "2024-02-07",
      response: "Garbage was collected the following day. We apologize for the inconvenience."
    },
    {
      id: 5,
      title: "Broken Playground Equipment",
      description: "The swing set in Central Park playground has a broken chain and is unsafe for children.",
      category: "Parks & Recreation",
      location: "Central Park Playground",
      status: "in-progress",
      priority: "high",
      submittedBy: "David Brown",
      submittedDate: "2024-02-12",
      resolvedDate: null,
      response: "Equipment has been temporarily closed off. Repairs scheduled for this week."
    },
    {
      id: 6,
      title: "Traffic Light Timing Issue",
      description: "The traffic light at the intersection of Oak and Pine is too short for pedestrians to cross safely.",
      category: "Traffic",
      location: "Intersection of Oak and Pine Streets",
      status: "pending",
      priority: "medium",
      submittedBy: "Jennifer Lee",
      submittedDate: "2024-02-15",
      resolvedDate: null,
      response: "This issue has been logged and will be reviewed by our traffic engineering team."
    }
  ]

  const categories = [
    "Infrastructure",
    "Roads & Sidewalks", 
    "Noise",
    "Sanitation",
    "Parks & Recreation",
    "Traffic",
    "Safety",
    "Other"
  ]

  const priorities = [
    { value: "low", label: "Low", color: "bg-green-100 text-green-800" },
    { value: "medium", label: "Medium", color: "bg-yellow-100 text-yellow-800" },
    { value: "high", label: "High", color: "bg-red-100 text-red-800" }
  ]

  const statuses = [
    { value: "all", label: "All Statuses" },
    { value: "pending", label: "Pending" },
    { value: "in-progress", label: "In Progress" },
    { value: "resolved", label: "Resolved" }
  ]

  const filteredComplaints = complaints.filter(complaint => {
    return selectedStatus === 'all' || complaint.status === selectedStatus
  })

  const getStatusIcon = (status) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="text-green-600" size={20} />
      case 'in-progress':
        return <Clock className="text-yellow-600" size={20} />
      case 'pending':
        return <AlertCircle className="text-red-600" size={20} />
      default:
        return <MessageSquare className="text-gray-600" size={20} />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-800'
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800'
      case 'pending':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Complaints</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Report issues, voice concerns, and track the status of community problems. 
            Together we can make our neighborhood better.
          </p>
        </div>

        {/* Action Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowForm(!showForm)}
                className="btn-primary flex items-center space-x-2"
              >
                <Plus size={16} />
                <span>Submit New Complaint</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="input-field pl-10"
                >
                  {statuses.map(status => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Complaint Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit New Complaint</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    placeholder="Brief description of the issue"
                    className="input-field"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select className="input-field" required>
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  placeholder="Provide detailed information about the issue..."
                  rows={4}
                  className="input-field"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    placeholder="Where is this issue located?"
                    className="input-field"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority *
                  </label>
                  <select className="input-field" required>
                    <option value="">Select priority level</option>
                    {priorities.map(priority => (
                      <option key={priority.value} value={priority.value}>
                        {priority.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex space-x-4">
                <button type="submit" className="btn-primary">
                  Submit Complaint
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowForm(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Complaints List */}
        <div className="space-y-6">
          {filteredComplaints.map(complaint => (
            <div key={complaint.id} className="card">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(complaint.status)}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{complaint.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-gray-600">by {complaint.submittedBy}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{formatDate(complaint.submittedDate)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(complaint.status)}`}>
                    {complaint.status.replace('-', ' ').toUpperCase()}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${priorities.find(p => p.value === complaint.priority)?.color}`}>
                    {complaint.priority.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4">{complaint.description}</p>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="mr-2" size={16} />
                  <span>{complaint.location}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Category:</strong> {complaint.category}
                </div>
              </div>

              {/* Response */}
              {complaint.response && (
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Response:</h4>
                  <p className="text-gray-600">{complaint.response}</p>
                  {complaint.resolvedDate && (
                    <p className="text-sm text-gray-500 mt-2">
                      Resolved on {formatDate(complaint.resolvedDate)}
                    </p>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-2 pt-4 border-t border-gray-200">
                <button className="btn-secondary text-sm">
                  Update Status
                </button>
                <button className="btn-secondary text-sm">
                  Add Comment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredComplaints.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No complaints found</h3>
            <p className="text-gray-600">
              {selectedStatus === 'all' 
                ? "No complaints have been submitted yet. Be the first to report an issue!"
                : `No complaints with status "${selectedStatus}" found.`
              }
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complaint Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {complaints.length}
              </div>
              <div className="text-gray-600">Total Complaints</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {complaints.filter(c => c.status === 'resolved').length}
              </div>
              <div className="text-gray-600">Resolved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {complaints.filter(c => c.status === 'in-progress').length}
              </div>
              <div className="text-gray-600">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">
                {complaints.filter(c => c.status === 'pending').length}
              </div>
              <div className="text-gray-600">Pending</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComplaintsPage 