module.exports.definitions = {
  Journal: {
    type: 'object',
    description: 'Journal object',
    required: ['id', 'pupil_id', 'mark', 'lesson_id', 'grade', 'date_of_note', 'is_exam'],
    properties: {
      id: {
        type: 'number',
        description: 'Id of the journal',
      },
      pupil_id: {
        type: 'number',
        description: 'Pupil of the note in journal',
      },
      mark: {
        type: 'number',
        description: 'Mark of the note in journal',
      },
      lesson_id: {
        type: 'number',
        description: 'Lesson of the note in journal',
      },
      grade: {
        type: 'number',
        description: 'Grade of the journal',
      },
      date_of_note: {
        type: 'string',
        description: 'Date of the note in journal',
      },
      is_exam: {
        type: 'boolean',
        description: 'Is the note of the exam?'
      }
    },
  },
  JournalWithoutId: {
    type: 'object',
    description: 'Journal object',
    required: ['pupil_id', 'mark', 'lesson_id', 'grade', 'date_of_note', 'is_exam'],
    properties: {
      pupil_id: {
        type: 'number',
        description: 'Pupil of the note in journal',
      },
      mark: {
        type: 'number',
        description: 'Mark of the note in journal',
      },
      lesson_id: {
        type: 'number',
        description: 'Lesson of the note in journal',
      },
      grade: {
        type: 'number',
        description: 'Grade of the journal',
      },
      date_of_note: {
        type: 'string',
        description: 'Date of the note in journal',
      },
      is_exam: {
        type: 'boolean',
        description: 'Is the note of the exam?'
      }
    },
  },
};

module.exports.paths = {
  "/journals": {
    get: {
      operationId: 'get_all_journals',
      description: 'Get all journals',
      tags: ['Journal'],
      responses: {
        200: {
          description: 'Successful response. All journals are returned.',
          schema: {
            type: 'array',
            items: {
              $ref: '#/definitions/Journal',
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
      operationId: 'create_journal',
      description: 'Create new journal',
      tags: ['Journal'],
      parameters: [
        {
          name: 'Journal',
          in: 'body',
          required: true,
          schema: {
            $ref: '#/definitions/JournalWithoutId',
          },
        },
      ],
      responses: {
        201: {
          description: 'Successful response. Journal is created',
          schema: {
            $ref: '#/definitions/Journal'
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
      operationId: 'update_journal',
      description: 'Update journal',
      tags: ['Journal'],
      parameters: [{
        name: 'Journal',
        in: 'body',
        required: true,
        schema: {
            $ref: '#/definitions/Journal',
        },
      }],
      responses: {
        201: {
          description: 'Successful response. Journal is updated',
          schema: {
            $ref: '#/definitions/Journal'
          },
        },
        404: {
          description: 'Journal not found',
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
  "/journals/{id}": {
    get: {
      operationId: 'get_journal_by_id',
      description: 'Get journal by id',
      tags: ['Journal'],
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
          description: 'Successful response. Journal is returned.',
          schema: {
            $ref: '#/definitions/Journal',
          },
        },
        404: {
          description: 'Journal not found',
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
      operationId: 'delete_journal_by_id',
      description: 'Delete journal by id',
      tags: ['Journal'],
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
          description: 'Successful response. Journal is deleted.',
          schema: {
            $ref: '#/definitions/NoContent',
          },
        },
        404: {
          description: 'Journal not found',
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
  "/journals/grade/{grade}": {
    get: {
      operationId: 'get_journal_by_grade',
      description: 'Get journal by grade',
      tags: ['Journal'],
      parameters: [
        {
          type: 'number',
          name: 'grade',
          in: 'path',
          required: true,
        },
      ],
      responses: {
        200: {
          description: 'Successful response. Journal is returned.',
          schema: {
            type: 'array',
            items: {
              $ref: '#/definitions/Journal',
            },
          },
        },
        404: {
          description: 'Journal not found',
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
  "/journals/lesson/{lesson_id}": {
    get: {
      operationId: 'get_journal_by_lesson_id',
      description: 'Get journal by lesson_id',
      tags: ['Journal'],
      parameters: [
        {
          type: 'number',
          name: 'lesson_id',
          in: 'path',
          required: true,
        },
      ],
      responses: {
        200: {
          description: 'Successful response. Journal is returned.',
          schema: {
            type: 'array',
            items: {
              $ref: '#/definitions/Journal',
            },
          },
        },
        404: {
          description: 'Journal not found',
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
  "/journals/pupil/{pupil_id}": {
    get: {
      operationId: 'get_journal_by_pupil_id',
      description: 'Get journal by pupil_id',
      tags: ['Journal'],
      parameters: [
        {
          type: 'number',
          name: 'pupil_id',
          in: 'path',
          required: true,
        },
      ],
      responses: {
        200: {
          description: 'Successful response. Journal is returned.',
          schema: {
            type: 'array',
            items: {
              $ref: '#/definitions/Journal',
            },
          },
        },
        404: {
          description: 'Journal not found',
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
  }
}