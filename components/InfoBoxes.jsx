import InfoBox from "./InfoBox";

const InfoBoxes = () => {
    return (
        <>
            {/* <!-- Renters and Owners --> */}
            <section>
                <div className='container-xl lg:container m-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                        <InfoBox
                            bgColor='bg-gray-100'
                            title='For Renters'
                            description='Find your dream rental property. Bookmark properties and contact
                                owners.'
                            button={{
                                link: "/properties",
                                text: "Browse Properties",
                                bg: "bg-black",
                            }}
                        />
                        <InfoBox
                            bgColor='bg-blue-100'
                            title='For Property Owners'
                            description='List your properties and reach potential tenants. Rent as an airbnb
                                or long term.'
                            button={{
                                link: "/add-property",
                                text: "Add Property",
                                bg: "bg-blue-500",
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default InfoBoxes;
