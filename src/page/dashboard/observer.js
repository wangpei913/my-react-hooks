import React, { Component } from 'react'
class Observer extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: false };
        this.io = null;
        this.container = null;
    }
    componentDidMount() {
        this.io = new IntersectionObserver(([entry]) => {
            this.setState({ isVisible: entry.isIntersecting });
        }, {});
        this.io.observe(this.container);
    }
    componentWillUnmount() {
        if (this.io) {
            this.io.disconnect();
        }
    }
    render() {
        console.log(this.props, 'ppp')
        return (
            // 这里也可以使用 findDOMNode 实现，但是不建议
            <div
                ref={div => {
                    this.container = div;
                }}
            >
                {this.props.children}
            </div>
        );
    }
}
export default Observer