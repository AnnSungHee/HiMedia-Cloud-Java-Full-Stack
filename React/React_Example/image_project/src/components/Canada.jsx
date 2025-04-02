import canada1 from "../media/canada1.jpg"
import canada2 from "../media/canada2.jpg"
import canada3 from "../media/canada3.jpg"

function Canada() {
    const canadaList = [
        {id: 1, src: canada1, alt:"canada1"},
        {id: 2, src: canada2, alt:"canada2"},
        {id: 3, src: canada3, alt:"canada3"},
    ];
    return(
        <>
            {canadaList.map((canada) => 
                    <img key={canada.id} src={canada.src} alt={canada.alt}></img>
            )}
        </>
    );
}
export default Canada;