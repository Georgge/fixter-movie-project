import React from 'react';

export const MovieForm = ({ state, handleChange }) => (
  <div className="form-fields">
    <div className="field">
      <label htmlFor="name" className="field-label">
        Title
        <input
          type="text"
          name="title"
          className="field-input"
          onChange={(e) => { handleChange({ title: e.target.value }); }}
          value={state.title}
        />
      </label>
    </div>

    <div className="field">
      <label htmlFor="occupation" className="field-label">
        Genre
        <input
          type="text"
          name="occupation"
          className="field-input"
          onChange={(e) => { handleChange({ genre: e.target.value }); }}
          value={state.genre}
        />
      </label>
    </div>

    <div className="field">
      <label htmlFor="famousPhrase" className="field-label">
        Description
        <input
          type="text"
          name="plot"
          className="field-input"
          onChange={(e) => { handleChange({ plot: e.target.value }); }}
          value={state.plot}
        />
      </label>
    </div>

    <div className="field">
      <label htmlFor="famousPhrase" className="field-label">
        Poster
        <input
          type="text"
          name="plot"
          className="field-input"
          onChange={(e) => { handleChange({ poster: e.target.value }); }}
          value={state.poster}
        />
      </label>
    </div>

    <div className="field">
      <label htmlFor="famousPhrase" className="field-label">
        Image
        <input
          type="text"
          name="plot"
          className="field-input"
          onChange={(e) => { handleChange({ image: e.target.value }); }}
          value={state.image}
        />
      </label>
    </div>
  </div>
);
