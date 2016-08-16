import styles from './style.css';

import React, { Component } from 'react';

export default class CSSModuleExample extends Component {

    render() {
        return (
            <div className={ styles.root }>
                <p className={ styles.text }>Пример CSS модулей</p>
                <p className={ styles.second }>Пример композиции</p>
            </div>
        );
    }

};
