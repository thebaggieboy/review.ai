import api from "./axios"

export const reviewService = {
  getReviews: async (params) => {
    const response = await api.get("/reviews", { params })
    return response.data
  },

  respondToReview: async (reviewId, response) => {
    const res = await api.post(`/reviews/${reviewId}/respond`, { response })
    return res.data
  },

  // Add more review-related API calls as needed
}

