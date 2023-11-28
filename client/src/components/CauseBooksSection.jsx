import BookItem from "./BookItem/BookItem";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './CauseBooksSection.module.css';
import Slider from "react-slick";


function CauseBookSection(){
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1350,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
            },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 840,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div className={styles.section}>
        <h3 className={styles.title}>Books with cause</h3>
            <Slider {...settings}>
                <BookItem/>
                <BookItem/>
                <BookItem/>
                <BookItem/>
                <BookItem/>
                <BookItem/>
                <BookItem/>
                <BookItem/>
                <BookItem/>
                <BookItem/>
            </Slider>
        </div>
    )
}

export default CauseBookSection