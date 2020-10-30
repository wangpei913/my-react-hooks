import React from 'react'

const withAuth = role => WrappedComponent => {
    return class extends React.PureComponent {
        state = {
            permission: false
        }
        componentDidMount() {
            let currentRole = 'Admin'
            this.setState({
                permission: currentRole === role
            })
        }
        render() {
            if (this.state.permission) {
                return <WrappedComponent {...this.props} />
            } else {
                return (<div>您没有权限查看该页面，请联系管理员！</div>);
            }
        }
    }
}
export default withAuth;