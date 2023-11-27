import GenSatu from "./Gen1";
import GenDua from "./Gen2";
import GenTiga from "./Gen3";
import GenEmpat from "./Gen4";

const Generations = () => {
    return(
        <>
        <h2>Generations</h2>
        <GenSatu
        title="Gen 1"/>
        <GenDua
        title="Gen 2"/>
        <GenTiga
        title="Gen 3"/>
        <GenEmpat
        title="Gen 4"/>

        
        </>
    )
};

export default Generations