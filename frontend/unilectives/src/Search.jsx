function Search(props) {
    return (props.trigger) ? (
        <div className="-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white outline outline-blue-500 fixed rounded-lg z-20 w-1/2 h-60 flex flex-col justify-center items-center">
            <button className="text-blue-500 text-4xl" onClick={() => props.setSearchbox(false)}>Close</button>
        </div>
    ) : ""
}

export default Search