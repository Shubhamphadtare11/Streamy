const Button = ({name}) => {

    return(
        <div>
            <button className="m-2 px-5 py-2 bg-gray-200 rounded-lg hover:bg-black hover:text-white hover:ring-sky-500">{name}</button>
        </div>
    );
};

export default Button;