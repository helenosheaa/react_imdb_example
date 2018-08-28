import React, {Component} from 'react';
import Film from './Film.js';

class FilmList extends Component {
  render() {
    const filmComponents = this.props.films.map((film) => {
      return <Film
        title={film.title}
        key={film.id}
        url= {film.url}
        />
    });
    return (
      <ul>
        {filmComponents}
      </ul>
    );
  }
}

export default FilmList;
