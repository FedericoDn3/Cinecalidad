import { React} from 'react'
import Bg from "./Bg.jpg";
import data from "./ListData.json"

function List(props) {
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        }

        else {
            return el.nombre.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul style={{backgroundImage: `url(${Bg})`, backgroundColor:"#42271c" ,color:"#ffffff",WebkitBackgroundSize:'cover', backgroundRepeat : 'no-repeat',opacity:'1',height:'50vh',width:'50vw',marginLeft:'auto',marginRight:'auto'}}>
            {filteredData.map((item) => (
                <li key={item.id}>{item.nombre}</li>
            ))}
        </ul>
    )
}

export default List

