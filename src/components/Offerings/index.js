import React from 'react'
import PropTypes from 'prop-types'

const Offerings = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.image} className='column is-6' style={{ borderRadius: '5px' }}>
        <section className='section'>
          <p className='has-text-centered'>
            <img alt='' src={item.image} />
          </p>
          <p>{item.text}</p>
          {/* <p> 
            By leveraging the <a href="https://www.insta360.com">Insta360</a> camera and <a[Matterport](https://www.matterport.com) technology we can
            provide seamless images for you to be able to create an in-depth and
            detailed interior of your listing.
          </p> */}
        </section>
      </div>
    ))}
  </div>
)

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Offerings
