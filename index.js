const React = require('react')
const createReactClass = require('create-react-class')

module.exports = createReactClass({
  initialize: function (node) {
    if (node === null) {
      return
    }

    const { flags, ports, src } = this.props

    const app = src.init({ node, flags })

    if (typeof ports !== 'undefined') {
      ports(app.ports)
    }
  },

  shouldComponentUpdate: function (prevProps) {
    return false
  },

  render: function () {
    return React.createElement('div', { ref: this.initialize })
  }
})
