let App = React.createClass({
  render: function () {
    return (
      <Menu />
    )
  }
})

let Menu = React.createClass({
  render: function () {
    return (
      <div className="menu">
        <ul className="menu-ul">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="/cn">繁体中文</a></li>
        </ul>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
