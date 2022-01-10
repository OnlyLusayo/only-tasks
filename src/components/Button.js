import PropTypes from 'prop-types';

const Button = ({ name, onClick}) => {
    return <button onClick={onClick} className="btn">{name}</button>
;
}

Button.defaultProps = {
    // class: 'btn',
}

Button.propTypes = {
    name: PropTypes.string,
    onclick: PropTypes.func,
}
 
export default Button;