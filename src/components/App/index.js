import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

function App() {
  return (
    <div className={cn('column center', styles.container)}>
      <span className={styles.title}>Hola</span>
    </div>
  );
}

export default App;
