import React, { PropTypes } from 'react'

const category = (props) => (
  <div>filters</div>
)

category.propTypes = {
  name: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
}

export default category
