import React from 'react'

export const TrackModal = (props) => {
    console.log(props.transaction);


    return props.modalopen ? (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-1/4 my-6 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t-2 w-full">
                            <h4 className="text-black text-2xl text-center font-extrabold">Transaction Found</h4>
                        </div>

                        {/*Body*/}
                        <div className="mt-8 p-6 text-black">
                            <div className="flex border-b-2 justify-between">
                                <p>Sender Name:</p>
                                <span className="text-extrabold">{props.transaction?.sender_name}</span>
                            </div>
                            <div className="mt-3 border-b-2 flex justify-between">
                                <p>Beneficiary Name:</p>
                                <span className="text-extrabold">{props.transaction?.beneficiary_name}</span>
                            </div>
                            <div className="flex mt-3 border-b-2 justify-between">
                                <p>From Country:</p>
                                <span className="text-extrabold">{props.transaction?.from_country}</span>
                            </div>
                            <div className="mt-3 border-b-2 flex justify-between">
                                <p>To Country:</p>
                                <span className="text-extrabold">{props.transaction?.to_country}</span>
                            </div>
                            <div className="flex mt-3 border-b-2 justify-between">
                                <p>Payment Method:</p>
                                <span className="text-extrabold">{props.transaction?.payment_method}</span>
                            </div>
                            <div className="mt-3 border-b-2 flex justify-between">
                                <p>Delivery Method:</p>
                                <span className="text-extrabold">{props.transaction?.delivery_method}</span>
                            </div>
                            <div className="flex mt-3 border-b-2 justify-between">
                                <p>Reference No:</p>
                                <span className="text-extrabold">{props.transaction?.reference_id}</span>
                            </div>
                            <div className="mt-10 border-b-2 flex justify-between">
                                <p className="text-extrabold text-2xl">Status</p>
                                <span className="text-extrabold text-green-700 text-2xl">{props.transaction?.status}</span>
                            </div>
                        </div>


                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="bg-red-700 hover:bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => props.close()}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* overlay */}
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    ) : (
        <></>
    )

}
