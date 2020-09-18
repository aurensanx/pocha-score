import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { AddPlayerForm } from "./components/AddPlayerForm";
import { Header } from "./components/Header";
import { Player } from "./components/Player";


let nextId = 4;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { players: this.props.initialPlayers };
    this.onPlayerAdd = this.onPlayerAdd.bind(this);
    this.onRemovePlayer = this.onRemovePlayer.bind(this);
  }

  onScoreChange(index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);

  }

  onPlayerAdd(name) {
    console.log('Player added', name);
    this.state.players.push({
      name: name,
      score: 0,
      id: nextId
    });
    this.setState(this.state);  // updating the state
  }

  onRemovePlayer(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);  // update the state
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players} />

        <div className="players">
          {this.state.players.map(function (player, index) {
            return (
              <Player
                onScoreChange={function (delta) { this.onScoreChange(index, delta) }.bind(this)}
                onRemove={function () { this.onRemovePlayer(index) }.bind(this)}
                name={player.name}
                score={player.score}
                key={player.id} />
            );
          }.bind(this))}
        </div>

        <AddPlayerForm onAdd={this.onPlayerAdd} />

      </div>

    );
  }
}

App.defaultProps = {  // This is the defualt value you can set if there is no specifc title value
  title: "PochaScore"
};

App.propTypes = {
  title: PropTypes.string,
  initialPlayers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired  // accepts only an array of objects which hasd the specifc valuies listed in the shape()
};

export default App;
