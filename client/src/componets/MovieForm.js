import React from 'react';

export const MovieForm = ({ state, handleChange, toCloudinary }) => (
  <div className="form-fields">
    <div className="field">
      <label htmlFor="name" className="field-label">
        Title
        <input
          type="text"
          name="title"
          className="field-input"
          onChange={(e) => { handleChange({ ...state.movie, title: e.target.value }); }}
          value={state.title}
        />
      </label>
    </div>

    <div className="field">
      <label htmlFor="genre" className="field-label">
        Genre
        <input
          type="text"
          name="genre"
          className="field-input"
          onChange={(e) => { handleChange({ ...state.movie, genre: e.target.value }); }}
          value={state.genre}
        />
      </label>
    </div>

    <div className="field">
      <label htmlFor="plot" className="field-label">
        Description
        <input
          type="text"
          name="plot"
          className="field-input"
          onChange={(e) => { handleChange({ ...state.movie, plot: e.target.value }); }}
          value={state.plot}
        />
      </label>
    </div>

    <div className="field">
      <label htmlFor="poster" className="field-label">
        Poster
        <input
          type="text"
          name="poster"
          className="field-input"
          onChange={(e) => { handleChange({ ...state.movie, poster: e.target.value }); }}
          value={state.poster}
        />
      </label>
    </div>

    <div className="field">
      <label htmlFor="duration" className="field-label">
        Duration
        <input
          type="number"
          name="duration"
          className="field-input"
          onChange={(e) => { handleChange({ ...state.movie, duration: e.target.value }); }}
          value={state.duration}
        />
      </label>
    </div>

    <div className="field">
      <label htmlFor="actors" className="field-label">
        Actors
        <div className="field-in-select">
          {
            state.temporalNames.map((celebrity) => {
              return (
                <div>
                  {celebrity}
                </div>
              );
            })
          }
        </div>
        <select
          name="actors"
          onChange={(e) => {
            const id = e.target.value;
            handleChange({
              ...state.movie,
              actors: [
                ...state.movie.actors,
                id,
              ],
            });
          }}
        >
          <option></option>
          {
            state.celebrities.map((celebrity) => {
              return (
                <option key={celebrity._id} value={celebrity._id}>
                  {celebrity.name}
                </option>
              );
            })
          }
        </select>
      </label>
    </div>

    <div className="field">
      <label htmlFor="famousPhrase" className="field-label">
        Image
        <input
          type="file"
          name="plot"
          className="field-input"
          onChange={(e) => { toCloudinary(e.target.files[0]); }}
          value={state.image}
        />
      </label>
    </div>
  </div>
);
