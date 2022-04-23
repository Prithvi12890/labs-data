import './my-components.css';
import Card from './Card';
import logo from './logo512.png';

function Labs(){
    const labs = [
        {id:1, name: "DSP", image: logo},
        {id:2, name: "MC", image: logo},
        {id:3, name: "MWE", image: logo},
    ];
    return (
        <div className="Labs">
            {
                labs.map((lab) => <Card key={lab.id} name={lab.name} image={lab.image} />)
            }
        </div>
    );
}

export default Labs;