// Base API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

// Generic API helper
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('API call failed:', error)
    throw error
  }
}

// Business API
export const businessAPI = {
  getAll: () => apiCall('/businesses'),
  getById: (id) => apiCall(`/businesses/${id}`),
  search: (query) => apiCall(`/businesses/search?q=${encodeURIComponent(query)}`),
  create: (data) => apiCall('/businesses', { 
    method: 'POST', 
    body: JSON.stringify(data) 
  }),
  update: (id, data) => apiCall(`/businesses/${id}`, { 
    method: 'PUT', 
    body: JSON.stringify(data) 
  }),
  delete: (id) => apiCall(`/businesses/${id}`, { method: 'DELETE' })
}

// Events API
export const eventsAPI = {
  getAll: () => apiCall('/events'),
  getById: (id) => apiCall(`/events/${id}`),
  getUpcoming: () => apiCall('/events/upcoming'),
  create: (data) => apiCall('/events', { 
    method: 'POST', 
    body: JSON.stringify(data) 
  }),
  attend: (eventId, userId) => apiCall(`/events/${eventId}/attend`, { 
    method: 'POST', 
    body: JSON.stringify({ userId }) 
  })
}

// Complaints API
export const complaintsAPI = {
  getAll: () => apiCall('/complaints'),
  getById: (id) => apiCall(`/complaints/${id}`),
  create: (data) => apiCall('/complaints', { 
    method: 'POST', 
    body: JSON.stringify(data) 
  }),
  updateStatus: (id, status) => apiCall(`/complaints/${id}/status`, { 
    method: 'PATCH', 
    body: JSON.stringify({ status }) 
  }),
  addResponse: (id, response) => apiCall(`/complaints/${id}/response`, { 
    method: 'POST', 
    body: JSON.stringify({ response }) 
  })
}

// External APIs
export const externalAPI = {
  // Weather API (example)
  getWeather: (city) => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
  },
  
  // Google Maps Geocoding (example)
  geocodeAddress: (address) => {
    const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`)
      .then(res => res.json())
  }
}

// Mock data fallback (for development)
export const mockData = {
  businesses: [
    // Your existing mock business data
  ],
  events: [
    // Your existing mock event data
  ],
  complaints: [
    // Your existing mock complaint data
  ]
} 