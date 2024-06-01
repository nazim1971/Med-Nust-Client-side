

const Title = ({title,subTitle}) => {
    return (
        <div className="my-20 space-y-5 text-center w-80% mx-auto">
            <h1 className="text-5xl">{title} </h1>
            <p>{subTitle} </p>
        </div>
    );
};

export default Title;