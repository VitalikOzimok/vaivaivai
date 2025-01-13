import React from "react";
import Logo from "../assets/Aerosvit-Airlines-Logo.png";
import { Link } from "react-router-dom";

const cartItem = ({ flightData }) => {
  return (
    <div>
      {flightData?.data?.map((flight, index) => (
        <Link to={`/ticket-item/${flight.id}`} state={{ flight }}>
          <div
            key={index}
            className="mb-5 bg-white rounded-md shadow-md hover:scale-105 transition duration-200 p-1"
          >
            <div className="flex justify-between items-center p-3">
              <p className="text-2xl font-semibold text-sky-400">
                {flight.price.total} {flight.price.currency}
              </p>
              <img src={Logo} alt="s" className="w-1/3" />
            </div>
            <div className="grid grid-cols-3 p-3 max-md:block">
              <div>
                <p className="text-gray-300">Время вылета:</p>
                <p> {flight.itineraries[0].segments[0].departure.at}</p>
              </div>
              <div className="flex flex-col">
                <p className="whitespace-nowrap text-gray-300">Откуда - Куда</p>
                <div className="flex items-center  gap-2">
                  <p>{flight.itineraries[0].segments[0].departure.iataCode}</p>
                  <span>-</span>
                  <p>{flight.itineraries[0].segments[0].arrival.iataCode}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <p className="text-gray-300">Количество мест:</p>
                <p>{flight.numberOfBookableSeats}</p>
              </div>

              <div>
                <p className="text-gray-300">Время прилёта:</p>
                <p> {flight.itineraries[0].segments[0].arrival.at}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-300">Время полёта:</p>
                <p>{flight.itineraries[0].segments[0].duration}</p>
              </div>
              <div className="flex gap-1">
                <p className="text-gray-300">Самолёт : </p>
                <p> {flight.itineraries[0].segments[0].aircraft.code}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default cartItem;
