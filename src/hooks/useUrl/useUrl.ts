import { useRouter } from 'next/dist/client/router';
import { useState, useEffect } from 'react';

export function useUrl() {
  const router = useRouter();
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    setUrl(window.location.href);
  }, [router]);

  return url;
}
