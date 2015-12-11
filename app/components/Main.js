var React = require('react');

var Main = React.createClass({

    render: () => {

        return (
            <div>
                Hello World
            </div>

        )
    }

});

React.render(<Main />, document.getElementById('app'));