import React from 'react'
import propTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating text-muted' style={{ fontSize: '16px' }}>
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i data-testid='forth-star'
          style={{ color }}
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }

        ></i>
      </span>
      <span style={{ color: '#FFCC33' }}>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#FFCC33',

}

Rating.propTypes = {
  value: propTypes.number,
  text: propTypes.string,
  color: propTypes.string,
}
export default Rating
