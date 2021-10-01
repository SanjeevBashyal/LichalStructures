import Logo from './Logo';
import './LogoStructures.css'

const LogoStructures = (props) => {
  const size=props.size;
  const id1=props.id1;
  const id2=props.id2;

    return ( 
        <div className="logo_title">
        <div><Logo size={size} id1={id1} id2={id2}/></div>
        <div className="main_title2">STRUCTURES</div>
        <div><i className="fas fa-cube"></i></div>
      </div>
        
     );
}
 
export default LogoStructures;