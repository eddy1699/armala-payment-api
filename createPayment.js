const axios = require('axios').default

exports.createFormToken = async paymentConf => {
  // format: 123456789
  const username = '40398241'

  // format: testprivatekey_XXXXXXX
  // const password = 'prodpassword_YSJdYN8Yl8iEYePeCkLQRCL9eeXOO6TveoNEvWs28ohFh'
const password = 'testpassword_yiUslR9NmvvA7TBWdXarLdNUbH1cRbrI1CvqeGvpZLzOc'
  // format: api.my.psp.domain.name without https
  const endpoint = 'api.micuentaweb.pe'

  const createPaymentEndpoint = `https://${username}:${password}@${endpoint}/api-payment/V4/Charge/CreatePayment`

  try {
    const response = await axios.post(createPaymentEndpoint, paymentConf, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response?.data?.answer?.formToken) throw response
    return response.data.answer.formToken
  } catch (error) {
    throw error
  }
}
