import React, { ComponentType, ComponentClass, Component } from "react";

interface State {
    hasError: boolean
}

const withErrorBoundary = <T extends Record<string, never>>(
    WrappedComponent: ComponentType<T>
): ComponentClass<T, State> =>
    class ErrorBoundary extends Component<T, State> {
        constructor(props: T) {
            super(props)
            this.state = { hasError: false}
        }

        static getDerivedStateFromError(error: Error) {
            console.error(error)
            return { hasError: true }
        }

        render() {
            if( this.state.hasError ) {
                return (
                    <p>
                        Oops... Something Went Wrong!
                    </p>
                )
            }
                
            return <WrappedComponent {...this.props} />
        }
    }

    export default withErrorBoundary