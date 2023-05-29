

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center w-4/12 mx-auto mb-11">
                <p className="text-[#D99904] text-xl pb-3">---{subHeading}---</p>
                <h2 className="text-4xl border-y-4 py-5 uppercase">{heading}</h2>
        </div>
    );
};

export default SectionTitle;