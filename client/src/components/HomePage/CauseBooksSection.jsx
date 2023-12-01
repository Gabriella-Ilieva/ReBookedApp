import { useEffect, useState } from "react";

import * as booksService from '../../services/booksService'
import BookItem from "../BookItem/BookItem";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import styles from './CauseBooksSection.module.css';


function CauseBookSection(){
    const [latestCauseBooks, setLatestCauseBooks] = useState([]);

    useEffect(() => {
        booksService.getLatestBooks('withCause=true', 0, 15)
            .then(result => setLatestCauseBooks(result));
    }, [])

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
        <h3 className={styles.title}>BOOKS WITH CAUSE</h3>
            <Slider {...settings}>
                {latestCauseBooks.map( book => <BookItem key={book._id} {...book} />)}
            </Slider>
        </div>
    )
}

export default CauseBookSection