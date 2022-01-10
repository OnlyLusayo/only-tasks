import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {

    const OnClick = (e) => {
        console.log('We Clicking');
    }

    return (
        <header>
            <div className="header-details">
                <div className="brand-logo">
                    <h1>{title}</h1>
                </div>
                <div className="user-details">
                    <Button name='Add New Task' onClick={OnClick}/>
                </div>
            </div>
        </header>
    );
}

Header.defaultProps = {
    title: 'Only Task Manager',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header;