import React, { Component } from "react";
// import Progress from "./progress";
// import Mark from "./mark";

const callFakeAPI = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
const MyContainer = (WraooedComponent) => {
  return class extends Component {
    state = {
      isLoading: true,
    };
    async componentDidMount() {
      await callFakeAPI(3000);
      this.setState(() => ({
        isLoading: false,
      }));
    }
    render() {
      // const { isLoading } = this.state;
      return (
        <React.Fragment>
          {/* <Mark isAnimating={isLoading} />
          <Progress isAnimating={isLoading} /> */}
          <WraooedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};
export default MyContainer;
