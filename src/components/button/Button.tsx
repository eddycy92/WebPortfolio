
interface Props {
  children?: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  alignV?: 'baseline' | 'top' | 'middle' | 'bottom' | 'top' | 'bottom';
  onClick?: () => void;
}

const Button = ({
  children, 
  onClick, 
  color = 'primary', 
  alignV = 'middle'
}: Props) =>{ 
  
  return (
    <button 
      className={`btn btn-${color} align-${alignV}`}
      onClick={onClick}
    >
      {children}
    </button>

  )
}

export default Button