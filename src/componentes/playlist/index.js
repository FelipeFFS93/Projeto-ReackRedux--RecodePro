import React from 'react';
import { connect } from 'react-redux';


import { bindActionCreators } from 'redux';
import * as MusicaAction from '../../store/action/index';

const playlist = ({ musicas, tocarMusica, pararMusica }) => {
  return (
    <section className='w-50 '>
        <div className=''>
            <h1  className="text-dark bg-light text-center">Playlist!</h1>
        </div>
        
        {musicas.map((musica) => (
        <table class="table table-secondary W-50 text-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">MUSIC</th>
              <th scope="col">SING</th>
              <th scope="col">PLAY</th>
              <th scope="col">STOP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{musica.id}</th>
              <td>{musica.titulo}</td>
              <td>{musica.cantor}</td>
              <td><button className=" btn btn-dark" onClick={() => tocarMusica(musica)}> Play </button></td>
              <td><button className="btn btn-dark" onClick={() => pararMusica(musica)}> STOP </button></td>
            </tr>
          </tbody>
      </table>
       ))}
    </section>
 
        );
}

const mapStateToProps = (state) => ({
  musicas: state.musicas.playlist,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(MusicaAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(playlist);