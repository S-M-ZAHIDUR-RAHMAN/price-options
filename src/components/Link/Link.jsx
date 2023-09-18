

const Link = ({route}) => {
    return (
        <div>
            <li className='mr-20'>
                <a href={route.path}>{route.name}</a></li>
        </div>
    );
};


export default Link;