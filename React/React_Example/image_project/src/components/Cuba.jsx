import cuba1 from "../media/cuba1.jpg"
import cuba2 from "../media/cuba2.jpg"
import cuba3 from "../media/cuba3.jpg"

function Cuba() {
    const cubaList = [
        {id: 1, src: cuba1, alt:"cuba1"},
        {id: 2, src: cuba2, alt:"cuba2"},
        {id: 3, src: cuba3, alt:"cuba3"},
    ];
    return(
        <>
            {cubaList.map((cuba) => 
                    <img key={cuba.id} src={cuba.src} alt={cuba.alt}></img>
            )}
        </>
    );
}
export default Cuba;