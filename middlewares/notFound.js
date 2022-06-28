module.exports = (request, response, next) => {
  response.status(404).json({
  status: 404,
	message: 'Not found'
	}).end()
}
