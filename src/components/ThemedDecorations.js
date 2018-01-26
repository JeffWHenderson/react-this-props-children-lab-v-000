import React from 'react'

class ThemedDecoration extends React.Component {
  render() {
    let addChildProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      className: this.props.theme
    }))

    return (
      <div>
        {addChildProps}
      </div>
    )
  }
}
