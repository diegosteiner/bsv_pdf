import styles from './Layout.module.css'
import React, { FunctionComponent } from 'react'

export const Container: FunctionComponent<{}> = ({ children }) => {
  return (<div className={styles.container}>{children}</div>)
}
