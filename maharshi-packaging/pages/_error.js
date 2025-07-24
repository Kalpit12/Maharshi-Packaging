export default function ErrorPage({ statusCode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="glass p-12 rounded-2xl flex flex-col items-center">
        <div className="text-7xl font-bold text-green mb-4">{statusCode || 404}</div>
        <div className="text-2xl text-royal mb-6">Oops! Something went wrong.</div>
        <a href="/" className="px-6 py-3 bg-royal text-white rounded-xl font-semibold shadow-neu neu hover:bg-green hover:text-royal transition-all">Go Home</a>
      </div>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
}; 