import { InputGroup, Input } from "reactstrap";

const PhoneNumber = () => {

    return(

        <InputGroup className="m-5">
                <span className="input-group-text"> Téléphone portable</span>
                <Input type="text" className="col-8"></Input>
            </InputGroup>
    )
}

export default PhoneNumber ;