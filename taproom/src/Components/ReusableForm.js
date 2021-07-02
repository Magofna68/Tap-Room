import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Beer name' />
        <input
          type='text'
          name='brand'
          placeholder='Beverage Brand' />
        <input
          type='text'
          name='content'
          placeholder='Alcohol Content' />
        <input
          type='text'
          name='price'
          placeholder='How much does it Cost' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;