import Logo from "../Logo";
import Generations from "../Generations";

const Header = ({title}) => {
    return(
        <>
        <h1>{title}</h1>
        <Logo 
        title="LogosSS"/>
        <Generations/>

        </>
    )
};


export default Header