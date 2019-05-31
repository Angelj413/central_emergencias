import React from 'react';

const Main = ({children}) => (
    <div className="container-main" id="outer-container">
        
        <main className="container-main-children" id="page-wrap">
        {children}
        </main>
        
    </div>
);

export default Main;

