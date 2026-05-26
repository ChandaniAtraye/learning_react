const CardProps = (props) => {
    return (
        <>
            <div className=" card col-md-4 p-3">
                <h5 className="card-title">{props.card_title}</h5>
                <p className="card-text">{props.description}</p>
            </div>

        </>
    )
};

export default CardProps