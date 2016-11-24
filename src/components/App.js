'use strict';

import React, { Component } from 'react';

const App = (properties) => (
    <main>
        <section className="list-of-product-item">
            <ul className="list-group">
                <li className="list-group-item">Oil</li>
                <li className="list-group-item">Milk</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </section>
        <section className="list-of-buying"></section>
    </main>
);

export default App;