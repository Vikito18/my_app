import Spinner from "react-bootstrap/Spinner"

const Loader = () => {
  return (
    <Spinner
      variant="primary"
      animation="border"
      className="position-absolute"
      style={{
        left: "50%",
        top: "50%",
        marginTop: "-1rem",
        marginLeft: "-1rem",
      }}
    />
  )
}

export default Loader
