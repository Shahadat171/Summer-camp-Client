
const Footer = () => {
    return (
        <div className="bg-black mt-28 py-28 px-20 text-white flex justify-between gap-5">
            <div>
                <h1>Students</h1>
                <ol>
                    <li className="list-none text-slate-600">Free</li>
                    <li className="list-none text-slate-600">Paid</li>
                </ol>
            </div>
            <div><h1>Company</h1></div>
            <div><h1>Further Information</h1></div>
            <div><h1>Follow Us</h1></div>
        </div>
    );
};

export default Footer;