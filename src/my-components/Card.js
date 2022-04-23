import './my-components.css';

function Card(props){
    return (
        <div className="Card" style={{backgroundImage: `url(${props.image})`}}>
            <h2>{props.name}</h2>
            <a href="#">Explore</a>
        </div>
    );
}

export default Card;