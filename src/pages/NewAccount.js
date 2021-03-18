import FormLastName from "../components/FormLastName"
import FormFirstName from "../components/FormFirstName"
import PhoneNumber from "../components/PhoneNumber"
import TitleAccount from "../components/TitleAccount"

const NewAccount = () => {

    return (
        <div className="container">
            <TitleAccount />
            <FormLastName />
            <FormFirstName />
            <PhoneNumber />
        </div>
    );
};
export default NewAccount;