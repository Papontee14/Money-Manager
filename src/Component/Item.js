import PropTypes from 'prop-types';
import './Item.css'


const Item = (props) => {
  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
  const {title,amount} = props
  const status = amount<0 ? "expense" :"income"
    return(
      <>  
        <li className={status}>{title} <span>{formatNumber(amount)}</span></li>
     </>  );
     } 
     
  Item.propType={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
  }

export default Item;