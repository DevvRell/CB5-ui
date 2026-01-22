import { useState } from 'react'
import { Search, MapPin, Phone, Mail, Star, Filter, Building2 } from 'lucide-react'

const BusinessDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Mock business data
  const businesses = [
    {
      id: 1,
      name: "Joe's Coffee Shop",
      category: "Food & Beverage",
      description: "Local coffee shop serving fresh brews and pastries",
      address: "123 Main St, Neighborhood, NY 10001",
      phone: "(555) 123-4567",
      email: "joe@joescoffee.com",
      rating: 4.8,
      reviews: 120,
      hours: "Mon-Fri: 7AM-6PM, Sat-Sun: 8AM-5PM"
    },
    {
      id: 2,
      name: "Green Thumb Garden Center",
      category: "Home & Garden",
      description: "Full-service garden center with plants, tools, and expert advice",
      address: "456 Oak Ave, Neighborhood, NY 10001",
      phone: "(555) 234-5678",
      email: "info@greenthumb.com",
      rating: 4.6,
      reviews: 89,
      hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-6PM"
    },
    {
      id: 3,
      name: "Tech Solutions Pro",
      category: "Technology",
      description: "Computer repair and IT services for home and business",
      address: "789 Tech Blvd, Neighborhood, NY 10001",
      phone: "(555) 345-6789",
      email: "service@techsolutions.com",
      rating: 4.9,
      reviews: 156,
      hours: "Mon-Fri: 8AM-6PM, Sat: 10AM-4PM"
    },
    {
      id: 4,
      name: "Community Pharmacy",
      category: "Health & Wellness",
      description: "Full-service pharmacy with prescription and over-the-counter medications",
      address: "321 Health Way, Neighborhood, NY 10001",
      phone: "(555) 456-7890",
      email: "pharmacy@communityhealth.com",
      rating: 4.7,
      reviews: 203,
      hours: "Mon-Fri: 8AM-8PM, Sat: 9AM-6PM, Sun: 10AM-4PM"
    },
    {
      id: 5,
      name: "Artisan Bakery",
      category: "Food & Beverage",
      description: "Handcrafted breads, pastries, and custom cakes",
      address: "654 Baker St, Neighborhood, NY 10001",
      phone: "(555) 567-8901",
      email: "orders@artisanbakery.com",
      rating: 4.9,
      reviews: 178,
      hours: "Tue-Sun: 6AM-3PM, Closed Monday"
    },
    {
      id: 6,
      name: "FitLife Gym",
      category: "Health & Wellness",
      description: "Modern fitness facility with personal training and group classes",
      address: "987 Fitness Ave, Neighborhood, NY 10001",
      phone: "(555) 678-9012",
      email: "membership@fitlife.com",
      rating: 4.5,
      reviews: 234,
      hours: "Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM"
    }
  ]

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Food & Beverage', label: 'Food & Beverage' },
    { value: 'Health & Wellness', label: 'Health & Wellness' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Home & Garden', label: 'Home & Garden' },
    { value: 'Retail', label: 'Retail' },
    { value: 'Services', label: 'Services' }
  ]

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || business.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Directory</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and support local businesses in your community. Find everything you need right in your neighborhood.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search businesses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field pl-10"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-center md:justify-end">
              <span className="text-gray-600">
                {filteredBusinesses.length} business{filteredBusinesses.length !== 1 ? 'es' : ''} found
              </span>
            </div>
          </div>
        </div>

        {/* Business Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBusinesses.map(business => (
            <div key={business.id} className="card hover:shadow-lg transition-shadow duration-300">
              {/* Business Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Building2 className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{business.name}</h3>
                    <span className="text-sm text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                      {business.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400" size={16} />
                  <span className="text-sm font-medium">{business.rating}</span>
                  <span className="text-sm text-gray-500">({business.reviews})</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4">{business.description}</p>

              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="mr-2" size={16} />
                  {business.address}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="mr-2" size={16} />
                  {business.phone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="mr-2" size={16} />
                  {business.email}
                </div>
              </div>

              {/* Hours */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-600">
                  <strong>Hours:</strong> {business.hours}
                </p>
              </div>

              {/* Actions */}
              <div className="flex space-x-2 mt-4 pt-4 border-t border-gray-200">
                <button className="btn-primary flex-1 text-sm">
                  Contact
                </button>
                <button className="btn-secondary text-sm">
                  Directions
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBusinesses.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No businesses found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or category filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BusinessDirectory 