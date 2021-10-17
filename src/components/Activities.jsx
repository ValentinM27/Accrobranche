import React, {Component} from 'react';
import listPass from "../Helpers/listPass";

class Activities extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="content">
                <h1>Nos Services et Activités</h1>

                <div className="pass-container">
                    <h2>Nos Pass</h2>

                    {listPass.map((pass) =>(
                        <div>
                            <h3 key={pass.id}>{pass.name}</h3>
                            <p>{pass.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}

export default Activities;