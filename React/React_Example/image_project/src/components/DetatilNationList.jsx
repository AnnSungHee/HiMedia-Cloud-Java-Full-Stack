import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


function DetatilNationList() {
    const {nation} = useParams();

    const selectedNation = useSelector((state) => state.detailNationList[nation]);
    
    return(
        <>
            {selectedNation.map((nation) => 
                    <img key={nation.id} src={nation.src} alt={nation.alt} style={{
                        width: "300px",
                        height: "200px",
                        objectFit: "cover",
                        margin: "10px"
                      }}></img>
            )}
        </>
    );
}
export default DetatilNationList;