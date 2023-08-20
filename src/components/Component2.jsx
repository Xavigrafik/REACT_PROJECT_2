
// import React from 'react'
import PropTypes from 'prop-types';
import styles from '../css/componente2.module.css'

const classes = `component  ${styles.componente2}`

export const Component2 = ({titulo}) => {


  return (
    <div className={classes} id="componente2">
        <h3 className={styles.h3}>COMPONENTE 2</h3>
        <p>PROPS: {titulo}</p>
    </div>
  )
}

Component2.defaultProps = {
  titulo: "titulo from defaultProps",
}

Component2.PropTypes = {
  titulo:PropTypes.string,
};