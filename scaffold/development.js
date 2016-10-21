import _ from 'lodash' // eslint-disable-line
import moment from 'moment'
import Queue from 'queue-async'
import User from '../server/models/User'

/*
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
*/

const models = {}

export default function scaffold(callback) {  

    const queue = new Queue(1)
    /*
    queue.defer(callback => {
        require('./shared')(toScaffold, (err, _models) => callback(err, _.extend(models, _models)))
    })
    */
    console.log('create scaffold called');
    let i = 0;

    for (i = 0; i < 50; i++) {
        const createUser = i => {
            queue.defer(callback => {
                let email = 'admin' + i + '@example.com'
                let password = '' + i
                let name = 'Admin ' + i
                let gender = 'M'
                let phone = ''

                let days = Math.round(Math.random() * 8) + 1
                let m = moment('11.0' + days + '.2016', 'DD-MM-YYYY')

                //let dateString = moment()
                //dateString = moment().subtract(days, 'days').calendar()
                //console.log(dateString)
                //let m = moment().subtract(days, 'days').calendar()
                let date = m.toDate()
                //console.log(date)
                let admin = true

                if (Math.round(Math.random() * 100) % 2 == 0) {
                  gender = 'M'
                } else {
                  gender = 'F'
                }

                let j = 0;
                while (j < 8) {
                  phone = phone + Math.round(Math.random() * 9) 
                  j++;
                }
                
                if (Math.round(Math.random() * 100) % 2 == 0) {
                  admin = true
                } else {
                  admin = false
                }

                const newUser = new User({
                    name: name,
                    email: email,
                    admin: admin,
                    password: password,
                    gender: gender,
                    phone: phone,   
                    date: date,
                })
                
                newUser.save(callback)
            })
        }
        createUser(i)
    }
    queue.await(err => callback(err, models))
}
