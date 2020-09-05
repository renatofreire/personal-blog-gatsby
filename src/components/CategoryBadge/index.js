import React from "react"
import PropTypes from "prop-types"

const CategoryBadge = ({ className, size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 70.4 63.5"
    className={className}
  >
    <g>
      <path
        fill={color}
        d="M 69.14,27 56.25,4.71 A 9.43,9.43 0 0 0 48.1,0 H 22.3 A 9.43,9.43 0 0 0 14.15,4.71 L 1.26,27 a 9.43,9.43 0 0 0 0,9.42 l 12.89,22.37 a 9.45,9.45 0 0 0 8.15,4.71 h 25.8 a 9.45,9.45 0 0 0 8.15,-4.71 L 69.14,36.46 a 9.43,9.43 0 0 0 0,-9.46 z"
      />
    </g>
  </svg>
)

CategoryBadge.defaultProps = {
  className: "",
  size: 30,
  color: "#333",
}

CategoryBadge.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
}

export default CategoryBadge
