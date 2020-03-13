import React from 'react';
import axios from 'axios';

class Data extends React.Component {
    state = {
        playerList: []
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(res => {
                // console.log(res)
                this.setState({
                    playerList: res.data
                })
                console.log('main',this.state.playerList)
            })
    }
    render() {
        return(
            <div className="data">
                {this.state.playerList.map((player) => {
                return (
                    <div key={player.name}>
                        <h3>{player.name}</h3>
                        <p>Country: {player.country}</p>
                        <p>Searches: {player.searches}</p>
                    </div>
                )
                })}
            </div>
        )
    }
}

export default Data;