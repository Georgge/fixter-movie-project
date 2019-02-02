import React from 'react';

export const CelebrityForm = ({ state, handleChange }) => (
  <div className="form-fields">
    <div className="field">
      <label htmlFor="name" className="field-label">
        Name
        <input
          type="text"
          name="name"
          className="field-input"
          onChange={(e) => { handleChange({ name: e.target.value }); }}
          value={state.name}
        />
      </label>
    </div>

    <div className="field">
      <label htmlFor="occupation" className="field-label">
        Occupation
        <input
          type="text"
          name="occupation"
          className="field-input"
          onChange={(e) => { handleChange({ occupation: e.target.value }); }}
          value={state.occupation}
        />
      </label>
    </div>

    <div className="field">
      <label htmlFor="famousPhrase" className="field-label">
        About
        <input
          type="text"
          name="famousPhrase"
          className="field-input"
          onChange={(e) => { handleChange({ description: e.target.value }); }}
          value={state.description}
        />
      </label>
    </div>

    <div className="field">
      <label htmlFor="photo" className="field-label">
        Photo
        <div className="field-photo">
          {
            typeof state.photo === 'string' && state.photo !== ''
              ? <div style={{ backgroundImage: `url(${state.photo})` }} />
              : <div />
          }
        </div>
        <input
          type="file"
          name="photo"
          className="field-input"
          onChange={(e) => { handleChange({ photo: e.target.files }); }}
        />
      </label>
    </div>
  </div>
);
