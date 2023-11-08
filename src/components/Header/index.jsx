import Logo from "../Logo";
import Generations from "../Generations";

const Header = ({title}) => {
    return(
        <>
        <h1>{title}</h1>
        <Logo
        title="Logo"/>
        <Generations/>

        </>
    )
};


export default Header