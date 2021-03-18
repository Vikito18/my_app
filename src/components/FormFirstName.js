import { InputGroup, Input } from "reactstrap";

const FormFirstName = () => {

    return(

        <InputGroup className="m-5">
                <span className="input-group-text"> Prénom</span>
                <Input type="text" className="col-8"></Input>
            </InputGroup>
    )
}

export default FormFirstName ;