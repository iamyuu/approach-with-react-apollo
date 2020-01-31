class ErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    return { error };
  }

  state = {
    error: null
  }
}

export default ErrorBoundary;
