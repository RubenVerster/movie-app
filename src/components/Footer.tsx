import { useStoreActions } from 'easy-peasy';
import { PageVariation, IButtonSchema } from '../types/index';
import { FaStar, FaSearch } from 'react-icons/fa';

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
    <div className='p-4 bg-yellow-500 border-t-2 w-100 fixed bottom-0 flex flex-row  justify-items-center content-center justify-evenly items-center'>
      {buttonSchema.map(({ type, label, icon }: IButtonSchema) => {
        return (
          <div
            className='flex items-center justify-center cursor-pointer w-100 hover:text-yellow-300'
            onClick={() => {
              setCurrentPage(type);
            }}
          >
            {icon}
            <span className='ml-3'>{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
