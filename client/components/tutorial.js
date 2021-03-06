import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Swiper, Slide} from 'react-dynamic-swiper'
import {toggleTutorial} from '../store/editor'

class Tutorial extends Component {
  render() {
    return (
      <Swiper
        navigation={true}
        pagination={true}
        loop={true}
        className={
          this.props.editor.tutorialEnabled ? 'tutorial active' : 'tutorial'
        }
        id="tutorial-bg"
        onMouseDown={event => {
          if (event.target.id === 'tutorial-bg') {
            this.props.toggleTutorial()
          }
        }}
      >
        <Slide>
          <img src="/images/tutorial/tutorial-1.gif" />
          <div>
            Right click in the editor to show a menu with edit options.<br />
            You can add elements using the menu or the toolbar.
          </div>
        </Slide>
        <Slide>
          <img src="/images/tutorial/tutorial-2.gif" />
          <div>
            You can edit the styling of an element in the<br />
            <strong>Styles</strong> interface on the right side after selecting
            it.
          </div>
        </Slide>
        <Slide>
          <img src="/images/tutorial/tutorial-3.gif" />
          <div>
            You can save your page by clicking <strong>Save Template</strong>,<br />
            or start a new one by clicking <strong>New Template</strong>.
          </div>
        </Slide>
        <Slide>
          <img src="/images/tutorial/tutorial-4.gif" />
          <div>
            You can turn off <strong>Edit Mode</strong> to preview your page.<br />
            You may also download your page as an HTML file.
          </div>
        </Slide>
      </Swiper>
    )
  }
}

const mapState = state => {
  return {
    editor: state.editor
  }
}
const mapDispatch = dispatch => {
  return {
    toggleTutorial() {
      dispatch(toggleTutorial())
    }
  }
}

export default connect(mapState, mapDispatch)(Tutorial)
