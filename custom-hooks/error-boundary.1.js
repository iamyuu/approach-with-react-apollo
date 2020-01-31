class ErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    return { error };
  }
}

export default ErrorBoundary;
