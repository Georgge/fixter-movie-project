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
        Famous phrase
        <input
          type="text"
          name="famousPhrase"
          className="field-input"
          onChange={(e) => { handleChange({ famousPhrase: e.target.value }); }}
          value={state.famousPhrase}
        />
      </label>
    </div>
  </div>
);
