import React from 'react'
import { withUser } from '../../components/Auth/withUser'
import apiHandler from '../../api/apiHandler'
import Button from '../UI/Button'
import { useFormik } from 'formik'

const EditProfileHelper = (props) => {
  const { context } = props
  console.log(context.user)
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: `dada`,
      bio: `adasd`,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      apiHandler
        .signupHelper(values)
        .then((data) => {
          context.setUser(data)
          props.history.push('/helpers/create/' + data.username)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  })
  if (!context.user) {
    return <div></div>
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form__group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          // defaultValue={props.context.user.name}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>

      <div className="form__group">
        <label htmlFor="bio">Bio</label>
        <input
          id="bio"
          name="bio"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.bio}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default withUser(EditProfileHelper)
