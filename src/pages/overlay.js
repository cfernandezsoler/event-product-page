import React, { Component } from "react";

export class Overlay extends Component {
  constructor(props) {
    super(props);

    this.state = { showOverlay: false };
  }

  itemKeyDown = (event) => {
    if (event.key == "Enter") this.showOverlay(event);
  };

  handleClick = (event) => {
    if (
      event.target.getAttribute("closeoverlay") ||
      !this.overlay.contains(event.target)
    )
      this.closeOverlay();
  };

  handleKeyDown = (event) => {
    if (!this.props.overlayScreen) return;
    else if (event.key === "Escape") return this.closeOverlay();
    // closes overlay
    else if (
      event.key === "Enter" &&
      event.target.getAttribute("closeoverlay")
    ) {
      return this.closeOverlay; // executes component function then closes overlay
    } else if (event.key === "Tab") this.checkTabIndex();
  };

  checkTabIndex = () => {
    // loops tab on components inside overlay
    const focusableElements = this.overlay.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (!event.shiftKey && document.activeElement !== firstElement) {
      firstElement.focus();
      return event.preventDefault();
    }
    if (event.shiftKey && document.activeElement !== lastElement) {
      lastElement.focus();
      event.preventDefault();
    }
  };

  showOverlay = (event) => {
    event.preventDefault();
    this.setState({ showOverlay: true }, () => {
      document.addEventListener("click", this.handleClick);
      document.addEventListener("keydown", this.handleKeyDown);
    });
  };

  closeOverlay = () => {
    this.setState({ showOverlay: false }, () => {
      document.removeEventListener("click", this.handleClick);
      document.removeEventListener("keydown", this.handleKeyDown);
    });
  };

  render() {
    return (
      <div>
        <div
          tabIndex={this.state.showOverlay ? -1 : 0}
          onKeyDown={this.itemKeyDown}
          onClick={this.showOverlay}
        >
          {this.props.overlayButton}
        </div>

        {this.state.showOverlay ? (
          <div
            ref={(element) => {
              this.overlay = element;
            }}
          >
            {this.props.overlayInfo}
          </div>
        ) : null}
      </div>
    );
  }
}
