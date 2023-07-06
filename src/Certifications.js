import React,{useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CertificationsGallery from './CertificationsGallery';

export default function StandardImageList() {
  const [itemData, setItemData] = useState(CertificationsGallery);
  return (
<>
  <div
    id="carouselMultiItemExample"
    class="carousel slide carousel-dark text-center"
    data-mdb-ride="carousel"
  >
    <div class="carousel-item active">
      <div class="container">
        <div class="row" style={{marginTop:"10.5vh"}}>

          {itemData.map((item) => {
            const {imageSrc, caption, desc, githubLink} = item;

            return(
                  <div class="col-lg-4" style={{marginTop:"3vh"}}>
                    <div class="card">
                      <a href={imageSrc}>
                      <img
                        src={imageSrc}
                        class="card-img-top"
                        alt={caption}
                        style={{objectFit:"contain", height:"40vh"}}
                      />
                      </a>
                      <div class="card-body">
                        <h5 class="card-title">{caption}</h5>
                        <p class="card-text">
                          {desc}
                        </p>
                        {/* <a href={githubLink} target="_blank" class="btn btn-primary">GitHub Link</a> */}
                      </div>
                    </div>
                  </div>
            );
          })}

        </div>
      </div>
    </div>
  </div>
</>
  );
}