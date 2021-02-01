module.exports.definitions = {
  Teacher: {
    type: 'object',
    description: 'Teacher object',
    required: ['id', 'first_name', 'last_name'],
    properties: {
      id: {
        type: 'number',
        description: 'Id of the teacher',
      },
      first_name: {
        type: 'string',
        description: 'First name of the teacher',
      },
      last_name: {
        type: 'string',
        description: 'Last name of the teacher',
      }
    },
  },
  TeacherWithoutId: {
    type: 'object',
    description: 'Teacher object',
    required: ['first_name', 'last_name'],
    properties: {
      first_name: {
        type: 'string',
        description: 'First name of the teacher',
      },
      last_name: {
        type: 'string',
        description: 'Last name of the teacher',
      }
    },
  },
};

module.exports.paths = {
  "/teachers": {
    get: {
      summary: 'Get all teachers',
      description: 'Get all teachers',
      tags: ['Teacher'],
      responses: {
        200: {
          description: 'Successful response. All teachers are returned.',
          schema: {
            type: 'array',
            items: {
              $ref: '#/definitions/Teacher',
            },
          },
        },
        500: {
          $ref: '#/responses/UnknownServerError',
        },
      },
    },
    post: {
      summary: 'Create teacher',
      description: 'Create new teacher',
      tags: ['Teacher'],
      parameters: [
        {
          name: 'Teacher',
          in: 'body',
          required: true,
          schema: {
            $ref: '#/definitions/TeacherWithoutId',
          },
        },
      ],
      responses: {
        201: {
          description: 'Successful response. Teacher is created',
          schema: {
            $ref: '#/definitions/Teacher'
          },
        },
        500: {
          $ref: '#/responses/UnknownServerError',
        },
      },
    },
    put: {
      summary: 'Update teacher',
      description: 'Update teacher',
      tags: ['Teacher'],
      parameters: [{
        name: 'Teacher',
        in: 'body',
        required: true,
        schema: {
            $ref: '#/definitions/Teacher',
        },
      }],
      responses: {
        201: {
          description: 'Successful response. Teacher is updated',
          schema: {
            $ref: '#/definitions/Teacher'
          },
        },
        404: {
          $ref: '#/responses/NotFoundError',
        },
        500: {
          $ref: '#/responses/UnknownServerError',
        },
      },
    }
  },
  "/teachers/{id}": {
    get: {
      summary: 'Get teacher by id',
      description: 'Get teacher by id',
      tags: ['Teacher'],
      parameters: [
        {
          type: 'string',
          name: 'id',
          in: 'path',
          required: true,
        },
      ],
      responses: {
        200: {
          description: 'Successful response. Teacher is returned.',
          schema: {
            $ref: '#/definitions/Teacher',
          },
        },
        404: {
          $ref: '#/responses/NotFoundError',
        },
        500: {
          $ref: '#/responses/UnknownServerError',
        },
      },
    },
    delete: {
      summary: 'Delete teacher by id',
      description: 'Delete teacher by id',
      tags: ['Teacher'],
      parameters: [
        {
          type: 'string',
          name: 'id',
          in: 'path',
          required: true,
        },
      ],
      responses: {
        204: {
          description: 'Successful response. Teacher is deleted.',
          schema: {
            $ref: '#/responses/NoContent',
          },
        },
        404: {
          $ref: '#/responses/NotFoundError',
        },
        500: {
          $ref: '#/responses/UnknownServerError',
        },
      },
    },
  },
}