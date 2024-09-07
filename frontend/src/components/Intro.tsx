import React from 'react';
import { User } from '../types/User';

// Define an interface for the props
interface IntroProps {
  user: User;
}

const Intro: React.FC<IntroProps> = ({ user }) => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-40 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Hello {user.username}!
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Email: {user.email}<br />
        user_id: {user.user_id}<br />
        password_hash: {user.password_hash}<br />
        created_at: {user.created_at}<br />
        updated_at: {user.updated_at}
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        This is a simple weight tracker website that allows you to track your weight over time
      </p>
    </div>
  );
};

export default Intro;
