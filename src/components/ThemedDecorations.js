import React from 'react'

class ThemedDecoration extends React.Component {
  render() {
    return(
      let addChildProp = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
        className: this.props.theme
      }))
    )
  }
}
