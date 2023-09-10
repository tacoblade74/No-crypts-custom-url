import {Link} from 'react-router-dom'

function Linker({ text, link, image }) {
  const linkerStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <Link to={link} style={{textDecoration: 'none'}}>
      <div className="linker-container" style={linkerStyle}>
        <div className="linker-text" >
          {text}
        </div>
      </div>
    </Link>
  );
}



export default Linker;
