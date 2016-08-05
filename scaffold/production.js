import _ from 'lodash' // eslint-disable-line
import Queue from 'queue-async'

const toScaffold = {
  adminUser: {
    email: 'admin@example.com',
    admin: true,
    password: '1',
    profile: {
      name: 'admin',
    },
  },
  studentUser: {
    email: 'student@example.com',
    password: '1',
    profile: {
      name: 'Chat Student',
    },
  },
  teacherUser: {
    email: 'teacher@example.com',
    password: '1',
    profile: {
      name: 'Chat Teacher',
    },
  },
}

const models = {}

export default function scaffold(callback) {
  const queue = new Queue(1)

  queue.defer(callback => {
    require('./shared')(toScaffold, (err, _models) => callback(err, _.extend(models, _models)))
  })

  queue.await(err => callback(err, models))
}
