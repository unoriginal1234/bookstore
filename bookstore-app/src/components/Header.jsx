import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor, 
        color: textColor,
    }

  return (
    <header className='header'>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'The Bookstore',
    bgColor: '#d8c2df',
    textColor: '#5d6063'
}

Header.propTypes = {
    // This ensure that the prop type we're passing into the Header (right now text, coming from App) is a string
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,

}

export default Header
