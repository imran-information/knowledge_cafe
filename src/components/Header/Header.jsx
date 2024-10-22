import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='w-10/12 mx-auto mt-8'>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-4xl'>Knowledge Cafe</h1>
                <a href=""><img className='w-12' src={profile} alt="" /></a>
            </div>
            <hr className=' my-5' />
        </header>
    );
};

export default Header;