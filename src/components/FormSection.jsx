import iconMinus from "../../public/icons/icon-minus.svg";
import iconPlus from "../../public/icons/icon-plus.svg";
import React, { useState } from "react";
import Button from "./UI/Button";

const Input = ({
  type,
  placeholder,
  onChange,
  value,
  onBlur = () => {},
  classes = "",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required
      onBlur={onBlur}
      className={`w-full text-2xl block p-4 mb-6 border-b-2 pb-2 border-b-[#9A7D65] font-thin font-sans ${classes}`}
    />
  );
};
const FormSection = () => {
  const [reservation, setReservation] = useState({
    name: "",
    placeholder: "",
    month: "",
    day: "",
    year: "",
    hours: "",
    minutes: "",
    type: "AM",
    guests: 1,
  });

  function validateDate() {
    let { month, day, year } = reservation;
    if (
      (year.length === 4 && parseInt(year, 10) < new Date().getFullYear()) ||
      year.length < 4
    ) {
      year = new Date().getFullYear().toString();
    }
    if (
      year === new Date().getFullYear().toString() &&
      reservation.month &&
      reservation.day
    ) {
      month = parseInt(reservation.month, 10);
      day = parseInt(reservation.day, 10);
      if (month < new Date().getMonth() + 1) {
        month = new Date().getMonth() + 1;
      }
      if (day < new Date().getDate()) {
        day = new Date().getDate();
      }
    }
    if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
      month = new Date().getMonth() + 1;
    }
    if (
      parseInt(day, 10) < 1 ||
      parseInt(day, 10) > new Date(year, month, 0).getDate()
    ) {
      day = new Date().getDate();
    }
    setReservation({ ...reservation, month: month, year, day });
  }

  function checkInputLength(val, prop, len = 2) {
    val = val.replace(/\D/g, "");
    if (val.length > len) {
      val = val.slice(0, len);
    }
    setReservation({ ...reservation, [prop]: val });
  }
  function checkTimings() {
    let hours = reservation.hours;
    let mins = reservation.minutes;
    if (reservation.type === "AM") {
      if (!(reservation.hours < 12 && reservation.hours >= 9)) {
        hours = 9;
      }
      if (!(reservation.minutes < 59 && reservation.minutes >= 0)) {
        mins = 0;
      }
    } else {
      if (reservation.hours < 1 || reservation.hours > 12) {
        hours = 12;
      }
      if (reservation.hours != 12 && reservation.hours > 9) {
        hours = 12;
      }
      if (reservation.hours == 9) {
        mins = 0;
      }
    }
    setReservation({ ...reservation, hours: hours, minutes: mins });
  }

  function handleMinus() {
    if (reservation.guests > 1) {
      setReservation({ ...reservation, guests: reservation.guests - 1 });
    } else {
      setReservation({ ...reservation, guests: 1 });
    }
  }
  function handlePlus() {
    setReservation({ ...reservation, guests: reservation.guests + 1 });
  }
  function makeReservation() {}
  return (
    <form className="relative right-0 lg:-bottom-64  flex-[0.5] bg-white py-8 px-6 lg:p-8 w-full lg:max-w-[500px] shadow-2xl">
      <Input
        type="text"
        placeholder="Name"
        onChange={(e) =>
          setReservation({ ...reservation, name: e.target.value })
        }
        value={reservation.name}
      />
      <Input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setReservation({ ...reservation, email: e.target.value })
        }
        value={reservation.email}
      />
      <div className="flex gap-2  flex-wrap md:flex-nowrap justify-between items-center mb-6">
        <label htmlFor="date" className="block text-2xl w-full lg:flex-[0.5] font-thin font-sans text-[#9A7D65]">
          Pick a date
        </label>
        <div className="flex gap-4 lg:flex-[0.5]  items-center w-full">
          <Input
            type="text"
            placeholder="MM"
            onChange={(e) => checkInputLength(e.target.value, "month")}
            onBlur={validateDate}
            value={reservation.month}
            classes="lg:!w-[80px]  !mb-0   "
          />
          <Input
            type="text"
            placeholder="DD"
            onChange={(e) => checkInputLength(e.target.value, "day")}
            onBlur={validateDate}
            value={reservation.day}
            classes="lg:!w-[80px]  !mb-0   "
          />
          <Input
            type="text"
            placeholder="YYYY"
            onChange={(e) => checkInputLength(e.target.value, "year", 4)}
            onBlur={validateDate}
            value={reservation.year}
            classes="lg:!w-[80px] !mb-0   "
          />
        </div>
      </div>
      <div className="flex gap-2 flex-wrap md:flex-nowrap justify-between items-center mb-6">
        <label htmlFor="time" className="text-2xl w-full lg:flex-[0.5] font-thin font-sans text-[#9A7D65]">Pick a time</label>
        <div className="flex gap-4 lg:flex-[0.5]  items-center w-full">
          <Input
            type="text"
            placeholder="HH"
            onChange={(e) => checkInputLength(e.target.value, "hours")}
            onBlur={checkTimings}
            value={reservation.hours}
            classes="lg:!w-[80px]  !mb-0 flex-1 "
          />
          <Input
            type="text"
            placeholder="MM"
            onBlur={checkTimings}
            onChange={(e) => checkInputLength(e.target.value, "minutes")}
            value={reservation.minutes}
            classes="lg:!w-[80px]  !mb-0 flex-1 "
          />

          <select
            name="time"
            id="time"
            value={reservation.type}
            onChange={(e) =>
              setReservation({ ...reservation, type: e.target.value })
            }
            onBlur={checkTimings}
            className="lg:!w-[80px]  py-4 border-b-2 text-2xl border-b-[#9A7D65] text-[#9A7D65] flex-1"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>
      <div className=" text-xl w-full text-[#9A7D65] flex justify-between gap-4 my-8 px-3 py-4 border-b-2 border-b-[#9A7D65]">
        <button onClick={handleMinus} type="button">
          <img src={iconMinus} alt="" className="block " />
        </button>
        <span>
          {reservation.guests > 1 ? `${reservation.guests} people` : `1 person`}{" "}
        </span>
        <button onClick={handlePlus} type="button">
          <img src={iconPlus} alt="" className="block"/>
        </button>
      </div>
      <Button text="make reservation" onClick={makeReservation} classes={'w-full bg-black text-white hover:bg-white hover:text-black hover:border-black'} />
    </form>
  );
};

export default FormSection;
