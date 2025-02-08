const InfoBox = ({ title, description, button, bgColor }) => {
    const { text, link, bg } = button;
    return (
        <>
            <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p className='mt-2 mb-4'>{description}</p>
                <a
                    href={link}
                    className={`${bg} inline-block   text-white rounded-lg px-4 py-2 hover:bg-gray-700'`}
                >
                    {text}
                </a>
            </div>
        </>
    );
};

export default InfoBox;
