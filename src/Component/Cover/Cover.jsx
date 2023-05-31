import './Cover.css'

const Cover = ({img, title, subTitle}) => {
    return (
        <div className="hero h-[500px]" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content bg-[#151515] bg-opacity-40 w-[70%]">
                <div className="px-32 py-16">
                    <h2 className='text-5xl mb-3 font-bold uppercase'>{title}</h2>
                    <p>{subTitle}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Cover;