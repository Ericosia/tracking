import { MockData } from '../types';

// Sample mock data for demonstration
export const mockData: MockData = {
  shipments: {
    "WE1234567890": {
      trackingNumber: "WE1234567890",
      status: "in-transit",
      service: "Express International",
      estimatedDelivery: "June 15, 2025",
      origin: "New York, USA",
      destination: "London, UK",
      events: [
        {
          date: "June 10, 2025",
          time: "14:30",
          location: "Paris, France",
          status: "In Transit",
          details: "Package in transit to delivery destination",
          isCompleted: false,
          isCurrent: true
        },
        {
          date: "June 9, 2025",
          time: "08:15",
          location: "Paris, France",
          status: "Arrived at Sort Facility",
          details: "Package has arrived at Paris sort facility",
          isCompleted: true,
          isCurrent: false
        },
        {
          date: "June 8, 2025",
          time: "23:45",
          location: "Frankfurt, Germany",
          status: "Departed Facility",
          details: "Package has left the facility",
          isCompleted: true,
          isCurrent: false
        },
        {
          date: "June 8, 2025",
          time: "14:20",
          location: "Frankfurt, Germany",
          status: "International Shipment Release",
          details: "Package released from customs",
          isCompleted: true,
          isCurrent: false
        },
        {
          date: "June 7, 2025",
          time: "09:30",
          location: "Frankfurt, Germany",
          status: "Customs Clearance",
          details: "Package is being processed by customs",
          isCompleted: true,
          isCurrent: false
        },
        {
          date: "June 6, 2025",
          time: "22:15",
          location: "New York, USA",
          status: "Departed Origin",
          details: "Package has left the origin country",
          isCompleted: true,
          isCurrent: false
        },
        {
          date: "June 5, 2025",
          time: "16:40",
          location: "New York, USA",
          status: "Processed at Origin",
          details: "Package has been processed at origin facility",
          isCompleted: true,
          isCurrent: false
        }
      ]
    },
    "WE9876543210": {
      trackingNumber: "WE9876543210",
      status: "delivered",
      service: "Priority Domestic",
      estimatedDelivery: "June 8, 2025",
      origin: "Los Angeles, USA",
      destination: "Chicago, USA",
      events: [
        {
          date: "June 8, 2025",
          time: "11:20",
          location: "Chicago, USA",
          status: "Delivered",
          details: "Package has been delivered. Signed by: J. Smith",
          isCompleted: true,
          isCurrent: false
        },
        {
          date: "June 8, 2025",
          time: "09:15",
          location: "Chicago, USA",
          status: "Out for Delivery",
          details: "Package is out for delivery",
          isCompleted: true,
          isCurrent: false
        },
        {
          date: "June 7, 2025",
          time: "19:40",
          location: "Chicago, USA",
          status: "Arrived at Local Facility",
          details: "Package has arrived at delivery facility",
          isCompleted: true,
          isCurrent: false
        },
        {
          date: "June 6, 2025",
          time: "21:30",
          location: "Denver, USA",
          status: "In Transit",
          details: "Package in transit to destination",
          isCompleted: true,
          isCurrent: false
        },
        {
          date: "June 5, 2025",
          time: "15:20",
          location: "Los Angeles, USA",
          status: "Shipped",
          details: "Package has shipped",
          isCompleted: true,
          isCurrent: false
        }
      ]
    },
    "WE5678901234": {
      trackingNumber: "WE5678901234",
      status: "processing",
      service: "Economy International",
      estimatedDelivery: "June 25, 2025",
      origin: "Tokyo, Japan",
      destination: "Sydney, Australia",
      events: [
        {
          date: "June 11, 2025",
          time: "10:45",
          location: "Tokyo, Japan",
          status: "Processing",
          details: "Package is being processed for international shipping",
          isCompleted: false,
          isCurrent: true
        },
        {
          date: "June 10, 2025",
          time: "14:20",
          location: "Tokyo, Japan",
          status: "Information Received",
          details: "Shipment information received",
          isCompleted: true,
          isCurrent: false
        }
      ]
    },
    "WE1111222233": {
      trackingNumber: "WE1111222233",
      status: "exception",
      service: "Express International",
      estimatedDelivery: "June 12, 2025",
      origin: "Berlin, Germany",
      destination: "Madrid, Spain",
      events: [
        {
          date: "June 10, 2025",
          time: "09:15",
          location: "Lyon, France",
          status: "Delivery Exception",
          details: "Delivery attempted - Incorrect address provided",
          isCompleted: false,
          isCurrent: true
        },
        {
          date: "June 9, 2025",
          time: "18:30",
          location: "Lyon, France",
          status: "In Transit",
          details: "Package in transit to delivery destination",
          isCompleted: true,
          isCurrent: false
        },
        {
          date: "June 8, 2025",
          time: "11:20",
          location: "Paris, France",
          status: "In Transit",
          details: "Package in transit",
          isCompleted: true,
          isCurrent: false
        },
        {
          date: "June 7, 2025",
          time: "15:45",
          location: "Berlin, Germany",
          status: "Shipped",
          details: "Package has shipped",
          isCompleted: true,
          isCurrent: false
        }
      ]
    }
  }
};