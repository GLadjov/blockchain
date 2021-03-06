import React, { useContext } from "react";
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from './';
import { shortenAddress } from "../utils/shortenAddress";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  );

const Welcome = () => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading, myAddress } = useContext(TransactionContext);


    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;
    
        e.preventDefault();
    
        if (!addressTo || !amount || !keyword || !message) return;
    
        sendTransaction();
      };

    return (
        <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col  rounded-xl border-2 items-start justify-between md:p-15 py-12 px-4 logo-glassmorphism ">
                <div className="flex flex-1 justify-start flex-col mf-mr0-10">
                    <h1 className="text-3xl text-white sm:text-5xl py-1">
                       Send ETH with Crypto.app 
                    </h1>
                    <p className="text-left text-white mt-5 md:w-9/12 w-11/12 text-base">
                       Send ETH and other Cryptocurrencies easily 
                    </p>
                    {currentAccount && 
                         ((<button type="button"
                             onClick={myAddress}
                             className="flex flex-row justify-center items-center w-60 my-5 bg-[#4bff04de] p-3 rounded-full cursor-pointer hover:bg-[#378d0a]">
                                <p className="text-white text-base font-semibold">
                                     Receive
                                </p>
                             </button>)
                    )}
                    {!currentAccount && 
                    (<button type="button"
                     onClick={connectWallet}
                     className="flex flex-row justify-center items-center w-60 my-5 bg-[#4bff04de] p-3 rounded-full cursor-pointer hover:bg-[#378d0a]">
                        <p className="text-white text-base font-semibold">
                             Connect Wallet
                        </p>
                     </button>
                    )}
                 
                </div>
                <div className="flex flex-col flex-1 items-center justify-start w-full ml-20">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full border-2 my-5 eth-card white-glassmorpism">
                        <div className="flex justify-between flex-col w-full h-full"> 
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 flex justify-center items-center">
                                    <SiEthereum fontSize={31} color="blue" />
                                </div>
                                <BsInfoCircle fontSize={17} color="red" />
                            </div>
                            <div >
                                <p>
                                    {shortenAddress(currentAccount)}
                                </p>
                                <p className="font-semibold text-lg mt-1">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>
                        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange}/>
                            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange}/>

                            <div className="h-[1px] w-full bg-gray-400 my-2" />

                            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#4bff04de] hover:bg-[#4bff04de] rounded-full cursor-pointer"
                >
                             Send now
                </button>
              )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;