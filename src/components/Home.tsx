import React from "react";
import foodItems from "../db/dummydata";

export default function FoodCard() {
    function mapDescription(arr) {
        return (
            arr.map((item, index) => (
                <h1 className="text-4xl mono text-slate-400" key={index}>{"-> " + item}</h1>
            ))
        )
    }

    return (
        <>
            {foodItems.map((item, index) => (
                index % 2 === 0 ? (
                    <div key={index} className={"h-600 flex px-3 bg-transparent mt-1"}>
                        <img src={item.path} alt="Your Image" className=" my-3 mr-10 rounded-md  w-1/2 h-auto max-h-full" />
                        <div className="self-center w-1/2 grid">
                            <div className="justify-self-center">
                                <h1 className="mono text-5xl text-orange-600 my-2">{item.name}</h1>
                                {item.description && mapDescription(item.description)}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div key={index} className={"h-600 flex px-3 bg-transparent mt-4"}>
                        <div className="self-center w-1/2 grid">
                            <div className="justify-self-center">
                                <h1 className="mono text-5xl text-orange-600 my-2">{item.name}</h1>
                                {item.description && mapDescription(item.description)}
                            </div>
                        </div>
                        <img src={item.path} alt="Your Image" className=" my-3  rounded-md  w-1/2 h-auto max-h-full" />
                    </div>
                )
            ))}
        </>
    );
}