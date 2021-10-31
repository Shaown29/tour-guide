import React from 'react';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src='https://static.tripzilla.com/thumb/7/4/158580_800x.jpg' alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src='https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2021/03/Highest-Mountain-In-Japan-Mount-Fuji.jpg?fit=crop' alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src='https://static.toiimg.com/photo/64614661.cms' alt="Third slide"/>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;