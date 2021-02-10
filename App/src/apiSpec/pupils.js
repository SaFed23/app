module.exports.definitions = {
  Pupil: {
    type: 'object',
    description: 'Pupil object',
    required: ['id', 'first_name', 'last_name', 'age', 'grade'],
    properties: {
      id: {
        type: 'number',
        description: 'Id of the pupil',
      },
      first_name: {
        type: 'string',
        description: 'First name of the pupil',
      },
      last_name: {
        type: 'string',
        description: 'Last name of the pupil',
      },
      age: {
        type: 'number',
        description: 'Age of the pupil',
      },
      grade: {
        type: 'number',
        description: 'Grade of the pupil',
      }
    },
  },
  PupilWithoutId: {
    type: 'object',
    description: 'Pupil object',
    required: ['first_name', 'last_name', 'age', 'grade'],
    properties: {
      first_name: {
        type: 'string',
        description: 'First name of the pupil',
      },
      last_name: {
        type: 'string',
        description: 'Last name of the pupil',
      },
      age: {
        type: 'number',
        description: 'Age of the pupil',
      },
      grade: {
        type: 'number',
        description: 'Grade of the pupil',
      }
    },
  },
};

module.exports.paths = {
  "/pupils": {
    get: {
      operationId: 'get_all_pupils',
      description: 'Get all pupils',
      tags: ['Pupil'],
      responses: {
        200: {
          description: 'Successful response. All pupils are returned.',
          schema: {
            type: 'array',
            items: {
              $ref: '#/definitions/Pupil',
            },
          },
        },
        500: { 
          description: 'Unknown server error',
          schema: {
            $ref: '#/definitions/UnknownServerError',
          }
        },
      },
    },
    post: {
      operationId: 'create_pupil',
      description: 'Create new pupil',
      tags: ['Pupil'],
      parameters: [
        {
          name: 'Pupil',
          in: 'body',
          required: true,
          schema: {
            $ref: '#/definitions/PupilWithoutId',
          },
        },
      ],
      responses: {
        201: {
          description: 'Successful response. Pupil is created',
          schema: {
            $ref: '#/definitions/Pupil'
          },
        },
        500: { 
          description: 'Unknown server error',
          schema: {
            $ref: '#/definitions/UnknownServerError',
          }
        },
      },
    },
    put: {
      operationId: 'update_pupil',
      description: 'Update pupil',
      tags: ['Pupil'],
      parameters: [{
        name: 'Pupil',
        in: 'body',
        required: true,
        schema: {
            $ref: '#/definitions/Pupil',
        },
      }],
      responses: {
        201: {
          description: 'Successful response. Pupil is updated',
          schema: {
            $ref: '#/definitions/Pupil'
          },
        },
        404: {
          description: 'Pupil not found',
          schema: {
            $ref: '#/definitions/NotFoundError',
          }
        },
        500: { 
          description: 'Unknown server error',
          schema: {
            $ref: '#/definitions/UnknownServerError',
          }
        },
      },
    }
  },
  "/pupils/{id}": {
    get: {
      operationId: 'get_pupil_by_id',
      description: 'Get pupil by id',
      tags: ['Pupil'],
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
          description: 'Successful response. Pupil is returned.',
          schema: {
            $ref: '#/definitions/Pupil',
          },
        },
        404: {
          description: 'Pupil not found',
          schema: {
            $ref: '#/definitions/NotFoundError',
          }
        },
        500: { 
          description: 'Unknown server error',
          schema: {
            $ref: '#/definitions/UnknownServerError',
          }
        },
      },
    },
    delete: {
      operationId: 'delete_pupil_by_id',
      description: 'Delete pupil by id',
      tags: ['Pupil'],
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
          description: 'Successful response. Pupil is deleted.',
          schema: {
            $ref: '#/definitions/NoContent',
          },
        },
        404: {
          description: 'Pupil not found',
          schema: {
            $ref: '#/definitions/NotFoundError',
          }
        },
        500: { 
          description: 'Unknown server error',
          schema: {
            $ref: '#/definitions/UnknownServerError',
          }
        },
      },
    },
  },
}