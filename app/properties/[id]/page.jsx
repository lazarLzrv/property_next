export const metadata = {
    generator: "Next.js",
    applicationName: "Next.js",
    referrer: "origin-when-cross-origin",
    keywords: ["Next.js", "React", "JavaScript"],
    authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
    creator: "Jiachi Liu",
    publisher: "Sebastian Markbåge",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

const PropertyPage = ({ params }) => {
    return <div className='text-2xl'>Page Id: {params.id}</div>;
};

export default PropertyPage;
