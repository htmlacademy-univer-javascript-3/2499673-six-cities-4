import './loading-screen.css';

export default function LoadingScreen(): JSX.Element {
  return (
    <div className="loading-screen">
      <p>Loading ...</p>
      <div className="spinner"></div>
    </div>
  );
}
