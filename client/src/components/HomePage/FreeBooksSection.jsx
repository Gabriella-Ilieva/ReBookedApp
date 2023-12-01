import { useEffect, useState } from "react";

import * as booksService from '../../services/booksService'
import BookItem from "../BookItem/BookItem";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 

import styles from './FreeBooksSection.module.css';


function FreeBookSection(){
    const [latestFreeBooks, setLatestFreeBooks] = useState([]);

    useEffect(() => {
        booksService.getLatestBooks('price=0', 0, 15)
            .then(result => setLatestFreeBooks(result));
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
        <h3 className={styles.title}>FREE BOOKS</h3>
            <Slider {...settings}>
                {latestFreeBooks.map( book => <BookItem key={book._id} {...book} />)}
            </Slider>
        </div>
    )
}

export default FreeBookSection