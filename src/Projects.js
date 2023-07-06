import React,{useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ProjectsGallery from './ProjectsGallery';

export default function StandardImageList() {
  //Testing
  const itemData = ProjectsGallery;
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
            const {imageSrc, caption, desc, githubLink, status, deployedLink, pointerEvents} = item;

            return(
                  <div class="col-lg-4" style={{marginTop:"3vh"}}>
                  <a href={imageSrc}>
                    <div class="card">
                      <img
                        src={imageSrc}
                        class="card-img-top"
                        alt={caption}
                        style={{objectFit:"contain", height:"27vh"}}
                      />
                      <div class="card-body">
                        <h5 class="card-title">{caption}</h5>
                        <p class="card-text">
                          {desc}
                        </p>
                        <a href={githubLink} target="_blank" class="btn btn-primary">GitHub Link Here</a>
                        <br/>
                        <br/>
                        <a href={deployedLink} target="_blank" className={status==="Deployed Link Here"?"btn btn-primary bg-success":"btn btn-primary bg-danger"} style={{pointerEvents:pointerEvents==="none"?"none":"", border:"none"}}>{status}</a>
                      </div>
                    </div>
                  </a>
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