import React,{useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ProjectsGallery from './ProjectsGallery';

export default function StandardImageList() {
  const [itemData, setItemData] = useState(ProjectsGallery);
  return (
    <div className='topSettings'>

    <ImageList sx={{ width: 400, height: 450 }} cols={2} rowHeight={164}>
      {itemData.map((item) => {
        const {id, imageSrc, caption} = item;
        
        return(
        <ImageListItem key={id}>
          <img
            src={`${imageSrc}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${imageSrc}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={
              // item.title
              "Projects Gallery"
              }
            loading="lazy"
          />
          <caption style={{color:"#000000", fontWeight:"bold"}}>{caption}</caption>
        </ImageListItem>
        );
      })}
    </ImageList>
 </div>
  );
}