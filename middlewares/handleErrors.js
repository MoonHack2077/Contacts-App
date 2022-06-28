module.exports = (error, request, response) => {
	console.log(error)
	response.json({ error: error.message }).end()
}
