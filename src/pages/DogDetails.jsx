import { useParams, useEfect, Link, Outlet } from 'react-router-dom';

const DogDetails = () => {
  //*Використовуємо хук useParams для отримання ДИНАМІЧНОГО іденгтифікатора

  const params = useParams();
  console.log(params);

  //* Його можна деструктуризувати const {dogId}=useParams();
  //для HTTP запиту використовуємо useEffect
  //   useEfect(() => {
  //     HTTP - запит;
  //   }, []);

  //http://localhost:3000/goit-react-hw-05-movies/dogs
  return (
    <>
      <h2>Dog Details: {params.dogId}</h2>
      <ul>
        <li>
          <Link to="subbreeds">SUBBREEDS</Link>
        </li>
        <li>
          <Link to="gallery">GALLERY</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogDetails;
