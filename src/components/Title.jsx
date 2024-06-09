

const Title = ({title,subTitle}) => {
    return (
        <div className="my-20 space-y-5 text-center w-80% mx-auto">
            <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold ">{title} </h1>
            <p className="lg:w-[80%] md:w-[70%] mx-auto ">{subTitle} </p>
        </div>
    );
};

export default Title;