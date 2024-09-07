import { useEffect, useState } from 'react';
import { User, defaultUser } from '../types/User';

const useFetchUser = (userId: number) => {
  const [user, setUser] = useState<User>(defaultUser);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:8080/getUser?user_id=${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const fetchedUserArray: User[] = await response.json();
        // Assuming the API returns an array, use the first item
        const fetchedUser = fetchedUserArray[0];
        setUser(fetchedUser);
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          setError(error.message);
        } else {
          console.error('An unexpected error occurred');
          setError('An unexpected error occurred');
        }
        setUser(defaultUser);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { user, loading, error };
};

export default useFetchUser;