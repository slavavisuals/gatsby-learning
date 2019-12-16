import React from 'react'
import {FaMap} from 'react-icons/fa'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'


const SingleTour = ({tour}) => {
  //console.log(tour);
  const {name, price, country, days, slug, images} = tour;
  const mainImage = images[0].fluid;

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt={name} />
        <Link className={styles.link} to={`/tours/${slug}`}>
          details
        </Link>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>

        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon}></FaMap>
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>

      </div>
    </article>
  )
}
//catching errors(console logging) using React propTypes package
SingleTour.propTypes = {
  tour:PropTypes.shape({
    name:PropTypes.string.isRequired,                     //making sure name is a string
    country:PropTypes.string.isRequired,                  //making sure country is a string
    price:PropTypes.number.isRequired,                    //making sure price is a number
    days:PropTypes.number.isRequired,                     //making sure days is a number
    images:PropTypes.arrayOf(PropTypes.object).isRequired //making sure images is array of objects
  })
}

export default SingleTour
