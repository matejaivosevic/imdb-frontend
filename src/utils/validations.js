import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
    username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string().min(6, 'You must enter 6 characters at least!').required('Password is required')
})

export const CommentSchema = Yup.object().shape({
    content: Yup.string()
    .max(500, 'Too Long!')
    .required('You can not leave an empty comment...')
})

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().max(255, 'Too Long!').email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'You must enter 6 characters at least!').required('Password is required'),
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
})

export const MovieSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .min(2, 'Too Short!')
      .max(500, 'Too Long!')
      .required('Required'),
    imageUrl: Yup.string()
    .required('Required')
  })
  
