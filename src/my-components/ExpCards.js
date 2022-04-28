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
                        <a href={data.pdfLink} target={'_blank'} rel={'noreferrer'}>record pdf</a>
                        <a href={data.outputs} target={'_blank'} rel={'noreferrer'}>outputs pdf</a> <br />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ExpCards;