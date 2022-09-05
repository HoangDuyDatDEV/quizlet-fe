import Vue from 'vue'
import moment from 'moment'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import {
  required,
  email,
  max,
  min,
  regex,
  numeric,
  confirmed,
} from 'vee-validate/dist/rules'

extend('password', {
  validate: (value) => {
    // eslint-disable-next-line prefer-regex-literals
    const strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    )
    return strongRegex.test(value)
  },
  message:
    'Mật khẩu gồm ít nhất 10 ký tự bao gồm ít nhất 1 chữ cái viết hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt',
})

extend('confirmed', {
  ...confirmed,
  message: 'Mật khẩu đang không trùng nhau. Vui lòng nhập lại',
})

extend('required', {
  ...required,
  message: 'Cần nhập nội dung cho trường này !',
})

extend('requiredwithmess', {
  ...required,
  params: ['message'],
  message: '{message}',
})

extend('numeric', {
  ...numeric,
  message: 'Số điện thoại không đúng định dạng',
})

extend('email', {
  ...email,
  message: 'Email không đúng định dạng',
})

extend('max', {
  ...max,
  params: ['length'],
  message: 'Độ dài tối đa {length} ký tự',
})

extend('min', {
  ...min,
  params: ['length'],
  message: 'Độ dài tối thiểu {length} ký tự',
})

extend('regex', {
  ...regex,
  message: 'Định dạng không đúng !',
})

extend('minbirthday', {
  params: ['length'],
  validate: (value, args) => {
    const birthdayAllow = moment()
      .subtract(parseInt(args.length), 'years')
      .toDate()
    birthdayAllow.setHours(0, 0, 0, 0)
    return value < birthdayAllow
  },
  message: 'Chưa đủ 18 tuổi',
})

extend('bi', {
  validate: (value) => {
    return (
      value.includes('app.powerbi.com/view') ||
      value.includes('pbi.mpi.gov.vn/reports/powerbi')
    )
  },
  message: 'Link báo cáo không phù hợp',
})

extend('userandmail', {
  validate: (value) => {
    return (
      email.validate(value) ||
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
        value
      )
    )
  },
  message: 'Email không đúng định dạng',
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
