import { Field } from "formik"
import Form from "react-bootstrap/Form"

const FormField = (props) => {
  const { name, label, ...otherProps } = props

  return (
    <Field name={name}>
      {({ field, meta: { touched, error } }) => (
        <Form.Group>
          <Form.Label>{label}</Form.Label>
          <Form.Control {...field} {...otherProps} />
          {touched && error && (
            <Form.Text className="text-danger">{error}</Form.Text>
          )}
        </Form.Group>
      )}
    </Field>
  )
}

export default FormField
