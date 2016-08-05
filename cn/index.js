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
          <li><a href="#">首页</a></li>
          <li><a href="#">关于我们</a></li>
          <li><a href="#">产品</a></li>
          <li><a href="#">联系我们</a></li>
          <li><a href="/">English</a></li>
        </ul>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
