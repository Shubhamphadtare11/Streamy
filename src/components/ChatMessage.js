const ChatMessage = ({name, message}) => {



    return(
        <div className="flex items-center"> 
            <img
            className="h-8 my-1"
            alt="user"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODEUZaWd7WmVgrTxi7w3HS63qUTu3B79uUA&usqp=CAU"
            />
            <span className="font-bold px-2">{name}</span>
            <span>{message}</span>
        </div>
    );
};

export default ChatMessage;  