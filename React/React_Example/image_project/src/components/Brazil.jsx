import brazil1 from "../media/brazil1.jpg"
import brazil2 from "../media/brazil2.jpg"
import brazil3 from "../media/brazil3.jpg"

function Brazil() {
    const brazilList = [
        {id: 1, src: brazil1, alt:"brazil1"},
        {id: 2, src: brazil2, alt:"brazil2"},
        {id: 3, src: brazil3, alt:"brazil3"},
    ];
    return(
        <>
            {brazilList.map((brazil) => 
                    <img key={brazil.id} src={brazil.src} alt={brazil.alt}></img>
            )}
        </>
    );
}
export default Brazil;