import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header id="input">
                <h2>What are we going to drink today?  🍹</h2>
                <div id="header-grid">
                    <div id="search">
                        <h3>Name of the Drink.</h3>
                        <label>
                            <input type="text" name="drink" id="drink" />
                        </label>
                        <button id="btn-list" class="btn">Show me</button>
                    </div>
                    <div id="random">
                        <button id="btn-ramdom" >Random Drink</button>
                    </div>
                </div>
            </header>
        );
    }

}

export default Header;