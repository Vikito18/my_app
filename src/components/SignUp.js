import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button';

const SignUp = () => {

    return (

        <div className="row-12 text-center">
            <LinkContainer to="./NewAccount">
                <Button type="button" className="col-8 btn btn-secondary text-center m-5">Nouveau compte</Button>
            </LinkContainer>
        </div>
    )
}
export default SignUp;