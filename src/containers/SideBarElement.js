import React, { Component } from 'react';
import FilmList from '../components/FilmList.js'


class SideBarElement extends Component {
  constructor(props){
    super(props)
      this.state = {
        films: [
          {title: 'The Happytime Murders', url: 'https://www.imdb.com/title/tt1308728', id: 123},
          {title: 'Searching', url: 'https://www.imdb.com/title/tt7668870', id: 124},
          {title: 'Action Point', url: 'https://www.imdb.com/title/tt6495770', id: 125},
          {title: 'Upgrade', url: 'https://www.imdb.com/title/tt6499752', id: 126}
        ]
      };

  }
  render() {
    return (
      <div className="side-bar-element">
        <a href="https://www.imdb.com/calendar/?region=gb">UK Opening This Week</a>
        <FilmList films={this.state.films}/>
        <a href = 'https://www.imdb.com/calendar/?region=gb'>See more opening this week</a>
      </div>

    );
  }
}

export default SideBarElement;
