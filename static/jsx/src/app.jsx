var React = require('react');
var mdparser = require('markdown').markdown;

var App = React.createClass({
  getInitialState: function() {
    return { markdown: '' };
  },

  updateMarkdown: function(markdown) {
    this.setState({ markdown: markdown });
  },

  render: function() {
    return (
        <div>
          <TextInput onChange={this.updateMarkdown} />
          <Markdown markdown={this.state.markdown} />
        </div>
        );
  }
});

var TextInput = React.createClass({
  propTypes: {
    onChange: React.propTypes.func.isRequired
  },

  _onChange: function(e) {
    this.props.onChange(e.target.value);
  },

  render: function() {
    return <textarea onChange={this._onChange} />;
  }
});

var Markdown = React.createClass({
  propTypes: {
    markdown: React.propTypes.string.isRequired
  },

  render: function() {
    var html = mdparser.toHTML(this.props.markdown);
    return (
      <div dangerouslySetInnerHTML={{__html:html}}></div>
    );
  }
});

React.render(
    <App />,
    document.getElementById('app-container')
    );
