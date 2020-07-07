import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const handleClick = (props) => {
  props.setActiveCity(props.city);
}

const City = (props) => {
  return (
    <div
      className="list-group-item"
      onClick={handleClick(props)}
    >{props.city.name}</div>
  );
}

import { setActiveCity } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapDispatchToProps, mapDispatchToProps)(City);
