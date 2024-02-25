import './Card.css'

function Card({title, description, average_stars, total_reviews, offered_terms}) {
    const style = {
        width: (average_stars * 20.0).toString() + "%"
    }
    return (
        <div className="card">
            <div className="header">
                <h4 className='text-3xl font-bold'>{title}</h4>
                <div className="stars">
                    <div className='flex relative'>
                        <span className='text-3xl opacity-40'>★★★★★</span>
                        <span className="text-3xl absolute bg-purple-400 inset-0 text-transparent bg-clip-text select-none" style={style}>★★★★★</span>
                    </div>
                    <p className='text-sm text-gray-400'>{total_reviews} reviews</p>
                </div>
            </div>
            <p className="description">{description}</p>
            <div className="terms">
                {offered_terms.map((i, idx) => {
                    return (
                        <div key={idx} className="term bg-sky-200">{i}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card