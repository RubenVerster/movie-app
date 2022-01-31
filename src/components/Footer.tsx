import { useStoreActions } from 'easy-peasy';
import { PageVariation, IButtonSchema } from '../types/index';
import { FaStar, FaSearch } from 'react-icons/fa';

/**
 * Component used to render the footer of the page and toggle between pages
 * @returns {JSX.Element}
 */
const Footer = () => {
  const setCurrentPage = useStoreActions(
    (actions: any) => actions.setCurrentPage
  );

  const buttonSchema: IButtonSchema[] = [
    {
      type: PageVariation.search,
      label: 'Search',
      icon: <FaSearch size={21} />,
    },
    {
      type: PageVariation.favourites,
      label: 'Favourites',
      icon: <FaStar size={21} />,
    },
  ];

  return (
    <>
      <div className='p-4 bg-yellow-500 border-t-2 w-100 fixed bottom-0 flex flex-row  justify-items-center content-center justify-evenly items-center'>
        {buttonSchema.map((button: IButtonSchema) => {
          return (
            <div
              key={button.type}
              className='flex items-center justify-center cursor-pointer w-100 hover:text-yellow-300'
              onClick={() => {
                setCurrentPage(button.type);
              }}
            >
              {button.icon}
              <span className='ml-3'>{button.label}</span>
            </div>
          );
        })}
        <div className='text-xs block'>&copy; Ruben Verster 2022</div>
      </div>
    </>
  );
};

export default Footer;
