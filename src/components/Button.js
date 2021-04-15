// import PropTypes from 'prop-types'


const Button = ({text,color,onClick}) => {
    return  <button onClick={onClick} style={{backgroundColor:color}} className="btn">{text}</button>
}

// Button.PropTypes={
//     color: PropTypes.string,
//     text: PropTypes.string,
//     onClick: PropTypes.func.isRequired,
// }
export default Button
