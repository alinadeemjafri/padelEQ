import { useState, useEffect } from 'react';
import { testDatabaseOperations } from '../utils/testDatabase';
import { auth } from '../firebase';
import { getUser } from '../services/database';

export const DatabaseTester = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<string>('Not logged in');
  const [testStatus, setTestStatus] = useState<string>('');

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userData = await getUser(currentUser.uid);
          setUserInfo(`Logged in as: ${currentUser.email} (${userData?.role || 'no role'})`);
          console.log('Current user:', { email: currentUser.email, userData });
        } else {
          setUserInfo('Not logged in');
          console.log('No user logged in');
        }
      } catch (err) {
        console.error('Error checking user:', err);
        setError('Error checking user status');
      }
    };

    checkUser();
    const unsubscribe = auth.onAuthStateChanged(() => checkUser());
    return () => unsubscribe();
  }, []);

  const runTests = async () => {
    setIsLoading(true);
    setError(null);
    setTestStatus('Starting tests...');
    
    try {
      console.log('Starting database tests...');
      console.log('Current auth state:', auth.currentUser);
      
      if (!auth.currentUser) {
        throw new Error('Please sign in first');
      }
      
      await testDatabaseOperations();
      setTestStatus('Tests completed successfully!');
    } catch (err) {
      console.error('Test error:', err);
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      setTestStatus('Tests failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white rounded-lg shadow-lg max-w-md">
      <div className="mb-2 text-sm">
        <div className="font-medium text-gray-700">Status:</div>
        <div className="text-gray-600">{userInfo}</div>
      </div>
      
      {testStatus && (
        <div className="mb-2 text-sm">
          <div className="font-medium text-gray-700">Test Status:</div>
          <div className={`${
            testStatus.includes('failed') ? 'text-red-600' : 
            testStatus.includes('completed') ? 'text-green-600' : 
            'text-gray-600'
          }`}>
            {testStatus}
          </div>
        </div>
      )}

      <button
        onClick={runTests}
        disabled={isLoading || userInfo === 'Not logged in'}
        className={`px-4 py-2 rounded ${
          isLoading || userInfo === 'Not logged in'
            ? 'bg-gray-400'
            : 'bg-blue-500 hover:bg-blue-600'
        } text-white font-medium w-full`}
      >
        {isLoading ? 'Running Tests...' : 'Test Database'}
      </button>

      {error && (
        <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded">
          <div className="text-sm font-medium text-red-800">Error:</div>
          <div className="text-sm text-red-600">{error}</div>
        </div>
      )}

      <div className="mt-2 text-xs text-gray-500">
        Please check the browser console (F12) for detailed test results
      </div>
    </div>
  );
}; 