

const Dontmiss = () => {
    return (
        <div className="mb-8">
            <div className="bg-blue-500 p-6 text-white text-center rounded-md">
                <h2 className="font-bold text-3xl mb-6" >Contact Us</h2>
          
                <div className="join flex flex-col items-center sm:flex-row sm:justify-center">
                    <input
                        className="input input-bordered join-item mb-2 sm:mb-0 sm:mr-2"
                        placeholder="Email"
                    />
                    <button className="btn  join-item rounded-r-full">
                        Subscribe
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Dontmiss;