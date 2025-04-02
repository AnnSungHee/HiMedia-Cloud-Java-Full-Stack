import africaImage from "../media/africa.jpg"
import africaImage1 from "../media/africa1.jpg"
import africaImage2 from "../media/africa2.jpg"

function ImageList() {
  const imageList = [
    {id: 1, src:africaImage, desc:"국기"},
    {id: 2, src:africaImage1, desc:"타조"},
    {id: 3, src:africaImage2, desc:"사막"}
  ];

  
  const imageListPublic = [
    {id: 1, src:"../media/africa.jpg", desc:"국기"},
    {id: 2, src:"../media/africa1.jpg", desc:"타조"},
    {id: 3, src:"../media/africa2.jpg", desc:"사막"}
  ];

  return (
      <>
        {imageList.map((img)=>
          <img src={img.src} width="100" height="100" id={img.id}></img>
        )}
      </>
  );
}

export default ImageList;
