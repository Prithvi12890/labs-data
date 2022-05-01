import './ExpCards.css'

function ExpCards(props){
    const expData = props.expData;
    return(
        <div class="wrapper">

            <h1>Experiments</h1>

            {expData.map((data) => 
                <div class="wrap-1">
                    <input type="radio" id={data.id} name="tabs"/>
                    <label for={data.id}><div>{data.title}</div><div class="cross"></div></label>
                    <div class="content">
                    <iframe src={data.record} width="100%" height="500px" title={data.title}/>
                    <iframe src={data.outputs} width="100%" height="500px" title={data.title}/><br />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ExpCards;