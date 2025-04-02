import africa1 from "../media/africa1.jpg"
import africa2 from "../media/africa2.jpg"
import africa3 from "../media/africa3.jpg"

function Africa() {
    const africaList = [
        {id: 1, src: africa1, alt:"africa1"},
        {id: 2, src: africa2, alt:"africa2"},
        {id: 3, src: africa3, alt:"africa3"},
    ];
    return(
        <>
            {africaList.map((africa) => 
                    <img key={africa.id} src={africa.src} alt={africa.alt}></img>
            )}
        </>
    );
}
export default Africa;