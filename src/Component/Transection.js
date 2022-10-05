import Item from "./Item";
import "./Transection.css"

const Transection = (props) => {
  const {item} = props
    return(
      <div>
      <ul className='item-list'>
        {item.map((element)=>{   
          // return <Item title={element.title} amount={element.amount}></Item>
          return <Item {...element} key={element.id}/>
        })}
    </ul>
    </div>
    );
  }                                               
export default Transection;                                                                   