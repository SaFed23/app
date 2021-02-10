module.exports.definitions = {
   Error: {
		type: 'object',
		description: 'Error messages',
		required: ['code'],
		properties: {
			code: {
				type: 'integer',
				description: 'Four-digits error code',
			},
			message: {
				type: 'string',
				description: 'Error description',
			},
		},
		example: {
			code: 1000,
			message: 'Unknown error with API',
		},
	},
	// 204 No Content
	NoContent: {
		type: "string",
		description: 'Success no content response',
	},
	// Error 404
	NotFoundError: {
		type: "object",
		description: 'Not found error',
		required: ['code'],
		properties: {
			code: {
				type: 'integer',
				description: 'Four-digits error code',
			},
			message: {
				type: 'string',
				description: 'Error description',
			},
		},
	},
	// Error 500
	UnknownServerError: {
		type: "object",
		description: 'Unknown server error',
		required: ['code'],
		properties: {
			code: {
				type: 'integer',
				description: 'Four-digits error code',
			},
			message: {
				type: 'string',
				description: 'Error description',
			},
		},
	},
};