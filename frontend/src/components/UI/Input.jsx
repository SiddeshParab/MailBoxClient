import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

const Input = ({ input, className, label, isShownPass, setIsShownPass }) => {
  return (
    <div className='mb-6 relative'>
      <label
        htmlFor={input.id}
        className='block text-sm font-semibold w-fit leading-6 text-text cursor-pointer'
      >
        {label}
      </label>
      <input
        ref={input.ref}
        {...input}
        className={`mt-2 appearance-none text-text bg-transparent rounded-md block w-full ps-3 ${
          input.name === 'password' ? 'pe-[2.8rem]' : ' pe-3'
        } h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-border/40 ring-1 ring-border/20 focus:ring-2 focus:ring-border/80  ${
          className ? className : ''
        }`}
      />
      {isShownPass !== undefined &&
        input.type === 'password' &&
        input.name === 'password' && (
          <button
            type='button'
            className='absolute right-3 bottom-[0.5rem]'
            onClick={setIsShownPass}
          >
            {!isShownPass ? (
              <BsEyeFill size={25} />
            ) : (
              <BsEyeSlashFill size={25} />
            )}
          </button>
        )}
    </div>
  );
};

export default Input;
