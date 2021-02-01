module.exports.definitions = {
  Lesson: {
    type: 'object',
    description: 'Lesson object',
    required: ['id', 'title', 'teacher_id'],
    properties: {
      id: {
        type: 'number',
        description: 'Id of the lesson',
      },
      title: {
        type: 'string',
        description: 'Name of the lesson',
      },
      teacher_id: {
        type: 'number',
        description: 'Teacher of the lesson'
      }
    },
  },
  LessonWithoutId: {
    type: 'object',
    description: 'Lesson object',
    required: ['title', 'teacher_id'],
    properties: {
      title: {
        type: 'string',
        description: 'Name of the lesson',
      },
      teacher_id: {
        type: 'number',
        description: 'Teacher of the lesson'
      }
    },
  },
};

module.exports.paths = {
  "/lessons": {
    get: {
      summary: 'Get all lessons',
      description: 'Get all lessons',
      tags: ['Lesson'],
      responses: {
        200: {
          description: 'Successful response. All lessons are returned.',
          schema: {
            type: 'array',
            items: {
              $ref: '#/definitions/Lesson',
            },
          },
        },
        500: {
          $ref: '#/responses/UnknownServerError',
        },
      },
    },
    post: {
      summary: 'Create lesson',
      description: 'Create new lesson',
      tags: ['Lesson'],
      parameters: [
        {
          name: 'Lesson',
          in: 'body',
          required: true,
          schema: {
            $ref: '#/definitions/LessonWithoutId',
          },
        },
      ],
      responses: {
        201: {
          description: 'Successful response. Lesson is created',
          schema: {
            $ref: '#/definitions/Lesson'
          },
        },
        500: {
          $ref: '#/responses/UnknownServerError',
        },
      },
    },
    put: {
      summary: 'Update lesson',
      description: 'Update lesson',
      tags: ['Lesson'],
      parameters: [{
        name: 'Lesson',
        in: 'body',
        required: true,
        schema: {
            $ref: '#/definitions/Lesson',
        },
      }],
      responses: {
        201: {
          description: 'Successful response. Lesson is updated',
          schema: {
            $ref: '#/definitions/Lesson'
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
  "/lessons/{id}": {
    get: {
      summary: 'Get lesson by id',
      description: 'Get lesson by id',
      tags: ['Lesson'],
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
          description: 'Successful response. Lesson is returned.',
          schema: {
            $ref: '#/definitions/Lesson',
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
      summary: 'Delete lesson by id',
      description: 'Delete lesson by id',
      tags: ['Lesson'],
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
          description: 'Successful response. Lesson is deleted.',
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