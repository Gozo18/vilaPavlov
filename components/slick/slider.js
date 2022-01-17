import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "../../styles/Slider.module.scss";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className={styles.sliderBlock}>
      <Slider {...settings}>
        <div className={styles.sliderItem}>
          <span className={styles.sliderImage}>
            <Image
              src='/1.jpg'
              alt='vilaPavlov'
              layout='fill'
              objectFit='cover'
              priority
            />
          </span>
        </div>
        <div className={styles.sliderItem}>
          <span className={styles.sliderImage}>
            <Image
              src='/3.jpg'
              alt='vilaPavlov'
              layout='fill'
              objectFit='cover'
              priority
            />
          </span>
        </div>
      </Slider>
    </div>
  );
}
