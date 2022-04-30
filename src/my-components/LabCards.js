import '../styles/LabCards.css';
import { Link } from 'react-router-dom';
import React from 'react';
function LabCards() {
    const labs = [
        { name: "DSP", link: "/labs-data/home/dsp", desc: "DSP lab record and outputs are available. If you have any new experiment's outputs, do share them using the form link below." },
        { name: "MC", link: "/labs-data/home/mc", desc: "MC lab record and outputs are available. If you have any new experiment's outputs, do share them using the form link below." },
        { name: "MWE", link: "/labs-data/home/mwe", desc: "MWE lab record and outputs are available. If you have any new experiment's outputs, do share them using the form link below." },
    ];
    return (
        <div className='cards'>
            {labs.map((lab) =>
                <Link class="card" to={lab.link}>
                    <h3>{lab.name}</h3>
                    <p class="small">{lab.desc}</p>
                </Link>
            )}
        </div>
    );
}

export default LabCards;