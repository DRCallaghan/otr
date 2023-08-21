import React from 'react';
import PageContent from '../PageContent';
import Home from '../Home';
import Leaderboard from '../Leaderboard';
import Submit from '../Submit';
import Resume from '../Resume';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'home':
        return <Home />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'submit':
        return <Submit />;
      case 'resume':
        return <Resume />;
      default:
        return <Home />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
