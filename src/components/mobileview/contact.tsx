import React from 'react'

const MobileContact = () => {
    return (
        <div className='w-full bg-gray-100'>
            <h2 className="scroll-m-20 border-b border-indigo-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
                CONTACT:
            </h2>
            <div>
                {/* main div */}
                <div className="container px-5 py-4 mx-auto flex sm:flex-nowrap flex-wrap">

                    {/* map div */}
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-100 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder={0}
                            title="map"
                            marginHeight={0}
                            marginWidth={0}
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.218383432356!2d67.01549417282844!3d24.856389877931893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0db59a0c33%3A0x6a77c3430078c61d!2sZafar%20St%2C%20Burns%20Road%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731357422576!5m2!1sen!2s"
                            style={{ filter: "contrast(1.2) opacity(0.8)" }}
                        />

                        {/* address div */}
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-indigo-500 tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1">
                                    Sunny Side Building,A.M.4,Burns Road,Karachi
                                </p>
                            </div>

                            {/* contact email div */}
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-indigo-500 tracking-widest text-xs">
                                    Email
                                </h2>
                                <a className="text-gray-900 leading-relaxed">saleemtooba365@gmail.com</a>
                                <h2 className="title-font font-semibold text-indigo-500 tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed text-gray-900">0305-2108570</p>
                            </div>
                        </div>
                    </div>

                    {/* main div 2*/}
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">

                        {/* name */}
                        <div className="relative mb-4">
                            <label htmlFor="name" className="scroll-m-20 text-xl font-semibold tracking-tight">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                        {/* email */}
                        <div className="relative mb-4">
                            <label htmlFor="email" className="croll-m-20 text-xl font-semibold tracking-tight">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                        {/* message */}
                        <div className="relative mb-4">
                            <label htmlFor="message" className="croll-m-20 text-xl font-semibold tracking-tight">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                defaultValue={""}
                            />
                        </div>

                        {/* send button */}
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileContact