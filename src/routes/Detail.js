import React from 'react';
import './About.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      // return <h3>{location.state.title}</h3>;
      return (
        <section className='detail_desc'>
          <div>
            <h1 className='movie'>
              <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
            </h1>
          </div>
          <h2>{location.state.title}</h2>
          <h5>{location.state.year}</h5>
          {location.state.summary}
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
