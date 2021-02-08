/* JMJ */
import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import GoogleButton from 'react-google-button'

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p className="box-layout__text">Hora de colocar suas despesas sob controle.</p>
      <div>
        <GoogleButton
          type="light"
          onClick={startLogin}
          className="login-button"
        />
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);



















// <button 
// onClick={startLogin}
// className="box-layout__login-button"
// >
// Sign in with Google
// </button>