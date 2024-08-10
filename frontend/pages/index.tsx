import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const navigateToBookSearch = () => {
    router.push('/book');
  };

  return (
    <div className="container">
      <h1>Welcome to GenUI</h1>
      <button
        onClick={navigateToBookSearch}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #000',
          cursor: 'pointer',
          backgroundColor: '#f0f0f0'
        }}>
        Demonstration: Book Search API
      </button>
    </div>
  );
}
