import '../styles/LabCards.css';
import { Link } from 'react-router-dom';
import React from 'react';
function LabCards() {
    const labs = [
        {id:0, name: "DSP", link: "/labs-data/home/dsp", desc: "DSP lab record and outputs are available. If you have any new experiment's outputs, do share them using the form link below." },
        {id:1, name: "MC", link: "/labs-data/home/mc", desc: "MC lab record and outputs are available. If you have any new experiment's outputs, do share them using the form link below." },
        {id:2, name: "MWE", link: "/labs-data/home/mwe", desc: "MWE lab record and outputs are available. If you have any new experiment's outputs, do share them using the form link below." },
    ];
    return (
        <div className='cards'>
            {labs.map((lab) =>
                <Link key={lab.id} className="card" to={lab.link}>
                    <h3>{lab.name}</h3>
                    <p className="small">{lab.desc}</p>
                </Link>
            )}
        </div>
    );
}

export default LabCards;