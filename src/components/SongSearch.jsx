import React from 'react';
import { fetchSongId } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function SongSearch({ dispatch, songList }){
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(fetchSongId(input.value.trim()));
        console.log('SEARCHED title:');
        console.log(input.value.trim());
        //...instead of these console.log()s....
        input.value = '';
        console.table(songList);
      }}>
        <input placeholder="Song Title" ref={node => {
          input = node;
        }}></input>
        <button>Search</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    songList: state.songsById
  };
};

SongSearch.propTypes = {
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(SongSearch);
