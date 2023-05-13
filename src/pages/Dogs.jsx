import { Link } from 'react-router-dom';
const Dogs = () => {
  return (
    <ul>
      {['🦮', '🐕‍🦺', '🐩', '🐕', '🐈', '🦄'].map(dog => (
        <Link key={dog} to={`${dog}`}>
          {dog}
        </Link>
      ))}
    </ul>
  );
};

export default Dogs;
