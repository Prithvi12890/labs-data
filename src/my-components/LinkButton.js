import './my-components.css'
function LinkButton(props){
    return (
        <div className="LinkButton">
            <a href={props.href}>{props.name}</a>
        </div>
    );
}

export default LinkButton;